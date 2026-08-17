// App.jsx
import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Skill from './components/Skill.jsx';
import Project from './components/Project.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#1A0F1A] transition-colors duration-300">
        <Navbar />
        <Home/>
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
        <Footer/>
        
        {/* Your sections
        <section id="home" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl text-[#2D1B2E] dark:text-[#F4D4D8] transition-colors duration-300">
            Home Section
          </h1>
        </section>
        
        <section id="about" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl text-[#2D1B2E] dark:text-[#F4D4D8] transition-colors duration-300">
            About Section
          </h1>
        </section>
        
        <section id="projects" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl text-[#2D1B2E] dark:text-[#F4D4D8] transition-colors duration-300">
            Projects Section
          </h1>
        </section>
        
        <section id="skills" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl text-[#2D1B2E] dark:text-[#F4D4D8] transition-colors duration-300">
            Skills Section
          </h1>
        </section>
        
        <section id="contact" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl text-[#2D1B2E] dark:text-[#F4D4D8] transition-colors duration-300">
            Contact Section
          </h1>
        </section> */}
      </div>
    </ThemeProvider>
  );
}

export default App;