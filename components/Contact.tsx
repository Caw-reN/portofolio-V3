import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-neutral-900 text-neutral-400 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Mari Bekerja Sama</h2>
            <p className="text-lg leading-relaxed mb-10 max-w-md">
              Saya selalu terbuka untuk mendiskusikan proyek pengembangan produk atau kemitraan.
              <br /><br />
              Apakah Anda memiliki ide yang ingin diwujudkan?
            </p>
            
            <a 
              href="mailto:hibrizi@smkkg2.sch.id" 
              className="inline-block bg-white text-neutral-900 border-2 border-white px-8 py-4 font-bold shadow-[4px_4px_0px_0px_#404040] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#404040] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-200 mb-12"
            >
              Kirim Email
            </a>
          </motion.div>

          {/* Social Links & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
               <h3 className="text-white font-bold mb-6 text-xl">Sosial Media</h3>
               <div className="flex flex-wrap gap-4">
                {SOCIAL_LINKS.map((link) => (
                    <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 border border-neutral-700 px-4 py-2 hover:border-white hover:text-white transition-all duration-300 group"
                    >
                    <link.icon size={20} />
                    <span className="font-medium group-hover:translate-x-1 transition-transform">{link.platform}</span>
                    </a>
                ))}
               </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-start md:items-center text-sm">
              <p>&copy; {new Date().getFullYear()} Hibrizi Tsaqif. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;