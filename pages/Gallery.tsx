import React, { useState } from 'react';
import { galleryItems } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Wrench, X, ZoomIn, Loader2 } from 'lucide-react';
import { GalleryItem } from '../types';

// Internal component to handle individual image loading state
const GalleryCard: React.FC<{ item: GalleryItem; onClick: () => void }> = ({ item, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col h-full rounded-xl overflow-hidden bg-zinc-900 border border-gray-800 cursor-pointer hover:border-rossner-red/50 transition-colors shadow-lg"
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-video bg-zinc-800 shrink-0">
        
        {/* Loading Spinner / Skeleton */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 z-0">
             <Loader2 className="w-8 h-8 text-rossner-red animate-spin" />
          </div>
        )}

        {/* Image */}
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          className={`w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-in-out relative z-10 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {/* Overlay Gradient & Zoom Icon */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 z-20" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
            <div className="bg-rossner-red/90 p-3 rounded-full text-white shadow-lg transform scale-50 group-hover:scale-100 transition-transform">
                <ZoomIn size={24} />
            </div>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative z-30 bg-zinc-900">
        <div className="flex items-center gap-2 mb-3">
          {item.type === 'Championship' ? (
            <span className="inline-flex items-center gap-1 bg-yellow-600/20 text-yellow-500 text-xs font-bold px-2 py-1 rounded border border-yellow-600/30 uppercase">
              <Trophy size={12} /> Competição
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 bg-blue-600/20 text-blue-400 text-xs font-bold px-2 py-1 rounded border border-blue-600/30 uppercase">
              <Wrench size={12} /> Projeto
            </span>
          )}
        </div>
        
        <h3 className="text-white font-bold text-xl mb-2 leading-tight">{item.title}</h3>
        <p className="text-gray-300 text-sm">{item.description}</p>
      </div>
    </motion.div>
  );
};

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <div className="bg-rossner-dark min-h-screen py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="font-display font-black text-4xl md:text-6xl text-white mb-4 uppercase">
            Hall da Fama
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Confira os campeões que usam Rossner e os projetos insanos dos nossos clientes.
          </p>
        </div>

        {/* Gallery Grid - Changed from columns to grid for uniformity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <GalleryCard 
              key={item.id} 
              item={item} 
              onClick={() => setSelectedItem(item)} 
            />
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedItem(null)} // Close on backdrop click
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-gray-400 hover:text-white bg-black/50 hover:bg-rossner-red p-2 rounded-full transition-colors z-50"
              onClick={() => setSelectedItem(null)}
            >
              <X size={32} />
            </button>

            {/* Image Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-full w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image area
            >
               <img 
                 src={selectedItem.imageUrl} 
                 alt={selectedItem.title} 
                 className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-gray-800"
               />
               
               <div className="mt-4 text-center bg-black/60 px-6 py-3 rounded-full backdrop-blur-md border border-white/10">
                 <h3 className="text-white font-display font-bold text-xl uppercase tracking-wider">
                    {selectedItem.title}
                 </h3>
                 <p className="text-rossner-red text-sm font-bold">
                    {selectedItem.type === 'Championship' ? 'Competição' : 'Projeto Cliente'}
                 </p>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Gallery;