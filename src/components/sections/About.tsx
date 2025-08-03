import React from 'react';
import { Github, Linkedin, Code, Lightbulb, Cpu, Bot } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 relative" id="about">
      <div className="binary-overlay"></div>
      <div className="binary-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-code font-bold mb-6">
              <span className="text-white">About </span>
              <span className="neon-text">Wallace</span>
            </h2>
            <div className="h-1 w-20 bg-electric-blue mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="cyberpunk-card transform transition-all duration-500 hover:scale-105 hover:shadow-neon-blue">
              <div className="absolute -top-3 -left-3 bg-electric-blue text-charcoal rounded-full p-2">
                <Lightbulb size={20} />
              </div>
              <h3 className="text-xl font-code font-semibold mb-4 text-electric-blue">The Journey</h3>
              <p className="text-gray-300">
                From early coding experiments to specializing in AI systems at university, 
                Wallace's journey has been driven by a fascination with creating intelligent, 
                conversational systems that solve real problems.
              </p>
            </div>
            
            <div className="cyberpunk-card transform transition-all duration-500 hover:scale-105 hover:shadow-neon-blue border-l-4 border-neon-violet">
              <div className="absolute -top-3 -left-3 bg-neon-violet text-white rounded-full p-2">
                <Cpu size={20} />
              </div>
              <h3 className="text-xl font-code font-semibold mb-4 text-neon-violet">The Passion</h3>
              <p className="text-gray-300">
                Wallace is passionate about logic-based systems that can understand and adapt 
                to human needs. His work focuses on creating AI assistants that feel natural 
                and helpful, rather than rigid and mechanical.
              </p>
            </div>
            
            <div className="cyberpunk-card transform transition-all duration-500 hover:scale-105 hover:shadow-neon-blue border-l-4 border-cyberpunk-yellow">
              <div className="absolute -top-3 -left-3 bg-cyberpunk-yellow text-charcoal rounded-full p-2">
                <Bot size={20} />
              </div>
              <h3 className="text-xl font-code font-semibold mb-4 text-cyberpunk-yellow">The Vision</h3>
              <p className="text-gray-300">
                Inspired by the lack of hands-free PC tools, Wallace created Kate, his first 
                major AI assistant. This experience shaped his vision for creating AI systems 
                that integrate seamlessly into everyday life.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-light-charcoal bg-opacity-80 backdrop-blur-sm p-6 rounded-lg border-l-4 border-electric-blue">
            <blockquote className="relative">
              <div className="text-4xl text-electric-blue absolute top-0 left-0 opacity-20">"</div>
              <p className="text-lg text-gray-300 italic relative z-10 pl-8">
                I believe AI should enhance human capabilities, not replace them. My goal is to build 
                systems that understand context, remember conversations, and learn from interactions, 
                making technology more accessible to everyone.
              </p>
              <footer className="mt-4 pl-8">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-electric-blue flex items-center justify-center text-charcoal font-bold">
                    WO
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-semibold">Wallace Okeke</p>
                    <p className="text-gray-400 text-sm">AI Systems Developer</p>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
          
          <div className="mt-16 flex justify-center space-x-6">
            <a 
              href="https://github.com/wallaceokeeke" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-light-charcoal hover:bg-electric-blue hover:bg-opacity-20 text-white p-4 rounded-md transition-all duration-300 flex items-center"
            >
              <Github size={20} className="mr-2" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/wallaceokeke" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-light-charcoal hover:bg-neon-violet hover:bg-opacity-20 text-white p-4 rounded-md transition-all duration-300 flex items-center"
            >
              <Linkedin size={20} className="mr-2" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;