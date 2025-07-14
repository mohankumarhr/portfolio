import React from 'react';
import './WorkExperienceSection.css';

const WorkExperienceSection = () => {
  const workExperiences = [
    {
      id: 1,
      position: "QA Engineer",
      company: "Cognizant",
      year: "June 2025 - Present",
      description: "Contributing to the development of a custom automation testing framework to improve scripting efficiency and streamline testing processes.",
      skills: "Selenium, Automation, Java, Salesforce"
    },
    {
      id: 2,
      position: "QA Intern",
      company: "Cognizant",
      year: "Feb 2025 – May 2025",
      description: "Trained in automation testing using Selenium, along with hands-on experience in Advanced Java and Salesforce Administration.",
      skills: "Selenium, Java, Salesforce"
    },
    {
      id: 3,
      position: "Java Full Stack Developer Intern",
      company: "Mevi Technologies",
      year: "Sep 2024 - Feb 2025",
      description: "Trained in developing Spring Boot and React applications with a focus on user authentication, MySQL integration, and version control using Git.",
      skills: "React, Java, Spring Boot"
    }
  ];

  const certifications = [
    " Full-Stack Web Developer Certification",
    "Selenium with Java Certification", 
    "Python Programming Certificate",
  ];

  return (
    <section className="work-experience-section">
      <div className="section">
        <h2 className="section-title">Work Experience & Certifications</h2>
        <div className="work-experience-content">
          <div className="work-experience-timeline">
            <h3 className="subsection-title">Work Experience</h3>
            <div className="timeline">
              {workExperiences.map((item, index) => (
                <div 
                  key={item.id} 
                  className="timeline-item"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <h4 className="timeline-degree">{item.position}</h4>
                    <h5 className="timeline-institution">{item.company}</h5>
                    <p className="timeline-description">{item.description}</p>
                    <div className="timeline-gpa">{item.skills}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="certifications-container">
            <h3 className="subsection-title">Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="certification-card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="cert-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22,4 12,14.01 9,11.01"/>
                    </svg>
                  </div>
                  <span className="cert-name">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
