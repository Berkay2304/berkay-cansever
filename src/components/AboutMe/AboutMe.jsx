import React from 'react';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate Full Stack Web Developer with expertise in modern web technologies. 
              I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
            </p>
            <p>
              With a strong foundation in both frontend and backend development, I enjoy working with 
              React, Node.js, and various other technologies to build comprehensive web solutions.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>20+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>15+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
