import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedPackages from './components/FeaturedPackages';
import ExploreSection from './components/ExploreSection';
import AboutSection from './components/AboutSection';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';
import Login from './pages/Login';
import Profile from './pages/Profile';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const featuredPackagesRef = useRef<HTMLElement>(null);

  const scrollToFeaturedPackages = () => {
    featuredPackagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
          <Routes>
            <Route path="/login" element={
              <Login 
                setIsLoggedIn={setIsLoggedIn} 
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            } />
            <Route path="/profile" element={
              <Profile 
                isLoggedIn={isLoggedIn}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            } />
            <Route path="/" element={
              <>
                <Navbar 
                  isLoggedIn={isLoggedIn} 
                  setIsLoggedIn={setIsLoggedIn}
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
                <Hero onExploreJourneys={scrollToFeaturedPackages} />
                <FeaturedPackages ref={featuredPackagesRef} />
                <ExploreSection />
                <AboutSection />
                <InstagramSection />
                <Footer />
                <WhatsAppButton />
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;