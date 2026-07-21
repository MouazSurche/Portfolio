interface LocalizedTitle {
  en: string;
  ku: string;
  ar: string;
}

export interface Project {
  id: number;
  title: LocalizedTitle;
  description: LocalizedTitle;
  techStack: string[];
  githubLink: string;
  liveDemo: string;
  image: string;
  category: 'Web' | 'App';
}

export const mockProjects: Project[] = [
  {
    id: 1,
    title: { en: "Hospital Patient Management System", ku: "سیستەمی بەڕێوەبردنی نەخۆشخانە", ar: "نظام إدارة مرضى المستشفى" },
    description: {
      en: "A C++/Qt-based system designed for efficient patient records and hospital management.",
      ku: "سیستەمێکی دروستکراو بە C++/Qt بۆ تۆمارکردن و بەڕێوەبردنی داتای نەخۆش بە شێوەیەکی خێرا.",
      ar: "نظام مبني على C++/Qt مصمم لسجلات المرضى وإدارة المستشفيات بكفاءة."
    },
    techStack: ["C++", "Qt Framework", "SQL"],
    githubLink: "#", liveDemo: "#",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600",
    category: "App"
  },
  {
    id: 2,
    title: { en: "Movie Explorer", ku: "گەڕانی فیلم", ar: "مستكشف الأفلام" },
    description: {
      en: "A premium movie portal featuring multi-language capability, dynamic search filters, and persistent watchlist management.",
      ku: "پۆرتاڵێکی پێشکەوتووی فیلم بە سێ زمانی جیاواز، گەڕانی داینامیکی و پاراستنی واچلیست.",
      ar: "بوابة أفلام متميزة تدعم لغات متعددة، فلاتر بحث ديناميكية، وإدارة قائمة المشاهدة."
    },
    techStack: ["React", "TypeScript", "Context API"],
    githubLink: "#", liveDemo: "#",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600",
    category: "Web"
  },
  {
    id: 3,
    title: { en: "Exam Management System", ku: "سیستەمی بەڕێوەبردنی تاقیکردنەوە", ar: "نظام إدارة الامتحانات" },
    description: {
      en: "A full-stack web application developed to organize and manage university exams efficiently.",
      ku: "ئەپڵیکەیشنێکی وێبی تەواوەتی بۆ ڕێکخستن و بەڕێوەبردنی تاقیکردنەوەکانی زانکۆ.",
      ar: "تطبيق ويب متكامل تم تطويره لتنظيم وإدارة الامتحانات الجامعية بكفاءة."
    },
    techStack: ["PHP", "JavaScript", "HTML/CSS", "SQL"],
    githubLink: "#", liveDemo: "#",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=600",
    category: "Web"
  },
  {
    id: 4,
    title: { en: "GPA Calculator", ku: "ژمێرەری تێکڕای نمرە (GPA)", ar: "حاسبة المعدل التراكمي (GPA)" },
    description: {
      en: "A specialized application developed to accurately track and calculate multi-semester GPA for students.",
      ku: "بەرنامەیەکی تایبەت بۆ هەژمارکردن و چاودێریکردنی تێکڕای نمرەی چەندین وەرزی قوتابیان.",
      ar: "تطبيق متخصص تم تطويره لتتبع وحساب المعدل التراكمي لعدة فصول دراسية للطلاب بدقة."
    },
    techStack: ["C++"],
    githubLink: "#", liveDemo: "#",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600",
    category: "App"
  },
  {
    id: 5,
    title: { en: "Coffee Shop Portal", ku: "ماڵپەڕی کافتریا", ar: "بوابة المقهى" },
    description: {
      en: "A conceptual coffee shop web platform built with an integrated secure administration dashboard for direct database CRUD control.",
      ku: "پلاتفۆرمێکی وێب بۆ کافتریا کە خاوەنی داشبۆردێکی پارێزراوی ئەدمینە بۆ بەڕێوەبردنی ڕاستەوخۆی داتاکان.",
      ar: "منصة ويب للمقهى مدمجة بلوحة تحكم مسؤولة آمنة لإدارة عمليات البيانات المباشرة."
    },
    techStack: ["React", "Node.js", "Admin Auth"],
    githubLink: "#", liveDemo: "#",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600",
    category: "Web"
  }
];