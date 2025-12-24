import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Speaker, Users, ArrowDown, Truck, Package, ShieldCheck, Map, MessageCircle, Star } from 'lucide-react';
import { products, testimonials } from '../data';
import ProductCard from '../components/ProductCard';

const statePositions = [
  { id: 'AC', top: '45%', left: '8%' },
  { id: 'AM', top: '25%', left: '25%' },
  { id: 'RR', top: '5%', left: '35%' },
  { id: 'PA', top: '20%', left: '50%' },
  { id: 'AP', top: '10%', left: '60%' },
  { id: 'TO', top: '35%', left: '55%' },
  { id: 'RO', top: '40%', left: '25%' },
  { id: 'MT', top: '50%', left: '38%' },
  { id: 'MS', top: '65%', left: '42%' },
  { id: 'GO', top: '55%', left: '52%' },
  { id: 'DF', top: '53%', left: '54%' },
  { id: 'MA', top: '20%', left: '65%' },
  { id: 'PI', top: '25%', left: '72%' },
  { id: 'CE', top: '15%', left: '82%' },
  { id: 'RN', top: '18%', left: '88%' },
  { id: 'PB', top: '22%', left: '88%' },
  { id: 'PE', top: '25%', left: '86%' },
  { id: 'AL', top: '28%', left: '85%' },
  { id: 'SE', top: '32%', left: '83%' },
  { id: 'BA', top: '40%', left: '70%' },
  { id: 'MG', top: '58%', left: '65%' },
  { id: 'ES', top: '60%', left: '72%' },
  { id: 'RJ', top: '68%', left: '68%' },
  { id: 'SP', top: '70%', left: '58%' },
  { id: 'PR', top: '78%', left: '55%' },
  { id: 'SC', top: '85%', left: '58%' },
  { id: 'RS', top: '92%', left: '52%' },
];

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="overflow-hidden bg-black">
      
      {/* OPTIMIZED HERO SECTION */}
      <section className="relative min-h-[85vh] md:min-h-[92vh] flex items-start md:items-center pt-32 md:pt-20 pb-20 md:pb-12 overflow-hidden">
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-zinc-900 via-zinc-900/50 to-transparent skew-x-[-12deg] translate-x-20 z-0" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-rossner-red/10 to-transparent z-0" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-rossner-red/20 rounded-full blur-[100px] z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col items-center justify-center text-center">
            
            {/* Centered Hero Text */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "outCirc" }}
              className="max-w-5xl mx-auto"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-rossner-red"></div>
                <span className="text-rossner-red font-bold tracking-[0.3em] uppercase text-sm">Excelência em Audio</span>
                <div className="h-[2px] w-12 bg-rossner-red"></div>
              </div>

              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-8xl text-white leading-[0.9] mb-8 italic uppercase">
                Potência que <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rossner-red to-orange-600">
                  Você sente
                </span>
              </h1>
              
              <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Subwoofers de competição projetados para entregar SPL extremo e durabilidade incomparável. O upgrade definitivo para seu projeto automotivo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                {/* Primary CTA */}
                <Link to="/produtos" className="px-10 py-5 bg-rossner-red text-white font-bold uppercase tracking-wider hover:bg-white hover:text-rossner-red transition-all duration-300 flex items-center gap-3 justify-center text-lg shadow-[0_0_20px_rgba(230,30,37,0.4)]">
                  Ver Produtos <ChevronRight size={22} />
                </Link>

                {/* Secondary CTA (Restored) */}
                <Link 
                  to="/revendedores" 
                  className="group px-10 py-5 bg-transparent border border-white/30 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all flex items-center justify-center text-lg"
                >
                  Encontrar Loja
                </Link>
              </div>

              {/* Scroll Indicator */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="mt-16 md:mt-24 flex flex-col items-center gap-2 justify-center"
              >
                <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] animate-pulse">Role para descobrir</span>
                <ArrowDown className="text-rossner-red animate-bounce" size={20} />
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Features Stripe */}
      <section className="bg-rossner-red py-12 relative overflow-hidden border-t border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="p-3 bg-black/20 rounded-lg"><Speaker className="text-white w-8 h-8" /></div>
              <div>
                <h3 className="font-display font-bold text-white text-xl">Alto SPL</h3>
                <p className="text-white/80 text-sm">Projetados para máxima pressão e eficiência.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="p-3 bg-black/20 rounded-lg"><Award className="text-white w-8 h-8" /></div>
              <div>
                <h3 className="font-display font-bold text-white text-xl">Campeões</h3>
                <p className="text-white/80 text-sm">Vencedores nos maiores circuitos do Brasil.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="p-3 bg-black/20 rounded-lg"><Users className="text-white w-8 h-8" /></div>
              <div>
                <h3 className="font-display font-bold text-white text-xl">Suporte Técnico</h3>
                <p className="text-white/80 text-sm">Ajuda especializada para seu projeto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Story Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rossner-red/10 via-transparent to-transparent opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-6 uppercase leading-tight">
                Forjados para <br/>
                <span className="text-rossner-red">Pressão Sonora</span>
              </h2>
              <div className="h-1 w-20 bg-rossner-red mb-8"></div>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  A <span className="text-white font-bold">Rossner Audio</span> nasceu de uma obsessão: criar os falantes mais robustos e eficientes do mercado. Especializada em Subwoofers de alto desempenho e Médio Graves, nossa missão é entregar o verdadeiro SPL (Sound Pressure Level) sem sacrificar a musicalidade.
                </p>
                <p>
                  Nossos produtos são conhecidos pela <span className="text-white font-bold">qualidade de construção extrema</span>. Desde bobinas de alta temperatura até cones reforçados com fibra, cada componente é projetado para suportar as condições mais severas.
                </p>
              </div>

              <div className="mt-8">
                 <Link to="/galeria" className="text-rossner-red font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                   Ver Projetos de Clientes <ChevronRight size={18} />
                 </Link>
              </div>
            </motion.div>

            {/* Visual/Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-video bg-zinc-900 rounded-xl overflow-hidden border border-gray-800 shadow-2xl relative group">
                 <img 
                   src="https://i.ibb.co/3y997YWx/Whats-App-Image-2025-12-10-at-11-00-43.jpg" 
                   alt="Rossner Audio Engineering" 
                   loading="lazy"
                   className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-white font-display font-bold text-xl uppercase">Engenharia de Precisão</p>
                    <p className="text-rossner-red text-sm font-bold tracking-wider">TECNOLOGIA & ROBUSTEZ</p>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-rossner-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display font-bold text-4xl text-white mb-2">Destaques</h2>
              <div className="h-1 w-20 bg-rossner-red"></div>
            </div>
            <Link to="/produtos" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors uppercase font-bold text-sm tracking-widest">
              Ver Toda Linha <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
               <motion.div
                 key={product.id}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1, duration: 0.5 }}
               >
                 <ProductCard product={product} />
               </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
             <Link to="/produtos" className="inline-block px-6 py-3 border border-gray-700 text-white rounded font-bold uppercase hover:bg-white hover:text-black transition-colors">
               Ver catálogo completo
             </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / TESTIMONIALS */}
      <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl text-white mb-4">Quem usa, Recomenda</h2>
              <p className="text-gray-400">Veja o que competidores e clientes dizem sobre a Rossner Audio.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <motion.div 
                  key={t.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-zinc-900/50 p-8 rounded-2xl border border-gray-800 relative"
                >
                  <div className="absolute -top-4 -left-4 text-rossner-red opacity-20">
                     <span className="text-8xl font-serif">"</span>
                  </div>
                  <div className="flex gap-1 text-yellow-500 mb-4">
                     {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-300 mb-6 italic relative z-10">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                        <img src={t.avatarUrl} alt={t.name} className="w-full h-full object-cover grayscale" loading="lazy" />
                     </div>
                     <div>
                        <h4 className="text-white font-bold">{t.name}</h4>
                        <p className="text-rossner-red text-xs uppercase font-bold tracking-wider">{t.role}</p>
                     </div>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* SHIPPING SECTION */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-80 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Map Visualization - Pure Lights Only (Maintained as requested) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square md:aspect-[1.1/1] flex items-center justify-center order-2 lg:order-1"
            >
               <div className="relative w-full h-full max-w-[500px] mx-auto">
                 {/* Blinking Dots Overlay - No Map Background */}
                 {statePositions.map((pos, idx) => (
                    <motion.div 
                        key={pos.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.05, duration: 0.5 }}
                        className="absolute w-4 h-4 -ml-2 -mt-2 flex items-center justify-center z-20"
                        style={{ top: pos.top, left: pos.left }}
                    >
                        {/* Stronger Ping Effect for visibility */}
                        <div className="absolute w-full h-full bg-rossner-red rounded-full animate-ping opacity-75"></div>
                        {/* Core Dot */}
                        <div className="absolute w-2 h-2 bg-rossner-red rounded-full shadow-[0_0_15px_#E61E25] ring-1 ring-white/50"></div>
                    </motion.div>
                 ))}
               </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-rossner-red/10 rounded-lg border border-rossner-red/20">
                    <Map className="text-rossner-red" size={24} />
                  </div>
                  <span className="text-rossner-red font-bold uppercase tracking-[0.2em] text-sm">Cobertura Nacional</span>
              </div>
              
              <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-6 uppercase leading-tight">
                Enviamos para <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rossner-red to-orange-600">
                  Todo o País
                </span>
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Do Norte ao Sul, a Rossner garante que a potência chegue até você. 
                Nossa logística é preparada para transportar equipamentos pesados com total segurança e agilidade.
              </p>
              
              <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-rossner-red/30 transition-colors">
                      <div className="mt-1"><ShieldCheck className="text-white" size={20} /></div>
                      <div>
                          <h4 className="text-white font-bold uppercase text-sm mb-1">Envio 100% Segurado</h4>
                          <p className="text-gray-500 text-sm">Garantia total contra avarias no transporte.</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-rossner-red/30 transition-colors">
                      <div className="mt-1"><Package className="text-white" size={20} /></div>
                      <div>
                          <h4 className="text-white font-bold uppercase text-sm mb-1">Embalagem Reforçada</h4>
                          <p className="text-gray-500 text-sm">Proteção extra (caixa dupla) para o peso dos magnetos.</p>
                      </div>
                  </div>
              </div>

              <div className="mt-10">
                <Link to="/contato" className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wider border-b border-rossner-red pb-1 hover:text-rossner-red transition-colors">
                  Cotar Frete para minha cidade <ChevronRight size={16} />
                </Link>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-zinc-900">
        <div className="absolute inset-0 overflow-hidden">
           <img src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1600&auto=format&fit=crop" alt="Car Audio Background" className="w-full h-full object-cover opacity-20 grayscale" loading="lazy" />
           <div className="absolute inset-0 bg-gradient-to-t from-rossner-dark via-transparent to-rossner-dark"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-6 uppercase">
            Monte seu projeto com Rossner
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Quer saber onde encontrar nossos produtos ou precisa de ajuda técnica para sua caixa? 
            Encontre o revendedor mais próximo de você.
          </p>
          <Link to="/revendedores" className="inline-block px-10 py-5 bg-white text-black font-black uppercase tracking-widest hover:bg-rossner-red hover:text-white transition-all duration-300 shadow-xl">
            Localizar Revendedor
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;