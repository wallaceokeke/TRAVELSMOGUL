import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  MapPin, 
  Calendar, 
  Heart, 
  Settings, 
  Compass, 
  Moon, 
  Sun,
  Bookmark,
  Clock,
  Star,
  LogOut
} from 'lucide-react';

interface ProfileProps {
  isLoggedIn: boolean;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Profile: React.FC<ProfileProps> = ({ isLoggedIn, darkMode, setDarkMode }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-gray-900 dark:text-white mb-4">
            Please log in to view your profile
          </h1>
          <Link
            to="/login"
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const userTrips = [
    {
      id: 1,
      title: "Cape Town & Safari Combo",
      destination: "South Africa",
      date: "March 2024",
      status: "Upcoming",
      image: "https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg"
    },
    {
      id: 2,
      title: "Zanzibar Spice Island",
      destination: "Tanzania",
      date: "January 2024",
      status: "Completed",
      image: "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg"
    }
  ];

  const wishlist = [
    {
      id: 1,
      title: "Tokyo Cultural Immersion",
      destination: "Japan",
      price: "$1,599",
      image: "https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg"
    },
    {
      id: 2,
      title: "Paris Romance Package",
      destination: "France",
      price: "$1,299",
      image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <Compass className="h-8 w-8 text-amber-600" />
                <span className="text-xl font-serif font-bold text-gray-900 dark:text-white">
                  Travels Mogul
                </span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600" />
                )}
              </button>
              <Link
                to="/"
                className="text-gray-600 dark:text-gray-300 hover:text-amber-600"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              {/* Profile Info */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white">
                  John Traveler
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Adventure Seeker
                </p>
                <div className="flex items-center justify-center space-x-1 mt-2">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Premium Member
                  </span>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'overview' 
                      ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600' 
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <User className="h-5 w-5" />
                  <span>Overview</span>
                </button>
                <button
                  onClick={() => setActiveTab('trips')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'trips' 
                      ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600' 
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <MapPin className="h-5 w-5" />
                  <span>My Trips</span>
                </button>
                <button
                  onClick={() => setActiveTab('wishlist')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'wishlist' 
                      ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600' 
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Heart className="h-5 w-5" />
                  <span>Wishlist</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'settings' 
                      ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600' 
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </button>
              </nav>

              {/* Logout */}
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors mt-6">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                    Travel Overview
                  </h3>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-8 w-8 text-blue-600" />
                        <div>
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">12</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">Countries Visited</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-8 w-8 text-green-600" />
                        <div>
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">28</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">Total Trips</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 p-6 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <Heart className="h-8 w-8 text-amber-600" />
                        <div>
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">5</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">Saved Destinations</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <h4 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                    Recent Activity
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-gray-900 dark:text-white font-medium">
                          Booked Cape Town & Safari Combo
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <Bookmark className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-gray-900 dark:text-white font-medium">
                          Added Tokyo Cultural Immersion to wishlist
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">1 week ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Trips Tab */}
              {activeTab === 'trips' && (
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                    My Trips
                  </h3>
                  <div className="space-y-6">
                    {userTrips.map((trip) => (
                      <div key={trip.id} className="border border-gray-200 dark:border-gray-600 rounded-xl p-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src={trip.image}
                            alt={trip.title}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-2">
                              {trip.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">{trip.destination}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{trip.date}</p>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              trip.status === 'Upcoming' 
                                ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/30' 
                                : 'bg-green-100 text-green-600 dark:bg-green-900/30'
                            }`}>
                              {trip.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Wishlist Tab */}
              {activeTab === 'wishlist' && (
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                    My Wishlist
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {wishlist.map((item) => (
                      <div key={item.id} className="border border-gray-200 dark:border-gray-600 rounded-xl overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="text-lg font-serif font-bold text-gray-900 dark:text-white mb-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-2">{item.destination}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-amber-600">{item.price}</span>
                            <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg">
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                    Account Settings
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value="john@example.com"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value="+1 234 567 8900"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Preferred Currency
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white">
                        <option value="USD">USD</option>
                        <option value="KES">KES</option>
                        <option value="EUR">EUR</option>
                      </select>
                    </div>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;