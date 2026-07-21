import React, { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // لیستی کارامەییە سادەکان وەک پێشتر (بەبێ ئایکۆنی SVG)
  const skills = [
    { name: 'HTML5', level: 'Beginner' },
    { name: 'CSS3', level: 'Beginner' },
    { name: 'JavaScript', level: 'Beginner' },
    { name: 'TypeScript', level: 'Beginner' },
    { name: 'React', level: 'Beginner' },
    { name: 'Flutter', level: 'Beginner' },
    { name: 'Dart', level: 'Beginner' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div style={{
      backgroundColor: '#000000',
      color: '#ffffff',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', Roboto, sans-serif",
      width: '100%',
      maxWidth: '100%',
      margin: 0,
      padding: 0
    }}>
      
      {/* ستایلی کارتەکان بەبێ ئایکۆن */}
      <style>{`
        .skill-card {
          background-color: #0b0c10;
          border: 1px solid #1f2833;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          cursor: default;
          text-align: center;
        }
        .skill-card:hover {
          border-color: #4ade80;
          transform: translateY(-3px);
          box-shadow: 0 8px 15px rgba(74, 222, 128, 0.1);
        }
      `}</style>

      {/* Navbar */}
      <nav style={{
        position: 'sticky',
        top: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        padding: '15px 6%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #111',
        zIndex: 100
      }}>
        <div style={{ fontSize: '1.3rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '5px' }}>
          MOUAZ IMAD <span style={{ border: '1.5px solid #4ade80', borderRadius: '50%', width: '16px', height: '16px', fontSize: '0.65rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#4ade80' }}>S</span>
        </div>
        <div style={{ display: 'flex', gap: '30px' }}>
          {['home', 'about', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              style={{
                background: 'none',
                border: 'none',
                color: activeSection === section ? '#4ade80' : '#888',
                fontWeight: activeSection === section ? '700' : '500',
                fontSize: '0.95rem',
                cursor: 'pointer',
                textTransform: 'capitalize',
                transition: 'color 0.2s'
              }}
            >
              {section}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 20px'
      }}>
        <h1 style={{ fontSize: 'calc(2.5rem + 3vw)', fontWeight: '900', lineHeight: '1.1', margin: '0 0 20px 0' }}>
          MOUAZ IMAD
          <span style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            border: '3px solid #ffffff', 
            borderRadius: '50%', 
            width: 'calc(2rem + 2vw)', 
            height: 'calc(2rem + 2vw)', 
            fontSize: 'calc(1rem + 1vw)', 
            marginLeft: '15px',
            verticalAlign: 'middle'
          }}>S</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#888', maxWidth: '600px', lineHeight: '1.6', margin: '0 0 30px 0' }}>
          I am a passionate beginner developer focused on learning modern web and mobile technologies to build neat and functional experiences.
        </p>
        <button 
          onClick={() => scrollToSection('contact')}
          style={{
            background: '#4ade80',
            color: '#000',
            border: 'none',
            padding: '12px 30px',
            borderRadius: '30px',
            fontSize: '1rem',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 10px 20px rgba(74, 222, 128, 0.2)'
          }}
        >
          Contact Me
        </button>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '100px 6%',
        borderTop: '1px solid #111',
        borderBottom: '1px solid #111',
        background: '#030303'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '15px', color: '#ffffff' }}>
            Welcome to my Development World
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#888', lineHeight: '1.7', marginBottom: '50px' }}>
            I am a Computer Education student based in Erbil. With practical foundations in HTML, CSS, JavaScript, and mobile development using **Flutter & Dart**, I love building clean, cross-platform applications. I always aim to write clean code that bridges functionality with great design.
          </p>

          <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '30px', color: '#4ade80' }}>
            My Tech Stack
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '15px'
          }}>
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0 0 8px 0', color: '#ffffff' }}>
                  {skill.name}
                </h4>
                <span style={{
                  fontSize: '0.75rem',
                  color: '#888',
                  backgroundColor: '#11131a',
                  padding: '3px 10px',
                  borderRadius: '12px'
                }}>
                  {skill.level}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '100px 6%',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '15px' }}>
            Get In Touch
          </h2>
          <p style={{ color: '#888', marginBottom: '10px' }}>
            If you want to collaborate, have any questions, or just want to say hi, feel free to drop me a message at:
          </p>
          {/* پیشاندانی ئیمەیڵەکەت بە ڕوونی و بەستەری ڕاستەوخۆ */}
          <div style={{ marginBottom: '40px' }}>
            <a 
              href="mailto:mouaz.imad@outlook.com"
              style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: '#4ade80',
                textDecoration: 'none',
                borderBottom: '2px dashed #4ade80',
                paddingBottom: '3px',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              mouaz.imad@outlook.com
            </a>
          </div>
          
          <a 
            href="mailto:mouaz.imad@outlook.com"
            style={{
              display: 'inline-block',
              background: 'none',
              border: '2px solid #4ade80',
              color: '#4ade80',
              padding: '12px 35px',
              borderRadius: '30px',
              fontSize: '1rem',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#4ade80';
              e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#4ade80';
            }}
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '30px 20px',
        textAlign: 'center',
        borderTop: '1px solid #111',
        color: '#555',
        fontSize: '0.9rem'
      }}>
        <p>
          MOUAZ IMAD<span style={{ border: '1px solid #555', borderRadius: '50%', width: '12px', height: '12px', fontSize: '0.55rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#555', marginLeft: '4px' }}>S</span> 2026 - All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;