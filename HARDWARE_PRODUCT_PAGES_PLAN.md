# План разработки персональных страниц для Hardware продуктов

## Дата создания: 3 ноября 2025

---

## 1. ОБЗОР ПРОЕКТА

### 1.1 Цель
Создание гибкой системы персональных страниц для каждого hardware продукта, которая позволит представлять продукты с различным объемом информации - от минимального (компактные устройства) до максимального (флагманские продукты).

### 1.2 Анализ дизайн-макета
На основе приложенного дизайна страницы SR Falcon выделены следующие ключевые секции:

#### Основные блоки страницы:
1. **Hero Section с навигацией** - левая боковая панель с продуктами категории
2. **Первый экран продукта** - название, описание, цена, изображение, CTA кнопка
3. **Детальная информация** - развернутое описание продукта с характеристиками
4. **Технические характеристики** - спецификации с иконками
5. **"Who is Slimrate for?"** - целевая аудитория
6. **FAQ секция** - часто задаваемые вопросы
7. **Contact form** - форма обратной связи
8. **Footer** - нижнее меню

### 1.3 Распределение объема информации по категориям

#### 🔥 Много информации (детальные страницы):
**Tablets (Планшеты)** - 4 продукта
- SR Falcon
- SR Swan
- SR155 Duo
- SR155 Solo

*Включают все секции: hero, multiple detail sections, banner, features grid, specifications, audience, FAQ, contact form*

#### 📊 Средний объем информации:
**EMV Terminals (Платежные терминалы)** - 2 продукта
- A35
- A920

*Включают: hero, 1-2 detail sections, features grid, FAQ, contact form (без specifications)*

#### 📦 Минимум информации (компактные страницы):
**Printers (Принтеры)** - 1 продукт
- SR-TRP1

**Scanners (Сканеры)** - 3 продукта
- SR-DS1
- SR-WLHS1
- SR-WHS1

**Scales (Весы)** - 3 продукта
- Digital Scale
- AIScale POS S625
- AIScale Label Printing S130

**Cash Drawer (Денежный ящик)** - 1 продукт
- SR-410

*Включают: hero, краткое описание, features grid (опционально), FAQ, contact form*

---

## 2. АРХИТЕКТУРА РЕШЕНИЯ

### 2.1 Структура файлов

```
docs/
├── products/
│   ├── hardware/
│   │   ├── sr-falcon.html          # Персональная страница SR Falcon
│   │   ├── sr-swan.html            # Персональная страница SR Swan
│   │   ├── sr155-duo.html          # Персональная страница SR155 Duo
│   │   ├── sr155-solo.html         # Персональная страница SR155 Solo
│   │   └── [другие продукты].html
│   └── templates/
│       └── product-template.html    # Базовый шаблон (опционально)
├── data/
│   └── product-pages.js            # Данные для персональных страниц
├── components/
│   ├── product_hero.js             # Hero секция продукта
│   ├── product_sidebar.js          # Боковая навигация по продуктам
│   ├── product_details.js          # Детальное описание
│   ├── product_specs.js            # Технические характеристики
│   └── product_faq.js              # FAQ для продуктов
└── assets/
    └── css/
        └── product-page.css        # Стили для страниц продуктов
```

### 2.2 Модульная архитектура компонентов

#### Компонент 1: `<product-sidebar>` (Боковая панель навигации)
```javascript
// Отображает список продуктов категории с активным состоянием
// Адаптивная - сворачивается в мобильной версии
{
  category: "Tablets",
  products: [...],
  activeProduct: "SR Falcon"
}
```

#### Компонент 2: `<product-hero>` (Hero секция)
```javascript
// Основной экран с продуктом
{
  name: "SR Falcon",
  title: "SR Falcon",
  description: "Short description...",
  price: "$1600.00 pcs.",
  ctaText: "Get demo",
  image: "path/to/image.png",
  features: [...]  // Ключевые особенности (bullets)
}
```

#### Компонент 3: `<product-details>` (Детальная секция)
```javascript
// Блоки с детальной информацией
{
  sections: [
    {
      title: "All-in-One Smart POS Solution",
      description: "...",
      features: [...],
      image: "path/to/image.png",
      imagePosition: "right" // or "left"
    },
    {
      title: "Powerful Dock. Endless Possibilities.",
      description: "...",
      features: [...],
      image: "path/to/image.png",
      imagePosition: "left"
    }
  ]
}
```

#### Компонент 4: `<product-banner>` (Баннер с призывом)
```javascript
// Синий баннер между секциями
{
  text: "Streamlined POS Solutions for Every Business",
  subtitle: "...",
  variant: "blue" // или другие варианты
}
```

