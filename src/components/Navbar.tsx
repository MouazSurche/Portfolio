import React from 'react';
import { useLanguage, Language } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { lang, setLang, t, dir } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 1000,
      background: 'rgba(10, 10, 10, 0.75)', backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '15px 6%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <div style={{ fontSize: '1.3rem', fontWeight: '900', letterSpacing: '2px', color: '#ffffff', cursor: 'pointer' }}
           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        {t('portfolio')}
      </div>

      {/* 🚀 گۆڕانکاری لێرەدایە: alignItems و flexWrap ڕێکخراون */}
      <div style={{ display: 'flex', gap: '25px', alignItems: 'center', flexWrap: 'wrap' }}>
        {[
          { id: 'home', label: t('home') },
          { id: 'about', label: t('about') },
          { id: 'education', label: t('education') },
          { id: 'skills', label: t('skills') },
          { id: 'projects', label: t('projects') },
          { id: 'contact', label: t('contact') }
        ].map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            style={{ 
              background: 'none', border: 'none', color: '#aaaaaa', fontWeight: '500', 
              fontSize: '0.9rem', cursor: 'pointer', transition: 'color 0.2s',
              whiteSpace: 'nowrap' // 👈 ئەمە ڕێگری دەکات لەوەی وشەکە ببێت بە دوو دێڕ
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#aaaaaa'}
          >
            {link.label}
          </button>
        ))}

        <select
          value={lang}
          onChange={(e) => setLang(e.target.value as Language)}
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '6px', padding: '5px 10px', fontSize: '0.8rem', cursor: 'pointer', marginLeft: dir === 'ltr' ? '10px' : '0', marginRight: dir === 'rtl' ? '10px' : '0' }}
        >
          <option value="en">EN</option>
          <option value="ku">کوردی</option>
          <option value="ar">العربية</option>
        </select>
      </div>
    </nav>
  );
};