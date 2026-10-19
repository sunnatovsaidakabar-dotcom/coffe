/**
 * EduCenter - Asosiy Dastur Logikasi
 * Til, Mavzu, Savatcha, Saralanganlar, Qidiruv va Telegram Bot
 */

class EduApp {
  constructor() {
    this.currentLang = localStorage.getItem(CONFIG.STORAGE_KEYS.LANG) || 'uz';
    this.currentTheme = localStorage.getItem(CONFIG.STORAGE_KEYS.THEME) || 'dark';
    this.cart = this.loadStorage(CONFIG.STORAGE_KEYS.CART, []);
    this.favorites = this.loadStorage(CONFIG.STORAGE_KEYS.FAVORITES, []);
    this.activeCategory = 'all';
    this.searchQuery = '';
    this.appliedDiscount = 0; // percentage
    
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.setupLanguage();
    this.setupEventListeners();
    this.updateBadges();
    
    // Sahifaga mos funksiyalarni ishga tushirish
    const path = window.location.pathname.toLowerCase();
    if (path.includes('courses.html')) {
      this.initCoursesPage();
    } else if (path.includes('cart.html')) {
      this.initCartPage();
    } else if (path.includes('favorites.html')) {
      this.initFavoritesPage();
    } else if (path.includes('about.html')) {
      this.initAboutPage();
    } else {
      // index.html (Bosh sahifa)
      this.initHomePage();
    }
  }

  /* -------------------------------------------------------------
     STORAGE HELPERS
  ------------------------------------------------------------- */
  loadStorage(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  saveStorage(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Storage save error:', e);
    }
  }