#### Компонент 5: `<product-features-grid>` (Сетка преимуществ)
```javascript
// Иконки с описаниями (4 колонки)
{
  features: [
    {
      icon: "icon-name",
      title: "Reliability Meets Efficiency",
      description: "..."
    },
    // ... еще 3 элемента
  ]
}
```

#### Компонент 6: `<product-specs>` (Технические характеристики)
```javascript
// Опциональный блок для продуктов с подробными спецификациями
{
  specs: {
    "Processor": "Intel Core i5",
    "RAM": "8GB DDR4",
    "Storage": "256GB SSD",
    // ...
  }
}
```

#### Компонент 7: `<product-audience>` (Кому подходит)
```javascript
// Переиспользует существующий h_who_cards или создает новый
{
  title: "Who is Slimrate for?",
  cards: [...]
}
```

#### Компонент 8: `<product-faq>` (FAQ продукта)
```javascript
// Специфичные вопросы для конкретного продукта
{
  questions: [
    {
      question: "Is Slimrate POS Hosted in the Cloud?",
      answer: "..."
    },
    // ...
  ]
}
```

---

## 3. СТРУКТУРА ДАННЫХ

### 3.1 Расширение data/hardware.js

Текущая структура содержит базовую информацию. Необходимо расширить:

```javascript
// data/product-pages.js
const productPagesData = {
  "sr-falcon": {
    // Meta информация
    meta: {
      title: "SR Falcon - Premium POS Tablet | Slimrate",
      description: "SR Falcon is a next-gen POS tablet built for speed, style, and reliability...",
      keywords: "POS tablet, SR Falcon, restaurant POS, retail POS"
    },
    
    // Hero секция
    hero: {
      productId: "sr-falcon",
      categoryNav: "Tablets",
      name: "SR Falcon",
      tagline: "SR Falcon",
      description: "SR Falcon is a next-gen POS tablet built for speed, style, and reliability...",
      price: "$1600.00",
      priceUnit: "pcs.",
      ctaButton: {
        text: "Get demo",
        link: "#contact"
      },
      keyFeatures: [
        "14-slot processor with Android 12",
        "16 GB for memory-intensive tasks",
        "Rugged design for 24/7 use"
      ],
      images: {
        main: "assets/img/products/hardware/falcon/main.png",
        gallery: [
          "assets/img/products/hardware/falcon/80 printer -1.png",
          "assets/img/products/hardware/falcon/80 printer -2.png",
          "assets/img/products/hardware/falcon/80 printer -3.png"
        ]
      }
    },
    
    // Детальные секции
    detailSections: [
      {
        id: "section-1",
        title: "All-in-One Smart POS Solution",
        layout: "image-right", // или "image-left", "full-width"
        content: {
          description: "The SR Falcon is an all-in-one POS...",
          features: [
            "Wi-Fi & Bluetooth 5.4, LTE, and NFC",
            "Supports scanner and payment peripherals",
            "Docking station for seamless connectivity"
          ]
        },
        image: {
          src: "assets/img/products/hardware/falcon/section-1.png",
          alt: "SR Falcon All-in-One"
        }
      },
      {
        id: "section-2",
        title: "Powerful Dock. Endless Possibilities.",
        layout: "image-left",
        content: {
          description: "Choose the modular dock for your workflow...",
          features: [
            "RMS-certified Wi-Fi for industry use",
            "Rugged aluminum body",
            "Fingerprint-rated dust and water IP65 payments"
          ]
        },
        image: {
          src: "assets/img/products/hardware/falcon/section-2.png",
          alt: "SR Falcon Dock"
        }
      }
    ],
    
    // Баннер
    banner: {
      show: true,
      text: "Streamlined POS Solutions for Every Business",
      subtitle: "From quick-service restaurants to retail stores...",
      variant: "blue"
    },
    
    // Сетка преимуществ
    featuresGrid: {
      show: true,
      title: null, // опционально
      items: [
        {
          icon: "reliability",
          title: "Reliability Meets Efficiency",
          description: "Built for non-stop operation..."
        },
        {
          icon: "effortless",
          title: "Effortless Setup",
          description: "We'll handle the configuration..."
        },
        {
          icon: "support",
          title: "Reliable Support, Always On.",
          description: "Our support team is available 24/7..."
        },
        {
          icon: "flexible",
          title: "Flexible and Scalable",
          description: "Our POS solution grows with..."
        }
      ]
    },
    
    // Технические характеристики (опционально)
    specifications: {
      show: true,
      title: "What kind of hardware is needed for the POS system?",
      specs: [
        {
          category: "Hardware",
          items: {
            "Processor": "14-slot processor",
            "RAM": "16 GB",
            "Display": "10.1\" touchscreen",
            "OS": "Android 12"
          }
        },
        {
          category: "Connectivity",
          items: {
            "WiFi": "Wi-Fi 6",
            "Bluetooth": "5.4",
            "NFC": "Yes",
            "LTE": "Optional"
          }
        }
      ]
    },
    
    // Целевая аудитория
    audience: {
      show: true,
      title: "Who is Slimrate for?",
      useGlobalCards: false, // если false, использовать свои карточки
      cards: [
        // или ссылка на глобальные данные
      ]
    },
    
    // FAQ
    faq: {
      show: true,
      questions: [
        {
          question: "Is Slimrate POS Hosted in the Cloud?",
          answer: "Yes, Slimrate POS operates as a cloud-based solution..."
        },
        {
          question: "What kind of hardware is needed for the POS system?",
          answer: "You'll need tablets, terminals, or a regular laptop..."
        }
      ]
    },
    
    // Форма контакта
    contactForm: {
      show: true,
      title: "Contact us",
      subtitle: "Get in Touch – Your Questions, Our Answers. Let's Connect!",
      variant: "blue-box" // или "default"
    }
  },
  
  // Средний пример для платежного терминала
  "a35": {
    meta: {
      title: "A35 Payment Terminal - Secure EMV Processing | Slimrate",
      description: "The A35 Payment Terminal offers secure and efficient payment processing..."
    },
    hero: {
      productId: "a35",
      categoryNav: "EMV Terminals",
      name: "A35",
      tagline: "A35 Payment Terminal",
      description: "The A35 Payment Terminal offers secure and efficient payment processing. Its compact design and advanced security features make it ideal for any retail environment.",
      price: "$290.00",
      priceUnit: "pcs.",
      ctaButton: {
        text: "Get demo",
        link: "#contact"
      },
      keyFeatures: [
        "Compact and portable design",
        "Advanced security features",
        "Multiple payment methods"
      ],
      images: {
        main: "assets/img/gallery/hardware/A35 Payment Terminal 1.png",
        gallery: [
          "assets/img/gallery/hardware/A35 Payment Terminal 1.png"
        ]
      }
    },
    detailSections: [
      {
        id: "section-1",
        title: "Secure Payment Processing",
        layout: "image-right",
        content: {
          description: "The A35 ensures every transaction is secure...",
          features: [
            "EMV chip card support",
            "Contactless payments (NFC)",
            "End-to-end encryption"
          ]
        },
        image: {
          src: "assets/img/gallery/hardware/A35 Payment Terminal 1.png",
          alt: "A35 Payment Terminal"
        }
      }
    ],
    banner: { show: false },
    featuresGrid: { 
      show: true, 
      items: [
        {
          icon: "security",
          title: "Advanced Security",
          description: "PCI-compliant with end-to-end encryption..."
        },
        {
          icon: "speed",
          title: "Fast Transactions",
          description: "Process payments quickly and efficiently..."
        },
        {
          icon: "versatility",
          title: "Multiple Payment Types",
          description: "Accept chip, swipe, and contactless payments..."
        },
        {
          icon: "portable",
          title: "Compact Design",
          description: "Small footprint perfect for any counter..."
        }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        {
          question: "What payment methods does the A35 accept?",
          answer: "The A35 accepts EMV chip cards, magnetic stripe cards, and contactless payments including Apple Pay and Google Pay."
        },
        {
          question: "Is the A35 PCI compliant?",
          answer: "Yes, the A35 is fully PCI-DSS compliant with end-to-end encryption for secure transactions."
        }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },
  
  // Минимальный пример для простого продукта
  "sr-trp1": {
    meta: {
      title: "SR-TRP1 Thermal Receipt Printer | Slimrate",
      description: "Print receipts swiftly and quietly with our Thermal Receipt Printer..."
    },
    hero: {
      productId: "sr-trp1",
      categoryNav: "Printers",
      name: "SR-TRP1",
      tagline: "SR-TRP1 Thermal Receipt Printer",
      description: "Print receipts swiftly and quietly with our Thermal Receipt Printer. Ideal for high-volume environments, it ensures crisp and clear receipts every time without the need for ink.",
      price: "$329.00",
      priceUnit: "pcs.",
      ctaButton: {
        text: "Get demo",
        link: "#contact"
      },
      keyFeatures: [
        "High-speed thermal printing",
        "No ink required",
        "Compatible with all POS systems"
      ],
      images: {
        main: "assets/img/gallery/hardware/SR-TRP1 Thermal Receipt Printer 1.png",
        gallery: [
          "assets/img/gallery/hardware/SR-TRP1 Thermal Receipt Printer 1.png",
          "assets/img/gallery/hardware/SR-TRP1 Thermal Receipt Printer 2.png"
        ]
      }
    },
    detailSections: [], // Минимум - без детальных секций
    banner: { show: false },
    featuresGrid: { 
      show: true, 
      items: [
        {
          icon: "speed",
          title: "Fast Printing",
          description: "High-speed thermal printing for busy environments"
        },
        {
          icon: "quiet",
          title: "Quiet Operation",
          description: "Operates quietly without disturbing customers"
        },
        {
          icon: "reliable",
          title: "Reliable Performance",
          description: "Built for high-volume daily use"
        },
        {
          icon: "easy",
          title: "Easy Integration",
          description: "Works seamlessly with your POS system"
        }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        {
          question: "What type of paper does the SR-TRP1 use?",
          answer: "The SR-TRP1 uses standard thermal receipt paper (80mm width)."
        },
        {
          question: "Does it require ink or toner?",
          answer: "No, the SR-TRP1 is a thermal printer and does not require ink or toner cartridges."
        }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },
  
  // Минимальный пример для сканера
  "sr-whs1": {
    meta: {
      title: "SR155 Solo - Single Display POS | Slimrate",
      description: "Streamline your checkout process..."
    },
    hero: {
  // Минимальный пример для сканера
  "sr-whs1": {
    meta: {
      title: "SR-WHS1 Wired Handheld Scanner | Slimrate",
      description: "Ensure consistent performance with our Wired Handheld Scanner..."
    },
    hero: {
      productId: "sr-whs1",
      categoryNav: "Scanners",
      name: "SR-WHS1",
      tagline: "SR-WHS1 Wired Handheld Scanner",
      description: "Ensure consistent performance with our Wired Handheld Scanner. Ideal for retail environments, it provides quick and accurate barcode scanning with a durable design.",
      price: "$199.00",
      priceUnit: "pcs.",
      ctaButton: {
        text: "Get demo",
        link: "#contact"
      },
      keyFeatures: [
        "Quick and accurate scanning",
        "Durable ergonomic design",
        "Plug-and-play installation"
      ],
      images: {
        main: "assets/img/gallery/hardware/SR-WHS1.png",
        gallery: [
          "assets/img/gallery/hardware/SR-WHS1.png"
        ]
      }
    },
    detailSections: [],
    banner: { show: false },
    featuresGrid: { show: false }, // Для простых продуктов можно вообще убрать
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        {
          question: "What types of barcodes can the SR-WHS1 scan?",
          answer: "The SR-WHS1 can scan all common 1D and 2D barcodes including UPC, EAN, QR codes, and more."
        },
        {
          question: "Is it compatible with my POS system?",
          answer: "Yes, the SR-WHS1 is plug-and-play compatible with most POS systems and works as a standard USB HID device."
        }
      ]
    },
    contactForm: { show: true, variant: "default" }
  }
};
```

