import React, { useState } from 'react';
import { Upload, X, Image, FileText, Send, Camera } from 'lucide-react';

interface StoryUploadProps {
  isOpen: boolean;
  onClose: () => void;
}

const StoryUpload: React.FC<StoryUploadProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    travelDate: '',
    storyTitle: '',
    storyContent: '',
    highlights: '',
    recommendations: ''
  });
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedImages(prev => [...prev, ...files].slice(0, 5)); // Max 5 images
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const storyData = {
      id: Date.now(),
      ...formData,
      images: selectedImages.map(file => file.name),
      submissionDate: new Date().toISOString(),
      status: 'pending'
    };

    try {
      // Save to JSON file (in a real app, this would be sent to a backend)
      const existingStories = JSON.parse(localStorage.getItem('travelStories') || '[]');
      existingStories.push(storyData);
      localStorage.setItem('travelStories', JSON.stringify(existingStories));

      // Send WhatsApp message
      const message = `📖 New Travel Story Submission - Travels Mogul

👤 Traveler: ${formData.name}
📧 Email: ${formData.email}
📍 Destination: ${formData.destination}
📅 Travel Date: ${formData.travelDate}

📝 Story Title: ${formData.storyTitle}

✨ Story Preview:
${formData.storyContent.substring(0, 200)}${formData.storyContent.length > 200 ? '...' : ''}

🌟 Highlights:
${formData.highlights}

💡 Recommendations:
${formData.recommendations}

📸 Images: ${selectedImages.length} photo(s) attached
Story ID: ${storyData.id}

Please review and consider featuring this story on our platform!`;

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
          destination: '',
          travelDate: '',
          storyTitle: '',
          storyContent: '',
          highlights: '',
          recommendations: ''
        });
        setSelectedImages([]);
      }, 3000);
    } catch (error) {
      console.error('Story submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="h-8 w-8 text-amber-600" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2">
            Story Submitted!
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Thank you for sharing your journey! We'll review your story and get back to you soon.
          </p>
          <p className="text-sm text-amber-600 italic">
            "Every story shared inspires another journey..."
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
              Share Your Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Inspire others with your travel story
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              About You
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
          </div>

          {/* Trip Information */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Your Journey
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Destination *
                </label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Where did you travel?"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Travel Date
                </label>
                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Your Story
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Story Title *
                </label>
                <input
                  type="text"
                  name="storyTitle"
                  value={formData.storyTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Give your story a captivating title"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Story *
                </label>
                <textarea
                  name="storyContent"
                  value={formData.storyContent}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Share your travel experience, what made it special, memorable moments..."
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Trip Highlights
                </label>
                <textarea
                  name="highlights"
                  value={formData.highlights}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white"
                  placeholder="What were the best parts of your trip?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Recommendations for Future Travelers
                </label>
                <textarea
                  name="recommendations"
                  value={formData.recommendations}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Tips, must-visit places, things to avoid, best time to visit..."
                />
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Share Your Photos
            </h4>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Click to upload photos from your journey
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Maximum 5 images (JPG, PNG, GIF)
                  </p>
                </label>
              </div>

              {/* Image Preview */}
              {selectedImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {selectedImages.map((file, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
              className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              <FileText className="h-5 w-5" />
              <span>{isSubmitting ? 'Submitting...' : 'Share Story'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StoryUpload;