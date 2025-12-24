import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-rossner-gray pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Info */}
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-4">ROSSNER <span className="text-rossner-red">AUDIO</span></h3>
            <p className="text-gray-400 mb-4 max-w-xs">
              Excelência em graves. Produtos robustos projetados para alto desempenho em SPL e qualidade sonora superior.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-4 uppercase">Contato</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2 hover:text-rossner-red transition-colors cursor-pointer">
                <Phone size={18} />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2 hover:text-rossner-red transition-colors cursor-pointer">
                <Mail size={18} />
                <span>contato@rossneraudio.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <span>Seg - Sex: 08:00 - 18:00</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-4 uppercase">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-rossner-gray flex items-center justify-center text-white hover:bg-rossner-red transition-all duration-300 transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-rossner-gray flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-rossner-gray flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300 transform hover:scale-110">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-2">
          <p>&copy; {new Date().getFullYear()} Rossner Audio. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1 text-xs md:text-sm">
            Desenvolvido por 
            <a 
              href="https://www.gorinsolucoes.com.br" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 font-bold hover:text-rossner-red transition-colors underline decoration-transparent hover:decoration-rossner-red"
            >
              Gorin Soluções
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;