---

## 4. ЭТАПЫ РАЗРАБОТКИ

### ФАЗА 1: Подготовка и структура (3-4 дня)

#### Задачи:
1. **Создать файловую структуру**
   - Создать папку `docs/products/hardware/`
   - Создать файл данных `docs/data/product-pages.js`
   
2. **Разработать базовый CSS**
   - Создать `assets/css/product-page.css`
   - Определить переменные для цветов, отступов
   - Адаптивная сетка для различных секций
   - Стили для боковой навигации

3. **Создать утилитарные функции**
   - Функция рендеринга компонентов
   - Функция навигации между продуктами
   - Обработка отсутствующих/опциональных секций

#### Результат:
- Готовая файловая структура
- Базовые стили
- Вспомогательные функции

---

### ФАЗА 2: Разработка Web Components (5-7 дней)

#### 2.1 Компонент `<product-sidebar>`
```javascript
// components/product_sidebar.js
class ProductSidebar extends HTMLElement {
  connectedCallback() {
    // Логика отображения списка продуктов категории
    // Подсветка активного продукта
    // Адаптивное поведение (сворачивание на мобильных)
  }
}
```

**Функционал:**
- Загрузка списка продуктов из категории
- Активное состояние текущего продукта
- Клик → переход на страницу продукта
- Sticky позиционирование
- Мобильная версия (выпадающий список или бургер)

