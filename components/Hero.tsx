import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 px-6 bg-white overflow-hidden">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.07) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
          animate={{
            backgroundPositionX: ["0px", "40px"]
          }}
          transition={{
            duration: 3, // Kecepatan animasi (semakin kecil semakin cepat)
            ease: "linear",
            repeat: Infinity
          }}
        />
        {/* Fade to white at the bottom for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white" />
      </div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <h2 className="text-sm font-semibold tracking-wider text-neutral-500 uppercase mb-4">
            Network Engineer
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 tracking-tight leading-tight mb-6">
            Halo, saya <br />
            <span className="text-neutral-400">Hibrizi Tsaqif.</span>
          </h1>
          <p className="text-lg text-neutral-600 mb-8 max-w-lg leading-relaxed">
            Bertanggung jawab penuh dalam menjaga keamanan dan stabilitas jaringan sekolah, melakukan perbaikan cepat pada perangkat keras yang bermasalah, 
            serta memastikan seluruh sistem berjalan lancar guna mendukung kelancaran operasional pendidikan
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, 'projects')}
              className="inline-flex justify-center items-center bg-white text-neutral-900 border-2 border-neutral-900 px-8 py-3 text-sm font-bold shadow-[4px_4px_0px_0px_#171717] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#171717] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-200 cursor-pointer"
            >
              Lihat Karya
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="inline-flex justify-center items-center bg-neutral-900 text-white border-2 border-neutral-900 px-8 py-3 text-sm font-bold shadow-[4px_4px_0px_0px_#737373] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#737373] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-200 cursor-pointer"
            >
              Hubungi Saya
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Abstract decorative shape */}
            <div className="absolute inset-0 border-2 border-neutral-100 translate-x-4 translate-y-4 z-0 bg-white/50 backdrop-blur-sm"></div>
            <img
              src="https://picsum.photos/800/800?grayscale"
              alt="Profile"
              className="w-full h-full object-cover grayscale relative z-10 filter brightness-110 contrast-125 shadow-lg"
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block z-10"
      >
        <ArrowDown className="text-neutral-300 animate-bounce" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;