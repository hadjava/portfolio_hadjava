import React from 'react';
import './CV.css';
import cvPhoto from '../img/cv-photo.jpg'; 
import cvEnglish from '../files/cv-english.pdf'; 
import cvGerman from '../files/cv-german.pdf'; 

const CV = () => {
  return (
    <div className="cv-page">
      <div className="container">
        <h1 className="cv-title">Khadzhava Dmytro</h1>
        
        <div className="cv-layout">
          {/* Левая колонка - фото */}
          <div className="cv-left">
            <div className="cv-photo-container">
              <img src={cvPhoto} alt="CV Photo" className="cv-photo" />
            </div>
            
            {/* Ссылки для скачивания */}
            <div className="download-section">
              <h3>Download CV</h3>
              <div className="download-buttons">
                <a 
                  href={cvEnglish} 
                  download="CV_English_Dmytro_Khadzhava.pdf"
                  className="download-btn"
                >
                  📄 English Version
                </a>
                <a 
                  href={cvGerman} 
                  download="CV_German_Dmytro_Khadzhava.pdf"
                  className="download-btn"
                >
                  📄 German Version
                </a>
              </div>
            </div>

            {/* Контакты */}
            <div className="cv-contacts">
              <h3>Contact</h3>
              <div className="contact-item">
                <strong>Email:</strong>
                <span>d.hadjava@gmail.com</span>
              </div>
              <div className="contact-item">
                 <strong>Telegram:</strong>
                 <a href="https://t.me/hadjava" target="_blank" rel="noopener noreferrer">
                  https://t.me/hadjava
                 </a>
              </div>
              <div className="contact-item">
                <strong>Tel:</strong>
                <span>+49 160 4593825</span>
              </div>
            </div>
          </div>

          {/* Правая колонка - контент */}
          <div className="cv-right">
            <section className="cv-section">
  <h2>Professional Summary</h2>
  <div className="cv-item">
    {/* English Version */}
    <h3>(EN) About Me</h3>
    <p>
      I have extensive experience in the IT field. For over 15 years, I worked in the IT department of a bank, 
      progressing from an engineer to Chief Engineer of the regional center. During this time, I gained solid 
      expertise in <strong>network infrastructure</strong>, <strong>system administration</strong>, and 
      <strong> user support (1st and 2nd level)</strong>.
    </p>
    <p>
      I have strong hands-on experience with computer hardware and networking — from assembly and diagnostics 
      to configuration and maintenance. I specialize in installing and supporting operating systems and software.
    </p>
    <p>
      I completed <strong>Frontend Development</strong> training at <strong>Tel-Ran School (Berlin)</strong> 
      and <strong>DevOps Engineering</strong> at <strong>Hillel IT School</strong>, where I studied 
      <strong> AWS, Docker, Terraform, Ansible, CI/CD, and Jenkins</strong>.
    </p>
    <p>
      I’m a fast learner, a reliable team player, and currently enhancing my skills in 
      <strong> DevOps</strong> and <strong>Frontend development</strong>. IT is not just my profession — 
      it’s my passion. I love experimenting, optimizing systems, and finding better solutions.
    </p>
    <p>
    
    </p>
    
    {/* German Version */}
    <h3>(DE) Über mich</h3>
    <p>
      Ich habe umfangreiche Erfahrung im IT-Bereich. Über 15 Jahre war ich in der IT-Abteilung eines 
      Bankinstituts tätig, wo ich meinen Weg vom Ingenieur bis zum leitenden Ingenieur des regionalen 
      Zentrums gemacht habe. In dieser Zeit habe ich fundierte Kenntnisse in 
      <strong> Netzwerkinfrastruktur</strong>, <strong>Systemadministration</strong> und 
      <strong> Benutzersupport (1st- und 2nd-Level)</strong> erworben.
    </p>
    <p>
      Ich verfüge über praktische Erfahrung mit Computerhardware und Netzwerktechnik – von Montage und 
      Diagnose bis zur Konfiguration und Wartung. Ich installiere und betreue Betriebssysteme sowie Software.
    </p>
    <p>
      Ich habe <strong>Frontend Development</strong> an der <strong>Tel-Ran School (Berlin)</strong> und 
      <strong>DevOps Engineering</strong> an der <strong>Hillel IT School</strong> abgeschlossen, wo ich 
      <strong> AWS, Docker, Terraform, Ansible, CI/CD und Jenkins</strong> gelernt habe.
    </p>
    <p>
      Ich lerne schnell, arbeite gerne im Team und entwickle mich derzeit weiter im Bereich 
      <strong> DevOps</strong> und <strong>Frontend-Entwicklung</strong>. IT ist nicht nur mein Beruf, 
      sondern meine Leidenschaft – ich experimentiere, optimiere Systeme und suche ständig nach neuen, 
      besseren Lösungen.
    </p>
  </div>
</section>

            

            <section className="cv-section">
              <h2>Skills</h2>
              <div className="skills-grid">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Responsive Design</span>
                <span className="skill-tag">Webpack</span>
                <span className="skill-tag">REST API</span>
              </div>
            </section>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;