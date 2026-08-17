// components/Footer.jsx
import React from 'react';
import { 
  FaHeart, 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaEnvelope,
  FaArrowUp,
  FaCode,
  FaShieldAlt
} from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub', color: 'hover:text-[#E88A9B]' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn', color: 'hover:text-[#E88A9B]' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-[#E88A9B]' },
    { icon: FaEnvelope, href: 'mailto:rakhi@example.com', label: 'Email', color: 'hover:text-[#E88A9B]' }
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-[#F8F0F2] dark:from-[#1A0F1A] dark:to-[#2D1B2E] transition-colors duration-300 border-t border-[#E88A9B]/10 dark:border-[#7A2B4A]/20">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-gradient-to-r from-[#C73D5C] to-[#7A2B4A] text-white shadow-lg hover:shadow-xl hover:shadow-[#C73D5C]/30 transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#C73D5C] to-[#7A2B4A] flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#E88A9B] via-[#C73D5C] to-[#7A2B4A] bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            <p className="text-sm text-[#4A3A4A] dark:text-[#D4C4D4] leading-relaxed">
              Cyber Security Analyst & Web Developer passionate about building secure digital solutions.
            </p>
            <div className="flex items-center gap-2 mt-3 text-sm text-[#4A3A4A] dark:text-[#D4C4D4]">
              <HiLocationMarker className="text-[#C73D5C] dark:text-[#E88A9B]" />
              <span>India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#2D1B2E] dark:text-[#F4D4D8] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[#4A3A4A] dark:text-[#D4C4D4] hover:text-[#C73D5C] dark:hover:text-[#E88A9B] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[#2D1B2E] dark:text-[#F4D4D8] mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-[#4A3A4A] dark:text-[#D4C4D4] flex items-center gap-2">
                  <FaCode className="text-[#C73D5C] dark:text-[#E88A9B] text-xs" />
                  Web Development
                </span>
              </li>
              <li>
                <span className="text-sm text-[#4A3A4A] dark:text-[#D4C4D4] flex items-center gap-2">
                  <FaShieldAlt className="text-[#C73D5C] dark:text-[#E88A9B] text-xs" />
                  Cyber Security
                </span>
              </li>
              <li>
                <span className="text-sm text-[#4A3A4A] dark:text-[#D4C4D4] flex items-center gap-2">
                  <FaCode className="text-[#C73D5C] dark:text-[#E88A9B] text-xs" />
                  Full Stack Development
                </span>
              </li>
              <li>
                <span className="text-sm text-[#4A3A4A] dark:text-[#D4C4D4] flex items-center gap-2">
                  <FaShieldAlt className="text-[#C73D5C] dark:text-[#E88A9B] text-xs" />
                  Security Analysis
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold text-[#2D1B2E] dark:text-[#F4D4D8] mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-white dark:bg-[#2D1B2E] border border-[#E88A9B]/20 dark:border-[#7A2B4A]/20 flex items-center justify-center text-[#4A3A4A] dark:text-[#D4C4D4] ${social.color} transition-all duration-300 hover:shadow-lg hover:shadow-[#C73D5C]/20 hover:border-[#C73D5C] dark:hover:border-[#E88A9B]`}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <a
              href="mailto:rakhi@example.com"
              className="inline-flex items-center gap-2 text-sm text-[#4A3A4A] dark:text-[#D4C4D4] hover:text-[#C73D5C] dark:hover:text-[#E88A9B] transition-colors"
            >
              <FaEnvelope className="text-[#C73D5C] dark:text-[#E88A9B]" />
              rakhichouhan008@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E88A9B]/10 dark:border-[#7A2B4A]/20 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#4A3A4A] dark:text-[#D4C4D4] text-center sm:text-left">
              © {currentYear} <span className="font-semibold text-[#C73D5C] dark:text-[#E88A9B]">Rakhi</span>. All rights reserved.
            </p>
            <p className="text-sm text-[#4A3A4A] dark:text-[#D4C4D4] flex items-center gap-1">
              Made with
              <FaHeart className="text-[#C73D5C] dark:text-[#E88A9B] animate-pulse" size={14} />
              by Rakhi
            </p>
            <div className="flex items-center gap-3 text-xs text-[#4A3A4A] dark:text-[#D4C4D4]">
              <span>Privacy Policy</span>
              <span className="text-[#E88A9B]/30">|</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}