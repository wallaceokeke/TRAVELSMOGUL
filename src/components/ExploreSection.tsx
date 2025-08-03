import React from 'react';
import { Globe, Heart, Wallet, Mountain, Utensils, Camera } from 'lucide-react';

const ExploreSection: React.FC = () => {
  const categories = [
    {
      icon: Globe,
      title: "Africa",
      subtitle: "Where it all begins",
      image: "https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg",
      quote: "Let the roots of Africa take you global"
    },
    {
      icon: Mountain,
      title: "Europe",
      subtitle: "Old world charm",
      image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
      quote: "Cobblestone stories and cathedral dreams"
    },
    {
      icon: Camera,
      title: "Asia",
      subtitle: "Mystical horizons",
      image: "https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg",
      quote: "Ancient wisdom meets modern marvels"
    },
    {
      icon: Utensils,
      title: "Culture Trips",
      subtitle: "Soul-stirring experiences",
      image: "https://images.pexels.com/photos/2531709/pexels-photo-2531709.jpeg",
      quote: "Taste the world's stories"
    },
    {
      icon: Heart,
      title: "Romantic Getaways",
      subtitle: "Love without borders",
      image: "https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg",
      quote: "Two hearts, infinite destinations"
    },
    {
      icon: Wallet,
      title: "Budget Gems",
      subtitle: "Affordable wonders",
      image: "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg",
      quote: "Rich experiences, gentle prices"
    }
  ];

  return (
    <section id="explore" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mb-4">
            Explore by Soul
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Travel is not escape, it's remembrance — of who we really are. Choose your path of discovery.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 text-white">
                  <div className="flex justify-between items-start">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-1">
                      {category.title}
                    </h3>
                    <p className="text-white/80 mb-3">
                      {category.subtitle}
                    </p>
                    <p className="text-sm italic text-amber-200 font-light">
                      "{category.quote}"
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-white py-12 px-8 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Ready to Write Your Story?
            </h3>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              The world is your story. Let's write it together, one journey at a time.
            </p>
            <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-colors">
              Start Planning
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;