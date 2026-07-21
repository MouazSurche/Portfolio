import React from 'react';
import { useLanguage, Language } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t, lang } = useLanguage();
  const activeLang = lang as Language;

  const aboutText = {
    en: "I am a Stage 2 Computer Education student with practical experience in C++, JavaScript, and SQL. I actively create full-stack web and app systems for university and personal projects. Alongside my academic journey, I work at Zastechkrd, which continually helps me stay dynamic and grow my professional skills in real-world environments.",
    ku: "من قوتابی قۆناغی دووەمی پەروەردەی کۆمپیوتەرم لەگەڵ ئەزموونی پراکتیکی لە زمانەکانی C++، JavaScript، و SQL. بەردەوام سیستەمی وێب و بەرنامە دروست دەکەم بۆ پڕۆژەی زانکۆ و تایبەتی. لە پاڵ خوێندنەکەمدا، لە 'Zastechkrd' کار دەکەم کە یارمەتیم دەدات بەردەوام توانا پیشەییەکانم پێشبخەم لە ژینگەی کارکردنی ڕاستەقینەدا.",
    ar: "أنا طالب في المرحلة الثانية بتخصص تعليم الحاسوب، لدي خبرة عملية في C++ و JavaScript و SQL. أعمل بنشاط على إنشاء أنظمة ويب وتطبيقات متكاملة للمشاريع الجامعية والشخصية. إلى جانب دراستي، أعمل في Zastechkrd، مما يعزز مهاراتي المهنية باستمرار في بيئات العمل الحقيقية."
  };

  return (
    <section id="about" style={{ padding: '80px 6%', backgroundColor: '#0a0a0a', color: '#ffffff', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
      <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '30px' }}>{t('about')}</h2>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#cccccc', margin: 0 }}>
          {aboutText[activeLang]}
        </p>
      </div>
    </section>
  );
};