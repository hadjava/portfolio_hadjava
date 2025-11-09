import React, { useEffect } from 'react';
import ColorBoard from './ColorBoard';
import './Projects.css';

const Projects = () => {
  // Эффект для скролла к якорю
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="projects-page">
      <div className="container">
        <h1 className="projects-title">My Projects</h1>
        
        <div className="projects-content">
          <section className="project-section">
            <h2>Interactive Projects</h2>
            <p>
              Here you can find some of my interactive web projects and experiments. This is JS vanilla!
            </p>
            
            <ColorBoard />
          </section>

          <section className="project-section">
            <h2>Other Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <h3>Portfolio Website</h3>
                <p>Responsive portfolio built with React and modern CSS</p>
              </div>
              
              <div className="project-card">
                <h3>E-commerce Platform</h3>
                <p>Full-stack e-commerce solution with React and Node.js</p>
              </div>
              
              <div className="project-card">
                <h3>Task Management App</h3>
                <p>Productivity application with drag-and-drop functionality</p>
              </div>
            </div>
          </section>

         {/* Technologies Section */}
<section className="project-section" id="technologies">
  <h2>Website Built with React</h2>
  <div className="tech-simple">
    <h4>React-Powered Portfolio</h4>
    <p>
      This portfolio website is built with <strong>React</strong> using a modular and modern architecture. 
      It demonstrates both frontend development and practical DevOps-inspired practices for maintainability and scalability.
    </p>

    <h4>React & Hooks</h4>
    <div className="tech-list">
      <div className="tech-item">
        <strong>useState</strong> – Manages component state such as theme mode, form inputs, and submission status.
      </div>
      <div className="tech-item">
        <strong>useEffect</strong> – Handles side effects, including saving and loading theme preferences from <code>localStorage</code>.
      </div>
    </div>

    <h4>Routing</h4>
    <div className="tech-list">
      <div className="tech-item">
        <strong>React Router</strong> – Provides smooth single-page navigation using <code>BrowserRouter</code>, <code>Routes</code>, and <code>NavLink</code>.
      </div>
    </div>

    <h4>Features</h4>
    <div className="tech-list">
      <div className="tech-item">
        <strong>Dark/Light Theme</strong> – Toggle with persistent user preference.
      </div>
      <div className="tech-item">
        <strong>Dynamic Navigation Bar</strong> – Highlights active route.
      </div>
      <div className="tech-item">
        <strong>Async Contact Form</strong> – Built with <code>async/await</code>, includes validation and visual feedback.
      </div>
      <div className="tech-item">
        <strong>Downloadable CV</strong> – English and German PDF versions.
      </div>
    </div>

    <h4>UI & Design</h4>
    <div className="tech-list">
      <div className="tech-item">
        <strong>CSS Modules</strong> – Scoped styling with separate files (<code>main.css</code>, <code>CV.css</code>, <code>Contacts.css</code>).
      </div>
      <div className="tech-item">
        <strong>Font Awesome Icons</strong> and local assets for visual consistency.
      </div>
      <div className="tech-item">
        <strong>Responsive Layout</strong> – Works on all screen sizes.
      </div>
    </div>

    <h4>Development Tools</h4>
    <div className="tech-list">
      <div className="tech-item"><strong>React 18+</strong></div>
      <div className="tech-item"><strong>JavaScript (ES6+)</strong></div>
      <div className="tech-item"><strong>HTML5 / CSS3</strong></div>
      <div className="tech-item"><strong>LocalStorage API</strong></div>
      <div className="tech-item"><strong>Git & GitHub</strong> – Version control and hosting</div>
    </div>

    <div className="github-simple">
      <a 
        href="https://github.com/hadjava/work_proj.git" 
        className="github-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Code on GitHub
      </a>
    </div>
  </div>
</section>
        </div>
      </div>
    </div>
  );
};

export default Projects;