import React from 'react';
import { useLanguage, Language } from '../context/LanguageContext';
import { achievementsData } from '../constants/data';
import { motion } from 'framer-motion';

export const Achievements: React.FC = () => {
  const { lang } = useLanguage();
  const activeLang = lang as Language;

  const sectionTitle = {
    en: "Achievements & Experience",
    ku: "دەستکەوت و ئەزموون",
    ar: "الإنجازات والخبرات"
  };

  return (
    <section id="achievements" style={{ padding: '80px 6%', backgroundColor: '#000000', color: '#ffffff', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
      <motion.h2 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '40px' }}
      >
        {sectionTitle[activeLang]}
      </motion.h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {achievementsData.map((item, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            style={{ 
              display: 'flex', 
              gap: '20px', 
              backgroundColor: '#0a0a0a', 
              padding: '30px', 
              borderRadius: '12px', 
              borderLeft: '4px solid #e50914',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}
          >
            <div style={{ color: '#e50914', fontWeight: '800', fontSize: '1.1rem', minWidth: '100px' }}>
              {item.year}
            </div>
            <div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '1.3rem', color: '#ffffff' }}>
                {item.title[activeLang]}
              </h3>
              <h4 style={{ margin: '0 0 12px 0', fontSize: '1rem', color: '#aaaaaa' }}>
                {item.organization[activeLang]}
              </h4>
              <p style={{ color: '#888888', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                {item.description[activeLang]}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};