import React, { useState } from 'react';
import './Contacts.css';
import gitHubIcon from '../img/icons/gitHub.svg';
import linkedInIcon from '../img/icons/linkedIn.svg';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Очищаем ошибку при вводе
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Валидация
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setStatus('submitting');
    setError('');

    try {
      // Асинхронная отправка формы
      await submitFormData(formData);
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Автоматически сбрасываем статус успеха через 5 секунд
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
      
    } catch (err) {
      setStatus('error');
      setError(err.message || 'An error occurred while sending the message. Please try again.');
    }
  };

  // Функция для асинхронной отправки данных
  const submitFormData = async (data) => {
    // Имитация задержки сети
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // ЗДЕСЬ ЗАМЕНИТЕ НА РЕАЛЬНЫЙ API ENDPOINT
    // Пример для Formspree:
    /*
    const response = await fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        _replyto: data.email
      })
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    return await response.json();
    */
    
    // Временная заглушка для демонстрации (успех в 80% случаев)
    const random = Math.random();
    if (random > 0.2) {
      return { success: true };
    } else {
      throw new Error('Server is temporarily unavailable');
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const getButtonText = () => {
    switch (status) {
      case 'submitting':
        return (
          <>
            <i className="fas fa-spinner fa-spin"></i>
            Sending...
          </>
        );
      case 'success':
        return (
          <>
            <i className="fas fa-check"></i>
            Message Sent!
          </>
        );
      case 'error':
        return (
          <>
            <i className="fas fa-redo"></i>
            Try Again
          </>
        );
      default:
        return (
          <>
            Send Message
            <i className="fas fa-paper-plane"></i>
          </>
        );
    }
  };

  return (
    <div className="contacts-page">
      <div className="container">
        <h1 className="contacts-title">Get In Touch</h1>
        
        <div className="contacts-content">
          {/* Контактная информация*/}
          <section className="contact-info-section">
            <h2>Contact Information</h2>
            <div className="contact-info-grid">
  <div className="contact-info-item">
    <div className="contact-icon">
      <i className="fas fa-envelope"></i>
    </div>
    <div className="contact-details">
      <h3>Email</h3>
      <p>d.hadjava@gmail.com</p>
      <a href="mailto:d.hadjava@gmail.com" className="contact-link">
        Send Email
      </a>
    </div>
  </div>

  <div className="contact-info-item">
    <div className="contact-icon">
      <i className="fas fa-phone"></i>
    </div>
    <div className="contact-details">
      <h3>Phone</h3>
      <p>in CV</p>
      <a href="tel:+491604593825" className="contact-link">
        Call Now
      </a>
    </div>
  </div>

  <div className="contact-info-item">
    <div className="contact-icon">
      <i className="fas fa-clock"></i>
    </div>
    <div className="contact-details">
      <h3>Working Hours</h3>
      <p>Monday - Friday</p>
      <p>9:00 AM - 6:00 PM CET</p>
    </div>
  </div>
</div>
          </section>

          
          <section className="social-section">
            <h2>Follow Me</h2>
            <div className="social-links">
              <a 
                href="https://github.com/hadjava/work_proj.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src={gitHubIcon} alt="GitHub" className="social-icon" />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/dmytro-khadzhava-b4200025a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src={linkedInIcon} alt="LinkedIn" className="social-icon" />
                <span>LinkedIn</span>
              </a>
            </div>
          </section>

          {/* Форма обратной связи ASYNC/AWAIT */}
          <section className="contact-form-section">
            <h2>Send Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    required
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  required
                  placeholder="Enter subject"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  required
                  rows="6"
                  placeholder="Enter your message..."
                ></textarea>
              </div>

              {/* Сообщения об ошибках и успехе */}
              {error && (
                <div className="form-message error">
                  <i className="fas fa-exclamation-circle"></i>
                  {error}
                </div>
              )}

              {status === 'success' && (
                <div className="form-message success">
                  <i className="fas fa-check-circle"></i>
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </div>
              )}

              <button 
                type="submit" 
                className={`submit-btn ${status}`}
                disabled={status === 'submitting'}
              >
                {getButtonText()}
              </button>
            </form>
          </section>

          {/* Дополнительная информация */}
          <section className="additional-info">
            <div className="info-card">
              <i className="fas fa-rocket"></i>
              <h3>Quick Response</h3>
              <p>I typically respond to emails within 24 hours</p>
            </div>
            
            <div className="info-card">
              <i className="fas fa-code"></i>
              <h3>Open for Projects</h3>
              <p>Available for freelance projects and collaborations</p>
            </div>
            
            <div className="info-card">
              <i className="fas fa-globe"></i>
              <h3>Remote Work</h3>
              <p>Comfortable working with teams from around the world</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contacts;