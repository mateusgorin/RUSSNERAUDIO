import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    subject: 'Suporte Técnico',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const phoneNumber = "5511999999999"; // Replace with company actual number
    const text = `*Novo contato via Site Rossner Audio*%0A%0A` +
      `*Nome:* ${formData.name}%0A` +
      `*Cidade/UF:* ${formData.city}%0A` +
      `*Assunto:* ${formData.subject}%0A` +
      `*Mensagem:* ${formData.message}`;
      
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-rossner-dark min-h-screen relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-4xl md:text-6xl text-white mb-4 uppercase"
          >
            Fale Conosco
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Dúvidas sobre projetos? Quer revender Rossner? Entre em contato diretamente com nossa equipe técnica e comercial.
          </p>
          <div className="h-1 w-24 bg-rossner-red mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm">
              <h3 className="font-display font-bold text-2xl text-white mb-6 uppercase border-l-4 border-rossner-red pl-4">
                Canais de Atendimento
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-black rounded-lg border border-gray-700 group-hover:border-rossner-red/50 transition-colors">
                    <Phone className="text-rossner-red" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Telefone / WhatsApp</h4>
                    <p className="text-gray-400">(11) 99999-9999</p>
                    <p className="text-gray-500 text-sm">Seg - Sex: 08:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-black rounded-lg border border-gray-700 group-hover:border-rossner-red/50 transition-colors">
                    <Mail className="text-rossner-red" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">E-mail</h4>
                    <p className="text-gray-400">contato@rossneraudio.com.br</p>
                    <p className="text-gray-500 text-sm">Respostas em até 24h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-black rounded-lg border border-gray-700 group-hover:border-rossner-red/50 transition-colors">
                    <MapPin className="text-rossner-red" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Fábrica</h4>
                    <p className="text-gray-400">São Paulo, SP</p>
                    <p className="text-gray-500 text-sm">Atendimento com hora marcada</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rossner-red to-red-900 p-8 rounded-2xl text-white shadow-lg shadow-red-900/20">
              <h3 className="font-display font-bold text-xl mb-2">Suporte Técnico Especializado</h3>
              <p className="text-white/90 text-sm mb-4">
                Nossa equipe é formada por especialistas em SPL e Som Automotivo. Tire suas dúvidas sobre litragem de caixas, impedância e amplificadores.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-zinc-900 p-8 rounded-2xl border border-gray-800 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <MessageCircle className="text-green-500" size={32} />
              <h3 className="font-display font-bold text-2xl text-white uppercase">
                Enviar WhatsApp
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Seu Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-rossner-red transition-colors placeholder-gray-600"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Cidade e Estado</label>
                <input 
                  type="text" 
                  id="city" 
                  name="city" 
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-rossner-red transition-colors placeholder-gray-600"
                  placeholder="Ex: São Paulo - SP"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Assunto</label>
                <select 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-rossner-red transition-colors appearance-none"
                >
                  <option value="Suporte Técnico">Suporte Técnico</option>
                  <option value="Vendas">Dúvidas sobre Vendas</option>
                  <option value="Revenda">Quero ser um Revendedor</option>
                  <option value="Outros">Outros Assuntos</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Mensagem</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-rossner-red transition-colors placeholder-gray-600 resize-none"
                  placeholder="Descreva sua dúvida ou solicitação..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold uppercase py-4 rounded transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg shadow-green-900/20"
              >
                <Send size={20} />
                Iniciar Conversa no WhatsApp
              </button>
              
              <p className="text-center text-gray-600 text-xs mt-4">
                Ao clicar em enviar, você será redirecionado para o aplicativo do WhatsApp.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;