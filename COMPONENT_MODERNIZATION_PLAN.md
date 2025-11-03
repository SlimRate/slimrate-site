# План модернизации старых компонентов сайта SlimRate

**Дата создания:** 3 ноября 2025  
**Версия:** 1.0  
**Статус:** 📋 План готов к реализации

---

## 🎯 Цель

Привести все старые компоненты на всех страницах к единообразному, гармоничному виду в соответствии с новым дизайном главной страницы и системой spacing.

---

## 📊 Текущее состояние - Выявленные проблемы

### 🔴 **КРИТИЧНЫЕ ПРОБЛЕМЫ**

#### 1. **Inline стили вместо CSS-переменных**
**Проблема:** Множество страниц используют `style="margin-top: XXXpx"` вместо spacing-переменных

**Найдено на страницах:**
- `software.html` - 4 инлайн-стиля для отступов
- `hardware.html` - 1 инлайн-стиль
- `pricing.html` - 4 инлайн-стиля
- `payment_processing.html` - 8 инлайн-стилей
- `mobile-app.html` - 4 инлайн-стиля
- `h-bars.html`, `h-casual.html`, `h-coffee.html` и т.д. - по 3 инлайн-стиля

**Примеры:**
```html
<!-- ❌ Плохо -->
<div style="margin-top:-150px;" class="off-mobile"></div>
<div style="margin-top:300px;" class="off-mobile"></div>

<!-- ✅ Хорошо -->
<div class="section-spacer mt-section-lg"></div>
```

**Проблемы:**
- Нет адаптивности
- Сложность поддержки
- Отрицательные отступы нарушают spacing систему
- Несогласованность между страницами

---

#### 2. **Несогласованность стилей кнопок**

**Проблема:** Кнопки имеют разные размеры, padding и стили на разных страницах

**Текущие стили:**
```css
/* Базовая кнопка */
.btn {
    padding: 15px 32px;
    border-radius: 8px;
    font-size: 16px;
    line-height: 24px;
}

/* Но встречаются вариации на страницах */
```

**Что нужно:**
- Унифицировать padding для всех кнопок
- Использовать spacing-переменные
- Добавить варианты размеров (.btn-sm, .btn-md, .btn-lg)
- Улучшить hover-эффекты

---

#### 3. **Устаревшие стили карточек**

**Компоненты с проблемами:**

##### a) `.types-card` (software.html, type_cards.js)
```css
/* Проблемы: */
- Отсутствие стандартных отступов
- Старый дизайн без современных теней
- Не использует spacing-систему
```

##### b) `.advantages-card`
```css
/* Текущее состояние: */
.advantages-card__img {
    margin-bottom: var(--component-spacing-xl); /* ✅ Хорошо */
}

.advantages-card__title {
    font-size: 16px; /* ⚠️ Может быть больше для лучшей читаемости */
}
```

##### c) `.hardware-card`
```css
/* Проблемы: */
.hardware-card {
    padding-top: var(--component-spacing-lg);
    padding-bottom: var(--component-spacing-lg);
    /* ⚠️ Отсутствует горизонтальный padding */
    border: 1px solid #b7b7b7; /* ⚠️ Устаревший цвет границы */
}

.hardware-card button {
    margin-left: 20px; /* ❌ Хардкод */
    margin-bottom: 0px;
}
```

##### d) `.tariff-card`
```css
/* Проблемы: */
.tariff-card {
    padding: 24px 24px 24px; /* ❌ Хардкод вместо переменных */
    max-width: 292px; /* ⚠️ Фиксированная ширина */
}

.tariff-card ul {
    margin-bottom: var(--component-spacing-xl); /* ✅ Хорошо */
}

.tariff-card ul li {
    padding-left: 30px; /* ❌ Хардкод */
    margin-bottom: 10px; /* ❌ Хардкод */
}
```

---

#### 4. **Проблемы с типографикой**

**Текущие стили заголовков:**
```css
h1.section-title {
    font-size: 50px;
    line-height: 63px;
    letter-spacing: 0.02em;
}

h2.section-title {
    font-size: 38px;
    line-height: 48px;
    letter-spacing: -0.02em;
}

.section-descr {
    font-size: 22px;
    line-height: 32px;
    margin-top: 12px; /* ❌ Хардкод */
}
```

