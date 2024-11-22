import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import EternitySection from './components/EternitySection';
import ProjectsSection from './components/ProjectsSection';
import OtherSection from './components/OtherSection';
import GrowSection from './components/GrowSection';
import AboutSection from './components/AboutSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <EternitySection />
      <ProjectsSection />
      <OtherSection/>
      <GrowSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}

export default App;

