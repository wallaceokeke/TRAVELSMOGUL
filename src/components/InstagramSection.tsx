import React, { useState } from 'react';
import { Instagram, Mail, Send } from 'lucide-react';

const InstagramSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const instagramPosts = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg",
      caption: "Sunset over Table Mountain..."
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg",
      caption: "Sahara dreams and camel tales..."
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg",
      caption: "Zanzibar blues and spice market hues..."
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg",
      caption: "Tokyo nights, African hearts..."
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
      caption: "European cobblestones, global souls..."
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg",
      caption: "Dubai skylines, endless horizons..."
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mb-4">
            Join Our Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Get travel secrets, cultural insights, and exclusive discounts delivered to your inbox weekly
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-12">
            <div className="flex">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-l-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-4 rounded-r-xl transition-colors flex items-center"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            {isSubscribed && (
              <p className="text-green-600 dark:text-green-400 mt-2">
                ✨ Welcome to the Travels Mogul family!
              </p>
            )}
          </form>
        </div>

        {/* Instagram Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Instagram className="h-8 w-8 text-gray-900 dark:text-white" />
            <h3 className="text-3xl font-serif text-gray-900 dark:text-white">
              @travelsmogul
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Follow our daily adventures and get inspired for your next journey
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="aspect-square relative group cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 mx-auto">
            <Instagram className="h-5 w-5" />
            <span>Follow @travelsmogul</span>
          </button>
        </div>

        {/* Floating Quote */}
        <div className="mt-16 text-center">
          <div className="bg-amber-50 dark:bg-amber-900/20 p-8 rounded-2xl max-w-3xl mx-auto">
            <p className="text-2xl font-serif italic text-gray-700 dark:text-gray-300 mb-4">
              "The world is your story. Let's write it together."
            </p>
            <p className="text-amber-600 dark:text-amber-400 font-medium">
              — Travels Mogul Promise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;