**Проблемы:**
- Хардкодные отступы между заголовком и описанием
- Отсутствие адаптивности размеров шрифта
- Разные цвета для одинаковых элементов

---

#### 5. **Секция `.advantages` - несогласованность**

**Проблемы:**
```css
.advantages {
    margin-bottom: var(--spacing-ultra-lg); /* ⚠️ Неопределенная переменная */
}

.advantages-allPage {
    padding-bottom: var(--spacing-ultra-lg); /* ⚠️ Неопределенная переменная */
    padding-top: var(--section-spacing-2xl);
    margin-bottom: 0px; /* ❌ Хардкод */
}

.advantages .container .section-text {
    max-width: 560px;
    margin-top: 20px; /* ❌ Хардкод */
}

.advantages .container-header {
    margin-bottom: var(--section-spacing-lg); /* ✅ Хорошо */
}

.advantages-card__img {
    margin-bottom: var(--component-spacing-xl); /* ✅ Хорошо */
}
```

**Найдено:**
- Использование несуществующей переменной `--spacing-ultra-lg`
- Смешивание хардкода и переменных
- Разные версии компонента (.advantages vs .advantages-allPage)

---

#### 6. **Секция `.who` и карточки**

**Проблемы:**
```css
.who .container-header {
    margin-bottom: var(--section-spacing-md); /* ✅ Хорошо */
}

.hardware-card {
    margin-bottom: var(--section-spacing-md); /* ✅ Хорошо */
}

.hardware-card__img {
    margin-bottom: var(--component-spacing-lg); /* ✅ Хорошо */
}

.hardware-card__descr {
    padding-left: var(--component-spacing-lg); /* ✅ Хорошо */
    padding-right: var(--component-spacing-lg);
    margin-bottom: var(--component-spacing-2xl); /* ✅ Хорошо */
}
```

**Статус:** В целом хорошо, но требует унификации padding

---

#### 7. **Проблемы со специфичными секциями**

##### `.why` секция
```css
.why {
    min-height: 790px /* ❌ Фиксированная высота */
}

.why .container-header {
    margin-bottom: 0px /* ❌ Хардкод */
}

.why .container-header .section-descr {
    margin: 16px auto 0px; /* ❌ Хардкод */
}
```

##### `.equip.allinone` секция
```css
/* Сложная структура с хардкодом */
--allinone-decor-offset: 58px; /* ❌ Может использовать spacing */
gap: clamp(16px, 2vw, 24px); /* ⚠️ Хорошо, но может использовать переменные */
padding: clamp(32px, 3vw, 48px); /* ⚠️ То же самое */
```

---

### 🟡 **СРЕДНИЕ ПРОБЛЕМЫ**

#### 8. **Footer компонент**
```css
.footer {
    padding-top: 50px; /* ❌ Хардкод */
    margin-bottom: var(--component-spacing-2xl); /* ✅ Хорошо */
}

.footer-top {
    padding-bottom: 70px; /* ❌ Хардкод */
}

.footer-bottom {
    padding-top: 72px; /* ❌ Хардкод */
}

.footer-bottom ul li {
    margin-right: 36px; /* ❌ Хардкод */
    margin-bottom: 16px; /* ⚠️ Может быть переменной */
}
```

#### 9. **Breadcrumb компонент**
На страницах `restaurant.html` и `retail.html` есть breadcrumb, но стили не найдены в style.css

---

### 🟢 **ХОРОШО РЕАЛИЗОВАНО**

#### Положительные примеры:

1. **Использование переменных:**
```css
.advantages .container-header {
    margin-bottom: var(--section-spacing-lg);
}
```

2. **Компонентные отступы:**
```css
.hardware-card__img {
    margin-bottom: var(--component-spacing-lg);
}
```

3. **Кнопки имеют базовые стили:**
```css
.btn {
    padding: 15px 32px;
    border-radius: 8px;
}
```

---

## 🎨 Новые стандарты (на основе главной страницы)

### 1. **Система отступов**

**Использовать ТОЛЬКО переменные из spacing-system.css:**

