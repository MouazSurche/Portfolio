import React from 'react';

function App() {
  // ١. داتای بەشی (Why Choose Me)
  const reasons = [
    {
      id: "01",
      title: "Premium Quality",
      desc: "I write clean, maintainable, and high-standard code. Whether it's a desktop system, a web app, or a mobile app, performance and stability are always my top priorities."
    },
    {
      id: "02",
      title: "On-Time Delivery",
      desc: "Time is money. I highly respect deadlines and follow an efficient development workflow to ensure your project is completed and delivered exactly when promised."
    },
    {
      id: "03",
      title: "Fair & Affordable Pricing",
      desc: "High-end development shouldn't break the bank. I offer top-tier software and web solutions tailored to your budget with absolute transparency."
    }
  ];

  // ٢. داتای پڕۆژەکان و ئەزموونەکانت (لەگەڵ زانیاری نوێی Flutter & Dart)
  const experiences = [
    {
      role: "Cross-Platform Mobile App",
      company: "Flutter & Dart Framework",
      duration: "Mobile Application Project"
    },
    {
      role: "Personal Portfolio Website",
      company: "React, Vite & Modern CSS",
      duration: "Personal Portfolio / 2026"
    },
    {
      role: "Exam Management System",
      company: "PHP, JavaScript, HTML & CSS",
      duration: "Full-Stack Web Application"
    },
    {
      role: "Hospital Patient Management System",
      company: "C++, Qt Framework & SQL Database",
      duration: "Desktop Database System"
    },
    {
      role: "GPA Calculator",
      company: "C++ Programming Language",
      duration: "Academic Algorithm Project"
    }
  ];

  return (
    <div style={{ background: '#050505', color: '#ffffff', fontFamily: '"Inter", "Segoe UI", sans-serif', margin: 0, padding: 0 }}>
      
      {/* ڕێکخستنی ستایلی گشتی لاپەڕە بۆ لادانی هەموو بەشە سپییەکان */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        html, body, #root {
          background-color: #050505 !important;
          margin: 0;
          padding: 0;
          min-height: 100vh;
        }

        html { scroll-behavior: smooth; }
        .nav-link { color: #666; text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
        .nav-link:hover, .nav-link.active { color: #4ade80; }
        
        /* ستایلی کارتەکانی بەشی دووەم */
        .modern-card {
          background: rgba(255, 255, 255, 0.02);
          border-left: 2px solid #1c1c1c;
          padding: 40px 30px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .modern-card:hover {
          border-left-color: #4ade80;
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-5px);
        }

        /* هێڵەکانی بەشی ئەزموون */
        .exp-row {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 25px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: border-color 0.3s;
        }
        .exp-row:hover {
          border-bottom-color: #4ade80;
        }

        /* ستایلی دوگمەی ئایکۆنە بازنەییەکانی بەشی پەیوەندی */
        .social-icon-btn {
          width: 48px;
          height: 48px;
          background-color: #4ade80;
          color: #000000;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, background-color 0.2s;
          text-decoration: none;
        }
        .social-icon-btn:hover {
          transform: scale(1.1);
          background-color: #3bc26f;
        }

        @media (max-width: 768px) {
          .main-header { justify-content: space-between !important; flex-wrap: wrap !important; }
          .hero-title { font-size: 14vw !important; }
          .about-content { flex-direction: column !important; gap: 40px !important; }
          .about-image-container { max-width: 100% !important; height: 350px !important; }
          .exp-content { flex-direction: column !important; gap: 40px !important; }
          .exp-row { flex-direction: column !important; align-items: flex-start !important; gap: 10px; }
          .contact-boxes { flex-direction: column !important; }
        }
      `}</style>

      {/* ==================== SECTION 1: HERO ==================== */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '30px 6%',
        boxSizing: 'border-box',
        position: 'relative'
      }}>
        {/* Header */}
        <header className="main-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10, width: '100%', gap: '15px' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: '900', letterSpacing: '1px', textAlign: 'left', display: 'flex', alignItems: 'center' }}>
            MOUAZ IMAD
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              border: '1.5px solid #4ade80', 
              borderRadius: '50%', 
              width: '16px', 
              height: '16px', 
              fontSize: '0.65rem', 
              fontWeight: '800', 
              color: '#4ade80',
              marginLeft: '4px',
              verticalAlign: 'middle',
              lineHeight: '1'
            }}>S</span>
          </div>
          <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <a href="#home" className="nav-link active">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <a href="#contact" style={{ textDecoration: 'none' }}>
            <button style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '10px 24px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit' }}>
              Contact Me
            </button>
          </a>
        </header>

        {/* Hero Main */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 2, margin: '40px 0' }}>
          <div style={{ border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '30px', padding: '6px 16px', display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.02)', marginBottom: '30px' }}>
            <span style={{ width: '8px', height: '8px', background: '#4ade80', borderRadius: '50%', display: 'inline-block' }}></span>
            <span style={{ color: '#888', fontSize: '0.7rem', letterSpacing: '2px', fontWeight: '600' }}>AVAILABLE FOR WORK</span>
          </div>
          <div style={{ textAlign: 'center', userSelect: 'none' }}>
            <h1 className="hero-title" style={{ fontSize: '11.5vw', fontWeight: '900', lineHeight: '0.85', margin: 0, letterSpacing: '-3px', textTransform: 'uppercase', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              MOUAZ
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                IMAD
                <span style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  border: '0.08em solid #fff', 
                  borderRadius: '50%', 
                  width: '0.85em', 
                  height: '0.85em', 
                  fontSize: '5vw', 
                  fontWeight: '900',
                  marginLeft: '15px',
                  lineHeight: '1'
                }}>S</span>
              </span>
            </h1>
          </div>
        </div>

        {/* Hero Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%', zIndex: 10, flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ color: '#666', fontSize: '0.9rem', maxWidth: '380px', lineHeight: '1.6', margin: 0 }}>
            I blend C++ programming with web and mobile technologies (Flutter & Dart) to deliver lightweight systems and interactive applications.
          </p>
          <a href="#about" style={{ textDecoration: 'none' }}>
            <button style={{ background: '#4ade80', color: '#000', border: 'none', padding: '14px 28px', borderRadius: '30px', fontSize: '0.9rem', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
              ↳ Read about me
            </button>
          </a>
        </div>
      </section>

      {/* ==================== SECTION 2: WHY WORK WITH ME ==================== */}
      <section style={{
        minHeight: '85vh',
        padding: '120px 6%',
        boxSizing: 'border-box',
        background: '#0c0e12', 
        borderTop: '1px solid #161920',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <div style={{ marginBottom: '70px' }}>
          <div style={{ border: '1px solid #222b35', borderRadius: '30px', padding: '4px 14px', display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.01)', marginBottom: '20px' }}>
            <span style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%' }}></span>
            <span style={{ color: '#556575', fontSize: '0.65rem', letterSpacing: '2px', fontWeight: '600' }}>WHY CHOOSE ME</span>
          </div>
          <h2 style={{ fontSize: 'calc(2.2rem + 1.5vw)', fontWeight: '900', margin: 0, letterSpacing: '-1px' }}>
            Why Work with Me
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', width: '100%' }}>
          {reasons.map((reason) => (
            <div key={reason.id} className="modern-card">
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#4ade80', opacity: 0.85, marginBottom: '10px' }}>{reason.id}</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', margin: '0 0 12px 0', color: '#fff', letterSpacing: '-0.5px' }}>{reason.title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#8da2b5', lineHeight: '1.7', margin: 0, fontWeight: '400' }}>{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SECTION 3: ABOUT ==================== */}
      <section id="about" style={{
        minHeight: '100vh',
        padding: '120px 6%',
        boxSizing: 'border-box',
        background: '#050505',
        borderTop: '1px solid #111',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '40px',
          left: '6%',
          fontSize: '15vw',
          fontWeight: '900',
          color: 'rgba(255, 255, 255, 0.02)',
          letterSpacing: '-5px',
          userSelect: 'none',
          lineHeight: '0.8',
          zIndex: 1
        }}>
          ABOUT
        </div>

        <div className="about-content" style={{ display: 'flex', gap: '80px', alignItems: 'center', marginTop: '100px', position: 'relative', zIndex: 2 }}>
          
          <div className="about-image-container" style={{
            flex: '1',
            maxWidth: '420px',
            background: '#4ade80', 
            borderRadius: '24px',
            height: '480px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 40px rgba(74, 222, 128, 0.1)',
            color: '#000000',
            padding: '40px',
            boxSizing: 'border-box'
          }}>
            <span style={{ fontSize: '9rem', fontWeight: '950', letterSpacing: '-8px', lineHeight: '1' }}>MI</span>
            <span style={{ fontSize: '0.95rem', fontWeight: '800', letterSpacing: '4px', marginTop: '15px', opacity: 0.8 }}>JUNIOR DEVELOPER</span>
          </div>

          <div style={{ flex: '1.2', display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <h3 style={{ fontSize: 'calc(1.8rem + 1vw)', fontWeight: '800', margin: 0, lineHeight: '1.2' }}>
              Welcome to my Development World
            </h3>
            
            <p style={{ color: '#888', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
              I am a passionate **Computer Education student (Stage 2)** at **Tishk International University**, based in Erbil. With practical foundations in C++, JavaScript, SQL, and mobile development using **Flutter & Dart**, I love building clean cross-platform applications and databases.
            </p>

            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
              My academic focus combined with hands-on learning allows me to build desktop tools using the **Qt Framework**, lightweight mobile apps, and responsive web layouts. I always aim to write clean code that bridges functionality with great design.
            </p>

            <div style={{ marginTop: '15px' }}>
              <a href="https://github.com/mouazemad681" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <button style={{
                  background: '#4ade80',
                  color: '#000000',
                  border: 'none',
                  padding: '14px 28px',
                  borderRadius: '30px',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  ↳ Download Resume
                </button>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== SECTION 4: EXPERIENCE ==================== */}
      <section id="experience" style={{
        minHeight: '80vh',
        padding: '120px 6%',
        boxSizing: 'border-box',
        background: '#0c0e12',
        borderTop: '1px solid #161920',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <div className="exp-content" style={{ display: 'flex', gap: '60px', width: '100%' }}>
          
          <div style={{ flex: '1', minWidth: '250px' }}>
            <div style={{ border: '1px solid #222b35', borderRadius: '30px', padding: '4px 14px', display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.01)', marginBottom: '20px' }}>
              <span style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%' }}></span>
              <span style={{ color: '#556575', fontSize: '0.65rem', letterSpacing: '2px', fontWeight: '600' }}>EXPERIENCE</span>
            </div>
            <h2 style={{ fontSize: 'calc(2.2rem + 1.2vw)', fontWeight: '900', margin: 0, letterSpacing: '-1px', lineHeight: '1.1' }}>
              My Projects &<br />Experience
            </h2>
          </div>

          <div style={{ flex: '1.8', display: 'flex', flexDirection: 'column' }}>
            {experiences.map((exp, index) => (
              <div key={index} className="exp-row">
                <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#ffffff' }}>
                  {exp.role}
                </div>
                <div style={{ textAlign: 'right', color: '#8da2b5', fontSize: '0.95rem' }}>
                  <span style={{ fontWeight: '600', color: '#4ade80' }}>{exp.company}</span>
                  <br />
                  <span style={{ fontSize: '0.85rem', color: '#556575' }}>{exp.duration}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================== SECTION 5: CONTACT (نوێ - ڕێک وەک وێنەکە) ==================== */}
      <section id="contact" style={{
        minHeight: '85vh',
        padding: '120px 6%',
        boxSizing: 'border-box',
        background: '#050505',
        borderTop: '1px solid #111',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {/* نووسینی گەورەی باکگراوند (CONTACT) */}
        <div style={{
          position: 'absolute',
          top: '40px',
          left: '6%',
          fontSize: '15vw',
          fontWeight: '900',
          color: 'rgba(255, 255, 255, 0.02)',
          letterSpacing: '-5px',
          userSelect: 'none',
          lineHeight: '0.8',
          zIndex: 1
        }}>
          CONTACT
        </div>

        {/* ناوەڕۆکی بەشی پەیوەندی */}
        <div style={{ position: 'relative', zIndex: 2, marginTop: '80px' }}>
          
          {/* باجی بەشی پەیوەندی */}
          <div style={{
            border: '1px solid #222b35',
            borderRadius: '30px',
            padding: '4px 14px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255,255,255,0.01)',
            marginBottom: '25px'
          }}>
            <span style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%' }}></span>
            <span style={{ color: '#556575', fontSize: '0.65rem', letterSpacing: '2px', fontWeight: '600' }}>BOOK A CALL</span>
          </div>

          {/* سەردێڕی دەقی بەشی پەیوەندی */}
          <h2 style={{
            fontSize: 'calc(2.5rem + 1.5vw)',
            fontWeight: '900',
            margin: '0 0 50px 0',
            letterSpacing: '-1px',
            lineHeight: '1.1'
          }}>
            I'd love to hear<br />from you!
          </h2>

          {/* سندوقەکانی پەیوەندی (کارتەکان) */}
          <div className="contact-boxes" style={{
            display: 'flex',
            gap: '30px',
            width: '100%'
          }}>
            
            {/* کارت یەکەم: ناردنی ئیمەیڵ */}
            <div style={{
              flex: '1',
              minWidth: '280px',
              background: '#0c0e12',
              border: '1px solid #161920',
              padding: '40px',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px'
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '2px', color: '#556575' }}>EMAIL ME</span>
              <a href="mailto:mouazemad681@gmail.com" style={{
                fontSize: 'calc(1.1rem + 0.4vw)',
                fontWeight: '600',
                color: '#ffffff',
                textDecoration: 'underline',
                wordBreak: 'break-all',
                textAlign: 'center',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#4ade80'}
              onMouseLeave={(e) => e.target.style.color = '#ffffff'}
              >
                mouazemad681@gmail.com
              </a>
            </div>

            {/* کارت دووە: سۆشیاڵ میدیا */}
            <div style={{
              flex: '1',
              minWidth: '280px',
              background: '#0c0e12',
              border: '1px solid #161920',
              padding: '40px',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px'
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '2px', color: '#556575' }}>FIND ME</span>
              <div style={{ display: 'flex', gap: '15px' }}>
                
                {/* LinkedIn بەستەری */}
                <a href="https://www.linkedin.com/in/mouazemadjabar" target="_blank" rel="noreferrer" className="social-icon-btn">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* GitHub بەستەری */}
                <a href="https://github.com/mouazemad681" target="_blank" rel="noreferrer" className="social-icon-btn">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default App;