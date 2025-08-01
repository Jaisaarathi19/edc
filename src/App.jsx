import React from 'react';
import Navigation from './components/Navigation/Navigation';
import HeroSection from './sections/HeroSection/HeroSection';
import AboutSection from './sections/AboutSection/AboutSection';
import EventsSection from './sections/EventsSection/EventsSection';
import TeamSection from './sections/TeamSection/TeamSection';
import CentreLabsSection from './sections/CentreLabsSection/CentreLabsSection';
import ContactSection from './sections/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <TeamSection />
        <CentreLabsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