```css
/* Между секциями */
--section-spacing-xs: 40px → 20px (mobile)
--section-spacing-sm: 48px → 24px (mobile)
--section-spacing-md: 64px → 32px (mobile)
--section-spacing-lg: 80px → 40px (mobile) /* СТАНДАРТ */
--section-spacing-xl: 96px → 48px (mobile)
--section-spacing-2xl: 128px → 64px (mobile)

/* Внутри компонентов */
--component-spacing-xs: 8px
--component-spacing-sm: 12px
--component-spacing-md: 16px
--component-spacing-lg: 24px
--component-spacing-xl: 32px
--component-spacing-2xl: 40px
```

### 2. **Типографика**

```css
/* Заголовки */
h1.section-title {
    font-size: 50px;
    line-height: 63px;
    margin-bottom: var(--component-spacing-lg); /* Вместо хардкода */
}

h2.section-title {
    font-size: 38px;
    line-height: 48px;
    margin-bottom: var(--component-spacing-md);
}

.section-descr {
    font-size: 22px;
    line-height: 32px;
    margin-top: var(--component-spacing-sm); /* Вместо 12px */
}
```

### 3. **Кнопки**

```css
/* Базовая кнопка - уже хорошо */
.btn {
    padding: var(--component-spacing-md) var(--component-spacing-xl);
    border-radius: 8px;
    font-size: 16px;
    line-height: 24px;
}

/* Добавить варианты */
.btn-sm {
    padding: var(--component-spacing-sm) var(--component-spacing-lg);
    font-size: 14px;
}

.btn-lg {
    padding: var(--component-spacing-lg) 48px;
    font-size: 18px;
}
```

### 4. **Карточки**

```css
/* Универсальный стиль карточки */
.card {
    padding: var(--component-spacing-xl);
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
}

.card__header {
    margin-bottom: var(--component-spacing-lg);
}

.card__title {
    margin-bottom: var(--component-spacing-md);
}

.card__description {
    margin-bottom: var(--component-spacing-lg);
}

.card__footer {
    margin-top: var(--component-spacing-xl);
}
```

---

## 📋 План действий по приоритетам

### 🔥 **ФАЗА 1: КРИТИЧНОЕ (Приоритет 1)**

#### Task 1.1: Удаление всех inline стилей
**Сроки:** 1-2 дня  
**Сложность:** Средняя  
**Важность:** ⭐⭐⭐⭐⭐

**Действия:**
1. Найти все `style="margin-top..."` и `style="margin-bottom..."` в HTML файлах
2. Заменить на CSS классы с использованием spacing-переменных
3. Создать utility классы для быстрого применения:

```css
/* Новые utility классы */
.mt-section-xs { margin-top: var(--section-spacing-xs); }
.mt-section-sm { margin-top: var(--section-spacing-sm); }
.mt-section-md { margin-top: var(--section-spacing-md); }
.mt-section-lg { margin-top: var(--section-spacing-lg); }
.mt-section-xl { margin-top: var(--section-spacing-xl); }
.mt-section-2xl { margin-top: var(--section-spacing-2xl); }

.mb-section-0 { margin-bottom: 0; }
/* И т.д. для margin-bottom */

.mt-comp-xs { margin-top: var(--component-spacing-xs); }
/* И т.д. для component spacing */
```

**Файлы для изменения:**
- `software.html` → убрать 4 inline стиля
- `hardware.html` → убрать 1 inline стиль
- `pricing.html` → убрать 4 inline стиля
- `payment_processing.html` → убрать 8 inline стилей
- `mobile-app.html` → убрать 4 inline стиля
- `h-bars.html, h-casual.html, h-coffee.html, h-fine.html, h-quick.html, h-truck.html` → убрать по 3 inline стиля

**Пример до/после:**

```html
<!-- ДО -->
<div style="margin-top:-150px;" class="off-mobile"></div>
<div style="margin-top:300px;" class="off-mobile"></div>

<!-- ПОСЛЕ -->
<div class="section-spacer off-mobile" style="margin-top: calc(-1 * var(--section-spacing-xl));"></div>
<!-- ИЛИ лучше пересмотреть дизайн без отрицательных отступов -->
<div class="mt-section-2xl off-mobile"></div>
```

---

#### Task 1.2: Исправить несуществующие переменные
**Сроки:** 1 день  
**Сложность:** Низкая  
**Важность:** ⭐⭐⭐⭐⭐

