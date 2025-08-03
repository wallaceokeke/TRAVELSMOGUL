import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-charcoal relative overflow-hidden">
      <div className="binary-overlay opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code size={24} className="text-electric-blue" />
              <h3 className="text-xl font-code font-bold text-white">Wallace.Okeke</h3>
            </div>
            <p className="text-gray-400 max-w-md">
              Developer with a purpose. Builder of bots, not noise.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://github.com/wallaceokeeke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-electric-blue transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/wallaceokeke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-violet transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="text-gray-400 hover:text-cyberpunk-yellow transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-code font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-electric-blue transition-colors">About Me</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-electric-blue transition-colors">Projects</a>
              </li>
              <li>
                <a href="#demo" className="text-gray-400 hover:text-electric-blue transition-colors">Bot Demo</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Wallace Okeke. This portfolio was built as a student project.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;