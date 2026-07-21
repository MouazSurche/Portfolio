import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '14px', marginBottom: '20px',
    backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px', color: '#fff', fontSize: '1rem',
    outline: 'none', transition: 'border-color 0.3s'
  };

  return (
    <section id="contact" style={{ padding: '80px 6%', backgroundColor: '#000000', color: '#ffffff', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
      <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '40px', textAlign: 'center' }}>
        {t('contact')}
      </h2>
      
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#0a0a0a', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
        
        {/* 📬 ئیمەیڵی نوێ لێرەدا جێگیر کرا */}
        <form action="https://formsubmit.co/mahazemad8@gmail.com" method="POST">
          
          <input type="hidden" name="_next" value={window.location.href} />
          <input type="hidden" name="_captcha" value="false" />

          <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '0.9rem' }}>{t('nameLabel')}</label>
          <input type="text" name="name" required style={inputStyle} />

          <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '0.9rem' }}>{t('emailLabel')}</label>
          <input type="email" name="email" required style={inputStyle} />

          <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '0.9rem' }}>{t('infoLabel')}</label>
          <input type="text" name="about_user" required style={inputStyle} />

          <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '0.9rem' }}>{t('msgLabel')}</label>
          <textarea name="message" required rows={5} style={{ ...inputStyle, resize: 'vertical' }}></textarea>

          <button type="submit" style={{
            width: '100%', padding: '15px', backgroundColor: '#ffffff', color: '#000000',
            border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '700',
            cursor: 'pointer', transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {t('sendBtn')}
          </button>
        </form>

      </div>
    </section>
  );
};