**Проблема:** Используется `--spacing-ultra-lg`, которой нет в spacing-system.css

**Действия:**
1. Найти все использования `--spacing-ultra-lg`
2. Заменить на существующие переменные:
   - `--spacing-ultra-lg` → `--section-spacing-2xl` (128px)

```css
/* ДО */
.advantages {
    margin-bottom: var(--spacing-ultra-lg);
}

/* ПОСЛЕ */
.advantages {
    margin-bottom: var(--section-spacing-2xl);
}
```

**Файлы для изменения:**
- `style.css` - строки с `.advantages` и `.advantages-allPage`

---

#### Task 1.3: Унификация стилей карточек
**Сроки:** 2-3 дня  
**Сложность:** Высокая  
**Важность:** ⭐⭐⭐⭐

**Карточки для обновления:**

##### 1. `.tariff-card`
```css
/* ДО */
.tariff-card {
    padding: 24px 24px 24px;
}

.tariff-card ul li {
    padding-left: 30px;
    margin-bottom: 10px;
}

/* ПОСЛЕ */
.tariff-card {
    padding: var(--component-spacing-lg);
}

.tariff-card ul li {
    padding-left: var(--component-spacing-xl);
    margin-bottom: var(--component-spacing-sm);
}
```

##### 2. `.hardware-card`
```css
/* ДО */
.hardware-card {
    padding-top: var(--component-spacing-lg);
    padding-bottom: var(--component-spacing-lg);
    border: 1px solid #b7b7b7;
}

.hardware-card button {
    margin-left: 20px;
}

/* ПОСЛЕ */
.hardware-card {
    padding: var(--component-spacing-lg);
    border: 1px solid rgba(0, 0, 0, 0.12); /* Современный цвет */
}

.hardware-card button {
    margin-left: var(--component-spacing-lg);
}
```

##### 3. `.advantages-card`
```css
/* ДО */
.advantages-card__img {
    margin-bottom: var(--component-spacing-xl); /* OK */
}

.advantages-card__title {
    font-size: 16px;
}

/* ПОСЛЕ */
.advantages-card__img {
    margin-bottom: var(--component-spacing-xl);
}

.advantages-card__title {
    font-size: 18px; /* Увеличить для лучшей читаемости */
    margin-bottom: var(--component-spacing-md);
}

.advantages-card__descr {
    margin-top: var(--component-spacing-sm);
}
```

##### 4. `.types-card`
```css
/* Добавить в style.css */
.types-card {
    display: flex;
    gap: var(--component-spacing-xl);
    margin-bottom: var(--section-spacing-md);
    padding: var(--component-spacing-xl);
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
}

.types-card__img {
    flex: 0 0 auto;
}

.types-card__text {
    flex: 1 1 auto;
}

.types-card__text .section-title {
    margin-bottom: var(--component-spacing-md);
}

.types-card__text .section-descr {
    margin-top: var(--component-spacing-sm);
}
```

---

#### Task 1.4: Обновление типографики
**Сроки:** 1 день  
**Сложность:** Средняя  
**Важность:** ⭐⭐⭐⭐

**Действия:**
1. Заменить все хардкодные отступы в типографике на переменные:

```css
/* ДО */
.section-descr {
    margin-top: 12px;
}

.advantages .container .section-text {
    margin-top: 20px;
}

.why .container-header .section-descr {
    margin: 16px auto 0px;
}

/* ПОСЛЕ */
.section-descr {
    margin-top: var(--component-spacing-sm);
}

.advantages .container .section-text {
    margin-top: var(--component-spacing-lg);
}

.why .container-header .section-descr {
    margin: var(--component-spacing-md) auto 0;
}
```

2. Добавить responsive размеры шрифтов:

```css
h1.section-title {
    font-size: clamp(32px, 5vw, 50px);
    line-height: 1.26;
}

h2.section-title {
    font-size: clamp(28px, 4vw, 38px);
    line-height: 1.26;
}

.section-descr {
    font-size: clamp(18px, 2vw, 22px);
    line-height: 1.45;
}
```

---

### ⚡ **ФАЗА 2: ВАЖНОЕ (Приоритет 2)**

#### Task 2.1: Модернизация кнопок
**Сроки:** 1-2 дня  
**Сложность:** Средняя  
**Важность:** ⭐⭐⭐⭐

