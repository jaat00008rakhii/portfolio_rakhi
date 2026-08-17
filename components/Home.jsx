// components/Home.jsx
import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';
import { HiLocationMarker, HiMail } from 'react-icons/hi';

export default function Home() {
  // Cyber Security & Web Developer description
  const description = `I am a passionate Cyber Security Analyst and Web Developer with expertise in 
    protecting digital assets and building secure, scalable web applications. With a strong foundation 
    in both frontend and backend technologies, I specialize in identifying vulnerabilities, 
    implementing security measures, and creating robust web solutions that prioritize user safety 
    and data protection.`;

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-white dark:bg-[#1A0F1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side - Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#E88A9B]/20 to-[#C73D5C]/20 border border-[#C73D5C]/30 mb-6">
              <span className="text-sm font-medium text-[#C73D5C] dark:text-[#E88A9B]">
                🛡️ Cyber Security Expert
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-[#2D1B2E] dark:text-[#F4D4D8]">
                I'm 
              </span>
              <span className="bg-gradient-to-r from-[#E88A9B] via-[#C73D5C] to-[#7A2B4A] bg-clip-text text-transparent">
                {' '}Rakhi
              </span>
            </h1>

            {/* Position */}
            <div className="flex flex-wrap items-center gap-3 mb-6 justify-center lg:justify-start">
              <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#C73D5C]/10 to-[#7A2B4A]/10 border border-[#C73D5C]/20">
                <span className="text-[#C73D5C] dark:text-[#E88A9B] font-semibold">
                  🔒 Cyber Security Analyst
                </span>
              </span>
              <span className="text-[#2D1B2E] dark:text-[#F4D4D8] font-light">|</span>
              <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#E88A9B]/10 to-[#C73D5C]/10 border border-[#E88A9B]/20">
                <span className="text-[#C73D5C] dark:text-[#E88A9B] font-semibold">
                  💻 Web Developer
                </span>
              </span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#4A3A4A] dark:text-[#D4C4D4] leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              {description}
            </p>

            {/* Location & Email */}
            <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-[#4A3A4A] dark:text-[#D4C4D4]">
                <HiLocationMarker className="text-[#C73D5C] dark:text-[#E88A9B]" size={20} />
                <span>India</span>
              </div>
              <div className="flex items-center gap-2 text-[#4A3A4A] dark:text-[#D4C4D4]">
                <HiMail className="text-[#C73D5C] dark:text-[#E88A9B]" size={20} />
                <a href="mailto:rakhi@example.com" className="hover:text-[#C73D5C] dark:hover:text-[#E88A9B] transition-colors">
                  rakhichouhan008@gmail.com
                </a>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#C73D5C] to-[#7A2B4A] text-white font-semibold hover:shadow-lg hover:shadow-[#C73D5C]/30 transition-all duration-300 flex items-center gap-2"
              >
                <FaEnvelope size={18} />
                Hire Me
              </a>
              <a
                href="#"
                className="px-8 py-3 rounded-full border-2 border-[#C73D5C] dark:border-[#E88A9B] text-[#C73D5C] dark:text-[#E88A9B] font-semibold hover:bg-[#C73D5C] hover:text-white dark:hover:bg-[#E88A9B] dark:hover:text-[#2D1B2E] transition-all duration-300 flex items-center gap-2"
              >
                <FaDownload size={18} />
                Download CV
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="p-3 rounded-full bg-[#C73D5C]/10 dark:bg-[#E88A9B]/10 hover:bg-[#C73D5C] dark:hover:bg-[#E88A9B] transition-all duration-300 group"
              >
                <FaGithub className="text-[#C73D5C] dark:text-[#E88A9B] group-hover:text-white transition-colors" size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-[#C73D5C]/10 dark:bg-[#E88A9B]/10 hover:bg-[#C73D5C] dark:hover:bg-[#E88A9B] transition-all duration-300 group"
              >
                <FaLinkedinIn className="text-[#C73D5C] dark:text-[#E88A9B] group-hover:text-white transition-colors" size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-[#C73D5C]/10 dark:bg-[#E88A9B]/10 hover:bg-[#C73D5C] dark:hover:bg-[#E88A9B] transition-all duration-300 group"
              >
                <FaTwitter className="text-[#C73D5C] dark:text-[#E88A9B] group-hover:text-white transition-colors" size={20} />
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#C73D5C]/20 to-[#E88A9B]/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Main Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#C73D5C]/30 dark:border-[#E88A9B]/30 shadow-2xl shadow-[#C73D5C]/20 dark:shadow-[#E88A9B]/20">
                {/* Placeholder Image - Replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-[#C73D5C] via-[#E88A9B] to-[#7A2B4A] flex items-center justify-center">
                  <span className="text-8xl sm:text-9xl">👩‍💻</span>
                </div>
                
                {/* Optional: If you have an actual image, use this instead */}
                {/* <img 
                  src="/path/to/your-image.jpg" 
                  alt="Rakhi - Cyber Security & Web Developer"
                  className="w-full h-full object-cover"
                /> */}
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-[#2D1B2E] rounded-full p-3 shadow-lg border border-[#C73D5C]/20 dark:border-[#E88A9B]/20 animate-bounce">
                <span className="text-2xl">🛡️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-[#2D1B2E] rounded-full p-3 shadow-lg border border-[#C73D5C]/20 dark:border-[#E88A9B]/20 animate-bounce delay-100">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white dark:bg-[#2D1B2E] rounded-full p-2 shadow-lg border border-[#C73D5C]/20 dark:border-[#E88A9B]/20 animate-pulse">
                <span className="text-xl">🔒</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}