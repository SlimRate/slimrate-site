# План мультиязычности для Slimrate

## 📊 Анализ текущей структуры

### Текущее состояние:
- **Основной язык:** Английский (`lang="en"`)
- **Количество HTML-страниц:** ~50 страниц
- **Архитектура:** Статический сайт на Netlify
- **Компоненты:** Web Components (Custom Elements)
- **Контент:** Жёстко закодирован в HTML и JS-компонентах
- **SEO-теги:** Meta description, canonical, Open Graph присутствуют
- **Хостинг:** Netlify (поддерживает i18n redirect rules)

### Типы контента для перевода:
1. **HTML-страницы** (`docs/*.html`) — ~50 файлов
2. **Web Components** (`docs/components/*.js`) — ~45 компонентов
3. **Data файлы** (`docs/data/*.js`) — данные о продуктах
4. **Meta-теги** — title, description, og:tags
5. **Меню навигации** — top_menu.js, bottom_menu.js

---

## 🎯 Рекомендуемый подход: Subdirectory-based (Поддиректории)

### Почему поддиректории?

| Подход | SEO | Поддержка | Стоимость |
|--------|-----|-----------|-----------|
| **Поддиректории** `/es/`, `/ru/` | ⭐⭐⭐⭐⭐ | Легко | Низкая |
| Субдомены `es.slimrate.com` | ⭐⭐⭐⭐ | Средне | Средняя |
| Отдельные домены `.es`, `.ru` | ⭐⭐⭐⭐⭐ | Сложно | Высокая |
| Query параметры `?lang=es` | ⭐⭐ | Легко | Низкая |

**Выбор: Поддиректории** — лучший баланс SEO и простоты.

---

## 📁 Предлагаемая файловая структура

```
docs/
├── index.html                    # EN (по умолчанию)
├── software.html                 # EN
├── ... (все текущие файлы)
│
├── es/                           # Испанский
│   ├── index.html
│   ├── software.html
│   └── ...
│
├── ru/                           # Русский (если нужен)
│   ├── index.html
│   └── ...
│
├── i18n/                         # Система переводов
│   ├── en.json                   # Английские строки
│   ├── es.json                   # Испанские строки
│   └── ru.json                   # Русские строки
│
├── assets/
│   └── js/
│       ├── i18n.js               # Модуль интернационализации
│       └── language-switcher.js  # Переключатель языков
│
└── components/
    └── language_switcher.js      # Web Component переключателя
```

---

## 🔧 Архитектура решения

### 1. Файлы переводов (JSON)

```javascript
// docs/i18n/en.json
{
  "nav": {
    "solutions": "Solutions",
    "businessTypes": "Business Types",
    "pricing": "Pricing",
    "company": "Company",
    "careers": "Careers",
    "login": "Login"
  },
  "home": {
    "hero": {
      "title": "Elevate Your Business with our All-in-One POS Solution",
      "description": "Seamlessly Integrated Software, Hardware, and Payment Processing",
      "cta": "Get Demo"
    }
  },
  "footer": {
    "copyright": "Copyright © 2024 Slimrate LLC. All rights reserved",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service"
  }
}

// docs/i18n/es.json
{
  "nav": {
    "solutions": "Soluciones",
    "businessTypes": "Tipos de Negocio",
    "pricing": "Precios",
    "company": "Empresa",
    "careers": "Carreras",
    "login": "Iniciar Sesión"
  },
  "home": {
    "hero": {
      "title": "Eleve su Negocio con Nuestra Solución POS Todo en Uno",
      "description": "Software, Hardware y Procesamiento de Pagos Integrados",
      "cta": "Obtener Demo"
    }
  }
}
```

### 2. Модуль интернационализации (i18n.js)

```javascript
// docs/assets/js/i18n.js
class I18n {
  constructor() {
    this.translations = {};
    this.currentLang = this.detectLanguage();
    this.supportedLangs = ['en', 'es', 'ru'];
    this.defaultLang = 'en';
  }

  detectLanguage() {
    // 1. URL path detection (/es/, /ru/)
    const pathLang = window.location.pathname.split('/')[1];
    if (this.supportedLangs?.includes(pathLang)) {
      return pathLang;
    }
    
    // 2. localStorage preference
    const stored = localStorage.getItem('preferred-lang');
    if (stored && this.supportedLangs?.includes(stored)) {
      return stored;
    }
    
    // 3. Browser language
    const browserLang = navigator.language.split('-')[0];
    if (this.supportedLangs?.includes(browserLang)) {
      return browserLang;
    }
    
    return 'en';
  }

  async loadTranslations(lang) {
    const response = await fetch(`/i18n/${lang}.json`);
    this.translations[lang] = await response.json();
  }

  t(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  }

  switchLanguage(lang) {
    localStorage.setItem('preferred-lang', lang);
    // Redirect to language-specific URL
    const currentPath = window.location.pathname;
    const newPath = this.buildLanguagePath(currentPath, lang);
    window.location.href = newPath;
  }

  buildLanguagePath(currentPath, newLang) {
    // Remove current lang prefix if exists
    let cleanPath = currentPath;
    for (const lang of this.supportedLangs) {
      if (currentPath.startsWith(`/${lang}/`)) {
        cleanPath = currentPath.substring(lang.length + 1);
        break;
      }
    }
    
    // Add new lang prefix (except for default 'en')
    if (newLang === 'en') {
      return cleanPath;
    }
    return `/${newLang}${cleanPath}`;
  }
}

window.i18n = new I18n();
```