**Действия:**

1. Обновить базовые стили кнопок:

```css
/* style.css - обновить */
.btn {
    padding: var(--component-spacing-md) var(--component-spacing-xl);
    border-radius: 8px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.02em;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    display: inline-block;
    text-align: center;
}

.btn-red {
    background: #ef2b23;
    border: 1px solid #ef2b23;
    color: #fff;
}

.btn-red:hover {
    background: #fff;
    color: #ef2b23;
    transform: translateY(-2px);
    box-shadow: 0px 8px 16px rgba(239, 43, 35, 0.24);
}

.btn-blue {
    background: #2B6BF3;
    border: 1px solid #2B6BF3;
    color: #fff;
}

.btn-blue:hover {
    background: #fff;
    color: #2B6BF3;
    transform: translateY(-2px);
    box-shadow: 0px 8px 16px rgba(43, 107, 243, 0.24);
}
```

2. Добавить размеры:

```css
.btn-sm {
    padding: var(--component-spacing-sm) var(--component-spacing-lg);
    font-size: 14px;
    line-height: 20px;
}

.btn-lg {
    padding: var(--component-spacing-lg) 48px;
    font-size: 18px;
    line-height: 28px;
}
```

---

#### Task 2.2: Секции `.advantages` и `.who`
**Сроки:** 2 дня  
**Сложность:** Средняя  
**Важность:** ⭐⭐⭐

**Действия:**

1. Унифицировать `.advantages` и `.advantages-allPage`:

```css
/* Базовый стиль */
.advantages {
    position: relative;
    margin-bottom: var(--section-spacing-lg);
}

/* Вариант с фоном */
.advantages--with-bg {
    padding-top: var(--section-spacing-2xl);
    padding-bottom: var(--section-spacing-xl);
    background: rgba(196, 196, 196, 0.2);
    margin-bottom: 0;
}

.advantages .container {
    display: flex;
    flex-direction: column;
}

.advantages .container-header {
    margin-bottom: var(--section-spacing-lg);
}

.advantages .section-title {
    text-transform: none;
    max-width: 678px;
}

.advantages .section-text {
    max-width: 560px;
    margin-top: var(--component-spacing-lg);
}

.advantages-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(258px, 1fr));
    gap: var(--component-spacing-xl);
}
```

2. Улучшить `.who` секцию:

```css
.who {
    position: relative;
    padding-top: var(--section-spacing-xl);
    padding-bottom: var(--section-spacing-xl);
}

.who::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 90%;
    background: #2b6bf3;
    z-index: -1;
}

.who .container-header {
    margin-bottom: var(--section-spacing-md);
}
```

---

#### Task 2.3: Footer компонент
**Сроки:** 1 день  
**Сложность:** Низкая  
**Важность:** ⭐⭐⭐

**Действия:**

```css
/* ДО */
.footer {
    padding-top: 50px;
    margin-bottom: var(--component-spacing-2xl);
}

.footer-top {
    padding-bottom: 70px;
}

.footer-bottom {
    padding-top: 72px;
}

.footer-bottom ul li {
    margin-right: 36px;
    margin-bottom: 16px;
}

/* ПОСЛЕ */
.footer {
    padding-top: var(--section-spacing-md);
    margin-bottom: var(--component-spacing-2xl);
}

.footer-top {
    padding-bottom: var(--section-spacing-lg);
}

.footer-bottom {
    padding-top: var(--section-spacing-lg);
}

.footer-bottom ul li {
    margin-right: var(--component-spacing-2xl);
    margin-bottom: var(--component-spacing-md);
}
```

---

#### Task 2.4: Breadcrumb компонент
**Сроки:** 1 день  
**Сложность:** Низкая  
**Важность:** ⭐⭐⭐

**Действия:**
1. Создать стили для breadcrumb:

```css
.breadcrumb {
    display: flex;
    align-items: center;
    gap: var(--component-spacing-sm);
    margin-bottom: var(--component-spacing-lg);
    font-size: 14px;
    line-height: 20px;
}

.breadcrumb a {
    color: #666;
    text-decoration: none;
    transition: color 0.25s ease;
}

.breadcrumb a:hover {
    color: #2b6bf3;
}

.breadcrumb img {
    width: 16px;
    height: 16px;
    opacity: 0.5;
}
```

