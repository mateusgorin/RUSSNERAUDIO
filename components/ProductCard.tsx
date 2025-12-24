import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Box } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-rossner-gray/50 rounded-xl overflow-hidden border border-white/5 hover:border-rossner-red/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(230,30,37,0.2)]">
      
      {/* Badge */}
      {product.isNew && (
        <div className="absolute top-4 right-4 z-10 bg-rossner-red text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm shadow-lg">
          Lançamento
        </div>
      )}
      {product.isComingSoon && (
        <div className="absolute top-4 right-4 z-10 bg-blue-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm shadow-lg">
          Em Breve
        </div>
      )}

      {/* Image Container - Changed from h-64 to aspect-[4/3] for better responsive scaling */}
      <div className="aspect-[4/3] overflow-hidden relative bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-rossner-gray/90 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Content */}
      <div className="p-6 relative z-20">
        <div className="mb-2 text-rossner-red text-xs font-bold uppercase tracking-widest">
          {product.category}
        </div>
        <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-rossner-red transition-colors">
          {product.name}
        </h3>
        
        {/* Quick Specs */}
        {!product.isComingSoon && (
          <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Zap size={14} className="text-rossner-red" />
              <span>{product.powerRMS}W RMS</span>
            </div>
            <div className="flex items-center gap-1">
              <Box size={14} className="text-rossner-red" />
              <span>{product.size}</span>
            </div>
          </div>
        )}

        {/* Action Button */}
        <Link 
          to={product.isComingSoon ? '#' : `/produto/${product.id}`}
          className={`inline-flex items-center gap-2 font-bold uppercase text-sm tracking-wider transition-all ${
            product.isComingSoon 
              ? 'text-gray-500 cursor-not-allowed'
              : 'text-white group-hover:gap-4'
          }`}
        >
          {product.isComingSoon ? 'Aguarde' : 'Ver Detalhes'}
          {!product.isComingSoon && <ArrowRight size={16} className="text-rossner-red" />}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;