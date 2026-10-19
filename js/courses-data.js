/**
 * EduCenter - Kurslar va Mahsulotlar Ma'lumotlar Bazasi
 */

const COURSES_DATA = [
  {
    id: 1,
    category: "it",
    isProduct: false,
    badge: "TOP KURS",
    rating: 4.9,
    reviewsCount: 342,
    studentsCount: 1420,
    price: 1200000,
    oldPrice: 1500000,
    billingType: "monthly",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=800&q=80",
    title: {
      uz: "Frontend Dasturlash (React & Next.js)",
      ru: "Frontend Разработка (React & Next.js)",
      en: "Frontend Web Development (React & Next.js)"
    },
    description: {
      uz: "HTML5, CSS3, modern JavaScript ES6+, React, Next.js, Redux va TailwindCSS. 10 dan ortiq real loyiha va portfolioga ega bo'lasiz.",
      ru: "HTML5, CSS3, современный JavaScript ES6+, React, Next.js, Redux и TailwindCSS. Более 10 реальных проектов в портфолио.",
      en: "HTML5, CSS3, modern JavaScript ES6+, React, Next.js, Redux, and TailwindCSS. Build 10+ real-world portfolio projects."
    },
    level: {
      uz: "Noldan professionalgacha",
      ru: "С нуля до профи",
      en: "Zero to Pro"
    },
    duration: {
      uz: "6 oy (Haftada 3 kun)",
      ru: "6 месяцев (3 раза в неделю)",
      en: "6 months (3 days/week)"
    },
    mentor: {
      name: "Jasur Rahimov",
      role: "Senior Frontend Engineer (EPAM)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
    },
    syllabus: [
      "Veb asoslari: HTML5 semantikasi va CSS3 zamonaviy grid/flexbox",
      "JavaScript chuqurlashtirilgan: Asinxron dasturlash, API, DOM",
      "React.js arxitekturasi: Hooks, Context, Router, Clean Code",
      "Next.js 14 & SSR, SEO optimallashtirish",
      "Bitiruv loyihasi va rezyume bilan ta'minlash"
    ]
  },
  {
    id: 2,
    category: "it",
    isProduct: false,
    badge: "XIT",
    rating: 4.95,
    reviewsCount: 285,
    studentsCount: 1180,
    price: 1300000,
    oldPrice: 1600000,
    billingType: "monthly",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    title: {
      uz: "Python & Backend Dasturlash (Django & FastAPI)",
      ru: "Python & Backend Разработка (Django & FastAPI)",
      en: "Python & Backend Engineering (Django & FastAPI)"
    },
    description: {
      uz: "Python sintaksisi, OOP, ma'lumotlar tuzilmasi, PostgreSQL, Django REST Framework, FastAPI, Docker va Telegram botlar yaratish.",
      ru: "Синтаксис Python, ООП, базы данных PostgreSQL, Django REST, FastAPI, Docker и создание профессиональных Telegram ботов.",
      en: "Python syntax, OOP, PostgreSQL, Django REST Framework, FastAPI, Docker, and full-featured Telegram bot building."
    },
    level: {
      uz: "Boshlang'ich va O'rta",
      ru: "Начальный и средний",
      en: "Beginner & Intermediate"
    },
    duration: {
      uz: "7 oy (Haftada 3 kun)",
      ru: "7 месяцев (3 раза в неделю)",
      en: "7 months (3 days/week)"
    },
    mentor: {
      name: "Sardorbek Aliyev",
      role: "Lead Backend Developer (IT Park)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    syllabus: [
      "Python algoritmlar va ma'lumotlar tuzilmalari",
      "PostgreSQL va murakkab SQL so'rovlar",
      "Django & Django REST Framework orqali API yaratish",
      "FastAPI va Microservices asoslari",
      "Telegram botlar va to'lov tizimlari (Click/Payme) integratsiyasi"
    ]
  },
  {
    id: 3,
    category: "design",
    isProduct: false,
    badge: "YANGI",
    rating: 4.88,
    reviewsCount: 198,
    studentsCount: 940,
    price: 1100000,
    oldPrice: 1400000,
    billingType: "monthly",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    title: {
      uz: "Grafik Dizayn va UI/UX Veb Dizayn (Figma)",
      ru: "Графический дизайн и UI/UX (Figma, Adobe)",
      en: "Graphic Design & UI/UX Design (Figma, Adobe)"
    },
    description: {
      uz: "Figma, Adobe Photoshop, Illustrator. Veb sayt va mobil ilovalar interfeysini loyihalash, brending, tipografika va UX tadqiqotlar.",
      ru: "Figma, Photoshop, Illustrator. Проектирование веб-сайтов, мобильных приложений, брендинг, типографика и UX-исследования.",
      en: "Figma, Adobe Photoshop, Illustrator. Web and mobile app interface design, typography, branding, and UX research."
    },
    level: {
      uz: "Boshlang'ichdan",
      ru: "Для новичков",
      en: "All Levels"
    },
    duration: {
      uz: "5 oy (Haftada 3 kun)",
      ru: "5 месяцев (3 раза в неделю)",
      en: "5 months (3 days/week)"
    },
    mentor: {
      name: "Madina Karimova",
      role: "Senior UI/UX Designer (Behance Top)",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    },
    syllabus: [
      "Grafik dizayn kompozitsiyasi va ranglar uyg'unligi",
      "Figma da komponentlar, Auto-layout va dizayn tizimlari",
      "User Persona, Wireframing va UX testlash",
      "Mobil va veb interfeyslar prototipi",
      "Behance va Dribbble da portfolio yig'ish"
    ]
  },
  {
    id: 4,
    category: "lang",
    isProduct: false,
    badge: "INTENSIV",
    rating: 4.96,
    reviewsCount: 412,
    studentsCount: 2100,
    price: 850000,
    oldPrice: 1100000,
    billingType: "monthly",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80",
    title: {
      uz: "Ingliz tili: General English & IELTS 7.5+",
      ru: "Английский язык: General & IELTS 7.5+",
      en: "English Mastery: General & IELTS 7.5+"
    },
    description: {
      uz: "Speaking, Listening, Reading va Writing ko'nikmalarini kuchaytirish. IELTS 8.5+ balli instruktorlardan eksklyuziv strategiyalar.",
      ru: "Развитие навыков Speaking, Listening, Reading и Writing. Эксклюзивные стратегии подготовки от инструкторов с IELTS 8.5+.",
      en: "Comprehensive Speaking, Listening, Reading & Writing. Proven strategies by IELTS 8.5+ certified native-fluent coaches."
    },
    level: {
      uz: "Har qanday bosqich",
      ru: "Любой уровень",
      en: "All levels"
    },
    duration: {
      uz: "4 oy intensiv",
      ru: "4 месяца интенсив",
      en: "4 months intensive"
    },
    mentor: {
      name: "Davron Rustamov",
      role: "IELTS 8.5 Certified Instructor",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
    },
    syllabus: [
      "IELTS Task 1 & Task 2 Academic Writing shablonlari",
      "Fluent Speaking: Idiomalar va kutilmagan savollarga javoblar",
      "Reading va Listening testlarida tezlikni oshirish",
      "Har haftalik Mock Exam imtihonlari"
    ]
  },
  {
    id: 5,
    category: "business",
    isProduct: false,
    badge: "TALABGIR",
    rating: 4.85,
    reviewsCount: 160,
    studentsCount: 780,
    price: 950000,
    oldPrice: 1250000,
    billingType: "monthly",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    title: {
      uz: "SMM va Raqamli Marketing (Targeting)",
      ru: "SMM и Цифровой маркетинг (Таргетинг)",
      en: "SMM & Digital Growth Marketing (Targeting)"
    },
    description: {
      uz: "Meta Ads (Facebook/Instagram), Telegram kanallarni yurgazish, TikTok va Reels uchun kontent reja, sotuv voronkalari.",
      ru: "Meta Ads (Facebook/Instagram), продвижение Telegram-каналов, контент для TikTok и Reels, воронки продаж и лидогенерация.",
      en: "Meta Ads, Instagram/Telegram growth, TikTok & Reels content creation, high-converting sales funnels, and data analytics."
    },
    level: {
      uz: "Boshlang'ich",
      ru: "Начальный",
      en: "Beginner"
    },
    duration: {
      uz: "3 oy (Haftada 3 kun)",
      ru: "3 месяца (3 раза в неделю)",
      en: "3 months (3 days/week)"
    },
    mentor: {
      name: "Kamola Umarova",
      role: "Head of Marketing at Top Agency",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
    },
    syllabus: [
      "Targeting va Facebook Business Manager sozlash",
      "Kopirayting va jalb qiluvchi sarlavhalar yozish",
      "Mobilografiya va Reels montaj sirlari",
      "Mijozlar bilan ishlash va byudjet optimallashtirish"
    ]
  },
  {
    id: 6,
    category: "books",
    isProduct: true,
    badge: "KITOB",
    rating: 4.98,
    reviewsCount: 520,
    studentsCount: 3100,
    price: 180000,
    oldPrice: 240000,
    billingType: "once",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    title: {
      uz: "Frontend Dasturlash Amaliy Qo'llanmasi (Kitob + Video)",
      ru: "Практическое пособие по Frontend (Книга + Видео)",
      en: "Frontend Web Dev Practical Handbook (Book + Video)"
    },
    description: {
      uz: "350 betlik to'liq rangli darslik. HTML, CSS, JavaScript, React bo'yicha tayyor kod misollari va 20 soatlik yopiq video darslar kodi bilan.",
      ru: "350-страничное полноцветное издание. Готовые примеры кода по JS и React, плюс доступ к 20 часам эксклюзивных видео-уроков.",
      en: "350-page full-color handbook. Real-world JS & React code templates, with 20 hours of bonus video walkthroughs included."
    },
    level: {
      uz: "Barcha uchun",
      ru: "Для всех",
      en: "All Levels"
    },
    duration: {
      uz: "Kitob + Umrbod Video Kurs",
      ru: "Книга + Бессрочный доступ",
      en: "Book + Lifetime Videos"
    },
    mentor: {
      name: "EduCenter Mualliflar jamoasi",
      role: "Akademiya metodistlari",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
    },
    syllabus: [
      "100+ amaliy veb komponent shablonlari",
      "JavaScript algoritmlar cheat-sheet",
      "Eng ko'p uchraydigan intervyu savollari to'plami",
      "O'quv markazimiz tomonidan maxsus sovg'a stikerlari"
    ]
  },
  {
    id: 7,
    category: "books",
    isProduct: true,
    badge: "KITOB",
    rating: 4.94,
    reviewsCount: 380,
    studentsCount: 2450,
    price: 150000,
    oldPrice: 200000,
    billingType: "once",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    title: {
      uz: "IELTS 8.0 Vocabulary & Grammar Masterkit",
      ru: "Мастер-комплект IELTS 8.0: Лексика и Грамматика",
      en: "IELTS 8.0 Vocabulary & Grammar Masterkit"
    },
    description: {
      uz: "IELTS imtihonida eng yuqori ball olish uchun 3000 ta akademik so'z, kollokatsiyalar, sinonimlar va Writing insho shablonlari to'plami.",
      ru: "3000 академических слов, коллокации, синонимы и готовые шаблоны для эссе Writing Task 2 для достижения балла 8.0+.",
      en: "3000 essential academic words, collocations, idiomatic phrases, and ready-made essay structures for band 8.0+."
    },
    level: {
      uz: "B1 - C1",
      ru: "B1 - C1",
      en: "B1 - C1"
    },
    duration: {
      uz: "Kitob + Audio materiallar",
      ru: "Книга + Аудиоматериалы",
      en: "Book + Audio MP3"
    },
    mentor: {
      name: "Davron Rustamov",
      role: "IELTS Head Coach",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
    },
    syllabus: [
      "Topiklar bo'yicha ajratilgan 15 ta lug'at bloki",
      "Writing Task 1 diagrammalarni ifodalash leksikasi",
      "Speaking Part 3 uchun chuqur javob shablonlari",
      "Audio talaffuz diski va Telegram bot audio mashqlari"
    ]
  },
  {
    id: 8,
    category: "it",
    isProduct: false,
    badge: "BOLALAR",
    rating: 4.92,
    reviewsCount: 145,
    studentsCount: 650,
    price: 750000,
    oldPrice: 950000,
    billingType: "monthly",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
    title: {
      uz: "Robototexnika va IT Kids (Scratch & Lego Mindstorms)",
      ru: "Робототехника и IT Kids (Scratch & Lego)",
      en: "Robotics & Coding for Kids (Scratch & Lego)"
    },
    description: {
      uz: "8-15 yoshli bolalar uchun mantiqiy fikrlash, robot yasash, Scratch da o'yinlar yaratish va dasturlash olamiga qiziqarli sayohat.",
      ru: "Для детей 8-15 лет: развитие логического мышления, конструирование роботов, создание игр на Scratch и основы алгоритмов.",
      en: "For kids aged 8-15: logical thinking, hands-on robotics, building custom games on Scratch, and electronics exploration."
    },
    level: {
      uz: "Bolalar (8-15 yosh)",
      ru: "Дети (8-15 лет)",
      en: "Kids (8-15 years)"
    },
    duration: {
      uz: "4 oy (Haftada 2 kun)",
      ru: "4 месяца (2 раза в неделю)",
      en: "4 months (2 days/week)"
    },
    mentor: {
      name: "Azizbek Normatov",
      role: "Robototexnika instruktori",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
    },
    syllabus: [
      "Scratch dasturida 2D multfilm va o'yinlar yaratish",
      "Lego Mindstorms sensorlari va motorlarini boshqarish",
      "Arduino bilan oddiy aqlli uy tizimlari",
      "Yosh ixtirochilar ko'rgazmasi va sertifikat"
    ]
  }
];