---

### 🎨 **ФАЗА 3: УЛУЧШЕНИЯ (Приоритет 3)**

#### Task 3.1: Секция `.why` - улучшение дизайна
**Сроки:** 2 дня  
**Сложность:** Средняя  
**Важность:** ⭐⭐

**Действия:**

```css
/* ДО */
.why {
    min-height: 790px; /* Фиксированная высота */
}

/* ПОСЛЕ */
.why {
    padding: var(--section-spacing-xl) 0;
    /* Убрать min-height для гибкости */
}

.why .container-header {
    margin-bottom: var(--section-spacing-md);
}

.why .container-header .section-descr {
    max-width: 540px;
    margin: var(--component-spacing-md) auto 0;
}
```

---

#### Task 3.2: Секция `.equip.allinone` - использование spacing переменных
**Сроки:** 2-3 дня  
**Сложность:** Высокая  
**Важность:** ⭐⭐

**Действия:**

```css
/* ДО */
.equip.allinone {
    --allinone-decor-offset: 58px;
    gap: clamp(16px, 2vw, 24px);
    padding: clamp(32px, 3vw, 48px);
}

/* ПОСЛЕ */
.equip.allinone {
    --allinone-decor-offset: var(--section-spacing-md);
    gap: clamp(var(--component-spacing-md), 2vw, var(--component-spacing-lg));
    padding: clamp(var(--component-spacing-xl), 3vw, var(--section-spacing-md));
}
```

---

#### Task 3.3: Добавление современных эффектов
**Сроки:** 2 дня  
**Сложность:** Средняя  
**Важность:** ⭐⭐

**Действия:**

1. **Добавить hover-эффекты для карточек:**

```css
.hardware-card,
.tariff-card,
.advantages-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hardware-card:hover,
.tariff-card:hover {
    transform: translateY(-4px);
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
}

.advantages-card:hover .advantages-card__img {
    transform: scale(1.1);
    transition: transform 0.3s ease;
}
```

2. **Улучшить изображения в карточках:**

```css
.types-card__img,
.hardware-card__img,
.advantages-card__img {
    overflow: hidden;
    border-radius: 8px;
}

.types-card__img img,
.hardware-card__img img {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.types-card:hover .types-card__img img,
.hardware-card:hover .hardware-card__img img {
    transform: scale(1.05);
}
```

---

## 📁 Структура изменений по файлам

### HTML файлы

#### `software.html`
- [ ] Удалить 4 inline стиля
- [ ] Проверить использование компонентов

#### `hardware.html`
- [ ] Удалить 1 inline стиль
- [ ] Обновить стили карточек

#### `pricing.html`
- [ ] Удалить 4 inline стиля
- [ ] Обновить tariff-cards

#### `payment_processing.html`
- [ ] Удалить 8 inline стилей
- [ ] Обновить who-cards

#### `mobile-app.html`
- [ ] Удалить 4 inline стиля

#### `restaurant.html` / `retail.html`
- [ ] Добавить стили для breadcrumb
- [ ] Проверить отступы

#### Restaurant sub-pages (`h-bars.html`, `h-casual.html`, и т.д.)
- [ ] Удалить по 3 inline стиля с каждой
- [ ] Унифицировать структуру

---

### CSS файл (`style.css`)

#### Секция: Typography
- [ ] Обновить `.section-descr` (margin-top)
- [ ] Добавить responsive размеры шрифтов
- [ ] Обновить все хардкодные отступы

#### Секция: Buttons
- [ ] Обновить `.btn` (padding)
- [ ] Улучшить hover-эффекты
- [ ] Добавить `.btn-sm` и `.btn-lg`

#### Секция: Cards
- [ ] Обновить `.tariff-card`
- [ ] Обновить `.hardware-card`
- [ ] Обновить `.advantages-card`
- [ ] Добавить стили для `.types-card`

#### Секция: Advantages
- [ ] Заменить `--spacing-ultra-lg`
- [ ] Унифицировать `.advantages` и `.advantages-allPage`
- [ ] Обновить все хардкодные отступы

#### Секция: Who
- [ ] Обновить отступы
- [ ] Улучшить структуру

