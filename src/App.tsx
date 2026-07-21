import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './pages/Hero';
import { About } from './pages/About';
import { Education } from './pages/Education';
import { Achievements } from './pages/Achievements';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { useLanguage } from './context/LanguageContext';

function App() {
  const { t } = useLanguage();

  return (
    <div style={{
      backgroundColor: '#0a0a0a', 
      color: '#ffffff', 
      minHeight: '100vh',
      width: '100%', 
      margin: 0, 
      padding: 0, 
      overflowX: 'hidden',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      <Navbar />
      
      <Hero />
      <About />
      <Education />
      
      {/* 🏆 بەشی دەستکەوتەکان لێرەدا زیاد کراوە */}
      <Achievements />
      
      <Skills />
      <Projects />
      <Contact />

      <footer style={{
        backgroundColor: '#0a0a0a', 
        color: '#555555', 
        textAlign: 'center',
        padding: '40px 20px', 
        borderTop: '1px solid rgba(255, 255, 255, 0.03)', 
        fontSize: '0.9rem'
      }}>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} {t('portfolio')}. Created by <span style={{ color: '#ffffff', fontWeight: '600' }}>Mouaz Imad</span>
        </p>
      </footer>
    </div>
  );
}

export default App;