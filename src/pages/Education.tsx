import React from 'react';
import { useLanguage, Language } from '../context/LanguageContext';

export const Education: React.FC = () => {
  const { t, lang } = useLanguage();
  const activeLang = lang as Language;

  const educationData = [
    {
      year: "2024 - 2028 (Expected)",
      title: { 
        en: "Bachelor of Computer Education (Stage 2)", 
        ku: "بەکالۆریۆس لە پەروەردەی کۆمپیوتەر (قۆناغی ٢)", 
        ar: "بكالوريوس في تعليم الحاسوب (المرحلة الثانية)" 
      },
      school: { 
        en: "Tishk International University (TIU) - Erbil, Iraq", 
        ku: "زانکۆی تیشکی نێودەوڵەتی (TIU) - هەولێر، عێراق", 
        ar: "جامعة تيشك الدولية (TIU) - أربيل، العراق" 
      } 
    }
  ];

  return (
    <section id="education" style={{ padding: '80px 6%', backgroundColor: '#000000', color: '#ffffff', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
      <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '40px' }}>{t('education')}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {educationData.map((edu, idx) => (
          <div key={idx} style={{ display: 'flex', gap: '20px', backgroundColor: '#0a0a0a', padding: '30px', borderRadius: '12px', borderLeft: '4px solid #e50914' }}>
            <div style={{ color: '#e50914', fontWeight: '800', fontSize: '1.1rem', minWidth: '150px' }}>{edu.year}</div>
            <div>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '1.3rem', color: '#ffffff' }}>{edu.title[activeLang]}</h3>
              <span style={{ color: '#888888', fontSize: '0.95rem' }}>{edu.school[activeLang]}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};