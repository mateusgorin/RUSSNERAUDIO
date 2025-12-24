import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';

const ConstructionPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a brief delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-zinc-900 border border-rossner-red/50 w-full max-w-md p-8 rounded-2xl shadow-[0_0_50px_rgba(230,30,37,0.2)] text-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="mb-6 flex justify-center">
              <div className="bg-yellow-500/10 p-4 rounded-full border border-yellow-500/20">
                <AlertTriangle size={48} className="text-yellow-500" />
              </div>
            </div>

            <h2 className="font-display font-bold text-2xl text-white mb-4 uppercase tracking-wide">
              Site em Construção
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Este site é apenas um modelo para fins de demonstração. <br/>
              Todos os dados, preços e informações contidos aqui são <span className="text-white font-bold">fictícios</span>.
            </p>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-rossner-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition-colors uppercase tracking-wider"
            >
              Entendi
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConstructionPopup;