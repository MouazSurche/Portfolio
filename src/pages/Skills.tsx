import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  
  // ئەم ستەیتانە بۆ کۆنترۆڵکردنی سێبەری کلیک و هۆڤەر بەکاردێن
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const skillsData = [
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" }
  ];

  return (
    <section id="skills" style={{ padding: '80px 6%', backgroundColor: '#0a0a0a', color: '#ffffff', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
      <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '50px', textAlign: 'center' }}>
        {t('skills')}
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
        gap: '30px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {skillsData.map((skill, index) => {
          const isHovered = hoverIndex === index;
          const isActive = activeIndex === index;

          return (
            <div 
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => { setHoverIndex(null); setActiveIndex(null); }}
              onMouseDown={() => setActiveIndex(index)}
              onMouseUp={() => setActiveIndex(null)}
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.02)', 
                padding: '30px 15px', 
                borderRadius: '16px', 
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                // ئەنیمەیشنی جوڵە
                transform: isActive ? 'scale(0.92)' : isHovered ? 'translateY(-8px)' : 'scale(1)',
                // دروستکردنی سێبەر لە کاتی کلیک یان چوونە سەری
                boxShadow: isActive 
                  ? '0 0 25px rgba(229, 9, 20, 0.6)' // سێبەری سوور کاتێک کلیکی لێ دەکرێت
                  : isHovered 
                    ? '0 15px 30px rgba(0, 0, 0, 0.8)' // سێبەری نەرم کاتێک ماوسی دەچێتە سەر
                    : 'none'
              }}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  objectFit: 'contain',
                  transition: 'transform 0.2s ease',
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                }} 
              />
              <span style={{ fontSize: '1.1rem', fontWeight: '600', color: '#dddddd', letterSpacing: '0.5px' }}>
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};