// components/Contact.jsx
import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter,
  FaPaperPlane,
  FaUser,
  FaComment,
  FaCheckCircle,
  FaSpinner
} from 'react-icons/fa';
import { HiLocationMarker, HiMail } from 'react-icons/hi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'rakhichouhan008@gmail.com',
      link: 'mailto:rakhichouhan008@gmail.com',
      color: 'from-[#E88A9B] to-[#C73D5C]'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 90535-19642',
      link: 'tel:+919876543210',
      color: 'from-[#C73D5C] to-[#7A2B4A]'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'India',
      link: '#',
      color: 'from-[#7A2B4A] to-[#2D1B2E]'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, label: 'GitHub', link: '#', color: '#333' },
    { icon: FaLinkedinIn, label: 'LinkedIn', link: '#', color: '#0077B5' },
    { icon: FaTwitter, label: 'Twitter', link: '#', color: '#1DA1F2' }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-white dark:bg-[#1A0F1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#E88A9B]/20 to-[#C73D5C]/20 border border-[#C73D5C]/30 mb-4">
            <span className="text-sm font-medium text-[#C73D5C] dark:text-[#E88A9B]">
              📬 Get In Touch
            </span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-[#2D1B2E] dark:text-[#F4D4D8]">
              Contact 
            </span>
            <span className="bg-gradient-to-r from-[#E88A9B] via-[#C73D5C] to-[#7A2B4A] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-[#4A3A4A] dark:text-[#D4C4D4] mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  className={`block p-6 rounded-2xl bg-gradient-to-r ${info.color} bg-opacity-10 border border-[#E88A9B]/20 dark:border-[#7A2B4A]/20 hover:shadow-lg hover:shadow-[#C73D5C]/10 transition-all duration-300 group`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center text-white`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-[#4A3A4A] dark:text-[#D4C4D4]">{info.label}</p>
                      <p className="font-semibold text-[#2D1B2E] dark:text-[#F4D4D8] group-hover:text-[#C73D5C] dark:group-hover:text-[#E88A9B] transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#E88A9B]/5 to-[#C73D5C]/5 border border-[#E88A9B]/20 dark:border-[#7A2B4A]/20">
              <h4 className="font-semibold text-[#2D1B2E] dark:text-[#F4D4D8] mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white dark:bg-[#2D1B2E] border border-[#E88A9B]/20 dark:border-[#7A2B4A]/20 flex items-center justify-center hover:border-[#C73D5C] dark:hover:border-[#E88A9B] transition-all duration-300 hover:shadow-lg hover:shadow-[#C73D5C]/20 group"
                      style={{ color: social.color }}
                    >
                      <Icon size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-[#E88A9B]/5 to-[#C73D5C]/5 border border-[#E88A9B]/20 dark:border-[#7A2B4A]/20">
              <h3 className="text-2xl font-bold text-[#2D1B2E] dark:text-[#F4D4D8] mb-6 flex items-center gap-3">
                <FaPaperPlane className="text-[#C73D5C] dark:text-[#E88A9B]" />
                Send Me a Message
              </h3>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/30 text-center">
                  <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-[#2D1B2E] dark:text-[#F4D4D8]">Thank You!</h4>
                  <p className="text-[#4A3A4A] dark:text-[#D4C4D4]">Your message has been sent successfully. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#2D1B2E] dark:text-[#F4D4D8] mb-2">
                        <FaUser className="inline mr-2 text-[#C73D5C] dark:text-[#E88A9B]" />
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#2D1B2E] border border-[#E88A9B]/20 dark:border-[#7A2B4A]/20 focus:border-[#C73D5C] dark:focus:border-[#E88A9B] focus:ring-2 focus:ring-[#C73D5C]/20 dark:focus:ring-[#E88A9B]/20 outline-none transition-all duration-300 text-[#2D1B2E] dark:text-[#F4D4D8]"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2D1B2E] dark:text-[#F4D4D8] mb-2">
                        <HiMail className="inline mr-2 text-[#C73D5C] dark:text-[#E88A9B]" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#2D1B2E] border border-[#E88A9B]/20 dark:border-[#7A2B4A]/20 focus:border-[#C73D5C] dark:focus:border-[#E88A9B] focus:ring-2 focus:ring-[#C73D5C]/20 dark:focus:ring-[#E88A9B]/20 outline-none transition-all duration-300 text-[#2D1B2E] dark:text-[#F4D4D8]"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2D1B2E] dark:text-[#F4D4D8] mb-2">
                      <FaComment className="inline mr-2 text-[#C73D5C] dark:text-[#E88A9B]" />
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#2D1B2E] border border-[#E88A9B]/20 dark:border-[#7A2B4A]/20 focus:border-[#C73D5C] dark:focus:border-[#E88A9B] focus:ring-2 focus:ring-[#C73D5C]/20 dark:focus:ring-[#E88A9B]/20 outline-none transition-all duration-300 text-[#2D1B2E] dark:text-[#F4D4D8]"
                      placeholder="Enter subject"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2D1B2E] dark:text-[#F4D4D8] mb-2">
                      <FaComment className="inline mr-2 text-[#C73D5C] dark:text-[#E88A9B]" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#2D1B2E] border border-[#E88A9B]/20 dark:border-[#7A2B4A]/20 focus:border-[#C73D5C] dark:focus:border-[#E88A9B] focus:ring-2 focus:ring-[#C73D5C]/20 dark:focus:ring-[#E88A9B]/20 outline-none transition-all duration-300 resize-none text-[#2D1B2E] dark:text-[#F4D4D8]"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-xl text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? 'bg-gradient-to-r from-[#7A2B4A] to-[#2D1B2E] cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#C73D5C] to-[#7A2B4A] hover:shadow-lg hover:shadow-[#C73D5C]/30 hover:scale-[1.02]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}