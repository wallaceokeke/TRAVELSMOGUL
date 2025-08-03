import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, MapPin, Send } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageData: {
    id: number;
    title: string;
    location: string;
    duration: string;
    price: string;
    image: string;
  } | null;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, packageData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen || !packageData) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const bookingData = {
      id: Date.now(),
      packageId: packageData.id,
      packageTitle: packageData.title,
      packageLocation: packageData.location,
      packagePrice: packageData.price,
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      travelDate: formData.date,
      travelTime: formData.time,
      numberOfGuests: formData.guests,
      specialRequests: formData.specialRequests,
      bookingDate: new Date().toISOString(),
      status: 'pending'
    };

    try {
      // Save to JSON file (in a real app, this would be sent to a backend)
      const existingBookings = JSON.parse(localStorage.getItem('travelBookings') || '[]');
      existingBookings.push(bookingData);
      localStorage.setItem('travelBookings', JSON.stringify(existingBookings));

      // Send WhatsApp message
      const message = `🌍 New Booking Request - Travels Mogul

📋 Package: ${packageData.title}
📍 Destination: ${packageData.location}
💰 Price: ${packageData.price}

👤 Customer Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

📅 Travel Details:
Date: ${formData.date}
Time: ${formData.time}
Guests: ${formData.guests}

💬 Special Requests:
${formData.specialRequests || 'None'}

Booking ID: ${bookingData.id}`;

      const phoneNumber = "+254706142076";
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^\d]/g, '')}?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank');
      
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: 1,
          specialRequests: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Booking error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2">
            Booking Request Sent!
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Your booking details have been sent via WhatsApp. We'll get back to you shortly!
          </p>
          <p className="text-sm text-amber-600 italic">
            "Every journey begins with a dream..."
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
            Book Your Journey
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* Package Info */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-start space-x-4">
            <img
              src={packageData.image}
              alt={packageData.title}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-1">
                {packageData.title}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{packageData.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{packageData.duration}</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-amber-600 mt-2">{packageData.price}</div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Personal Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
          </div>

          {/* Travel Details */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Travel Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Travel Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preferred Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of Guests *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white"
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Special Requests or Notes
            </label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white"
              placeholder="Any dietary requirements, accessibility needs, or special occasions..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Book Journey'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;