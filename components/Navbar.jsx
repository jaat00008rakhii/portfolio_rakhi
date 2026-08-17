// components/Navbar.jsx
import React, { useState, useEffect, useContext } from 'react';
import { 
  FaHome, 
  FaUser, 
  FaBriefcase, 
  FaCode, 
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaSun,
  FaMoon,
  FaStar
} from 'react-icons/fa';
import { 
  HiMenu, 
  HiX 
} from 'react-icons/hi';
import { MdOutlineDashboard, MdEmail } from 'react-icons/md';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'skills', label: 'Skills', icon: FaCode },
    { id: 'projects', label: 'Projects', icon: FaBriefcase },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isDark = theme === 'dark';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? `${isDark ? 'bg-[#2D1B2E]/95' : 'bg-white/95'} backdrop-blur-xl shadow-2xl border-b ${isDark ? 'border-[#C73D5C]/20' : 'border-[#E88A9B]/20'}` 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 animate-spin-slow">
                  <MdOutlineDashboard 
                    size={24} 
                    className={isDark ? 'text-[#E88A9B]' : 'text-[#C73D5C]'}
                    style={{ filter: `drop-shadow(0 0 20px ${isDark ? 'rgba(232, 138, 155, 0.5)' : 'rgba(199, 61, 92, 0.5)'})` }}
                  />
                </div>
                <div className={`w-10 h-10 rounded-full ${isDark ? 'bg-gradient-to-r from-[#C73D5C] to-[#7A2B4A]' : 'bg-gradient-to-r from-[#E88A9B] to-[#C73D5C]'} flex items-center justify-center ml-1`}>
                  <span className="text-white font-bold text-lg">R</span>
                </div>
              </div>
              <span className={`text-2xl font-bold bg-gradient-to-r ${isDark ? 'from-[#E88A9B] via-[#C73D5C] to-[#7A2B4A]' : 'from-[#C73D5C] via-[#E88A9B] to-[#F4D4D8]'} bg-clip-text text-transparent`}>
                Rakhi
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? `text-white ${isDark ? 'bg-gradient-to-r from-[#C73D5C] to-[#7A2B4A]' : 'bg-gradient-to-r from-[#E88A9B] to-[#C73D5C]'} shadow-lg ${isDark ? 'shadow-[#C73D5C]/30' : 'shadow-[#E88A9B]/30'}`
                        : `${isDark ? 'text-[#F4D4D8] hover:text-white' : 'text-[#2D1B2E] hover:text-[#7A2B4A]'} hover:bg-white/5`
                    }`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </a>
                );
              })}

              {/* Theme Toggle & Social Icons */}
              <div className={`ml-4 flex items-center gap-2 border-l ${isDark ? 'border-[#7A2B4A]/30' : 'border-[#E88A9B]/30'} pl-4`}>
                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-white/5 transition-colors group"
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <FaSun size={18} className="text-[#F4D4D8] group-hover:text-[#E88A9B] transition-colors" />
                  ) : (
                    <FaMoon size={18} className="text-[#2D1B2E] group-hover:text-[#C73D5C] transition-colors" />
                  )}
                </button>

                {/* GitHub Link */}
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/5 transition-colors group"
                >
                  <FaGithub 
                    size={18} 
                    className={`${isDark ? 'text-[#F4D4D8]' : 'text-[#2D1B2E]'} group-hover:text-[#E88A9B] transition-colors`} 
                  />
                </a>

                {/* LinkedIn Link */}
                <a
                  href="https://linkedin.com/in/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/5 transition-colors group"
                >
                  <FaLinkedinIn 
                    size={18} 
                    className={`${isDark ? 'text-[#F4D4D8]' : 'text-[#2D1B2E]'} group-hover:text-[#E88A9B] transition-colors`} 
                  />
                </a>

                {/* Email Link - Replaced Twitter */}
                <a
                  href="mailto:rakhi@example.com"
                  className="p-2 rounded-full hover:bg-white/5 transition-colors group"
                >
                  <MdEmail 
                    size={20} 
                    className={`${isDark ? 'text-[#F4D4D8]' : 'text-[#2D1B2E]'} group-hover:text-[#E88A9B] transition-colors`} 
                  />
                </a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className={`${isDark ? 'text-[#E88A9B]' : 'text-[#C73D5C]'}`} size={24} />
              ) : (
                <HiMenu className={`${isDark ? 'text-[#F4D4D8]' : 'text-[#2D1B2E]'}`} size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className={`${isDark ? 'bg-[#2D1B2E]/98' : 'bg-white/98'} backdrop-blur-xl border-t ${isDark ? 'border-[#7A2B4A]/20' : 'border-[#E88A9B]/20'}`}>
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? `${isDark ? 'bg-gradient-to-r from-[#C73D5C]/20 to-[#7A2B4A]/20 border border-[#C73D5C]/30' : 'bg-gradient-to-r from-[#E88A9B]/20 to-[#C73D5C]/20 border border-[#E88A9B]/30'} text-white`
                        : `${isDark ? 'text-[#F4D4D8]' : 'text-[#2D1B2E]'} hover:bg-white/5`
                    }`}
                  >
                    <Icon size={20} className={isActive ? (isDark ? 'text-[#E88A9B]' : 'text-[#C73D5C]') : ''} />
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <div className={`ml-auto w-2 h-2 rounded-full ${isDark ? 'bg-[#E88A9B]' : 'bg-[#C73D5C]'}`} />
                    )}
                  </a>
                );
              })}

              {/* Mobile Theme Toggle */}
              <button
                onClick={() => {
                  toggleTheme();
                  closeMenu();
                }}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 w-full ${isDark ? 'text-[#F4D4D8]' : 'text-[#2D1B2E]'} hover:bg-white/5`}
              >
                {isDark ? <FaSun size={20} className="text-[#E88A9B]" /> : <FaMoon size={20} className="text-[#C73D5C]" />}
                <span className="font-medium">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>

              {/* Mobile Social Icons */}
              <div className={`flex justify-center gap-6 pt-4 border-t ${isDark ? 'border-[#7A2B4A]/20' : 'border-[#E88A9B]/20'}`}>
                {/* GitHub */}
                <a 
                  href="https://github.com/your-username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${isDark ? 'text-[#F4D4D8]' : 'text-[#2D1B2E]'} hover:text-[#E88A9B] transition-colors`}
                >
                  <FaGithub size={22} />
                  <span className="sr-only">GitHub</span>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/in/your-username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${isDark ? 'text-[#F4D4D8]' : 'text-[#2D1B2E]'} hover:text-[#E88A9B] transition-colors`}
                >
                  <FaLinkedinIn size={22} />
                  <span className="sr-only">LinkedIn</span>
                </a>

                {/* Email - Replaced Twitter */}
                <a 
                  href="mailto:rakhi@example.com"
                  className={`${isDark ? 'text-[#F4D4D8]' : 'text-[#2D1B2E]'} hover:text-[#E88A9B] transition-colors`}
                >
                  <MdEmail size={24} />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Gradient Orb Background Effects */}
      <div className={`fixed top-20 -left-20 w-96 h-96 rounded-full ${isDark ? 'bg-[#C73D5C]/10' : 'bg-[#E88A9B]/20'} blur-3xl pointer-events-none -z-10`} />
      <div className={`fixed top-40 -right-20 w-96 h-96 rounded-full ${isDark ? 'bg-[#7A2B4A]/10' : 'bg-[#C73D5C]/20'} blur-3xl pointer-events-none -z-10`} />
    </>
  );
}