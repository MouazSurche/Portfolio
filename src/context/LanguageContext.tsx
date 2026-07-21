import React, { createContext, useState, useContext, useEffect } from 'react';

export type Language = 'en' | 'ku' | 'ar';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  dir: 'ltr' | 'rtl';
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    home: "Home", about: "About Me", education: "Education", skills: "Skills", projects: "Projects", contact: "Contact",
    hi: "Hi, I am", role: "Web & App Developer",
    viewProjects: "View Projects", downloadCV: "Download CV", portfolio: "PORTFOLIO",
    eduTitle: "Academic Path", skillsTitle: "Technical Stack",
    webCat: "Web Applications", appCat: "Desktop Apps", allCat: "All Projects",
    nameLabel: "Your Name", emailLabel: "Your Email", infoLabel: "Tell me about yourself (Who are you?)", msgLabel: "Your Message", sendBtn: "Send Message"
  },
  ku: {
    home: "سەرەکی", about: "دەربارەی من", education: "خوێندن", skills: "لێهاتووییەکان", projects: "پڕۆژەکان", contact: "پەیوەندی",
    hi: "سڵاو، من", role: "گەشەپێدەری وێب و ئەپڵیکەیشن",
    viewProjects: "بینینی پڕۆژەکان", downloadCV: "داگرتنی سیڤی", portfolio: "پۆرتفۆلیۆ",
    eduTitle: "ڕێڕەوی ئەکادیمی", skillsTitle: "توانا تەکنیکییەکان",
    webCat: "وێب ئەپڵیکەیشن", appCat: "بەرنامەکانی دێسکتۆپ", allCat: "هەموو پڕۆژەکان",
    nameLabel: "ناوی تۆ", emailLabel: "ئیمەیڵەکەت", infoLabel: "کەمێک دەربارەی خۆت بڵێ (تۆ کێیت؟)", msgLabel: "نامەکەت", sendBtn: "ناردنی نامە"
  },
  ar: {
    home: "الرئيسية", about: "نبذة عني", education: "التعليم", skills: "المهارات", projects: "المشاريع", contact: "اتصل بي",
    hi: "مرحباً، أنا", role: "مطور ويب وتطبيقات",
    viewProjects: "عرض المشاريع", downloadCV: "تحميل السيرة الذاتية", portfolio: "المعرض الشخصي",
    eduTitle: "المسار الأكاديمي", skillsTitle: "القدرات التقنية",
    webCat: "تطبيقات الويب", appCat: "تطبيقات سطح المكتب", allCat: "جميع المشاريع",
    nameLabel: "اسمك", emailLabel: "بريدك الإلكتروني", infoLabel: "أخبرني عن نفسك (من أنت؟)", msgLabel: "رسالتك", sendBtn: "إرسال الرسالة"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return (saved as Language) || 'en';
  });
  
  const dir = lang === 'en' ? 'ltr' : 'rtl';

  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.dir = dir;
    if (lang === 'en') {
      document.body.style.fontFamily = "'Inter', sans-serif";
    } else if (lang === 'ar') {
      document.body.style.fontFamily = "'Cairo', sans-serif";
    } else {
      document.body.style.fontFamily = "'Noto Sans Arabic', sans-serif";
    }
  }, [lang, dir]);

  const t = (key: string) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir, t }}>
      <div style={{ direction: dir }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};