// O'qituvchilar (Mentors) ma'lumotlari
const MENTORS_DATA = [
  {
    name: "Jasur Rahimov",
    role: {
      uz: "Senior Frontend Engineer (EPAM)",
      ru: "Senior Frontend Инженер (EPAM)",
      en: "Senior Frontend Engineer (EPAM)"
    },
    exp: "6+ yil tajriba",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    bio: {
      uz: "100 dan ortiq yoshlarni xalqaro kompaniyalarga ishga kirishiga ko'maklashgan tajribali dasturchi.",
      ru: "Опытный разработчик, помогший более 100 студентам устроиться в международные IT-компании.",
      en: "Seasoned engineer who helped 100+ graduates land jobs at top international companies."
    }
  },
  {
    name: "Madina Karimova",
    role: {
      uz: "Head of Product Design (Fintech)",
      ru: "Ведущий продуктовый дизайнер",
      en: "Head of Product Design (Fintech)"
    },
    exp: "5+ yil tajriba",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    bio: {
      uz: "Behance portfolio egasi, ko'plab xalqaro fintech ilovalarining interfeys me'mori.",
      ru: "Куратор Behance, архитектор интерфейсов для множества международных финтех-приложений.",
      en: "Behance curator and lead interface architect for high-impact international fintech apps."
    }
  },
  {
    name: "Sardorbek Aliyev",
    role: {
      uz: "Lead Backend Developer (IT Park)",
      ru: "Lead Backend Разработчик (IT Park)",
      en: "Lead Backend Developer (IT Park)"
    },
    exp: "7+ yil tajriba",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    bio: {
      uz: "Katta yuklamali (highload) tizimlar, microservices va xavfsizlik arxitekturasi bo'yicha mutaxassis.",
      ru: "Специалист по высоконагруженным системам, микросервисам и архитектуре безопасности.",
      en: "Specialist in highload backends, microservice architecture, and enterprise cloud security."
    }
  },
  {
    name: "Davron Rustamov",
    role: {
      uz: "IELTS 8.5 Bosh Instruktor",
      ru: "Главный инструктор IELTS 8.5",
      en: "Head IELTS 8.5 Coach"
    },
    exp: "8+ yil tajriba",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    bio: {
      uz: "Shogirdlarining o'rtacha ko'rsatkichi IELTS 7.5 bo'lgan xalqaro sertifikatli ustoz.",
      ru: "Сертифицированный тренер, средний результат выпускников которого составляет IELTS 7.5.",
      en: "Certified master instructor whose alumni achieve an average score of IELTS 7.5."
    }
  }
];

