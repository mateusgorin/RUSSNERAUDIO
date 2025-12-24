import React, { useState } from 'react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Speaker, Zap, Maximize2 } from 'lucide-react';

type CategoryFilter = 'ALL' | 'Subwoofer' | 'Mid-Bass';

interface SizeButtonProps {
  size: string;
  isActive: boolean;
  onClick: () => void;
}

const SizeButton: React.FC<SizeButtonProps> = ({ size, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`min-w-[40px] px-4 py-2 rounded font-bold uppercase text-xs transition-all duration-300 border ${
      isActive
        ? 'bg-white text-black border-white'
        : 'bg-black/30 text-gray-400 border-gray-700 hover:border-rossner-red hover:text-white'
    }`}
  >
    {size}"
  </button>
);

const Products: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('ALL');
  const [activeSize, setActiveSize] = useState<string>('ALL');

  const handleCategoryChange = (cat: CategoryFilter) => {
    setActiveFilter(cat);
    setActiveSize('ALL'); // Reset size filter when category changes
  };

  // Determine available sizes based on selected category
  const getAvailableSizes = () => {
    if (activeFilter === 'Subwoofer') return ['8', '10', '12', '15', '18'];
    if (activeFilter === 'Mid-Bass') return ['6', '8', '10'];
    return [];
  };

  // Filter Logic
  const filteredProducts = products.filter(product => {
    // 1. Filter by Category
    if (activeFilter !== 'ALL' && product.category !== activeFilter) {
      return false;
    }
    // 2. Filter by Size (check if the size string includes the selected number)
    if (activeSize !== 'ALL' && !product.size.includes(activeSize)) {
      return false;
    }
    return true;
  });

  const CategoryButton = ({ label, value, icon: Icon }: { label: string, value: CategoryFilter, icon?: React.ElementType }) => (
    <button
      onClick={() => handleCategoryChange(value)}
      className={`relative px-6 py-3 rounded-full font-bold uppercase text-sm tracking-wider transition-all duration-300 flex items-center gap-2 border ${
        activeFilter === value
          ? 'bg-rossner-red text-white border-rossner-red shadow-[0_0_20px_rgba(230,30,37,0.4)]'
          : 'bg-transparent text-gray-400 border-gray-700 hover:border-white hover:text-white'
      }`}
    >
      {Icon && <Icon size={16} />}
      {label}
    </button>
  );

  return (
    <div className="bg-rossner-dark min-h-screen py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="font-display font-black text-4xl md:text-6xl text-white mb-4 uppercase">
            Nossos Produtos
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Conheça a linha completa de falantes Rossner Audio. Tecnologia, potência e durabilidade para o seu som.
          </p>
          <div className="h-1 w-24 bg-rossner-red mx-auto mt-6"></div>
        </div>

        {/* Category Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <CategoryButton label="Todos" value="ALL" icon={Filter} />
          <CategoryButton label="Subwoofers" value="Subwoofer" icon={Speaker} />
          <CategoryButton label="Médio Graves" value="Mid-Bass" icon={Zap} />
        </div>

        {/* Size Filter Controls (Only show if a specific category is selected) */}
        <AnimatePresence>
          {activeFilter !== 'ALL' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
               <div className="flex flex-col items-center justify-center gap-3 mb-12">
                 <span className="flex items-center gap-2 text-rossner-red text-xs font-bold uppercase tracking-widest">
                   <Maximize2 size={12} /> Filtrar Tamanho
                 </span>
                 <div className="flex flex-wrap justify-center gap-2">
                    {getAvailableSizes().map(size => (
                      <SizeButton 
                        key={size} 
                        size={size} 
                        isActive={activeSize === size}
                        onClick={() => setActiveSize(size === activeSize ? 'ALL' : size)}
                      />
                    ))}
                 </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="min-h-[400px]">
           {/* Section Title */}
           <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-display font-bold text-white uppercase tracking-widest">
                {activeFilter === 'ALL' ? 'Catálogo Completo' : `Linha ${activeFilter}`}
                {activeSize !== 'ALL' && <span className="text-rossner-red ml-2">({activeSize}")</span>}
              </h2>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-rossner-red to-transparent"></div>
           </div>

           {filteredProducts.length > 0 ? (
             <motion.div 
               layout
               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
             >
               <AnimatePresence mode="popLayout">
                 {filteredProducts.map((product) => (
                   <motion.div 
                     key={product.id} 
                     layout 
                     initial={{ opacity: 0, scale: 0.9 }} 
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.9 }}
                     transition={{ duration: 0.3 }}
                   >
                     <ProductCard product={product} />
                   </motion.div>
                 ))}
               </AnimatePresence>
             </motion.div>
           ) : (
             <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="text-center py-20 border border-dashed border-gray-800 rounded-xl bg-white/5"
             >
                <Speaker className="mx-auto h-12 w-12 text-gray-600 mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">Nenhum produto encontrado</h3>
                <p className="text-gray-400">Tente selecionar outro tamanho ou categoria.</p>
                <button 
                  onClick={() => setActiveSize('ALL')}
                  className="mt-6 text-rossner-red hover:text-white font-bold text-sm uppercase tracking-wider transition-colors"
                >
                  Limpar Filtro de Tamanho
                </button>
             </motion.div>
           )}
        </div>

      </div>
    </div>
  );
};

export default Products;