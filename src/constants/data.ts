// src/constants/data.ts

// 1. زانیارییەکانی دەربارەی من
export const aboutText = {
  en: "I am a Stage 2 Computer Education student with practical experience in C++, JavaScript, and SQL. I actively create full-stack web and app systems for university and personal projects. Alongside my academic journey, I work at Zastechkrd, which continually helps me stay dynamic and grow my professional skills in real-world environments.",
  ku: "من قوتابی قۆناغی دووەمی پەروەردەی کۆمپیوتەرم لەگەڵ ئەزموونی پراکتیکی لە زمانەکانی C++، JavaScript، و SQL. بەردەوام سیستەمی وێب و بەرنامە دروست دەکەم بۆ پڕۆژەی زانکۆ و تایبەتی. لە پاڵ خوێندنەکەمدا، لە 'Zastechkrd' کار دەکەم کە یارمەتیم دەدات بەردەوام توانا پیشەییەکانم پێشبخەم لە ژینگەی کارکردنی ڕاستەقینەدا.",
  ar: "أنا طالب في المرحلة الثانية بتخصص تعليم الحاسوب، لدي خبرة عملية في C++ و JavaScript و SQL. أعمل بنشاط على إنشاء أنظمة ويب وتطبيقات متكاملة للمشاريع الجامعية والشخصية. إلى جانب دراستي، أعمل في Zastechkrd، مما يعزز مهاراتي المهنية باستمرار في بيئات العمل الحقيقية."
};

// 2. زانیارییەکانی خوێندن
export const educationData = [
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

// 3. زانیارییەکانی لێهاتوویی
export const skillsData = [
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" }
];

// 4. زانیارییەکانی دەستکەوت و بڕوانامەکان (بەشی نوێ)
export const achievementsData = [
  {
    year: "Present",
    title: { en: "Professional Experience", ku: "ئەزموونی پیشەیی", ar: "الخبرة المهنية" },
    organization: { en: "Zastechkrd", ku: "Zastechkrd", ar: "Zastechkrd" },
    description: {
      en: "Actively contributing to team projects and enhancing professional communication skills in a dynamic environment.",
      ku: "بەشداریکردنی چالاکانە لە پڕۆژەکانی تیم و بەرەوپێشبردنی پەیوەندییە پیشەییەکان لە ژینگەیەکی داینامیکیدا.",
      ar: "المساهمة بنشاط في مشاريع الفريق وتعزيز مهارات الاتصال المهني في بيئة ديناميكية."
    }
  }
];