// components/Skills.jsx
import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaNodeJs, 
  FaLinux,
  FaShieldAlt,
  FaCode,
  FaBug,
  FaNetworkWired,
  FaDatabase,
  FaServer
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiCloudinary
} from 'react-icons/si';
import { 
  MdSecurity, 
  MdDevices, 
  MdEmail, 
  MdStorage,
  MdOutlineSecurity
} from 'react-icons/md';
import { BiNetworkChart } from 'react-icons/bi';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { IoShieldOutline } from 'react-icons/io5';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      color: 'from-[#E88A9B] to-[#C73D5C]',
      bgColor: 'bg-[#E88A9B]/5',
      borderColor: 'border-[#E88A9B]/20',
      skills: [
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'React.js', icon: FaReact, color: '#61DAFB' },
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      color: 'from-[#C73D5C] to-[#7A2B4A]',
      bgColor: 'bg-[#C73D5C]/5',
      borderColor: 'border-[#C73D5C]/20',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'Mongoose', icon: SiMongodb, color: '#47A248' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'Cloudinary', icon: SiCloudinary, color: '#3448C5' },
        { name: 'Nodemailer', icon: MdEmail, color: '#D14836' },
      ]
    },
    {
      title: 'Cyber Security',
      icon: '🔒',
      color: 'from-[#7A2B4A] to-[#2D1B2E]',
      bgColor: 'bg-[#7A2B4A]/5',
      borderColor: 'border-[#7A2B4A]/20',
      skills: [
        { name: 'Ethical Hacking', icon: FaBug, color: '#00FF00' },
        { name: 'Linux', icon: FaLinux, color: '#FCC624' },
        { name: 'Web Security', icon: FaShieldAlt, color: '#FF6B6B' },
        { name: 'App Security', icon: MdSecurity, color: '#4ECDC4' },
      ]
    },
    {
      title: 'Hacking & Security',
      icon: '🛡️',
      color: 'from-[#C73D5C] to-[#E88A9B]',
      bgColor: 'bg-[#E88A9B]/5',
      borderColor: 'border-[#E88A9B]/20',
      skills: [
        { name: 'Web Hacking', icon: FaNetworkWired, color: '#FF6B6B' },
        { name: 'App Hacking', icon: MdDevices, color: '#4ECDC4' },
        { name: 'Penetration Testing', icon: BiNetworkChart, color: '#FFD93D' },
        { name: 'Security Analysis', icon: IoShieldOutline, color: '#6BCB77' },
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-white dark:bg-[#1A0F1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#E88A9B]/20 to-[#C73D5C]/20 border border-[#C73D5C]/30 mb-4">
            <span className="text-sm font-medium text-[#C73D5C] dark:text-[#E88A9B]">
              💪 My Skills
            </span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-[#2D1B2E] dark:text-[#F4D4D8]">
              What I 
            </span>
            <span className="bg-gradient-to-r from-[#E88A9B] via-[#C73D5C] to-[#7A2B4A] bg-clip-text text-transparent">
              {' '}Do
            </span>
          </h2>
          <p className="text-[#4A3A4A] dark:text-[#D4C4D4] mt-4 max-w-2xl mx-auto">
            Here are my skills and expertise areas
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} rounded-2xl p-6 border ${category.borderColor} transition-all duration-300 hover:shadow-lg hover:shadow-[#C73D5C]/10 dark:hover:shadow-[#E88A9B]/10`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2D1B2E] dark:text-[#F4D4D8]">
                    {category.title}
                  </h3>
                  <div className={`w-16 h-1 rounded-full bg-gradient-to-r ${category.color} mt-1`}></div>
                </div>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/50 dark:bg-[#2D1B2E]/50 border border-[#E88A9B]/10 dark:border-[#7A2B4A]/20 hover:border-[#C73D5C]/30 dark:hover:border-[#E88A9B]/30 transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#E88A9B]/10 to-[#C73D5C]/10 group-hover:from-[#E88A9B]/20 group-hover:to-[#C73D5C]/20 transition-all duration-300">
                        <Icon 
                          size={18} 
                          style={{ color: skill.color }}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <span className="text-sm font-medium text-[#2D1B2E] dark:text-[#F4D4D8]">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Extra Badge Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#E88A9B]/5 to-[#C73D5C]/5 border border-[#E88A9B]/20 dark:border-[#7A2B4A]/20">
            <span className="text-[#2D1B2E] dark:text-[#F4D4D8] font-medium">
              💡 Always Learning:
            </span>
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#E88A9B]/20 to-[#C73D5C]/20 text-[#C73D5C] dark:text-[#E88A9B] text-sm font-medium">
              🔐 Security First
            </span>
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#C73D5C]/20 to-[#7A2B4A]/20 text-[#C73D5C] dark:text-[#E88A9B] text-sm font-medium">
              🚀 Full Stack
            </span>
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#7A2B4A]/20 to-[#2D1B2E]/20 text-[#C73D5C] dark:text-[#E88A9B] text-sm font-medium">
              🛡️ Ethical Hacking
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}