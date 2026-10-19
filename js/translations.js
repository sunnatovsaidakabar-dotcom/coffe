/**
 * EduCenter - 3 Tildagi Lug'at (UZ, RU, EN)
 */

const TRANSLATIONS = {
  uz: {
    // Navigatsiya
    brand_name: "EduCenter Academy",
    nav_home: "Bosh sahifa",
    nav_courses: "Kurslar va Do'kon",
    nav_about: "Biz haqimizda",
    nav_favorites: "Saralanganlar",
    nav_cart: "Savatcha",
    nav_contact: "Bog'lanish",
    btn_apply: "Ro'yxatdan o'tish",

    // Qidiruv
    search_placeholder: "Kurs yoki kitob qidirish (masalan: Frontend, Python)...",
    search_fav_placeholder: "Saralanganlar orasidan qidirish...",
    search_global_title: "Tezkor qidiruv",
    search_quick_placeholder: "Kurs nomi, yo'nalish yoki mentor...",
    search_quick_btn: "Qidirish",
    search_results_for: "Qidiruv natijalari:",
    search_not_found: "Hech narsa topilmadi. Boshqa so'z bilan urinib ko'ring.",

    // Hero Section
    hero_badge: "🔥 2025/2026 yangi mavsum qabuli ochiq!",
    hero_title: "Kelajak kasblarini professional ustozlardan o'rganing",
    hero_desc: "Dasturlash, dizayn, xorijiy tillar va biznes yo'nalishlarida 0 dan boshlab amaliy loyihalar orqali o'rganing. Diplom va xalqaro sertifikat beriladi.",
    hero_btn_explore: "Barcha kurslar",
    hero_btn_consult: "Bepul maslahat",
    hero_stat_students: "Muvaffaqiyatli talaba",
    hero_stat_courses: "Zamonaviy kurslar",
    hero_stat_employment: "Ish bilan ta'minlash",
    hero_stat_mentors: "Tajribali mentorlar",

    // Afzalliklar
    features_title: "Nega aynan bizning o'quv markazimiz?",
    features_subtitle: "Zamonaviy ta'lim standarti va individual yondashuv",
    feat_1_title: "Amaliyotga asoslangan ta'lim",
    feat_1_desc: "Darslarning 80% qismi real portfolio loyihalari ustida ishlash bilan o'tadi.",
    feat_2_title: "Kafolatlangan kouching",
    feat_2_desc: "O'qish davrida va bitirgach rezyume tayyorlash va ishga joylashishda yordam beramiz.",
    feat_3_title: "Xalqaro sertifikat",
    feat_3_desc: "Har bir bosqich yakunida ish beruvchilar tomonidan tan olinadigan sertifikat beriladi.",
    feat_4_title: "Koworking va darsxona",
    feat_4_desc: "Talabalarimiz uchun 24/7 zamonaviy koworking va tezyurar internet bepul.",

    // Mashhur Kurslar
    popular_courses_title: "Ommabop kurslar va qo'llanmalar",
    popular_courses_subtitle: "Eng talabgir yo'nalishlar bo'yicha saralangan dasturlar",
    view_all_courses: "Barcha kurslarni ko'rish →",
    filter_all: "Barchasi",
    filter_it: "Dasturlash (IT)",
    filter_design: "Grafik & UI/UX",
    filter_lang: "Xorijiy tillar",
    filter_business: "Marketing & Biznes",
    filter_books: "Kitoblar & Mahsulotlar",

    // Kurs kartochkasi
    card_level: "Daraja:",
    card_duration: "Davomiyligi:",
    card_month: "/oy",
    card_one_time: "bir martalik",
    btn_add_cart: "Savatchaga qo'shish",
    btn_in_cart: "Savatchada mavjud",
    btn_details: "Batafsil",

    // Izbrannoe (Favorites)
    fav_title: "Saralangan kurslar va mahsulotlar",
    fav_subtitle: "O'zingizga ma'qul kelgan darslarni keyinroq ko'rish uchun saqlab qo'ying",
    fav_empty_title: "Saralanganlar ro'yxati hozircha bo'sh",
    fav_empty_desc: "O'zingizga qiziq bo'lgan kurslar ustidagi yurakcha belgisini bosing.",
    fav_btn_browse: "Kurslarni tanlash",
    fav_remove: "O'chirish",

    // Savatcha (Cart)
    cart_title: "Sizning Savatchangiz",
    cart_subtitle: "Tanlangan kurslar va o'quv materiallari",
    cart_empty_title: "Savatchangiz bo'sh",
    cart_empty_desc: "Kurslar bo'limiga o'tib o'zingizga ma'qul yo'nalishlarni savatchaga qo'shing.",
    cart_btn_explore: "Kurslarni ko'rish",
    cart_col_product: "Mahsulot / Kurs",
    cart_col_price: "Narxi",
    cart_col_qty: "Soni",
    cart_col_total: "Jami",
    cart_col_action: "Amal",
    cart_clear: "Savatchani tozalash",
    cart_summary_title: "Buyurtma hisobi",
    cart_subtotal: "Oraliq summa:",
    cart_discount: "Chegirma:",
    cart_total_price: "Yakuniy to'lov:",
    cart_promo_placeholder: "Promokod (masalan: DEMO2025)",
    cart_promo_apply: "Qo'llash",
    cart_promo_success: "Promokod faollashtirildi! Chegirma: ",

    // Checkout Formasi
    checkout_title: "Buyurtmani rasmiylashtirish",
    checkout_subtitle: "Ma'lumotlaringizni to'ldiring, buyurtma to'g'ridan-to'g'ri Telegram botimizga yuboriladi",
    form_name: "Ism va Familiyangiz *",
    form_name_placeholder: "Said Ahmedov",
    form_phone: "Telefon raqamingiz *",
    form_phone_placeholder: "+998 90 123 45 67",
    form_payment: "To'lov usuli *",
    form_payment_click: "Click orqali to'lov",
    form_payment_payme: "Payme orqali to'lov",
    form_payment_cash: "O'quv markazida naqd / karta",
    form_comment: "Qo'shimcha izoh yoki savollaringiz",
    form_comment_placeholder: "Dars vaqtlari yoki qiziqishlaringiz haqida yozishingiz mumkin...",
    btn_submit_order: "Buyurtmani tasdiqlash (Telegram botga yuborish)",
    submitting_text: "Yuborilmoqda, kuting...",

    // Modal & Toastlar
    order_success_title: "Buyurtmangiz qabul qilindi! 🎉",
    order_success_desc: "Ma'lumotlaringiz bizning Telegram botimizga (@oquvmarkazi222bot) yetib bordi. Menejerimiz tez orada siz bilan bog'lanadi.",
    order_number: "Buyurtma ID:",
    btn_close: "Yopish",
    toast_added_cart: "Savatchaga muvaffaqiyatli qo'shildi!",
    toast_removed_cart: "Savatchadan o'chirildi!",
    toast_added_fav: "Saralanganlarga saqlandi!",
    toast_removed_fav: "Saralanganlardan chiqarildi!",
    toast_copied: "Nusxalandi!",
    toast_telegram_error: "Xatolik yuz berdi. Iltimos qayta urinib ko'ring yoki botga to'g'ridan-to'g'ri yozing.",

    // Biz haqimizda sahifasi
    about_title: "Biz haqimizda",
    about_subtitle: "Kelajak avlodga sifatli va amaliy ta'lim berish bizning oliy maqsadimizdir",
    about_story_title: "Bizning missiyamiz va maqsadimiz",
    about_story_p1: "EduCenter Academy 2020-yilda yoshlarni eng zamonaviy va yuqori daromadli kasblarga yo'naltirish maqsadida tashkil etilgan. Biz nazariy yodlashdan ko'ra amaliy ko'nikmalarni birinchi o'ringa qo'yamiz.",
    about_story_p2: "O'tgan davr mobaynida 4,500 dan ortiq yoshlar markazimizni muvaffaqiyatli tamomlab, bugungi kunda mahalliy va xorijiy IT kompaniyalarda, banklarda va dizayn agentliklarida faoliyat yuritmoqda.",
    mentors_title: "Bizning tajribali ustozlarimiz",
    mentors_subtitle: "O'z sohasida 5+ yillik xalqaro tajribaga ega yetakchi mutaxassislar",
    faq_title: "Tez-tez beriladigan savollar",
    faq_subtitle: "Eng ko'p so'raladigan savollarga aniq javoblar",

    // Bepul konsultatsiya bloki
    consult_title: "Qaysi kasbni tanlashda ikkilanyapsizmi?",
    consult_subtitle: "Raqamingizni qoldiring, mutaxassisimiz bepul yo'nalish tanlab beradi va 1-bepul sinov darsiga yozadi.",
    consult_btn: "Bepul darsga yozilish",

    // Footer
    footer_desc: "EduCenter — zamonaviy kasblar, professional mentorlar va amaliy loyihalarga asoslangan innovatsion o'quv markazi.",
    footer_quick_links: "Tezkor havolalar",
    footer_courses_title: "Yo'nalishlar",
    footer_contact_title: "Aloqa markazi",
    footer_rights: "Barcha huquqlar himoyalangan.",
    footer_developer_note: "Sayt GitHub, Vercel va Netlify uchun moslashtirilgan."
  },

  ru: {
    // Навигация
    brand_name: "EduCenter Academy",
    nav_home: "Главная",
    nav_courses: "Курсы и Магазин",
    nav_about: "О центре",
    nav_favorites: "Избранное",
    nav_cart: "Корзина",
    nav_contact: "Контакты",
    btn_apply: "Записаться",

    // Поиск
    search_placeholder: "Поиск курсов или книг (например: Frontend, Python)...",
    search_fav_placeholder: "Поиск среди избранного...",
    search_global_title: "Быстрый поиск",
    search_quick_placeholder: "Название курса, направление или ментор...",
    search_quick_btn: "Поиск",
    search_results_for: "Результаты поиска:",
    search_not_found: "Ничего не найдено. Попробуйте другой запрос.",

    // Hero Section
    hero_badge: "🔥 Открыт набор на новый сезон 2025/2026!",
    hero_title: "Освойте профессии будущего с экспертами-практиками",
    hero_desc: "Обучение программированию, дизайну, иностранным языкам и бизнесу с нуля на реальных кейсах. Диплом и международный сертификат.",
    hero_btn_explore: "Все курсы",
    hero_btn_consult: "Бесплатная консультация",
    hero_stat_students: "Успешных студентов",
    hero_stat_courses: "Современных курсов",
    hero_stat_employment: "Трудоустройство",
    hero_stat_mentors: "Опытных менторов",

    // Преимущества
    features_title: "Почему выбирают наш учебный центр?",
    features_subtitle: "Современные стандарты образования и индивидуальный подход",
    feat_1_title: "Обучение на практике",
    feat_1_desc: "80% времени занятий посвящено созданию реальных проектов для вашего портфолио.",
    feat_2_title: "Гарантированный коучинг",
    feat_2_desc: "Помогаем с составлением сильного резюме и подготовкой к собеседованиям в топовые компании.",
    feat_3_title: "Международный сертификат",
    feat_3_desc: "По окончании курса выдается признаваемый сертификат государственного и мирового образца.",
    feat_4_title: "Коворкинг и аудитории",
    feat_4_desc: "Бесплатный доступ к современному коворкингу 24/7 и высокоскоростному интернету.",

    // Популярные курсы
    popular_courses_title: "Популярные курсы и материалы",
    popular_courses_subtitle: "Программы по самым востребованным направлениям рынка",
    view_all_courses: "Смотреть все курсы →",
    filter_all: "Все",
    filter_it: "Программирование (IT)",
    filter_design: "Графика и UI/UX",
    filter_lang: "Иностранные языки",
    filter_business: "Маркетинг и Бизнес",
    filter_books: "Книги и Пособия",

    // Карточка курса
    card_level: "Уровень:",
    card_duration: "Длительность:",
    card_month: "/мес",
    card_one_time: "единоразово",
    btn_add_cart: "В корзину",
    btn_in_cart: "В корзине",
    btn_details: "Подробнее",

    // Избранное
    fav_title: "Избранные курсы и материалы",
    fav_subtitle: "Сохраняйте понравившиеся программы, чтобы вернуться к ним в любое время",
    fav_empty_title: "Список избранного пока пуст",
    fav_empty_desc: "Нажмите на иконку сердечка на карточке любого понравившегося курса.",
    fav_btn_browse: "Выбрать курс",
    fav_remove: "Удалить",

    // Корзина
    cart_title: "Ваша Корзина",
    cart_subtitle: "Выбранные образовательные курсы и материалы",
    cart_empty_title: "Ваша корзина пуста",
    cart_empty_desc: "Перейдите в каталог курсов и выберите подходящие для вас программы.",
    cart_btn_explore: "Каталог курсов",
    cart_col_product: "Товар / Курс",
    cart_col_price: "Цена",
    cart_col_qty: "Кол-во",
    cart_col_total: "Итого",
    cart_col_action: "Действие",
    cart_clear: "Очистить корзину",
    cart_summary_title: "Сумма заказа",
    cart_subtotal: "Подытог:",
    cart_discount: "Скидка:",
    cart_total_price: "К оплате:",
    cart_promo_placeholder: "Промокод (например: DEMO2025)",
    cart_promo_apply: "Применить",
    cart_promo_success: "Промокод активирован! Скидка: ",

    // Оформление заказа
    checkout_title: "Оформление заказа",
    checkout_subtitle: "Заполните данные, заявка моментально поступит в наш Telegram-бот",
    form_name: "Ваше имя и фамилия *",
    form_name_placeholder: "Иван Иванов",
    form_phone: "Номер телефона *",
    form_phone_placeholder: "+998 90 123 45 67",
    form_payment: "Способ оплаты *",
    form_payment_click: "Оплата через Click",
    form_payment_payme: "Оплата через Payme",
    form_payment_cash: "Наличными или картой в центре",
    form_comment: "Комментарий или пожелания",
    form_comment_placeholder: "Напишите удобное время занятий или интересующие вопросы...",
    btn_submit_order: "Подтвердить заказ (Отправить в Telegram)",
    submitting_text: "Отправка, пожалуйста подождите...",

    // Модальные окна и тосты
    order_success_title: "Заказ успешно принят! 🎉",
    order_success_desc: "Ваша заявка отправлена в наш Telegram бот (@oquvmarkazi222bot). Наш менеджер свяжется с вами в течение 10 минут.",
    order_number: "Номер заказа:",
    btn_close: "Закрыть",
    toast_added_cart: "Успешно добавлено в корзину!",
    toast_removed_cart: "Удалено из корзины!",
    toast_added_fav: "Добавлено в избранное!",
    toast_removed_fav: "Удалено из избранного!",
    toast_copied: "Скопировано!",
    toast_telegram_error: "Произошла ошибка при отправке. Пожалуйста, напишите нам напрямую в бот.",

    // О нас
    about_title: "О нашем центре",
    about_subtitle: "Наша цель — дать молодому поколению качественное и востребованное образование",
    about_story_title: "Наша миссия и видение",
    about_story_p1: "EduCenter Academy была основана в 2020 году для подготовки высококлассных IT-специалистов, дизайнеров и полиглотов. Мы ориентируемся на реальные запросы работодателей.",
    about_story_p2: "За это время более 4 500 выпускников успешно закончили обучение и работают в ведущих компаниях СНГ и Европы.",
    mentors_title: "Наши преподаватели",
    mentors_subtitle: "Ведущие эксперты с опытом работы в международных проектах более 5 лет",
    faq_title: "Часто задаваемые вопросы",
    faq_subtitle: "Ответы на самые популярные вопросы студентов",

    // Консультация
    consult_title: "Не знаете, какую профессию выбрать?",
    consult_subtitle: "Оставьте номер, наш консультант поможет подобрать идеальное направление и запишет на бесплатный пробный урок.",
    consult_btn: "Записаться на бесплатный урок",

    // Футер
    footer_desc: "EduCenter — инновационный учебный центр, объединяющий передовые методики, менторов-практиков и сильное комьюнити.",
    footer_quick_links: "Быстрые ссылки",
    footer_courses_title: "Направления",
    footer_contact_title: "Контакты",
    footer_rights: "Все права защищены.",
    footer_developer_note: "Готово для деплоя на GitHub Pages, Vercel и Netlify."
  },

  en: {
    // Navigation
    brand_name: "EduCenter Academy",
    nav_home: "Home",
    nav_courses: "Courses & Store",
    nav_about: "About Us",
    nav_favorites: "Favorites",
    nav_cart: "Cart",
    nav_contact: "Contact",
    btn_apply: "Enroll Now",

    // Search
    search_placeholder: "Search courses or books (e.g. Frontend, Python)...",
    search_fav_placeholder: "Search in favorites...",
    search_global_title: "Quick Search",
    search_quick_placeholder: "Course name, category, or mentor...",
    search_quick_btn: "Search",
    search_results_for: "Search results for:",
    search_not_found: "No matching results found. Please try another query.",

    // Hero Section
    hero_badge: "🔥 Enrollment open for 2025/2026 Season!",
    hero_title: "Master future-proof skills from top industry mentors",
    hero_desc: "Learn coding, UI/UX design, foreign languages and digital marketing from scratch through real-world projects. Get certified worldwide.",
    hero_btn_explore: "Explore Courses",
    hero_btn_consult: "Free Consultation",
    hero_stat_students: "Graduated Students",
    hero_stat_courses: "Modern Courses",
    hero_stat_employment: "Employment Rate",
    hero_stat_mentors: "Expert Mentors",

    // Features
    features_title: "Why Choose Our Academy?",
    features_subtitle: "World-class educational standards and hands-on guidance",
    feat_1_title: "Hands-on Practice",
    feat_1_desc: "80% of our curriculum focuses on building real-world projects for your professional portfolio.",
    feat_2_title: "Career Mentorship",
    feat_2_desc: "We support you with resume building, mock interviews, and direct referrals to IT companies.",
    feat_3_title: "Recognized Certification",
    feat_3_desc: "Receive globally respected certificates upon graduation to accelerate your job applications.",
    feat_4_title: "24/7 Coworking Space",
    feat_4_desc: "Free access to our modern campus, high-speed Wi-Fi, coffee bar, and dedicated workstations.",

    // Popular Courses
    popular_courses_title: "Popular Courses & Materials",
    popular_courses_subtitle: "Handpicked curricula in high-demand global domains",
    view_all_courses: "Browse all courses →",
    filter_all: "All",
    filter_it: "Coding & IT",
    filter_design: "Design & UI/UX",
    filter_lang: "Languages",
    filter_business: "Marketing & Business",
    filter_books: "Books & Resources",

    // Card
    card_level: "Level:",
    card_duration: "Duration:",
    card_month: "/mo",
    card_one_time: "one-time",
    btn_add_cart: "Add to Cart",
    btn_in_cart: "In Cart",
    btn_details: "Details",

    // Favorites
    fav_title: "Your Saved Courses",
    fav_subtitle: "Save your favorite courses to review and purchase whenever you're ready",
    fav_empty_title: "Your favorites list is empty",
    fav_empty_desc: "Click the heart icon on any course card to bookmark it here.",
    fav_btn_browse: "Browse Catalog",
    fav_remove: "Remove",

    // Cart
    cart_title: "Shopping Cart",
    cart_subtitle: "Selected educational courses and study materials",
    cart_empty_title: "Your cart is empty",
    cart_empty_desc: "Visit our courses catalog and discover programs crafted for your career.",
    cart_btn_explore: "Explore Courses",
    cart_col_product: "Product / Course",
    cart_col_price: "Price",
    cart_col_qty: "Qty",
    cart_col_total: "Total",
    cart_col_action: "Action",
    cart_clear: "Clear Cart",
    cart_summary_title: "Order Summary",
    cart_subtotal: "Subtotal:",
    cart_discount: "Discount:",
    cart_total_price: "Total to Pay:",
    cart_promo_placeholder: "Promo code (e.g. DEMO2025)",
    cart_promo_apply: "Apply",
    cart_promo_success: "Promo code applied! Discount: ",

    // Checkout Form
    checkout_title: "Checkout & Enrollment",
    checkout_subtitle: "Fill in your details; order is dispatched directly to our official Telegram bot",
    form_name: "Full Name *",
    form_name_placeholder: "John Doe",
    form_phone: "Phone Number *",
    form_phone_placeholder: "+998 90 123 45 67",
    form_payment: "Payment Method *",
    form_payment_click: "Pay with Click",
    form_payment_payme: "Pay with Payme",
    form_payment_cash: "Cash / Card at Academy campus",
    form_comment: "Special requests or comments",
    form_comment_placeholder: "Preferred schedule, prior experience, or inquiries...",
    btn_submit_order: "Confirm Order (Send to Telegram Bot)",
    submitting_text: "Submitting order, please wait...",

    // Modals & Toasts
    order_success_title: "Order Successfully Placed! 🎉",
    order_success_desc: "Your order details have been securely sent to our Telegram bot (@oquvmarkazi222bot). Our counselor will contact you shortly.",
    order_number: "Order ID:",
    btn_close: "Close",
    toast_added_cart: "Added to cart successfully!",
    toast_removed_cart: "Removed from cart!",
    toast_added_fav: "Saved to favorites!",
    toast_removed_fav: "Removed from favorites!",
    toast_copied: "Copied to clipboard!",
    toast_telegram_error: "An error occurred while contacting Telegram. Please message our bot directly.",

    // About Us
    about_title: "About Our Academy",
    about_subtitle: "Empowering the next generation with cutting-edge, practical career education",
    about_story_title: "Our Mission & Vision",
    about_story_p1: "EduCenter Academy was founded in 2020 with the mission to prepare ambitious talent for global tech and design careers. We replace dry theory with intensive hands-on challenges.",
    about_story_p2: "To date, over 4,500 graduates have finished our programs and work in leading tech hubs and innovative startups worldwide.",
    mentors_title: "Our World-Class Mentors",
    mentors_subtitle: "Industry leaders with 5+ years of practical international experience",
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Clear answers to popular student questions",

    // Consultation
    consult_title: "Unsure which career path to choose?",
    consult_subtitle: "Leave your phone number for a free consultation with our advisor and a free trial lesson.",
    consult_btn: "Claim Free Trial Class",

    // Footer
    footer_desc: "EduCenter — modern career education built on real projects, top mentors, and an inspiring community.",
    footer_quick_links: "Quick Links",
    footer_courses_title: "Tracks",
    footer_contact_title: "Contact Info",
    footer_rights: "All rights reserved.",
    footer_developer_note: "Ready for GitHub Pages, Vercel, and Netlify deployment."
  }
};