  /* -------------------------------------------------------------
     THEME TOGGLE (DARK / LIGHT)
  ------------------------------------------------------------- */
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, theme);
    this.currentTheme = theme;
    
    // Ikonkani yangilash
    const themeIcons = document.querySelectorAll('.theme-toggle-icon');
    themeIcons.forEach(icon => {
      icon.className = theme === 'dark' ? 'fas fa-sun theme-toggle-icon' : 'fas fa-moon theme-toggle-icon';
    });
  }

  toggleTheme() {
    const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme);
  }

  /* -------------------------------------------------------------
     LANGUAGE (UZ, RU, EN)
  ------------------------------------------------------------- */
  setupLanguage() {
    this.applyTranslations();
    
    // Til menyusi bosilganda
    const currentLangLabel = document.getElementById('currentLangLabel');
    if (currentLangLabel) {
      currentLangLabel.textContent = this.currentLang.toUpperCase();
    }

    // Faol til belgisi
    document.querySelectorAll('.lang-item').forEach(item => {
      if (item.dataset.lang === this.currentLang) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  setLanguage(lang) {
    if (!['uz', 'ru', 'en'].includes(lang)) return;
    this.currentLang = lang;
    localStorage.setItem(CONFIG.STORAGE_KEYS.LANG, lang);
    this.setupLanguage();
    
    // Joriy sahifa ro'yxatlarini qayta chizish
    const path = window.location.pathname.toLowerCase();
    if (path.includes('courses.html')) {
      this.renderCoursesCatalog();
    } else if (path.includes('cart.html')) {
      this.renderCartTable();
    } else if (path.includes('favorites.html')) {
      this.renderFavoritesCatalog();
    } else if (path.includes('about.html')) {
      this.renderMentors();
    } else {
      this.renderHomeCourses();
    }
  }

  t(key) {
    return TRANSLATIONS[this.currentLang]?.[key] || TRANSLATIONS['uz']?.[key] || key;
  }

  applyTranslations() {
    // Matnli elementlar
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (text) el.textContent = text;
    });

    // Placeholderlar
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      const text = this.t(key);
      if (text) el.placeholder = text;
    });
  }

  formatPrice(price) {
    return new Intl.NumberFormat('uz-UZ').format(price) + ' ' + CONFIG.CURRENCY;
  }

  /* -------------------------------------------------------------
     GLOBAL EVENTS (HEADER, BURGER, MODALS)
  ------------------------------------------------------------- */
  setupEventListeners() {
    // Mavzu almashtirish tugmasi
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => this.toggleTheme());
    }

    // Til ochiladigan ro'yxati
    const langBtn = document.getElementById('langSelectorBtn');
    const langDropdown = document.getElementById('langDropdown');
    if (langBtn && langDropdown) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
      });

      document.addEventListener('click', () => {
        langDropdown.classList.remove('show');
      });

      document.querySelectorAll('.lang-item').forEach(btn => {
        btn.addEventListener('click', () => {
          this.setLanguage(btn.dataset.lang);
        });
      });
    }

    // Mobil menyu
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
      });
    }

    // Global Search header input (mavjud bo'lsa)
    const headerSearchInput = document.getElementById('headerSearchInput');
    if (headerSearchInput) {
      headerSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          const q = encodeURIComponent(headerSearchInput.value.trim());
          if (q) window.location.href = `courses.html?q=${q}`;
        }
      });
    }

    // Global Search Modal ochish va boshqarish
    const globalSearchBtn = document.getElementById('globalSearchBtn');
    const globalSearchModal = document.getElementById('globalSearchModal');
    const globalSearchInput = document.getElementById('globalSearchInput');

    if (globalSearchBtn && globalSearchModal && globalSearchInput) {
      globalSearchBtn.addEventListener('click', () => {
        globalSearchModal.classList.add('active');
        setTimeout(() => globalSearchInput.focus(), 150);
        this.renderGlobalSearchResults(globalSearchInput.value.trim());
      });

      globalSearchInput.addEventListener('input', (e) => {
        this.renderGlobalSearchResults(e.target.value.trim().toLowerCase());
      });
    }

    // Modalni yopish hodisalari
    document.querySelectorAll('.modal-close-btn, .modal-close-action').forEach(btn => {
      btn.addEventListener('click', () => this.closeModals());
    });

    const modalOverlays = document.querySelectorAll('.modal-overlay');
    modalOverlays.forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) this.closeModals();
      });
    });
  }

  renderGlobalSearchResults(query) {
    const container = document.getElementById('globalSearchResults');
    if (!container) return;

    let results = COURSES_DATA;
    if (query) {
      results = COURSES_DATA.filter(course => {
        const title = (course.title[this.currentLang] || course.title.uz).toLowerCase();
        const desc = (course.description[this.currentLang] || course.description.uz).toLowerCase();
        const mentor = (course.mentor?.name || '').toLowerCase();
        const cat = (course.category || '').toLowerCase();
        return title.includes(query) || desc.includes(query) || mentor.includes(query) || cat.includes(query);
      });
    }

    if (results.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem; color: var(--text-muted);">
          <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 0.5rem; opacity: 0.4;"></i>
          <p>${this.t('search_not_found')}</p>
        </div>
      `;
      return;
    }

    container.innerHTML = results.slice(0, 5).map(course => {
      const title = course.title[this.currentLang] || course.title.uz;
      return `
        <div class="search-result-item" style="display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 10px 14px; border-radius: var(--radius-md); background: var(--bg-surface-elevated); border: 1px solid var(--border-color); cursor: pointer; transition: all var(--transition-fast);" onclick="window.eduApp.closeModals(); window.eduApp.openCourseModal(${course.id});">
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="${course.image}" alt="${title}" style="width: 52px; height: 44px; border-radius: var(--radius-sm); object-fit: cover;">
            <div>
              <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-main);">${title}</div>
              <div style="font-size: 0.8rem; color: var(--text-subtle);">${course.category.toUpperCase()} • ⭐ ${course.rating}</div>
            </div>
          </div>
          <div style="text-align: right;">
            <div style="font-weight: 800; font-family: var(--font-heading); color: var(--primary); font-size: 0.95rem;">${this.formatPrice(course.price)}</div>
            <button class="btn btn-sm btn-outline" style="padding: 4px 10px; font-size: 0.75rem; margin-top: 4px;">Ko'rish</button>
          </div>
        </div>
      `;
    }).join('');
  }

  updateBadges() {
    const cartBadges = document.querySelectorAll('.cart-count-badge');
    const favBadges = document.querySelectorAll('.fav-count-badge');
    
    const cartCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    const favCount = this.favorites.length;

    cartBadges.forEach(b => {
      b.textContent = cartCount;
      b.style.display = cartCount > 0 ? 'flex' : 'none';
    });

    favBadges.forEach(b => {
      b.textContent = favCount;
      b.style.display = favCount > 0 ? 'flex' : 'none';
    });
  }

  showToast(message, type = 'success') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const iconClass = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    toast.innerHTML = `
      <i class="fas ${iconClass} toast-icon"></i>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 50);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  closeModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  }

  /* -------------------------------------------------------------
     CART LOGIC (SAVATCHA)
  ------------------------------------------------------------- */
  addToCart(courseId, qty = 1) {
    const course = COURSES_DATA.find(c => c.id === courseId);
    if (!course) return;

    const existing = this.cart.find(item => item.id === courseId);
    if (existing) {
      existing.quantity += qty;
    } else {
      this.cart.push({ id: courseId, quantity: qty });
    }

    this.saveStorage(CONFIG.STORAGE_KEYS.CART, this.cart);
    this.updateBadges();
    this.showToast(this.t('toast_added_cart'), 'success');
  }

  removeFromCart(courseId) {
    this.cart = this.cart.filter(item => item.id !== courseId);
    this.saveStorage(CONFIG.STORAGE_KEYS.CART, this.cart);
    this.updateBadges();
    this.showToast(this.t('toast_removed_cart'), 'error');
    if (window.location.pathname.toLowerCase().includes('cart.html')) {
      this.renderCartTable();
    }
  }

  updateCartQty(courseId, delta) {
    const item = this.cart.find(i => i.id === courseId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeFromCart(courseId);
    } else {
      this.saveStorage(CONFIG.STORAGE_KEYS.CART, this.cart);
      this.updateBadges();
      this.renderCartTable();
    }
  }

  clearCart() {
    this.cart = [];
    this.saveStorage(CONFIG.STORAGE_KEYS.CART, this.cart);
    this.updateBadges();
    if (window.location.pathname.toLowerCase().includes('cart.html')) {
      this.renderCartTable();
    }
  }

  /* -------------------------------------------------------------
     FAVORITES LOGIC (SARALANGANLAR)
  ------------------------------------------------------------- */
  isFavorite(courseId) {
    return this.favorites.includes(courseId);
  }

  toggleFavorite(courseId) {
    if (this.isFavorite(courseId)) {
      this.favorites = this.favorites.filter(id => id !== courseId);
      this.showToast(this.t('toast_removed_fav'), 'error');
    } else {
      this.favorites.push(courseId);
      this.showToast(this.t('toast_added_fav'), 'success');
    }

    this.saveStorage(CONFIG.STORAGE_KEYS.FAVORITES, this.favorites);
    this.updateBadges();
    
    // UI yangilash
    document.querySelectorAll(`.fav-toggle-btn[data-id="${courseId}"]`).forEach(btn => {
      btn.classList.toggle('favorited', this.isFavorite(courseId));
    });

    if (window.location.pathname.toLowerCase().includes('favorites.html')) {
      this.renderFavoritesCatalog();
    }
  }

  /* -------------------------------------------------------------
     TELEGRAM BOT INTEGRATION
  ------------------------------------------------------------- */
  async sendTelegramMessage(text) {
    try {
      const response = await fetch(CONFIG.TELEGRAM.API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CONFIG.TELEGRAM.CHAT_ID,
          text: text,
          parse_mode: 'HTML'
        })
      });

      const resData = await response.json();
      return resData.ok;
    } catch (error) {
      console.error('Telegram API xatoligi:', error);
      return false;
    }
  }

  async handleOrderSubmit(formData) {
    if (this.cart.length === 0) {
      alert("Savatchangiz bo'sh!");
      return false;
    }

    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    const dateStr = new Date().toLocaleString('uz-UZ');

    let itemsText = '';
    let totalSum = 0;

    this.cart.forEach((cartItem, index) => {
      const course = COURSES_DATA.find(c => c.id === cartItem.id);
      if (course) {
        const itemTotal = course.price * cartItem.quantity;
        totalSum += itemTotal;
        const title = course.title[this.currentLang] || course.title.uz;
        itemsText += `\n${index + 1}. <b>${title}</b>\n   ↳ ${cartItem.quantity} x ${this.formatPrice(course.price)} = <b>${this.formatPrice(itemTotal)}</b>`;
      }
    });

    const discountAmount = Math.round(totalSum * (this.appliedDiscount / 100));
    const finalSum = totalSum - discountAmount;

    // Telegram uchun xabar matni (HTML formatida)
    const telegramMessage = `
🎓 <b>YANGI BUYURTMA | EDUCENTER</b>
━━━━━━━━━━━━━━━━━━━━
🆔 <b>Buyurtma ID:</b> <code>${orderId}</code>
📅 <b>Sana:</b> ${dateStr}
🌐 <b>Sayt tili:</b> ${this.currentLang.toUpperCase()}

👤 <b>Mijoz:</b> ${formData.name}
📞 <b>Telefon:</b> <code>${formData.phone}</code>
💳 <b>To'lov usuli:</b> ${formData.payment}
💬 <b>Izoh:</b> ${formData.comment ? formData.comment : 'Yo\'q'}
━━━━━━━━━━━━━━━━━━━━
📦 <b>BUYURTMA TARKIBI:</b>${itemsText}
━━━━━━━━━━━━━━━━━━━━
📊 <b>Oraliq summa:</b> ${this.formatPrice(totalSum)}
🎁 <b>Chegirma:</b> ${this.appliedDiscount}% (-${this.formatPrice(discountAmount)})
💰 <b>YAKUNIY TO'LOV:</b> <b>${this.formatPrice(finalSum)}</b>
━━━━━━━━━━━━━━━━━━━━
🤖 <i>EduCenter Web saytidan avtomatik yuborildi</i>
    `.trim();

    // Telegramga yuborish
    const success = await this.sendTelegramMessage(telegramMessage);

    if (success) {
      // Savatchani tozalash
      this.clearCart();
      
      // Muvaffaqiyatli modalni ochish
      const orderSuccessModal = document.getElementById('orderSuccessModal');
      const orderNumberDisplay = document.getElementById('orderNumberDisplay');
      if (orderNumberDisplay) orderNumberDisplay.textContent = orderId;
      if (orderSuccessModal) orderSuccessModal.classList.add('active');

      return true;
    } else {
      this.showToast(this.t('toast_telegram_error'), 'error');
      return false;
    }
  }

  async handleConsultationSubmit(name, phone) {
    const dateStr = new Date().toLocaleString('uz-UZ');
    const text = `
🎯 <b>BEPUL MASLAHAT / KONSULTATSIYA</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Ism:</b> ${name}
📞 <b>Telefon:</b> <code>${phone}</code>
📅 <b>Sana:</b> ${dateStr}
🌐 <b>Til:</b> ${this.currentLang.toUpperCase()}
━━━━━━━━━━━━━━━━━━━━
⚡️ <i>Iltimos, mijoz bilan 10 daqiqa ichida bog'laning!</i>
    `.trim();

    const ok = await this.sendTelegramMessage(text);
    if (ok) {
      this.showToast(this.t('order_success_title'), 'success');
      this.closeModals();
    } else {
      this.showToast(this.t('toast_telegram_error'), 'error');
    }
    return ok;
  }

  /* -------------------------------------------------------------
     RENDER CARDS HELPER
  ------------------------------------------------------------- */
  createCourseCardHTML(course) {
    const isFav = this.isFavorite(course.id);
    const title = course.title[this.currentLang] || course.title.uz;
    const desc = course.description[this.currentLang] || course.description.uz;
    const level = course.level[this.currentLang] || course.level.uz;
    const duration = course.duration[this.currentLang] || course.duration.uz;
    const billingSuffix = course.billingType === 'monthly' ? this.t('card_month') : '';

    return `
      <div class="course-card" data-id="${course.id}" data-category="${course.category}">
        <div class="course-thumb-wrap">
          <img src="${course.image}" alt="${title}" class="course-img" loading="lazy">
          <span class="badge-tag">${course.badge}</span>
          <button class="fav-toggle-btn ${isFav ? 'favorited' : ''}" data-id="${course.id}" title="Saralanganlarga saqlash">
            <i class="fas fa-heart"></i>
          </button>
        </div>

        <div class="course-content">
          <div class="course-meta">
            <div class="course-rating">
              <i class="fas fa-star"></i>
              <span>${course.rating}</span>
              <span style="color: var(--text-subtle); font-weight: normal;">(${course.reviewsCount})</span>
            </div>
            <span><i class="fas fa-user-graduate"></i> ${course.studentsCount}</span>
          </div>

          <h3 class="course-title">${title}</h3>
          <p class="course-desc">${desc}</p>

          <div class="course-details-pills">
            <div class="detail-pill">
              <i class="fas fa-layer-group"></i>
              <span>${level}</span>
            </div>
            <div class="detail-pill">
              <i class="fas fa-clock"></i>
              <span>${duration}</span>
            </div>
          </div>

          <div class="course-footer">
            <div class="course-price-wrap">
              <span class="course-price">${this.formatPrice(course.price)}${billingSuffix}</span>
              ${course.oldPrice ? `<span class="course-old-price">${this.formatPrice(course.oldPrice)}</span>` : ''}
            </div>
            <div class="course-actions-wrap">
              <button class="btn btn-secondary btn-sm btn-course-details" data-id="${course.id}">
                ${this.t('btn_details')}
              </button>
              <button class="btn btn-primary btn-sm btn-add-cart" data-id="${course.id}">
                <i class="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  attachCardEvents(container) {
    if (!container) return;

    // Savatchaga qo'shish
    container.querySelectorAll('.btn-add-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id, 10);
        this.addToCart(id);
      });
    });

    // Saralanganlarga qo'shish
    container.querySelectorAll('.fav-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id, 10);
        this.toggleFavorite(id);
      });
    });

    // Batafsil modalini ochish
    container.querySelectorAll('.btn-course-details').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id, 10);
        this.openCourseModal(id);
      });
    });
  }

  openCourseModal(courseId) {
    const course = COURSES_DATA.find(c => c.id === courseId);
    if (!course) return;

    const modal = document.getElementById('courseDetailModal');
    const content = document.getElementById('courseModalBody');
    if (!modal || !content) return;

    const title = course.title[this.currentLang] || course.title.uz;
    const desc = course.description[this.currentLang] || course.description.uz;
    const level = course.level[this.currentLang] || course.level.uz;
    const duration = course.duration[this.currentLang] || course.duration.uz;
    const mentorRole = course.mentor.role;

    content.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <img src="${course.image}" alt="${title}" style="width: 100%; height: 260px; object-fit: cover; border-radius: var(--radius-lg); margin-bottom: 1.25rem;">
        <span class="badge-tag" style="position: static; display: inline-block; margin-bottom: 8px;">${course.badge}</span>
        <h2 style="font-family: var(--font-heading); font-size: 1.75rem; margin-bottom: 0.75rem;">${title}</h2>
        <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 1.25rem;">${desc}</p>
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.5rem; background: var(--bg-surface-elevated); padding: 1rem; border-radius: var(--radius-md);">
          <div><strong>${this.t('card_level')}:</strong> ${level}</div>
          <div><strong>${this.t('card_duration')}:</strong> ${duration}</div>
          <div><strong>Reyting:</strong> ⭐ ${course.rating} (${course.reviewsCount} baho)</div>
          <div><strong>Talabalar:</strong> 👨‍🎓 ${course.studentsCount} ta</div>
        </div>

        <h4 style="font-family: var(--font-heading); margin-bottom: 0.75rem;">Dars dasturi (Syllabus):</h4>
        <ul style="margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 8px;">
          ${course.syllabus.map((s, idx) => `
            <li style="display: flex; gap: 8px; font-size: 0.9rem; color: var(--text-muted);">
              <i class="fas fa-check-circle" style="color: var(--primary); margin-top: 4px;"></i>
              <span>${idx + 1}. ${s}</span>
            </li>
          `).join('')}
        </ul>

        <div style="display: flex; align-items: center; gap: 14px; padding: 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); margin-bottom: 1.5rem;">
          <img src="${course.mentor.avatar}" alt="${course.mentor.name}" style="width: 54px; height: 54px; border-radius: 50%; object-fit: cover;">
          <div>
            <div style="font-weight: 700;">${course.mentor.name}</div>
            <div style="font-size: 0.85rem; color: var(--primary);">${mentorRole}</div>
          </div>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
          <div style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 800; color: var(--primary);">
            ${this.formatPrice(course.price)}
          </div>
          <button class="btn btn-primary" onclick="window.eduApp.addToCart(${course.id}); window.eduApp.closeModals();">
            <i class="fas fa-cart-plus"></i> ${this.t('btn_add_cart')}
          </button>
        </div>
      </div>
    `;

    modal.classList.add('active');
  }

  /* -------------------------------------------------------------
     PAGE INITIALIZERS
  ------------------------------------------------------------- */
  // 1. Home Page
  initHomePage() {
    this.renderHomeCourses();
    this.renderReviews();
    
    // Quick lead consultation form
    const consultForm = document.getElementById('homeConsultForm');
    if (consultForm) {
      consultForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('consultName').value.trim();
        const phone = document.getElementById('consultPhone').value.trim();
        if (name && phone) {
          const btn = consultForm.querySelector('button[type="submit"]');
          const original = btn.textContent;
          btn.textContent = this.t('submitting_text');
          btn.disabled = true;
          await this.handleConsultationSubmit(name, phone);
          btn.textContent = original;
          btn.disabled = false;
          consultForm.reset();
        }
      });
    }
  }

  renderHomeCourses() {
    const container = document.getElementById('homeCoursesGrid');
    if (!container) return;
    
    // Eng sara 6 ta kursni chiqarish
    const topCourses = COURSES_DATA.slice(0, 6);
    container.innerHTML = topCourses.map(c => this.createCourseCardHTML(c)).join('');
    this.attachCardEvents(container);
  }

  renderReviews() {
    const container = document.getElementById('reviewsGrid');
    if (!container) return;

    container.innerHTML = REVIEWS_DATA.map(rev => {
      const text = rev.text[this.currentLang] || rev.text.uz;
      return `
        <div class="review-card">
          <div class="review-stars">
            ${'<i class="fas fa-star"></i>'.repeat(rev.rating)}
          </div>
          <p class="review-text">"${text}"</p>
          <div class="review-author">
            <img src="${rev.avatar}" alt="${rev.name}" class="review-avatar">
            <div>
              <div class="author-name">${rev.name}</div>
              <div class="author-course">${rev.course}</div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 2. Courses Page
  initCoursesPage() {
    // URL parametrlaridan qidiruv so'zini olish
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if (q) {
      this.searchQuery = decodeURIComponent(q);
      const searchInput = document.getElementById('courseSearchInput');
      if (searchInput) searchInput.value = this.searchQuery;
    }

    // Filter tugmalari
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeCategory = btn.dataset.category;
        this.renderCoursesCatalog();
      });
    });

    // Jonli qidiruv
    const searchInput = document.getElementById('courseSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.renderCoursesCatalog();
      });
    }

    this.renderCoursesCatalog();
  }

  renderCoursesCatalog() {
    const container = document.getElementById('catalogCoursesGrid');
    const emptyState = document.getElementById('catalogEmptyState');
    if (!container) return;

    let filtered = COURSES_DATA.filter(course => {
      const matchCategory = this.activeCategory === 'all' || course.category === this.activeCategory;
      const title = (course.title[this.currentLang] || course.title.uz).toLowerCase();
      const desc = (course.description[this.currentLang] || course.description.uz).toLowerCase();
      const matchSearch = !this.searchQuery || title.includes(this.searchQuery) || desc.includes(this.searchQuery);
      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
    } else {
      if (emptyState) emptyState.style.display = 'none';
      container.innerHTML = filtered.map(c => this.createCourseCardHTML(c)).join('');
      this.attachCardEvents(container);
    }
  }

  // 3. Favorites Page
  initFavoritesPage() {
    this.favSearchQuery = '';
    const favSearchInput = document.getElementById('favSearchInput');
    if (favSearchInput) {
      favSearchInput.addEventListener('input', (e) => {
        this.favSearchQuery = e.target.value.trim().toLowerCase();
        this.renderFavoritesCatalog();
      });
    }

    this.renderFavoritesCatalog();
  }

  renderFavoritesCatalog() {
    const container = document.getElementById('favCoursesGrid');
    const emptyState = document.getElementById('favEmptyState');
    if (!container) return;

    let favCourses = COURSES_DATA.filter(c => this.favorites.includes(c.id));

    if (this.favSearchQuery) {
      favCourses = favCourses.filter(course => {
        const title = (course.title[this.currentLang] || course.title.uz).toLowerCase();
        const desc = (course.description[this.currentLang] || course.description.uz).toLowerCase();
        return title.includes(this.favSearchQuery) || desc.includes(this.favSearchQuery);
      });
    }

    if (favCourses.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
    } else {
      if (emptyState) emptyState.style.display = 'none';
      container.innerHTML = favCourses.map(c => this.createCourseCardHTML(c)).join('');
      this.attachCardEvents(container);
    }
  }

  // 4. Cart Page
  initCartPage() {
    this.renderCartTable();

    // Promokod formasi
    const promoBtn = document.getElementById('applyPromoBtn');
    const promoInput = document.getElementById('promoCodeInput');
    if (promoBtn && promoInput) {
      promoBtn.addEventListener('click', () => {
        const code = promoInput.value.trim().toUpperCase();
        if (CONFIG.PROMO_CODES[code]) {
          this.appliedDiscount = CONFIG.PROMO_CODES[code];
          this.showToast(`${this.t('cart_promo_success')} ${this.appliedDiscount}%`, 'success');
          this.renderCartTable();
        } else {
          this.showToast("Noto'g'ri promokod!", 'error');
        }
      });
    }

    // Savatchani tozalash
    const clearBtn = document.getElementById('clearCartBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (confirm("Haqiqatan ham savatchani tozalamoqchimisiz?")) {
          this.clearCart();
        }
      });
    }

    // Buyurtma berish formasi
    const checkoutForm = document.getElementById('checkoutOrderForm');
    if (checkoutForm) {
      checkoutForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = checkoutForm.querySelector('button[type="submit"]');
        const origText = submitBtn.innerHTML;

        const formData = {
          name: document.getElementById('orderName').value.trim(),
          phone: document.getElementById('orderPhone').value.trim(),
          payment: document.getElementById('orderPayment').value,
          comment: document.getElementById('orderComment').value.trim()
        };

        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${this.t('submitting_text')}`;

        await this.handleOrderSubmit(formData);

        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
      });
    }
  }

  renderCartTable() {
    const listContainer = document.getElementById('cartItemsList');
    const emptyState = document.getElementById('cartEmptyState');
    const cartWrapper = document.getElementById('cartContentWrapper');
    if (!listContainer) return;

    if (this.cart.length === 0) {
      if (cartWrapper) cartWrapper.style.display = 'none';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (cartWrapper) cartWrapper.style.display = 'grid';
    if (emptyState) emptyState.style.display = 'none';

    let subtotal = 0;
    listContainer.innerHTML = this.cart.map(item => {
      const course = COURSES_DATA.find(c => c.id === item.id);
      if (!course) return '';
      const itemTotal = course.price * item.quantity;
      subtotal += itemTotal;
      const title = course.title[this.currentLang] || course.title.uz;

      return `
        <div class="cart-item">
          <img src="${course.image}" alt="${title}" class="cart-thumb">
          <div>
            <div class="cart-item-title">${title}</div>
            <div class="cart-item-cat">${course.category.toUpperCase()} • ${this.formatPrice(course.price)}</div>
          </div>
          <div class="qty-control">
            <button class="qty-btn" onclick="window.eduApp.updateCartQty(${course.id}, -1)">
              <i class="fas fa-minus"></i>
            </button>
            <span class="qty-number">${item.quantity}</span>
            <button class="qty-btn" onclick="window.eduApp.updateCartQty(${course.id}, 1)">
              <i class="fas fa-plus"></i>
            </button>
          </div>
          <div class="cart-item-total">
            ${this.formatPrice(itemTotal)}
          </div>
          <button class="cart-remove-btn" onclick="window.eduApp.removeFromCart(${course.id})" title="O'chirish">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      `;
    }).join('');

    // Narxlarni hisoblash
    const discountAmount = Math.round(subtotal * (this.appliedDiscount / 100));
    const finalTotal = subtotal - discountAmount;

    const subtotalEl = document.getElementById('cartSubtotalAmount');
    const discountEl = document.getElementById('cartDiscountAmount');
    const totalEl = document.getElementById('cartFinalTotalAmount');

    if (subtotalEl) subtotalEl.textContent = this.formatPrice(subtotal);
    if (discountEl) discountEl.textContent = `-${this.formatPrice(discountAmount)} (${this.appliedDiscount}%)`;
    if (totalEl) totalEl.textContent = this.formatPrice(finalTotal);
  }

  // 5. About Page
  initAboutPage() {
    this.renderMentors();
  }

  renderMentors() {
    const container = document.getElementById('aboutMentorsGrid');
    if (!container) return;

    container.innerHTML = MENTORS_DATA.map(m => {
      const role = m.role[this.currentLang] || m.role.uz;
      const bio = m.bio[this.currentLang] || m.bio.uz;
      return `
        <div class="mentor-card">
          <div class="mentor-photo-wrap">
            <img src="${m.image}" alt="${m.name}" class="mentor-photo" loading="lazy">
          </div>
          <div class="mentor-info">
            <h4 class="mentor-name">${m.name}</h4>
            <div class="mentor-role">${role}</div>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">${bio}</p>
            <span class="mentor-exp">${m.exp}</span>
          </div>
        </div>
      `;
    }).join('');
  }
}

// Global ishga tushirish
document.addEventListener('DOMContentLoaded', () => {
  window.eduApp = new EduApp();
});
