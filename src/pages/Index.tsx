
import React from 'react';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import WorkExperienceSection from '../components/WorkExperienceSection';
import ContactSection from '../components/ContactSection';
import './Index.css';

const Index = () => {
  return (
    <div className="portfolio">
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <WorkExperienceSection />
      <ContactSection />
    </div>
  );
};

export default Index;
