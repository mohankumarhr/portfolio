
import React, { useState, useEffect } from 'react';
import './IntroSection.css';

const IntroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Full Stack Developer";
  
  const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Python', 'Spring Boot'];
  
  const handleViewWorkClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-content">
          <h1 className="intro-name">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Mohan Kumar H R</span>
          </h1>
          <h2 className="intro-role">
            {displayText}
            <span className="cursor">|</span>
          </h2>
          <p className="intro-description">
            Passionate about creating innovative web solutions and bringing ideas to life through code.
          </p>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div 
                key={skill} 
                className="skill-bubble"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
          <button className="cta-button" onClick={handleViewWorkClick}>
            <span>View My Work</span>
            <div className="button-glow"></div>
          </button>
        </div>
        <div className="intro-visual">
          <div className="floating-elements">
            <div className="element element-1"></div>
            <div className="element element-2"></div>
            <div className="element element-3"></div>
            <div className="element element-4"></div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default IntroSection;