#### 2.2 Компонент `<product-hero>`
```javascript
// components/product_hero.js
class ProductHero extends HTMLElement {
  connectedCallback() {
    // Отображение основной информации
    // Галерея изображений
    // CTA кнопка
  }
}
```

**Функционал:**
- Название, описание, цена
- Список ключевых особенностей (bullets)
- Основное изображение
- Галерея (слайдер или миниатюры)
- Кнопка CTA с якорной ссылкой

#### 2.3 Компонент `<product-details>`
```javascript
// components/product_details.js
class ProductDetails extends HTMLElement {
  connectedCallback() {
    // Рендеринг секций с разными layout
  }
}
```

**Функционал:**
- Поддержка layouts: image-right, image-left, full-width
- Список особенностей (bullets)
- Адаптивное изображение
- Анимации при скролле (опционально)

#### 2.4 Компонент `<product-banner>`
```javascript
// components/product_banner.js
class ProductBanner extends HTMLElement {
  connectedCallback() {
    // Баннер с текстом и вариантами стилей
  }
}
```

**Функционал:**
- Варианты: blue, gradient, простой
- Центрированный текст
- Опциональный подзаголовок

#### 2.5 Компонент `<product-features-grid>`
```javascript
// components/product_features_grid.js
class ProductFeaturesGrid extends HTMLElement {
  connectedCallback() {
    // Сетка 4 колонки с иконками
  }
}
```

