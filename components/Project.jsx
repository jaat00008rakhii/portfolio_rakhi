// components/Projects.jsx
import React, { useState } from 'react';
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaCode, 
  FaGraduationCap,
  FaUniversity,
  FaChalkboardTeacher,
  FaComments,
  FaArrowRight,
  FaStar,
  FaEye
} from 'react-icons/fa';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { MdSecurity, MdDevices } from 'react-icons/md';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Education Splico',
      category: 'education',
      icon: FaGraduationCap,
      description: 'A comprehensive educational platform for students and teachers. Features include course management, student tracking, online classes, and interactive learning modules with secure authentication.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      liveUrl: 'https://splico.com',
      githubUrl: '#',
      color: 'from-[#E88A9B] to-[#C73D5C]',
      bgColor: 'bg-[#E88A9B]/5',
      borderColor: 'border-[#E88A9B]/20',
      features: ['Course Management', 'Student Tracking', 'Online Classes', 'Secure Authentication']
    },
    {
      id: 2,
      title: 'Hartron India',
      category: 'corporate',
      icon: FaUniversity,
      description: 'Corporate website for Hartron India - a leading government organization. Built with modern technologies featuring dynamic content management, responsive design, and comprehensive information architecture.',
      technologies: ['React.js', 'Tailwind CSS', 'Express.js', 'MySQL', 'Cloudinary'],
      liveUrl: 'https://hartronindia.com',
      githubUrl: '#',
      color: 'from-[#C73D5C] to-[#7A2B4A]',
      bgColor: 'bg-[#C73D5C]/5',
      borderColor: 'border-[#C73D5C]/20',
      features: ['Dynamic CMS', 'Responsive Design', 'Information Architecture', 'SEO Optimized']
    },
    {
      id: 3,
      title: 'LMS Hartron Online',
      category: 'education',
      icon: FaChalkboardTeacher,
      description: 'Learning Management System for Hartron India. Complete platform for managing courses, tracking student progress, conducting assessments, and providing a seamless learning experience.',
      technologies: ['React.js', 'Redux', 'Node.js', 'MongoDB', 'Express.js'],
      liveUrl: 'https://hartronindia.online',
      githubUrl: '#',
      color: 'from-[#7A2B4A] to-[#2D1B2E]',
      bgColor: 'bg-[#7A2B4A]/5',
      borderColor: 'border-[#7A2B4A]/20',
      features: ['Course Management', 'Progress Tracking', 'Assessments', 'Certificate Generation']
    },
    {
      id: 4,
      title: 'Messaging Application',
      category: 'app',
      icon: FaComments,
      description: 'Real-time messaging application with end-to-end encryption. Features include instant messaging, group chats, file sharing, voice notes, and secure user authentication with modern UI/UX.',
      technologies: ['React.js', 'Socket.io', 'Node.js', 'MongoDB', 'JWT'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-[#C73D5C] to-[#E88A9B]',
      bgColor: 'bg-[#E88A9B]/5',
      borderColor: 'border-[#E88A9B]/20',
      features: ['Real-time Messaging', 'End-to-End Encryption', 'Group Chats', 'File Sharing']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: FaCode },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'corporate', label: 'Corporate', icon: FaUniversity },
    { id: 'app', label: 'Apps', icon: MdDevices }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="min-h-screen py-20 bg-white dark:bg-[#1A0F1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#E88A9B]/20 to-[#C73D5C]/20 border border-[#C73D5C]/30 mb-4">
            <span className="text-sm font-medium text-[#C73D5C] dark:text-[#E88A9B]">
              🚀 My Projects
            </span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-[#2D1B2E] dark:text-[#F4D4D8]">
              Featured 
            </span>
            <span className="bg-gradient-to-r from-[#E88A9B] via-[#C73D5C] to-[#7A2B4A] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-[#4A3A4A] dark:text-[#D4C4D4] mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeFilter === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-[#C73D5C] to-[#7A2B4A] shadow-lg shadow-[#C73D5C]/30 dark:shadow-[#E88A9B]/20'
                    : 'text-[#2D1B2E] dark:text-[#F4D4D8] bg-white/50 dark:bg-[#2D1B2E]/50 border border-[#E88A9B]/20 dark:border-[#7A2B4A]/20 hover:border-[#C73D5C]/40 dark:hover:border-[#E88A9B]/40'
                }`}
              >
                <Icon size={16} />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className={`${project.bgColor} rounded-2xl p-6 border ${project.borderColor} transition-all duration-300 hover:shadow-xl hover:shadow-[#C73D5C]/10 dark:hover:shadow-[#E88A9B]/10 group`}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-2xl`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2D1B2E] dark:text-[#F4D4D8]">
                        {project.title}
                      </h3>
                      <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${project.color} mt-1`}></div>
                    </div>
                  </div>
                  {/* Live Badge */}
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                    Live
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#4A3A4A] dark:text-[#D4C4D4] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-full text-xs bg-white/50 dark:bg-[#2D1B2E]/50 border border-[#E88A9B]/10 dark:border-[#7A2B4A]/20 text-[#2D1B2E] dark:text-[#F4D4D8]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} bg-opacity-10 text-[#C73D5C] dark:text-[#E88A9B] border border-[#E88A9B]/20`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-[#E88A9B]/10 dark:border-[#7A2B4A]/20">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#C73D5C] to-[#7A2B4A] text-white text-sm font-medium hover:shadow-lg hover:shadow-[#C73D5C]/30 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                    <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border-2 border-[#C73D5C] dark:border-[#E88A9B] text-[#C73D5C] dark:text-[#E88A9B] text-sm font-medium hover:bg-[#C73D5C] hover:text-white dark:hover:bg-[#E88A9B] dark:hover:text-[#2D1B2E] transition-all duration-300 flex items-center gap-2"
                  >
                    <FaGithub size={14} />
                    Source Code
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#E88A9B]/20 to-[#C73D5C]/20 border border-[#C73D5C]/30 text-[#C73D5C] dark:text-[#E88A9B] font-medium hover:shadow-lg hover:shadow-[#C73D5C]/20 transition-all duration-300"
          >
            <FaEye size={18} />
            View All Projects
            <FaArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}