import React, { useEffect, useRef, useState } from 'react';
import { Heart, Globe, Users, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Heart, value: '2,500+', label: 'Happy Travelers' },
    { icon: Globe, value: '45+', label: 'Destinations' },
    { icon: Users, value: '15+', label: 'Cultural Guides' },
    { icon: Award, value: '4.9', label: 'Average Rating' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mb-6">
              The Soul Behind
              <span className="block text-amber-600">the Brand</span>
            </h2>
            
            <div className="prose prose-lg text-gray-600 dark:text-gray-300 max-w-none">
              <p className="text-xl leading-relaxed mb-6">
                Travels Mogul was born from a passion to connect people — not just with destinations, 
                but with culture, history, and soul.
              </p>
              
              <p className="leading-relaxed mb-6">
                Whether it's a barefoot night under Kenyan stars, or a rooftop in Dubai, 
                we take you there with elegance, intention, and joy. Our roots run deep in 
                African soil, but our wings span the globe.
              </p>
              
              <p className="leading-relaxed mb-8">
                We believe every journey should be transformative — a bridge between worlds, 
                a celebration of diversity, and a homecoming to your truest self.
              </p>
            </div>

            {/* Floating Quote */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-2xl border-l-4 border-amber-400">
              <p className="text-lg italic text-gray-700 dark:text-gray-300 font-serif">
                "Africa leads the way — the rest of the world is your playground."
              </p>
              <p className="text-sm text-amber-600 mt-2 font-medium">— Travels Mogul Philosophy</p>
            </div>
          </div>

          {/* Visual Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            {/* Main Image */}
            <div className="relative mb-8">
              <img
                src="https://images.pexels.com/photos/3274634/pexels-photo-3274634.jpeg"
                alt="Cultural connection"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Est. 2020</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Nairobi, Kenya</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <IconComponent className="h-6 w-6 text-amber-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-8">
              Our Mission
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              To weave the rich tapestry of African heritage into every global adventure, 
              creating transformative experiences that honor our roots while embracing 
              the beautiful diversity of our world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;