### 3. Компонент переключателя языков

```javascript
// docs/components/language_switcher.js
const languageSwitcherTemplate = document.createElement('template');
languageSwitcherTemplate.innerHTML = `
<style>
  .lang-switcher {
    position: relative;
    display: inline-flex;
    align-items: center;
    margin-left: 16px;
  }
  
  .lang-current {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    background: transparent;
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 6px;
    color: inherit;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
  }
  
  .lang-current:hover {
    background: rgba(255,255,255,0.1);
  }
  
  .lang-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 4px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.2s ease;
    z-index: 1000;
    min-width: 140px;
  }
  
  .lang-switcher.open .lang-dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .lang-option {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    color: #333;
    text-decoration: none;
    cursor: pointer;
  }
  
  .lang-option:hover {
    background: #f5f5f5;
  }
  
  .lang-option:first-child {
    border-radius: 8px 8px 0 0;
  }
  
  .lang-option:last-child {
    border-radius: 0 0 8px 8px;
  }
  
  .lang-flag {
    width: 20px;
    height: 15px;
    border-radius: 2px;
  }
</style>

<div class="lang-switcher">
  <button class="lang-current" aria-label="Select language">
    <span class="current-flag"></span>
    <span class="current-code">EN</span>
    <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
      <path d="M1 1L5 5L9 1"/>
    </svg>
  </button>
  <div class="lang-dropdown">
    <a class="lang-option" data-lang="en" href="/">
      <img class="lang-flag" src="/assets/img/flags/en.svg" alt="English">
      <span>English</span>
    </a>
    <a class="lang-option" data-lang="es" href="/es/">
      <img class="lang-flag" src="/assets/img/flags/es.svg" alt="Español">
      <span>Español</span>
    </a>
    <a class="lang-option" data-lang="ru" href="/ru/">
      <img class="lang-flag" src="/assets/img/flags/ru.svg" alt="Русский">
      <span>Русский</span>
    </a>
  </div>
</div>
`;

class LanguageSwitcher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(languageSwitcherTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    this.updateCurrentLanguage();
    this.setupEventListeners();
  }

  updateCurrentLanguage() {
    const currentLang = window.i18n?.currentLang || 'en';
    const codeEl = this.shadowRoot.querySelector('.current-code');
    codeEl.textContent = currentLang.toUpperCase();
    
    // Update href for each option to preserve current page
    const options = this.shadowRoot.querySelectorAll('.lang-option');
    const currentPage = this.getCurrentPageName();
    
    options.forEach(option => {
      const lang = option.dataset.lang;
      option.href = lang === 'en' ? `/${currentPage}` : `/${lang}/${currentPage}`;
    });
  }

  getCurrentPageName() {
    const path = window.location.pathname;
    const parts = path.split('/').filter(Boolean);
    // Remove language prefix if present
    if (['en', 'es', 'ru'].includes(parts[0])) {
      parts.shift();
    }
    return parts.join('/') || 'index.html';
  }

  setupEventListeners() {
    const switcher = this.shadowRoot.querySelector('.lang-switcher');
    const button = this.shadowRoot.querySelector('.lang-current');
    
    button.addEventListener('click', () => {
      switcher.classList.toggle('open');
    });
    
    document.addEventListener('click', (e) => {
      if (!this.contains(e.target)) {
        switcher.classList.remove('open');
      }
    });
  }
}

customElements.define('language-switcher', LanguageSwitcher);
```

---

## 📋 SEO-оптимизация для мультиязычности

### 1. Hreflang теги (КРИТИЧНО!)

Каждая страница должна содержать hreflang теги для всех языковых версий:

```html
<!-- docs/index.html (English) -->
<head>
  <link rel="canonical" href="https://slimrate.com/">
  <link rel="alternate" hreflang="en" href="https://slimrate.com/">
  <link rel="alternate" hreflang="es" href="https://slimrate.com/es/">
  <link rel="alternate" hreflang="ru" href="https://slimrate.com/ru/">
  <link rel="alternate" hreflang="x-default" href="https://slimrate.com/">
</head>

<!-- docs/es/index.html (Spanish) -->
<head>
  <html lang="es">
  <link rel="canonical" href="https://slimrate.com/es/">
  <link rel="alternate" hreflang="en" href="https://slimrate.com/">
  <link rel="alternate" hreflang="es" href="https://slimrate.com/es/">
  <link rel="alternate" hreflang="ru" href="https://slimrate.com/ru/">
  <link rel="alternate" hreflang="x-default" href="https://slimrate.com/">
  
  <!-- Переведённые мета-теги -->
  <meta name="description" content="Slimrate ofrece soluciones POS avanzadas incluyendo software, hardware y procesamiento de pagos para negocios en Estados Unidos.">
  <meta property="og:title" content="Slimrate Soluciones POS">
  <meta property="og:description" content="Plataforma POS todo en uno para negocios en EE.UU.">
</head>
```

### 2. Sitemap с языковыми версиями

```xml
<!-- docs/sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <url>
    <loc>https://slimrate.com/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://slimrate.com/"/>
    <xhtml:link rel="alternate" hreflang="es" href="https://slimrate.com/es/"/>
    <xhtml:link rel="alternate" hreflang="ru" href="https://slimrate.com/ru/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://slimrate.com/"/>
  </url>
  
  <url>
    <loc>https://slimrate.com/software.html</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://slimrate.com/software.html"/>
    <xhtml:link rel="alternate" hreflang="es" href="https://slimrate.com/es/software.html"/>
    <xhtml:link rel="alternate" hreflang="ru" href="https://slimrate.com/ru/software.html"/>
  </url>
  
  <!-- Испанские страницы -->
  <url>
    <loc>https://slimrate.com/es/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://slimrate.com/"/>
    <xhtml:link rel="alternate" hreflang="es" href="https://slimrate.com/es/"/>
  </url>
  
  <!-- ...повторить для всех страниц -->
</urlset>
```

### 3. Netlify конфигурация (redirects + headers)

```toml
# netlify.toml - добавить

# Автоматический редирект на основе языка браузера
[[redirects]]
  from = "/"
  to = "/es/"
  status = 302
  conditions = {Language = ["es"]}

[[redirects]]
  from = "/"
  to = "/ru/"
  status = 302
  conditions = {Language = ["ru"]}

# Headers для языковых версий
[[headers]]
  for = "/es/*"
  [headers.values]
    Content-Language = "es"

[[headers]]
  for = "/ru/*"
  [headers.values]
    Content-Language = "ru"
```

---

## 📝 План реализации по этапам

### Этап 1: Подготовка инфраструктуры (1-2 дня)
- [ ] Создать структуру папок `/i18n/`, `/es/`, `/ru/`
- [ ] Создать `i18n.js` модуль
- [ ] Создать `language_switcher.js` компонент
- [ ] Добавить иконки флагов в `/assets/img/flags/`
- [ ] Создать JSON файлы переводов с базовой структурой

### Этап 2: Интеграция переключателя (1 день)
- [ ] Модифицировать `top_menu.js` — добавить `<language-switcher>` в правый верхний угол
- [ ] Добавить стили для мобильной версии
- [ ] Протестировать на всех устройствах

### Этап 3: Извлечение текстов (2-3 дня)
- [ ] Извлечь все тексты из `index.html`
- [ ] Извлечь тексты из всех компонентов
- [ ] Создать полный `en.json` файл
- [ ] Создать скрипт для автоматической генерации страниц

### Этап 4: Перевод (3-5 дней на язык)
- [ ] Перевести `en.json` → `es.json`
- [ ] Перевести все мета-теги
- [ ] Проверить качество переводов с носителем языка

### Этап 5: Создание языковых страниц (2-3 дня)
- [ ] Создать генератор страниц (Node.js скрипт)
- [ ] Сгенерировать `/es/*.html` страницы
- [ ] Добавить hreflang теги ко всем страницам
- [ ] Обновить все canonical URL

### Этап 6: SEO-оптимизация (1-2 дня)
- [ ] Обновить `sitemap.xml` с языковыми версиями
- [ ] Настроить Netlify redirects
- [ ] Добавить Content-Language headers
- [ ] Проверить в Google Search Console

### Этап 7: Тестирование (1-2 дня)
- [ ] Тест переключения языков
- [ ] Тест SEO (hreflang validator)
- [ ] Тест редиректов
- [ ] Тест на мобильных устройствах