// Fikrlar (Testimonials)
const REVIEWS_DATA = [
  {
    name: "Bobur Mirzayev",
    course: "Frontend Dasturlash",
    rating: 5,
    text: {
      uz: "6 oyda noldan o'rganib, hozirda IT Park rezidenti bo'lgan kompaniyada Junior dasturchi bo'lib ishlayapman. Darslardagi amaliyot eng katta foyda berdi!",
      ru: "Освоил с нуля за 6 месяцев, сейчас работаю Junior разработчиком в компании-резиденте IT Park. Практика на уроках дала максимальный буст!",
      en: "Learned from scratch in 6 months and now working as a Junior Dev in an IT Park resident company. The real-world projects made all the difference!"
    },
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Shaxzoda Yusupova",
    course: "UI/UX Dizayn",
    rating: 5,
    text: {
      uz: "Madina ustozning darslari juda tushunarli. Kurs davomida Behance portfoliomni yig'dim va birinchi frilans buyurtmamni $400 ga oldim.",
      ru: "Уроки Мадины невероятно понятные. Собрала сильное портфолио на Behance и закрыла первый фриланс заказ на $400.",
      en: "Mentor Madina made complex UX so simple. I curated my Behance portfolio and landed my first $400 freelance client right away."
    },
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Alisher Qodirov",
    course: "IELTS 7.5+",
    rating: 5,
    text: {
      uz: "Davron ustozning Writing strategiyalari tufayli IELTS imtihonidan 7.5 oldim va xorijiy grantga ega bo'ldim. Rahmat!",
      ru: "Благодаря методикам Даврона по Writing сдал IELTS на 7.5 и выиграл зарубежный грант на обучение. Огромное спасибо!",
      en: "Thanks to teacher Davron's writing techniques, I scored 7.5 in IELTS and secured a full scholarship abroad. Highly recommend!"
    },
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80"
  }
];
