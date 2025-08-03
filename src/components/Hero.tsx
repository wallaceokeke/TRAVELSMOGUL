import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, Instagram } from 'lucide-react';
import BookingModal from './BookingModal';
import StoryUpload from './StoryUpload';

interface HeroProps {
  onExploreJourneys: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreJourneys }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showStoryUpload, setShowStoryUpload] = useState(false);
  
  const backgroundImages = [
    'https://images.pexels.com/photos/2929906/pexels-photo-2929906.jpeg', // Mount Kilimanjaro
    'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg', // Sahara dunes
    'https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg', // Zanzibar beach
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
          Where Africa Meets
          <span className="block text-amber-400">the World</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
          Luxury. Culture. Discovery. Anywhere your heart desires.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={onExploreJourneys}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Explore Journeys
          </button>
          <button 
            onClick={() => setShowStoryUpload(true)}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
          >
            Plan My Trip
          </button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80">
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5" />
            <span>+254 706 142076</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5" />
            <span>brownwallace20@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Instagram className="h-5 w-5" />
            <span>@travelsmogul</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImage ? 'bg-amber-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Story Upload Modal */}
      <StoryUpload 
        isOpen={showStoryUpload} 
        onClose={() => setShowStoryUpload(false)} 
      />
    </section>
  );
};

export default Hero;