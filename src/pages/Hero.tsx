import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import mouazImg from '../assets/mouaz.jpg';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="home"
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '60px 6%',
        gap: '50px',
        overflow: 'hidden',
        backgroundColor: '#0a0a0a'
      }}
    >
      {/* ✨ باکگراوندی داینامیکی بە ڕەنگەکانی ئاڵای کوردستان */}
      <motion.div 
        animate={{ 
          y: [0, -40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '15%',
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle, rgba(255,0,0,0.15) 0%, rgba(0,128,0,0.1) 40%, rgba(255,215,0,0.1) 70%, rgba(0,0,0,0) 80%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 1
        }} 
      />

      {/* 🖼️ وێنەکەت بە بازنەی ئاڵای کوردستان (سوور، سپی، سەوز، زێرین) و سێبەری نایاب */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: 'relative',
          zIndex: 2,
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          padding: '6px',
          // 👈 چوارچێوەی تێکەڵەی ڕەنگەکانی ئاڵای کوردستان (سوور، سپی، سەوز، زەرد)
          background: 'linear-gradient(135deg, #FF0000, #FFFFFF, #008000, #FFD700)',
          // 👈 سێبەری قووڵ و درەوشاوەی شاهانە
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 40px rgba(255, 0, 0, 0.3), 0 0 70px rgba(0, 128, 0, 0.2)',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000000'
        }}
      >
        <img 
          src={mouazImg} 
          alt="Mouaz Imad" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '50%',
            filter: 'contrast(1.08) brightness(1.04) saturate(1.05)'
          }}
        />
      </motion.div>

      {/* 📝 ناوەڕۆکی دەقەکان */}
      <div style={{ zIndex: 2, maxWidth: '600px', textAlign: 'center' }}>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '1.2rem', color: '#FFD700', fontWeight: '600', letterSpacing: '1px', marginBottom: '10px' }}
        >
          {t('hi')}
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: 'calc(2.5rem + 2vw)', fontWeight: '900', color: '#ffffff', lineHeight: '1.1', margin: '0 0 20px 0', letterSpacing: '-1px' }}
        >
          Mouaz Imad
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ fontSize: 'calc(1.1rem + 0.5vw)', fontWeight: '700', background: 'linear-gradient(90deg, #ffffff, #888888)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '10px' }}
        >
          {t('role')}
        </motion.h2>
      </div>
    </section>
  );
};