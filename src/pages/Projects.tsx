import React, { useState } from 'react';
import { mockProjects } from '../services/projectData';
import { useLanguage, Language } from '../context/LanguageContext';

export const Projects: React.FC = () => {
  const { lang, t } = useLanguage();
  const activeLang = lang as Language;
  
  // 🎛️ جۆرەکانی فیلتەر گۆڕدراون بۆ Web و App بەپێی سیڤییەکەت
  const [filter, setFilter] = useState<'All' | 'Web' | 'App'>('All');

  const filteredProjects = mockProjects.filter(p => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  return (
    <section 
      id="projects" 
      style={{ 
        backgroundColor: '#0a0a0a', 
        color: '#ffffff', 
        padding: '80px 6%',
        borderTop: '1px solid rgba(255, 255, 255, 0.03)'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: '800', margin: 0, letterSpacing: '-0.5px' }}>
          {t('projects')}
        </h2>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          {(['All', 'Web', 'App'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                backgroundColor: filter === cat ? '#ffffff' : 'rgba(255,255,255,0.03)',
                color: filter === cat ? '#0a0a0a' : '#aaaaaa',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '8px 18px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                transition: 'all 0.2s ease'
              }}
            >
              {/* 🌐 وەرگێڕانی ناوی فیلتەرەکان بەپێی زمانەکان */}
              {cat === 'All' ? t('allCat') : cat === 'Web' ? t('webCat') : t('appCat')}
            </button>
          ))}
        </div>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '30px' 
      }}>
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            <div style={{ width: '100%', height: '200px', overflow: 'hidden', backgroundColor: '#141414' }}>
              <img 
                src={project.image} 
                alt={project.title[activeLang]} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} 
              />
            </div>
            
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', margin: '0 0 12px 0', color: '#ffffff' }}>
                {project.title[activeLang]}
              </h3>
              
              <p style={{ color: '#888888', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px', minHeight: '68px' }}>
                {project.description[activeLang]}
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {project.techStack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    style={{ 
                      backgroundColor: 'rgba(255,255,255,0.05)', 
                      color: '#ffffff', 
                      padding: '4px 10px', 
                      borderRadius: '4px', 
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '15px' }}>
                <a 
                  href={project.githubLink} 
                  style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}
                  onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                >
                  GitHub →
                </a>
                <a 
                  href={project.liveDemo} 
                  style={{ color: '#888888', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#888888'}
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};