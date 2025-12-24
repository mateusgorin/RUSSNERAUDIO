import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  // Replace with real number
  const phoneNumber = "5511999999999"; 
  const defaultMessage = "Olá! Gostaria de saber mais sobre os produtos Rossner Audio.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-[100] group flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      {/* Pulse Animation Ring */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30 duration-1000"></span>

      {/* Main Button Container */}
      <div className="relative flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] p-0 shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)]">
        
        {/* Icon Wrapper */}
        <div className="relative z-10 p-4">
           <MessageCircle size={28} className="fill-white text-white" />
        </div>
        
        {/* Expanding Text */}
        <span className="max-w-0 overflow-hidden whitespace-nowrap pr-0 font-bold text-white transition-all duration-500 ease-in-out group-hover:max-w-xs group-hover:pr-6">
          Orçamento Online
        </span>

        {/* Notification Badge (Fake '1' message) */}
        <span className="absolute right-2 top-2 z-20 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white ring-2 ring-[#25D366]">
          1
        </span>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;