**Функционал:**
- Адаптивная сетка (4 → 2 → 1 колонка)
- Иконки (SVG или font-awesome)
- Заголовок и описание

#### 2.6 Компонент `<product-specs>` (опциональный)
```javascript
// components/product_specs.js
class ProductSpecs extends HTMLElement {
  connectedCallback() {
    // Таблица характеристик
  }
}
```

**Функционал:**
- Группировка по категориям
- Таблица или список
- Адаптивное отображение

#### 2.7 Компонент `<product-faq>`
```javascript
// components/product_faq.js
class ProductFAQ extends HTMLElement {
  connectedCallback() {
    // FAQ специфичный для продукта
  }
}
```

**Функционал:**
- Аккордеон с вопросами
- Анимация раскрытия
- Можно переиспользовать существующий компонент faq.js

#### Результат:
- 7 готовых переиспользуемых компонентов
- Тестирование каждого компонента
- Документация по использованию

---

### ФАЗА 3: Создание страниц продуктов (4-5 дней)

#### 3.1 Разработка template страницы
```html
<!-- products/hardware/product-template.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags (будут заполняться из данных) -->
    <title>{{product.meta.title}}</title>
    <meta name="description" content="{{product.meta.description}}">
    
    <!-- Стили -->
    <link rel="stylesheet" href="../../assets/css/spacing-system.css">
    <link rel="stylesheet" href="../../assets/css/style.css">
    <link rel="stylesheet" href="../../assets/css/product-page.css">
    
    <!-- Компоненты -->
    <script src="../../components/top_menu.js"></script>
    <script src="../../components/product_sidebar.js"></script>
    <script src="../../components/product_hero.js"></script>
    <script src="../../components/product_details.js"></script>
    <script src="../../components/product_banner.js"></script>
    <script src="../../components/product_features_grid.js"></script>
    <script src="../../components/product_specs.js"></script>
    <script src="../../components/product_faq.js"></script>
    <script src="../../components/pricing_form.js"></script>
    <script src="../../components/bottom_menu.js"></script>
</head>
<body>
    <top-menu></top-menu>
    
    <div class="product-page-wrapper">
        <!-- Sidebar navigation -->
        <product-sidebar 
            category="{{product.hero.categoryNav}}"
            active-product="{{product.hero.productId}}">
        </product-sidebar>
        
        <main class="product-content">
            <!-- Hero Section -->
            <product-hero 
                data-product-id="{{product.hero.productId}}">
            </product-hero>
            
            <!-- Detail Sections -->
            <product-details 
                data-product-id="{{product.hero.productId}}">
            </product-details>
            
            <!-- Banner (if enabled) -->
            <product-banner 
                data-product-id="{{product.hero.productId}}"
                data-show="{{product.banner.show}}">
            </product-banner>
            
            <!-- Features Grid (if enabled) -->
            <product-features-grid 
                data-product-id="{{product.hero.productId}}"
                data-show="{{product.featuresGrid.show}}">
            </product-features-grid>
            
            <!-- Specifications (if enabled) -->
            <product-specs 
                data-product-id="{{product.hero.productId}}"
                data-show="{{product.specifications.show}}">
            </product-specs>
            
            <!-- Who is this for? -->
            <div class="section-spacer mt-section-2xl"></div>
            <h_who_cards></h_who_cards>
            
            <!-- FAQ -->
            <product-faq 
                data-product-id="{{product.hero.productId}}">
            </product-faq>
            
            <!-- Contact Form -->
            <pricing-form 
                data-variant="{{product.contactForm.variant}}">
            </pricing-form>
        </main>
    </div>
    
    <bottom-menu></bottom-menu>
    
    <!-- Scripts -->
    <script src="../../data/product-pages.js"></script>
    <script>
        // Инициализация компонентов с данными
        const productId = '{{product.hero.productId}}';
        const productData = productPagesData[productId];
        // ... логика инициализации
    </script>
</body>
</html>
```

