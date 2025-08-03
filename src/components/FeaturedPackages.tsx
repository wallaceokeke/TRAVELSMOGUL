import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Clock, Star } from 'lucide-react';
import BookingModal from './BookingModal';

interface FeaturedPackagesProps {
  ref?: React.RefObject<HTMLElement>;
}

const FeaturedPackages = React.forwardRef<HTMLElement, FeaturedPackagesProps>((props, ref) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const packages = [
    {
      id: 1,
      title: "Cape Town & Safari Combo",
      location: "South Africa",
      duration: "6 Days",
      price: "$599",
      rating: 4.9,
      image: "https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg",
      description: "Table Mountain majesty meets Big Five adventure"
    },
    {
      id: 2,
      title: "Dubai Marina & Desert",
      location: "UAE",
      duration: "5 Days",
      price: "$899",
      rating: 4.8,
      image: "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg",
      description: "Modern luxury meets ancient desert mystique"
    },
    {
      id: 3,
      title: "Paris Romance Package",
      location: "France",
      duration: "4 Days",
      price: "$1,299",
      rating: 4.9,
      image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
      description: "City of lights through African eyes"
    },
    {
      id: 4,
      title: "Zanzibar Spice Island",
      location: "Tanzania",
      duration: "7 Days",
      price: "$799",
      rating: 4.7,
      image: "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg",
      description: "Dhow sunsets and spice-scented markets"
    },
    {
      id: 5,
      title: "Tokyo Cultural Immersion",
      location: "Japan",
      duration: "8 Days",
      price: "$1,599",
      rating: 4.8,
      image: "https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg",
      description: "Where ancient traditions meet neon nights"
    },
    {
      id: 6,
      title: "Marrakech Medina Magic",
      location: "Morocco",
      duration: "5 Days",
      price: "$699",
      rating: 4.6,
      image: "https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg",
      description: "Atlas Mountains and imperial city wonders"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleBookNow = (pkg: any) => {
    setSelectedPackage(pkg);
    setShowBookingModal(true);
  };

  return (
    <section ref={ref} id="packages" className="py-20 bg-gradient-to-b from-white to-amber-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mb-4">
            Curated Journeys
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From the spice-scented markets of Zanzibar to the neon nights of Tokyo — your journey begins here
          </p>
        </div>

        {/* Scroll Controls */}
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-serif text-gray-900 dark:text-white">
            Featured Escapes
          </h3>
          <div className="flex space-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* Packages Scroll */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex-none w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{pkg.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white">
                    {pkg.title}
                  </h3>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Starting from</div>
                    <div className="text-2xl font-bold text-amber-600">{pkg.price}</div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 italic">
                  {pkg.description}
                </p>

                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{pkg.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleBookNow(pkg)}
                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 px-4 rounded-xl font-medium transition-colors"
                  >
                    Book Now
                  </button>
                  <button className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        packageData={selectedPackage}
      />
    </section>
  );
});

FeaturedPackages.displayName = 'FeaturedPackages';

export default FeaturedPackages;