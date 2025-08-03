import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Binary wave animation on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full width and height
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Binary digits
    const binary = ['0', '1'];
    
    // Array to store binary particles
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      value: string;
      alpha: number;
    }> = [];
    
    // Create initial particles
    const createParticles = () => {
      const particleCount = Math.floor(canvas.width / 30); // Adjust density
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 10 + Math.random() * 6,
          speed: 0.5 + Math.random() * 1.5,
          value: binary[Math.floor(Math.random() * binary.length)],
          alpha: 0.1 + Math.random() * 0.3,
        });
      }
    };
    
    createParticles();
    
    // Animate particles
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle) => {
        // Move particle upward
        particle.y -= particle.speed;
        
        // Reset if out of bounds
        if (particle.y < -20) {
          particle.y = canvas.height + 20;
          particle.x = Math.random() * canvas.width;
          particle.value = binary[Math.floor(Math.random() * binary.length)];
        }
        
        // Draw binary digit
        ctx.font = `${particle.size}px 'Fira Code', monospace`;
        ctx.fillStyle = `rgba(59, 255, 217, ${particle.alpha})`;
        ctx.fillText(particle.value, particle.x, particle.y);
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <section className="min-h-screen relative flex items-center pt-20 overflow-hidden" id="hero">
      {/* Binary waves canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
        aria-hidden="true"
      />
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-size z-0 opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-code font-semibold text-electric-blue mb-2 flex items-center terminal-text">
                <span>Hello_World()</span>
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-code font-bold mb-4">
                <span className="block">👋 Meet Wallace —</span>
                <span className="block neon-text">Architect of</span>
                <span className="block neon-text-violet">Human-Centered AI Bots</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-xl">
                From university projects to intelligent systems — building logic you can talk to.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                size="lg"
                icon={<ArrowRight size={18} />}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Try My Bot
              </Button>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/wallaceokeeke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-electric-blue transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/wallaceokeke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-neon-violet transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative bg-dark-charcoal bg-opacity-70 backdrop-blur-sm rounded-lg border border-electric-blue p-6 animate-float shadow-neon-blue transform -rotate-3">
              <div className="text-xs text-gray-400 mb-2 font-code">// Wallace's Digital Lab</div>
              <div className="code-snippet">
                <div className="code-line">
                  <span className="code-line-keyword">class</span> <span className="code-line-function">AIAssistant</span>:
                </div>
                <div className="code-line pl-4">
                  <span className="code-line-keyword">def</span> <span className="code-line-function">__init__</span>(self, name, purpose):
                </div>
                <div className="code-line pl-8">
                  self.name = name
                </div>
                <div className="code-line pl-8">
                  self.purpose = purpose
                </div>
                <div className="code-line pl-8">
                  self.memory = []
                </div>
                <div className="code-line pl-4">
                  <span className="code-line-keyword">def</span> <span className="code-line-function">respond_to</span>(self, user_input):
                </div>
                <div className="code-line pl-8">
                  <span className="code-line-keyword">if</span> <span className="code-line-string">"hello"</span> <span className="code-line-keyword">in</span> user_input.lower():
                </div>
                <div className="code-line pl-12">
                  <span className="code-line-keyword">return</span> <span className="code-line-string">f"Hello! I'm {self.name}, {self.purpose}"</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-neon-violet text-white rounded-full px-3 py-1 text-sm font-code transform rotate-12 shadow-neon-violet">
                AI Logic
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;