#### 3.2 Создание конкретных страниц

**Приоритет 1: Планшеты (МНОГО информации) - детальные страницы**
1. `sr-falcon.html` - полная версия со всеми секциями
2. `sr-swan.html` - полная версия со всеми секциями
3. `sr155-duo.html` - полная версия со всеми секциями
4. `sr155-solo.html` - полная версия со всеми секциями

*Структура:* Hero + Multiple Detail Sections + Banner + Features Grid + Specifications + Audience + FAQ + Contact

**Приоритет 2: Платежные терминалы (СРЕДНЕ информации)**
5. `a35.html` - средняя версия
6. `a920.html` - средняя версия

*Структура:* Hero + 1-2 Detail Sections + Features Grid + Audience + FAQ + Contact (без Specifications и Banner)

**Приоритет 3: Периферия (МИНИМУМ информации) - компактные страницы**

*Принтеры:*
7. `sr-trp1.html` - минимальная версия

*Сканеры:*
8. `sr-ds1.html` - минимальная версия
9. `sr-wlhs1.html` - минимальная версия
10. `sr-whs1.html` - минимальная версия

*Весы:*
11. `digital-scale.html` - минимальная версия
12. `aiscale-pos-s625.html` - минимальная версия (может быть расширена до средней)
13. `aiscale-label-printing-s130.html` - минимальная версия (может быть расширена до средней)

*Денежный ящик:*
14. `sr-410.html` - минимальная версия

*Структура минимальных страниц:* Hero + Brief Description + Features Grid (опционально) + FAQ + Contact

**ИТОГО: 14 страниц продуктов**

#### 3.3 Заполнение данных
- Перенести существующие данные из `hardware.js`
- Дополнить детальными описаниями
- Подготовить изображения для каждой секции
- Составить FAQ для каждого продукта

#### Результат:
- Готовые HTML страницы для всех продуктов
- Полностью заполненные данные
- Проверка корректности отображения

---

### ФАЗА 4: Интеграция и навигация (2-3 дня)

#### 4.1 Обновление основной страницы hardware.html
- Добавить ссылки на персональные страницы в карточках продуктов
- Обновить компонент `hardware_cards.js` для добавления ссылок

```javascript
// Пример обновления карточки
function createProductCard(product) {
  const productSlug = product.name.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  
  const productUrl = `products/hardware/${productSlug}.html`;
  
  return `
    <div class="product-card">
      <a href="${productUrl}" class="product-card-link">
        <img src="${product.images[0]}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.text}</p>
        <span class="price">$${product.costForBlack}</span>
        <button>Learn More</button>
      </a>
    </div>
  `;
}
```

#### 4.2 Breadcrumbs навигация
```html
<!-- Добавить хлебные крошки на каждую страницу продукта -->
<nav class="breadcrumbs">
  <a href="../../index.html">Home</a> /
  <a href="../../hardware.html">Hardware</a> /
  <span>SR Falcon</span>
</nav>
```

#### 4.3 Внутренняя перелинковка
- Добавить блок "Related Products" внизу страницы
- Ссылки на следующий/предыдущий продукт в категории
- Ссылки на другие категории продуктов

#### 4.4 SEO оптимизация
- Уникальные meta-теги для каждой страницы
- Canonical URL
- Structured data (Product schema)
- Open Graph tags
- XML sitemap обновление

#### Результат:
- Полная навигация между страницами
- SEO-оптимизация
- Хлебные крошки

---

### ФАЗА 5: Адаптивность и тестирование (3-4 дня)

#### 5.1 Адаптивная верстка
**Breakpoints:**
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

**Адаптация компонентов:**
1. **Sidebar** → Горизонтальный dropdown на планшетах, скрытый бургер на мобильных
2. **Hero Section** → Вертикальная раскладка на мобильных
3. **Detail Sections** → Изображение над текстом на мобильных
4. **Features Grid** → 4 → 2 → 1 колонка
5. **Gallery** → Мобильный слайдер

#### 5.2 Тестирование
**Браузеры:**
- Chrome (последняя версия)
- Firefox (последняя версия)
- Safari (последняя версия)
- Edge (последняя версия)

