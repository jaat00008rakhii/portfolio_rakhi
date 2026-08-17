// components/About.jsx
import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCode, FaShieldAlt, FaAward, FaUsers, FaLightbulb, FaHeart } from 'react-icons/fa';
import { HiLocationMarker, HiMail } from 'react-icons/hi';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-white dark:bg-[#1A0F1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#E88A9B]/20 to-[#C73D5C]/20 border border-[#C73D5C]/30 mb-4">
            <span className="text-sm font-medium text-[#C73D5C] dark:text-[#E88A9B]">
              👤 About Me
            </span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-[#2D1B2E] dark:text-[#F4D4D8]">
              Who I 
            </span>
            <span className="bg-gradient-to-r from-[#E88A9B] via-[#C73D5C] to-[#7A2B4A] bg-clip-text text-transparent">
              {' '}Am
            </span>
          </h2>
          <p className="text-[#4A3A4A] dark:text-[#D4C4D4] mt-4 max-w-2xl mx-auto">
            Passionate Cyber Security Analyst & Web Developer dedicated to building secure digital solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - About Text */}
          <div>
            <div className="space-y-6">
              <p className="text-[#4A3A4A] dark:text-[#D4C4D4] text-lg leading-relaxed">
                I am a dedicated <span className="text-[#C73D5C] dark:text-[#E88A9B] font-semibold">Cyber Security Analyst</span> and 
                <span className="text-[#C73D5C] dark:text-[#E88A9B] font-semibold"> Web Developer</span> with a passion for 
                protecting digital assets and creating secure, user-friendly web applications. With a strong foundation 
                in both security and development, I bridge the gap between robust security measures and seamless user experiences.
              </p>
              <p className="text-[#4A3A4A] dark:text-[#D4C4D4] text-lg leading-relaxed">
                My journey in tech started with a curiosity for how things work, which evolved into a mission to 
                make the digital world safer. I specialize in identifying vulnerabilities, implementing security 
                protocols, and building applications that stand strong against modern cyber threats.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#E88A9B]/5 to-[#C73D5C]/5 border border-[#E88A9B]/20 dark:border-[#7A2B4A]/20">
                <FaGraduationCap className="text-[#C73D5C] dark:text-[#E88A9B] text-2xl mb-2" />
                <h4 className="font-semibold text-[#2D1B2E] dark:text-[#F4D4D8]">Education</h4>
                <p className="text-sm text-[#4A3A4A] dark:text-[#D4C4D4]">BCA in CS</p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#C73D5C]/5 to-[#7A2B4A]/5 border border-[#C73D5C]/20 dark:border-[#7A2B4A]/20">
                <FaBriefcase className="text-[#C73D5C] dark:text-[#E88A9B] text-2xl mb-2" />
                <h4 className="font-semibold text-[#2D1B2E] dark:text-[#F4D4D8]">Experience</h4>
                <p className="text-sm text-[#4A3A4A] dark:text-[#D4C4D4]">1+ Years</p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#7A2B4A]/5 to-[#2D1B2E]/5 border border-[#7A2B4A]/20 dark:border-[#7A2B4A]/20">
                <FaCode className="text-[#C73D5C] dark:text-[#E88A9B] text-2xl mb-2" />
                <h4 className="font-semibold text-[#2D1B2E] dark:text-[#F4D4D8]">Projects</h4>
                <p className="text-sm text-[#4A3A4A] dark:text-[#D4C4D4]">10+ Completed</p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#E88A9B]/5 to-[#7A2B4A]/5 border border-[#E88A9B]/20 dark:border-[#7A2B4A]/20">
                <FaShieldAlt className="text-[#C73D5C] dark:text-[#E88A9B] text-2xl mb-2" />
                <h4 className="font-semibold text-[#2D1B2E] dark:text-[#F4D4D8]">Certifications</h4>
                <p className="text-sm text-[#4A3A4A] dark:text-[#D4C4D4]">5+ Certified</p>
              </div>
            </div>
          </div>

          {/* Right Side - Stats & Highlights */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#E88A9B]/10 to-[#C73D5C]/10 border border-[#E88A9B]/20 dark:border-[#7A2B4A]/20 text-center">
                <h3 className="text-3xl font-bold text-[#C73D5C] dark:text-[#E88A9B]">1+</h3>
                <p className="text-sm text-[#4A3A4A] dark:text-[#D4C4D4]">Years Experience</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#C73D5C]/10 to-[#7A2B4A]/10 border border-[#C73D5C]/20 dark:border-[#7A2B4A]/20 text-center">
                <h3 className="text-3xl font-bold text-[#C73D5C] dark:text-[#E88A9B]">10+</h3>
                <p className="text-sm text-[#4A3A4A] dark:text-[#D4C4D4]">Projects Done</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#7A2B4A]/10 to-[#2D1B2E]/10 border border-[#7A2B4A]/20 dark:border-[#7A2B4A]/20 text-center">
                <h3 className="text-3xl font-bold text-[#C73D5C] dark:text-[#E88A9B]">15+</h3>
                <p className="text-sm text-[#4A3A4A] dark:text-[#D4C4D4]">Happy Clients</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#E88A9B]/10 to-[#7A2B4A]/10 border border-[#E88A9B]/20 dark:border-[#7A2B4A]/20 text-center">
                <h3 className="text-3xl font-bold text-[#C73D5C] dark:text-[#E88A9B]">5+</h3>
                <p className="text-sm text-[#4A3A4A] dark:text-[#D4C4D4]">Certifications</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#E88A9B]/5 to-[#C73D5C]/5 border border-[#E88A9B]/20 dark:border-[#7A2B4A]/20">
              <h3 className="font-bold text-[#2D1B2E] dark:text-[#F4D4D8] mb-4 flex items-center gap-2">
                <FaLightbulb className="text-[#C73D5C] dark:text-[#E88A9B]" />
                Why Work With Me?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#4A3A4A] dark:text-[#D4C4D4]">
                  <FaShieldAlt className="text-[#C73D5C] dark:text-[#E88A9B] mt-1 flex-shrink-0" />
                  <span>Strong focus on security-first development approach</span>
                </li>
                <li className="flex items-start gap-3 text-[#4A3A4A] dark:text-[#D4C4D4]">
                  <FaCode className="text-[#C73D5C] dark:text-[#E88A9B] mt-1 flex-shrink-0" />
                  <span>Full-stack development with modern technologies</span>
                </li>
                <li className="flex items-start gap-3 text-[#4A3A4A] dark:text-[#D4C4D4]">
                  <FaUsers className="text-[#C73D5C] dark:text-[#E88A9B] mt-1 flex-shrink-0" />
                  <span>Excellent communication and teamwork skills</span>
                </li>
                <li className="flex items-start gap-3 text-[#4A3A4A] dark:text-[#D4C4D4]">
                  <FaHeart className="text-[#C73D5C] dark:text-[#E88A9B] mt-1 flex-shrink-0" />
                  <span>Passionate about continuous learning and growth</span>
                </li>
              </ul>
            </div>

            {/* Quick Info */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#C73D5C]/5 to-[#7A2B4A]/5 border border-[#C73D5C]/20 dark:border-[#7A2B4A]/20">
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <div className="flex items-center gap-2 text-[#4A3A4A] dark:text-[#D4C4D4]">
                  <HiLocationMarker className="text-[#C73D5C] dark:text-[#E88A9B]" />
                  <span>📍 India</span>
                </div>
                <div className="flex items-center gap-2 text-[#4A3A4A] dark:text-[#D4C4D4]">
                  <HiMail className="text-[#C73D5C] dark:text-[#E88A9B]" />
                  <a href="mailto:rakhi@example.com" className="hover:text-[#C73D5C] dark:hover:text-[#E88A9B] transition-colors">
                   rakhichouhan008@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[#4A3A4A] dark:text-[#D4C4D4]">
                  <FaAward className="text-[#C73D5C] dark:text-[#E88A9B]" />
                  <span>🏆 Top Performer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}