import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Tentang', href: '#hero' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Project', href: '#projects' },
    { name: 'Artikel', href: '#articles' },
    { name: 'Kontak', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    
    const scrollToTarget = () => {
      const element = document.getElementById(targetId);
      if (element) {
        const navbarHeight = 80; // Estimasi tinggi navbar + gap
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
        // Jika target adalah hero (paling atas), scroll ke 0
        if (targetId === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
      }
    };

    if (isHome) {
      scrollToTarget();
    } else {
      navigate('/');
      // Tunggu navigasi selesai baru scroll
      setTimeout(() => {
        scrollToTarget();
      }, 100);
    }
  };

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 transition-all duration-300 border-2 border-neutral-900 bg-white shadow-[4px_4px_0px_0px_#171717]"
    >
      <div className="px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight text-neutral-900" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          HTRG<span className="text-neutral-500">?</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-bold text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t-2 border-neutral-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-4 bg-white">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-bold text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;