#### Секция: Footer
- [ ] Обновить все отступы на переменные

#### Секция: Why
- [ ] Удалить min-height
- [ ] Обновить отступы

#### Новая секция: Breadcrumb
- [ ] Создать стили для breadcrumb

#### Новая секция: Utility Classes
- [ ] Создать margin-top utility классы
- [ ] Создать margin-bottom utility классы

---

### Component файлы (JS)

#### `hardware_advantages.js`
- [ ] Проверить разметку
- [ ] Убедиться что использует правильные классы

#### `type_cards.js`
- [ ] Обновить разметку
- [ ] Добавить правильные классы

#### `h_advantages.js`
- [ ] Проверить разметку
- [ ] Унифицировать с hardware_advantages

---

## 🧪 Тестирование

### Контрольный список для каждой страницы:

- [ ] Все отступы используют CSS-переменные
- [ ] Нет inline стилей для margin/padding
- [ ] Кнопки имеют единообразный вид
- [ ] Карточки имеют единообразный дизайн
- [ ] Типографика согласована
- [ ] Адаптивность работает на всех разрешениях
- [ ] Hover-эффекты работают плавно
- [ ] Нет визуальных багов

### Страницы для тестирования:

1. `index.html` (главная) ✅ Already modernized
2. `software.html`
3. `hardware.html`
4. `pricing.html`
5. `payment_processing.html`
6. `mobile-app.html`
7. `restaurant.html`
8. `retail.html`
9. `h-bars.html`
10. `h-casual.html`
11. `h-coffee.html`
12. `h-fine.html`
13. `h-quick.html`
14. `h-truck.html`
15. `company.html`

---

## 📊 Метрики успеха

### Количественные:
- ✅ 0 inline стилей для margin/padding (сейчас: ~50+)
- ✅ 100% использование spacing-переменных (сейчас: ~60%)
- ✅ 0 несуществующих CSS-переменных (сейчас: 1)
- ✅ Единый стиль кнопок на всех страницах
- ✅ Единый стиль карточек на всех страницах

### Качественные:
- ✅ Легкость поддержки (изменение одной переменной влияет на весь сайт)
- ✅ Консистентность дизайна
- ✅ Улучшенная адаптивность
- ✅ Современный внешний вид

---

## 🚀 Рекомендации по реализации

### Порядок работы:

1. **Начать с ФАЗЫ 1** - критичные проблемы
   - Task 1.1 → Task 1.2 → Task 1.3 → Task 1.4

2. **Протестировать после каждой задачи**
   - Проверить визуально на desktop, tablet, mobile
   - Убедиться что ничего не сломалось

3. **Перейти к ФАЗЕ 2**
   - Task 2.1 → Task 2.2 → Task 2.3 → Task 2.4

4. **ФАЗА 3 - по желанию**
   - Можно сделать позже

### Git workflow:

```bash
# Создать ветку для модернизации
git checkout -b feature/component-modernization

# После каждой задачи делать коммит
git add .
git commit -m "feat: Task 1.1 - Remove inline styles from software.html"

# После завершения фазы - пуш
git push origin feature/component-modernization
```

---

## 📝 Чеклист выполнения

### Фаза 1 (Критичное)
- [ ] Task 1.1: Удалить все inline стили
- [ ] Task 1.2: Исправить несуществующие переменные
- [ ] Task 1.3: Унифицировать стили карточек
- [ ] Task 1.4: Обновить типографику

### Фаза 2 (Важное)
- [ ] Task 2.1: Модернизация кнопок
- [ ] Task 2.2: Секции advantages и who
- [ ] Task 2.3: Footer компонент
- [ ] Task 2.4: Breadcrumb компонент

### Фаза 3 (Улучшения)
- [ ] Task 3.1: Секция why
- [ ] Task 3.2: Секция equip.allinone
- [ ] Task 3.3: Современные эффекты

---

## 🎯 Ожидаемый результат

После выполнения всех задач:

1. **Весь сайт будет использовать единую spacing систему**
2. **Все компоненты будут иметь единообразный дизайн**
3. **Код будет легко поддерживаться**
4. **Сайт будет выглядеть современно и профессионально**
5. **Адаптивность улучшится на всех устройствах**

---

**Готово к реализации!** 🚀
