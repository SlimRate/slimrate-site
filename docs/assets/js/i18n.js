/**
 * Slimrate i18n (Internationalization) Module
 * Handles language detection, translation loading, and language switching
 */

class I18n {
  constructor() {
    this.translations = {};
    this.supportedLangs = ['en', 'es'];
    this.defaultLang = 'en';
    this.currentLang = this.detectLanguage();
    this.isLoaded = false;
    this.loadPromise = null;
  }

  /**
   * Detect current language from URL, localStorage, or browser
   */
  detectLanguage() {
    // 1. URL path detection (/es/)
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    if (pathParts.length > 0 && this.supportedLangs.includes(pathParts[0])) {
      return pathParts[0];
    }
    
    // 2. localStorage preference
    const stored = localStorage.getItem('slimrate-lang');
    if (stored && this.supportedLangs.includes(stored)) {
      return stored;
    }
    
    // 3. Browser language
    const browserLang = navigator.language?.split('-')[0];
    if (browserLang && this.supportedLangs.includes(browserLang)) {
      return browserLang;
    }
    
    return this.defaultLang;
  }

  /**
   * Get the base path for assets (handles language subdirectories)
   */
  getBasePath() {
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    if (pathParts.length > 0 && this.supportedLangs.includes(pathParts[0])) {
      return '../';
    }
    return '';
  }

  /**
   * Load translations for the current language
   */
  async loadTranslations(lang = this.currentLang) {
    if (this.translations[lang]) {
      return this.translations[lang];
    }

    try {
      const basePath = this.getBasePath();
      const response = await fetch(`${basePath}i18n/${lang}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load translations for ${lang}`);
      }
      this.translations[lang] = await response.json();
      return this.translations[lang];
    } catch (error) {
      console.error(`Error loading translations for ${lang}:`, error);
      // Fallback to default language
      if (lang !== this.defaultLang) {
        return this.loadTranslations(this.defaultLang);
      }
      return {};
    }
  }

  /**
   * Initialize i18n - load translations and set up
   */
  async init() {
    if (this.loadPromise) {
      return this.loadPromise;
    }

    this.loadPromise = this.loadTranslations().then(() => {
      this.isLoaded = true;
      // Dispatch event when translations are loaded
      window.dispatchEvent(new CustomEvent('i18n:loaded', { 
        detail: { lang: this.currentLang } 
      }));
      return this.translations[this.currentLang];
    });

    return this.loadPromise;
  }

  /**
   * Get translation by key (dot notation supported)
   * @param {string} key - Translation key like "nav.solutions" or "home.hero.title"
   * @param {object} params - Optional parameters for interpolation
   */
  t(key, params = {}) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    
    // If not found, try default language
    if (value === undefined && this.currentLang !== this.defaultLang) {
      value = this.translations[this.defaultLang];
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) break;
      }
    }
    
    // Return key if translation not found
    if (value === undefined) {
      console.warn(`Translation not found: ${key}`);
      return key;
    }
    
    // Handle interpolation {{param}}
    if (typeof value === 'string' && Object.keys(params).length > 0) {
      return value.replace(/\{\{(\w+)\}\}/g, (match, paramKey) => {
        return params[paramKey] !== undefined ? params[paramKey] : match;
      });
    }
    
    return value;
  }

  /**
   * Check if a language is currently active
   */
  isCurrentLang(lang) {
    return this.currentLang === lang;
  }

  /**
   * Build URL for a different language version of current page
   */
  buildLanguageUrl(targetLang) {
    const currentPath = window.location.pathname;
    let cleanPath = currentPath;
    
    // Remove current language prefix if exists
    for (const lang of this.supportedLangs) {
      if (currentPath.startsWith(`/${lang}/`)) {
        cleanPath = currentPath.substring(lang.length + 1);
        break;
      } else if (currentPath === `/${lang}`) {
        cleanPath = '/';
        break;
      }
    }
    
    // Ensure path starts with /
    if (!cleanPath.startsWith('/')) {
      cleanPath = '/' + cleanPath;
    }
    
    // Add new language prefix (except for default 'en')
    if (targetLang === this.defaultLang) {
      return cleanPath;
    }
    
    return `/${targetLang}${cleanPath}`;
  }

  /**
   * Switch to a different language (redirects to language-specific URL)
   */
  switchLanguage(lang) {
    if (!this.supportedLangs.includes(lang)) {
      console.error(`Language ${lang} is not supported`);
      return;
    }
    
    localStorage.setItem('slimrate-lang', lang);
    const newUrl = this.buildLanguageUrl(lang);
    window.location.href = newUrl;
  }

  /**
   * Get current page name without language prefix
   */
  getCurrentPageName() {
    const path = window.location.pathname;
    const parts = path.split('/').filter(Boolean);
    
    // Remove language prefix if present
    if (parts.length > 0 && this.supportedLangs.includes(parts[0])) {
      parts.shift();
    }
    
    return parts.length > 0 ? parts.join('/') : 'index.html';
  }

  /**
   * Get all supported languages with their metadata
   */
  getLanguages() {
    return [
      { 
        code: 'en', 
        name: 'English', 
        nativeName: 'English',
        flag: 'en.svg',
        url: this.buildLanguageUrl('en')
      },
      { 
        code: 'es', 
        name: 'Spanish', 
        nativeName: 'Español',
        flag: 'es.svg',
        url: this.buildLanguageUrl('es')
      }
    ];
  }

  /**
   * Update document lang attribute
   */
  updateDocumentLang() {
    document.documentElement.lang = this.currentLang;
  }
}

// Create global instance
window.i18n = new I18n();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.i18n.init().then(() => {
      window.i18n.updateDocumentLang();
    });
  });
} else {
  window.i18n.init().then(() => {
    window.i18n.updateDocumentLang();
  });
}