---

## 🛠 Скрипт для генерации языковых страниц

```javascript
// scripts/generate-i18n-pages.js
const fs = require('fs');
const path = require('path');

const LANGS = ['es', 'ru'];
const DOCS_DIR = './docs';
const PAGES = [
  'index.html',
  'software.html',
  'hardware.html',
  'pricing.html',
  'company.html',
  'restaurant.html',
  'retail.html',
  // ... все страницы
];

function generateHreflangTags(page) {
  const tags = LANGS.map(lang => 
    `<link rel="alternate" hreflang="${lang}" href="https://slimrate.com/${lang}/${page}">`
  ).join('\n    ');
  
  return `
    <link rel="alternate" hreflang="en" href="https://slimrate.com/${page}">
    ${tags}
    <link rel="alternate" hreflang="x-default" href="https://slimrate.com/${page}">
  `;
}

function processPage(page, lang, translations) {
  let html = fs.readFileSync(path.join(DOCS_DIR, page), 'utf8');
  
  // Update lang attribute
  html = html.replace('lang="en"', `lang="${lang}"`);
  
  // Add hreflang tags
  const hreflangTags = generateHreflangTags(page);
  html = html.replace('</head>', `${hreflangTags}\n</head>`);
  
  // Update canonical URL
  html = html.replace(
    /<link rel="canonical" href="([^"]+)">/,
    `<link rel="canonical" href="https://slimrate.com/${lang}/${page}">`
  );
  
  // Update asset paths (go up one level)
  html = html.replace(/href="assets\//g, 'href="../assets/');
  html = html.replace(/src="assets\//g, 'src="../assets/');
  html = html.replace(/href="components\//g, 'href="../components/');
  html = html.replace(/src="components\//g, 'src="../components/');
  
  return html;
}

// Create language directories and generate pages
LANGS.forEach(lang => {
  const langDir = path.join(DOCS_DIR, lang);
  if (!fs.existsSync(langDir)) {
    fs.mkdirSync(langDir, { recursive: true });
  }
  
  const translations = JSON.parse(
    fs.readFileSync(path.join(DOCS_DIR, 'i18n', `${lang}.json`), 'utf8')
  );
  
  PAGES.forEach(page => {
    const processedHtml = processPage(page, lang, translations);
    fs.writeFileSync(path.join(langDir, page), processedHtml);
    console.log(`Generated: ${lang}/${page}`);
  });
});
```

---

## 🎨 Интеграция в top_menu.js

```javascript
// В topMenuTeplate.innerHTML, после кнопки Login:
<a href="https://ap.slimrate.com/#" class="btn btn-blue">Login</a>
<language-switcher></language-switcher>  <!-- ДОБАВИТЬ -->
```

---

## ✅ Чек-лист SEO для каждой языковой страницы

- [ ] `<html lang="XX">` — корректный код языка
- [ ] `<link rel="canonical">` — указывает на текущую языковую версию
- [ ] `<link rel="alternate" hreflang>` — все языковые версии + x-default
- [ ] `<meta name="description">` — переведено
- [ ] `<title>` — переведено
- [ ] `<meta property="og:*">` — переведены
- [ ] Контент страницы полностью переведён
- [ ] Внутренние ссылки ведут на соответствующую языковую версию
- [ ] Sitemap включает все языковые версии

---

## 📊 Инструменты для проверки

1. **Hreflang Tags Testing Tool** — https://technicalseo.com/tools/hreflang/
2. **Google Search Console** — Международный таргетинг
3. **Ahrefs Hreflang Checker** — Аудит hreflang
4. **Screaming Frog** — Проверка всех страниц

---

## 🚀 Альтернативные решения

### Если нужно быстрое решение:
- **Weglot** — SaaS перевод с автоматической SEO-оптимизацией
- **Lokalise** — Управление переводами + интеграция с GitHub
- **Crowdin** — Для community-переводов

### Если планируется много языков:
- Рассмотреть переход на SSG (Astro, Next.js) с встроенной i18n
- Использовать headless CMS (Strapi, Contentful) для управления переводами

---

## 📌 Резюме

| Аспект | Решение |
|--------|---------|
| URL-структура | Поддиректории `/es/`, `/ru/` |
| Хранение переводов | JSON файлы в `/i18n/` |
| Переключатель | Web Component в header |
| SEO | hreflang + переведённые мета-теги |
| Генерация страниц | Node.js скрипт |
| Хостинг | Netlify с language redirects |

**Ориентировочное время:** 2-3 недели на один дополнительный язык
**Приоритетные языки:** Испанский (для рынка США)
