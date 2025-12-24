import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Download, Check, ArrowLeft, Zap, Settings, Activity } from 'lucide-react';
import { products } from '../data';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-rossner-dark flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-3xl font-bold mb-4">Produto não encontrado</h2>
          <Link to="/produtos" className="text-rossner-red hover:underline">Voltar para produtos</Link>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    alert(`Iniciando download do manual: Manual_${product.name.replace(/\s+/g, '_')}.pdf`);
  };

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.imageUrl,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "Rossner Audio"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "BRL"
    }
  };

  return (
    <div className="bg-rossner-dark min-h-screen py-12">
      {/* Inject JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/produtos" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Voltar para o catálogo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-800 to-black rounded-2xl border border-gray-700 overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 right-0 p-6 z-10">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/1024px-Infobox_info_icon.svg.png" className="w-0 h-0 opacity-0" alt="hidden" /> {/* Cache hack */}
                 <div className="text-right">
                    <p className="text-rossner-red font-bold text-lg tracking-widest">{product.category}</p>
                    <p className="text-white/50 text-sm font-mono">{product.id.toUpperCase()}</p>
                 </div>
              </div>
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                loading="eager" // LCP Priority
                className="w-full h-full object-cover p-2 hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-rossner-red/20 rounded-2xl -z-10 hidden lg:block"></div>
          </div>

          {/* Right: Info */}
          <div>
            <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-4 uppercase leading-none">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-white font-bold bg-white/10 px-4 py-2 rounded">
                    <Zap className="text-rossner-red" />
                    {product.powerRMS}W RMS
                </div>
                <div className="flex items-center gap-2 text-white font-bold bg-white/10 px-4 py-2 rounded">
                    <Activity className="text-rossner-red" />
                    {product.impedance}
                </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-10 border-l-4 border-gray-700 pl-4">
              {product.description}
            </p>

            {/* Technical Specs Table */}
            <div className="mb-10">
              <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                <Settings size={20} className="text-rossner-red" /> 
                Especificações Técnicas
              </h3>
              <div className="bg-zinc-900/50 rounded-lg border border-gray-800 overflow-hidden">
                <div className="grid grid-cols-2 border-b border-gray-800">
                  <div className="p-4 text-gray-400 font-mono text-sm border-r border-gray-800">Fs (Frequência de Ressonância)</div>
                  <div className="p-4 text-white font-bold">{product.specs.fs}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-800">
                  <div className="p-4 text-gray-400 font-mono text-sm border-r border-gray-800">Qts (Fator de Qualidade Total)</div>
                  <div className="p-4 text-white font-bold">{product.specs.qts}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-800">
                  <div className="p-4 text-gray-400 font-mono text-sm border-r border-gray-800">Vas (Volume Equivalente)</div>
                  <div className="p-4 text-white font-bold">{product.specs.vas}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-800">
                  <div className="p-4 text-gray-400 font-mono text-sm border-r border-gray-800">SPL (Sensibilidade)</div>
                  <div className="p-4 text-white font-bold">{product.specs.spl}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-4 text-gray-400 font-mono text-sm border-r border-gray-800">Xmax (Excursão Máxima)</div>
                  <div className="p-4 text-white font-bold">{product.specs.xmax}</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg mb-2">Downloads</h3>
              <button 
                onClick={handleDownload}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-rossner-red text-white font-bold uppercase rounded hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20"
              >
                <Download size={20} />
                Baixar Manual (PDF)
              </button>
              <p className="text-xs text-gray-500 mt-2">
                * O manual contém parâmetros completos de Thiele-Small e sugestões de caixa.
              </p>
            </div>

          </div>
        </div>

        {/* Features Highlights */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-xl border border-gray-800">
                <Check className="text-rossner-red mb-4" size={32} />
                <h4 className="text-white font-bold text-lg mb-2">Bobina de Alta Performance</h4>
                <p className="text-gray-400 text-sm">Fio de cobre importado e formador em Kapton para suportar altas temperaturas.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl border border-gray-800">
                <Check className="text-rossner-red mb-4" size={32} />
                <h4 className="text-white font-bold text-lg mb-2">Cone Reforçado</h4>
                <p className="text-gray-400 text-sm">Composto de celulose e fibra para máxima rigidez sem adicionar peso excessivo.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl border border-gray-800">
                <Check className="text-rossner-red mb-4" size={32} />
                <h4 className="text-white font-bold text-lg mb-2">Centragem Dupla</h4>
                <p className="text-gray-400 text-sm">Garante controle total do cone mesmo em excursões extremas.</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;