**Устройства:**
- Desktop (1920x1080, 1366x768)
- Tablet (iPad, Android tablets)
- Mobile (iPhone, Android phones)

**Чек-лист:**
- [ ] Все изображения загружаются
- [ ] Навигация работает корректно
- [ ] Формы отправляются
- [ ] CTA кнопки ведут на нужные секции
- [ ] Нет ошибок в консоли
- [ ] Правильная работа на всех breakpoints
- [ ] Производительность (PageSpeed > 90)
- [ ] Accessibility (WCAG 2.1 AA)

#### 5.3 Оптимизация производительности
- Lazy loading изображений
- Минификация CSS/JS
- Оптимизация изображений (WebP формат)
- Кеширование
- CDN для статики

#### Результат:
- Полностью адаптивные страницы
- Протестированные на всех устройствах
- Оптимизированная производительность

---

### ФАЗА 6: Контент и финализация (2-3 дня)

#### 6.1 Контент-наполнение
- Написать уникальные тексты для каждого продукта
- Подготовить качественные изображения
- Создать иконки для features grid
- Составить FAQ на основе частых вопросов клиентов

#### 6.2 Копирайтинг
- Проверка грамматики и орфографии
- Единый tone of voice
- SEO-оптимизированные тексты
- Call-to-action оптимизация

#### 6.3 Финальный аудит
- Проверка всех ссылок (broken links)
- Проверка метаданных
- Accessibility audit
- Security audit
- Performance audit

#### Результат:
- Полностью готовые страницы с качественным контентом
- Финальная проверка качества

---

## 5. ТЕХНИЧЕСКИЕ ТРЕБОВАНИЯ

### 5.1 Совместимость
- HTML5, CSS3, ES6+
- Поддержка Web Components (Custom Elements)
- Graceful degradation для старых браузеров
- Progressive enhancement

### 5.2 Производительность
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Time to Interactive < 3.5s
- Total page size < 2MB

### 5.3 SEO
- Semantic HTML
- Proper heading hierarchy (h1 → h6)
- Alt tags для всех изображений
- Meta descriptions (150-160 символов)
- Structured data (JSON-LD)

### 5.4 Accessibility
- WCAG 2.1 Level AA
- Keyboard navigation
- Screen reader support
- Color contrast ratio > 4.5:1
- ARIA labels где необходимо

---

## 6. СИСТЕМА УПРАВЛЕНИЯ КОНТЕНТОМ

### 6.1 Простота обновления
Для упрощения добавления новых продуктов создать:

#### Скрипт генерации страниц
```javascript
// scripts/generate-product-page.js
const generateProductPage = (productId) => {
  const data = productPagesData[productId];
  // Генерация HTML на основе template
  // Автоматическое создание файла
};
```

#### Документация для редакторов
```markdown
# Как добавить новый продукт

1. Добавить данные в `data/product-pages.js`
2. Добавить изображения в `assets/img/products/hardware/[product-name]/`
3. Запустить `node scripts/generate-product-page.js [product-id]`
4. Проверить результат в браузере
```

### 6.2 Валидация данных
- JSON Schema для проверки структуры данных
- Автоматические тесты для проверки обязательных полей
- Предупреждения о недостающих изображениях

---

## 7. БУДУЩИЕ УЛУЧШЕНИЯ (Post-MVP)

### 7.1 Интерактивность
- 360° просмотр продукта
- Видео обзоры
- Интерактивные демо
- Виртуальные туры

### 7.2 Персонализация
- Рекомендации на основе индустрии
- Сравнение продуктов
- Калькулятор ROI
- Отзывы клиентов

### 7.3 Аналитика
- Отслеживание поведения пользователей
- Heatmaps
- A/B тестирование
- Конверсионные воронки

### 7.4 Интеграции
- Live chat
- Демо-бронирование
- Запрос на коммерческое предложение
- Newsletter подписка

---

## 8. КОМАНДА И РЕСУРСЫ

### 8.1 Необходимые роли
1. **Frontend Developer** - разработка компонентов и страниц
2. **UI/UX Designer** - доработка дизайна, адаптивные версии
3. **Copywriter** - создание контента
4. **QA Engineer** - тестирование
5. **SEO Specialist** - оптимизация и продвижение

### 8.2 Инструменты
- **IDE**: VS Code
- **Version Control**: Git
- **Design**: Figma (для референсов)
- **Testing**: Browser DevTools, Lighthouse
- **Analytics**: Google Analytics, Hotjar
- **Performance**: PageSpeed Insights, GTmetrix

---

## 9. TIMELINE И MILESTONES

### Общая продолжительность: 19-26 дней (4-5 недель)

