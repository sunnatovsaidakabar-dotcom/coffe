/**
 * EduCenter - Web Ilovasi Konfiguratsiyasi
 * Telegram Bot va Tizim Sozlamalari
 */

const CONFIG = {
  // Foydalanuvchi taqdim etgan Telegram Bot ma'lumotlari
  TELEGRAM: {
    BOT_TOKEN: '8645438159:AAFwIP2kG-UojOy_Gc3c5ts39rP5Wf-h2n0',
    CHAT_ID: '6932874571',
    API_URL: 'https://api.telegram.org/bot8645438159:AAFwIP2kG-UojOy_Gc3c5ts39rP5Wf-h2n0/sendMessage'
  },

  // Markaz haqida umumiy ma'lumotlar
  CENTER_INFO: {
    name: 'Najot Edu Academy',
    phone: '+998 71 200 11 22',
    telegramAdmin: 'https://t.me/oquvmarkazi222bot',
    address: "Toshkent sh., Yunusobod t., Amir Temur ko'chasi 107-B",
    workingHours: '09:00 - 20:00 (Har kuni)'
  },

  // Mahsulot va kurslar valyutasi
  CURRENCY: "so'm",

  // LocalStorage kalitlari
  STORAGE_KEYS: {
    THEME: 'educenter_theme',
    LANG: 'educenter_lang',
    CART: 'educenter_cart',
    FAVORITES: 'educenter_favorites'
  },

  // Promokodlar
  PROMO_CODES: {
    'DEMO2025': 15, // 15% chegirma
    'NAJOT10': 10,   // 10% chegirma
    'TALABA': 20    // 20% chegirma
  }
};
