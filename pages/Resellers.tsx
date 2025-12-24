import React, { useState } from 'react';
import { MapPin, Search, ChevronDown, ChevronUp, MessageCircle, Phone } from 'lucide-react';
import { resellers } from '../data';
import { STATES_BR } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const Resellers: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredResellers = selectedState 
    ? resellers.filter(r => r.state === selectedState)
    : resellers;

  const handleSelectState = (state: string) => {
    setSelectedState(state);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-rossner-dark min-h-screen py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="font-display font-black text-4xl md:text-6xl text-white mb-4 uppercase">
            Onde Comprar
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Encontre um parceiro autorizado Rossner Audio perto de você e garanta produtos originais com garantia.
          </p>
        </div>

        {/* Filter Section */}
        <div className="max-w-xl mx-auto mb-16 relative z-50">
          <div className="bg-zinc-900 p-6 rounded-xl border border-gray-800 shadow-xl">
            <label className="block text-white font-bold mb-2 uppercase text-sm tracking-wider">Filtrar por Estado</label>
            <div className="flex gap-4">
              <div className="relative flex-1">
                
                {/* Custom Dropdown Trigger */}
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-black text-white border border-gray-700 rounded-lg px-4 py-3 flex items-center justify-between focus:outline-none focus:border-rossner-red hover:border-rossner-red transition-colors"
                >
                  <span>{selectedState || "Todos os Estados"}</span>
                  {isDropdownOpen ? <ChevronUp size={18} className="text-rossner-red"/> : <ChevronDown size={18} className="text-gray-500"/>}
                </button>

                {/* Custom Dropdown Options */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-black border border-gray-700 rounded-lg shadow-2xl overflow-hidden max-h-60 overflow-y-auto z-50"
                    >
                      {/* Option: All */}
                      <div 
                        onClick={() => handleSelectState('')}
                        className="px-4 py-3 cursor-pointer text-white hover:bg-gradient-to-r hover:from-rossner-red hover:to-transparent transition-all border-b border-gray-800"
                      >
                        Todos os Estados
                      </div>
                      
                      {/* Options: States */}
                      {STATES_BR.map(state => (
                        <div 
                          key={state} 
                          onClick={() => handleSelectState(state)}
                          className="px-4 py-3 cursor-pointer text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-rossner-red hover:to-transparent transition-all border-b border-gray-800 last:border-0"
                        >
                          {state}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {filteredResellers.length > 0 ? (
            filteredResellers.map((reseller, idx) => (
              <motion.div 
                key={reseller.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-zinc-900/50 p-6 rounded-lg border border-gray-800 hover:border-rossner-red/50 hover:bg-zinc-900 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-black rounded-full border border-gray-800 group-hover:border-rossner-red/30 transition-colors">
                      <MapPin className="text-rossner-red" size={24} />
                    </div>
                    <span className="bg-white/5 text-white text-xs font-bold px-2 py-1 rounded border border-white/10">
                      {reseller.state}
                    </span>
                  </div>
                  
                  <h3 className="text-white font-bold text-xl mb-2">{reseller.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{reseller.address} - {reseller.city}</p>
                </div>
                
                <div className="space-y-3 mt-auto">
                  <a 
                    href={`tel:${reseller.phone}`} 
                    className="flex items-center justify-center w-full py-2 border border-gray-700 rounded text-gray-300 hover:text-white hover:border-white transition-colors text-sm font-bold gap-2"
                  >
                    <Phone size={16} />
                    {reseller.phone}
                  </a>

                  {reseller.whatsapp && (
                    <a 
                      href={`https://wa.me/${reseller.whatsapp.replace(/\D/g, '')}`} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-2 bg-green-600/10 border border-green-600/30 rounded text-green-500 hover:bg-green-600 hover:text-white transition-colors text-sm font-bold gap-2"
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </a>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">Nenhum revendedor encontrado neste estado.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Resellers;