| Фаза | Задача | Длительность | Дата начала | Дата окончания |
|------|--------|--------------|-------------|----------------|
| 1 | Подготовка и структура | 3-4 дня | День 1 | День 4 |
| 2 | Разработка компонентов | 5-7 дней | День 5 | День 11 |
| 3 | Создание страниц | 4-5 дней | День 12 | День 16 |
| 4 | Интеграция | 2-3 дня | День 17 | День 19 |
| 5 | Тестирование | 3-4 дня | День 20 | День 23 |
| 6 | Финализация | 2-3 дня | День 24 | День 26 |

### Key Milestones:
- ✅ **День 4**: Готова базовая структура и стили
- ✅ **День 11**: Все компоненты разработаны и протестированы
- ✅ **День 16**: Создана минимум 1 полная страница продукта (SR Falcon)
- ✅ **День 19**: Все страницы созданы и интегрированы
- ✅ **День 23**: Завершено тестирование
- ✅ **День 26**: Проект готов к production

---

## 10. РИСКИ И МИТИГАЦИЯ

### 10.1 Технические риски
| Риск | Вероятность | Влияние | Митигация |
|------|-------------|---------|-----------|
| Несовместимость браузеров | Средняя | Высокое | Polyfills, тестирование на ранних этапах |
| Производительность на мобильных | Высокая | Среднее | Lazy loading, оптимизация изображений |
| SEO проблемы | Низкая | Высокое | Следование best practices, аудит |

### 10.2 Проектные риски
| Риск | Вероятность | Влияние | Митигация |
|------|-------------|---------|-----------|
| Задержка контента | Средняя | Среднее | Placeholder тексты, параллельная работа |
| Изменение требований | Средняя | Высокое | Модульная архитектура, гибкость компонентов |
| Недостаток изображений | Высокая | Среднее | Stock photos, генерация mockup'ов |

---

## 11. КРИТЕРИИ УСПЕХА

### 11.1 Функциональные
- ✅ Все hardware продукты имеют персональные страницы
- ✅ Страницы адаптивны на всех устройствах
- ✅ Навигация интуитивна и работает без ошибок
- ✅ Формы отправляются корректно
- ✅ Все компоненты переиспользуемы

### 11.2 Технические
- ✅ PageSpeed Score > 90
- ✅ Accessibility Score > 90
- ✅ Нет критических ошибок в консоли
- ✅ SEO audit > 95
- ✅ Cross-browser compatibility 100%

### 11.3 Бизнес
- ✅ Увеличение времени на сайте на 30%
- ✅ Снижение bounce rate на 20%
- ✅ Увеличение заявок на демо на 25%
- ✅ Улучшение позиций в поисковой выдаче

---

## 12. NEXT STEPS

### Немедленные действия:
1. **Утвердить план** с stakeholders
2. **Собрать команду** или назначить ответственных
3. **Создать проектный репозиторий/ветку** в Git
4. **Подготовить дизайн-ассеты** (изображения, иконки)
5. **Начать Фазу 1** - создание структуры

### Подготовительные задачи:
- [ ] Создать ветку `feature/hardware-product-pages`
- [ ] Настроить локальное окружение для разработки
- [ ] Собрать все существующие изображения продуктов
- [ ] Подготовить список недостающего контента
- [ ] Создать Trello/Jira board для отслеживания задач

---

## ЗАКЛЮЧЕНИЕ

Данный план предоставляет полную дорожную карту для создания гибкой системы персональных страниц hardware продуктов. Модульная архитектура позволит легко масштабировать решение и добавлять новые продукты в будущем.

**Ключевые преимущества подхода:**
- 🔧 **Гибкость**: поддержка продуктов с любым объемом информации (планшеты - много, терминалы - средне, периферия - минимум)
- 🔄 **Переиспользуемость**: компоненты можно использовать для других категорий
- 📱 **Адаптивность**: корректное отображение на всех устройствах
- 🚀 **Масштабируемость**: легкое добавление новых продуктов
- 🎯 **SEO-friendly**: оптимизация для поисковых систем
- ♿ **Доступность**: соответствие стандартам WCAG

**Распределение по категориям:**
- 🔥 **Tablets (4 продукта)**: полные детальные страницы
- 📊 **EMV Terminals (2 продукта)**: средний объем информации
- 📦 **Периферия (8 продуктов)**: компактные страницы с ключевой информацией
- **Всего: 14 страниц продуктов**

**Готовность к запуску:** План готов к немедленному исполнению. Рекомендуется начать с создания страницы SR Falcon (планшет - максимум информации), A35 (терминал - средний объем) и SR-TRP1 (принтер - минимум) как MVP для проверки всех трех концепций.
