import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./styles/main.css";

// Assets
import avatar from "./img/avatar.png";
import sun from "./img/icons/sun.svg";
import moon from "./img/icons/moon.svg";
import linkedIn from "./img/icons/linkedIn.svg";
import gitHub from "./img/icons/gitHub.svg";

// Components
import Slider from "./components/Slider";
import RotatingSquares from "./components/RotatingSquares";
import CV from "./components/CV";
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Theme effect
  useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || !savedTheme) {
    document.body.classList.add("dark");
    setIsDarkMode(true);
  } else {
    document.body.classList.remove("dark");
    setIsDarkMode(false);
  }
}, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  // Navigation Component
  const Navigation = () => (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <a href="/" className="logo">
            <strong>Welcome! This website —</strong> portfolio @hadjava
          </a>
          <button
            className={`dark-mode-btn ${isDarkMode ? "dark-mode-btn--active" : ""}`}
            onClick={toggleDarkMode}
          >
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `nav-list__link ${isActive ? "nav-list__link--active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  `nav-list__link ${isActive ? "nav-list__link--active" : ""}`
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink 
                to="/cv" 
                className={({ isActive }) => 
                  `nav-list__link ${isActive ? "nav-list__link--active" : ""}`
                }
              >
                CV
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink 
                to="/contacts" 
                className={({ isActive }) => 
                  `nav-list__link ${isActive ? "nav-list__link--active" : ""}`
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  // Footer Component
  const Footer = () => (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                href="https://github.com/hadjava/work_proj.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitHub} alt="GitHub" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/dmytro-khadzhava-b4200025a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} alt="LinkedIn" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>e-mail: d.hadjava@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );

  // HomePage Component
  const HomePage = () => (
    <>
      <header className="header">
        <div className="container">
          <div className="header__avatar-quote">
            <img src={avatar} alt="Avatar" className="header__avatar" />
            <p className="header__quote">
              "The best way to predict the future is to invent it." <br />
              ― Alan Kay <br />
              „Die beste Methode, die Zukunft vorherzusagen, ist, sie selbst zu gestalten." <br />
              ― Alan Kay
            </p>
          </div>
          
          <div className="header__main-content">
            <div className="squares-above-title">
              <RotatingSquares />
            </div>
            
            <div className="header__wrapper">
              <h1 className="header__title">Frontend developer &amp; freelancer</h1>
              <p className="header__text">
                I build modern, responsive web interfaces.
              </p>
              
              {/* Technologies Button */}
              <div className="tech-btn-under-text">
                <NavLink to="/projects#technologies" className="tech-btn">
                  Click here to learn about the technologies used to create this website
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <Slider />
      </div>
    </>
  );

  // Main App Return
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;