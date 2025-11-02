# Slimrate Spacing System - Documentation

**Created:** November 2, 2025  
**Version:** 1.0  
**Status:** Phase 1 Complete

---

## 📋 Overview

Единая система вертикальных отступов для сайта Slimrate, основанная на 8-point grid системе. Обеспечивает консистентность, адаптивность и легкость в поддержке.

---

## 🎯 Основные принципы

### 1. **8-Point Grid System**
Все отступы кратны 8px (базовая единица spacing-2). Это обеспечивает:
- Визуальную гармонию
- Pixel-perfect выравнивание
- Легкость масштабирования

### 2. **Семантические переменные**
Вместо хардкодных значений используются CSS-переменные:
```css
/* ❌ Плохо */
margin-top: 80px;

/* ✅ Хорошо */
margin-top: var(--section-spacing-lg);
```

### 3. **Адаптивность по умолчанию**
Отступы автоматически уменьшаются на мобильных устройствах через media queries.

---

## 📐 Spacing Scale

### Base Units (Desktop)
```css
--spacing-0:  0px
--spacing-1:  4px      /* минимальный отступ */
--spacing-2:  8px      /* базовая единица */
--spacing-3:  12px
--spacing-4:  16px
--spacing-5:  20px
--spacing-6:  24px
--spacing-8:  32px
--spacing-10: 40px
--spacing-12: 48px
--spacing-16: 64px
--spacing-20: 80px
--spacing-24: 96px
--spacing-32: 128px
--spacing-40: 160px
--spacing-48: 192px
```

---

## 🔧 Semantic Variables

### Section Spacing (между основными блоками страницы)

| Variable | Desktop | Tablet | Mobile | Small Mobile | Использование |
|----------|---------|--------|--------|--------------|---------------|
| `--section-spacing-xs` | 40px | 32px | 24px | 20px | Минимальный зазор |
| `--section-spacing-sm` | 48px | 40px | 32px | 24px | Малый зазор |
| `--section-spacing-md` | 64px | 48px | 40px | 32px | Средний зазор |
| `--section-spacing-lg` | **80px** | **64px** | **48px** | **40px** | **Стандарт (default)** |
| `--section-spacing-xl` | 96px | 80px | 64px | 48px | Большой зазор |
| `--section-spacing-2xl` | 128px | 96px | 80px | 64px | Экстра большой |

### Component Spacing (внутри компонентов)

| Variable | Value | Использование |
|----------|-------|---------------|
| `--component-spacing-xs` | 8px | Плотное размещение |
| `--component-spacing-sm` | 12px | Малый отступ |
| `--component-spacing-md` | 16px | Стандарт |
| `--component-spacing-lg` | 24px | Большой отступ |
| `--component-spacing-xl` | 32px | Между подсекциями |
| `--component-spacing-2xl` | 40px | Максимальный |

### Hero/Content Spacing

```css
--hero-padding-top: 64px         /* padding сверху hero-секций */
--hero-padding-bottom: 128px     /* padding снизу hero-секций */
--content-padding-vertical: 64px /* стандартный padding секций */
--content-padding-sm: 40px       /* малый padding */
--content-padding-lg: 80px       /* большой padding */
```

---

## 💡 Когда использовать

### Section Spacing (`--section-spacing-*`)

Используйте для отступов **между основными блоками страницы**:

```css
/* ✅ Правильно */
.wrapper > section {
    margin-top: var(--section-spacing-lg);
}

.testimonial-wrapper {
    margin-top: var(--section-spacing-xl); /* больше для акцента */
}
```

**Примеры:**
- Отступ между hero и следующей секцией
- Отступ между `.coop` и `.hardware-nav`
- Отступ между формой и футером

### Component Spacing (`--component-spacing-*`)

Используйте для отступов **внутри компонентов и карточек**:

```css
/* ✅ Правильно */
.card-title {
    margin-bottom: var(--component-spacing-md);
}

.card-content {
    margin-bottom: var(--component-spacing-lg);
}

.card-footer {
    margin-top: var(--component-spacing-xl);
}
```

**Примеры:**
- Отступ между заголовком и описанием карточки
- Отступ между элементами формы
- Отступ внутри FAQ-вопросов

---

## 🚀 Примеры использования

### 1. Стандартная секция

```css
.my-section {
    margin-top: var(--section-spacing-lg);
    padding: var(--content-padding-vertical) 0;
}
```

### 2. Hero-секция

```css
.hero {
    padding-top: var(--hero-padding-top);
    padding-bottom: var(--hero-padding-bottom);
}
```

### 3. Карточка

```css
.card {
    padding: var(--component-spacing-xl);
}

.card__title {
    margin-bottom: var(--component-spacing-md);
}

.card__description {
    margin-bottom: var(--component-spacing-lg);
}

.card__button {
    margin-top: var(--component-spacing-xl);
}
```

### 4. Использование utility классов

```html
<!-- Быстрое применение стандартных отступов -->
<section class="mt-section-lg mb-section-0">
    <h2 class="mb-comp-md">Заголовок</h2>
    <p class="mb-comp-lg">Описание</p>
    <button>CTA</button>
</section>
```

---

## 📱 Адаптивность

Все spacing-переменные автоматически адаптируются:

```css
/* Desktop (default) */
--section-spacing-lg: 80px;

/* Tablet (< 991px) */
--section-spacing-lg: 64px;

/* Mobile (< 767px) */
--section-spacing-lg: 48px;

/* Small Mobile (< 480px) */
--section-spacing-lg: 40px;
```

**Ничего дополнительного делать не нужно!** Просто используйте переменные.

---

## 🛠 Utility Classes

### Margin Top - Section
```css
.mt-section-xs   /* margin-top: var(--section-spacing-xs) */
.mt-section-sm   /* margin-top: var(--section-spacing-sm) */
.mt-section-md   /* margin-top: var(--section-spacing-md) */
.mt-section-lg   /* margin-top: var(--section-spacing-lg) */
.mt-section-xl   /* margin-top: var(--section-spacing-xl) */
.mt-section-2xl  /* margin-top: var(--section-spacing-2xl) */
.mt-section-0    /* margin-top: 0 */
```

### Margin Bottom - Section
```css
.mb-section-xs
.mb-section-sm
.mb-section-md
.mb-section-lg
.mb-section-xl
.mb-section-2xl
.mb-section-0
```

### Margin - Component
```css
.mt-comp-xs, .mt-comp-sm, .mt-comp-md, .mt-comp-lg, .mt-comp-xl, .mt-comp-2xl
.mb-comp-xs, .mb-comp-sm, .mb-comp-md, .mb-comp-lg, .mb-comp-xl, .mb-comp-2xl
```

---

## ⚠️ Важные правила

### ❌ НЕ делайте так:

```css
/* Хардкодные значения */
margin-top: 85px;
padding-bottom: 123px;

/* Произвольные значения */
margin-top: 47px;

/* Использование px напрямую */
.section { margin: 80px 0; }
```

### ✅ Делайте так:

```css
/* Используйте семантические переменные */
margin-top: var(--section-spacing-lg);
padding-bottom: var(--content-padding-vertical);

/* Или utility классы */
.mt-section-lg
.mb-comp-md
```

---

## 🔄 Migration Guide

### Как мигрировать существующий код:

**Шаг 1:** Найдите хардкодные значения
```bash
# Поиск всех margin-top/bottom в CSS
grep -n "margin-top\|margin-bottom" style.css
```

**Шаг 2:** Замените на ближайшее значение из шкалы

| Было | Станет |
|------|--------|
| `margin-top: 80px` | `var(--section-spacing-lg)` |
| `margin-top: 100px` | `var(--section-spacing-xl)` |
| `margin-top: 64px` | `var(--section-spacing-md)` |
| `margin-top: 40px` | `var(--section-spacing-xs)` |
| `margin-bottom: 24px` | `var(--component-spacing-lg)` |
| `margin-bottom: 16px` | `var(--component-spacing-md)` |
| `padding: 64px 0` | `var(--content-padding-vertical) 0` |

**Шаг 3:** Тестируйте визуально на всех breakpoints

---

## 📊 Текущий статус

### ✅ Завершено (Phase 1):
- [x] Создан `spacing-system.css` с полной шкалой
- [x] Обновлен `layout-overrides.css`
- [x] Добавлены адаптивные media queries
- [x] Интегрировано в основные страницы (index, hardware, restaurant, software, retail, company, payment_processing, pricing)
- [x] Созданы utility классы

### 🚧 Следующие этапы (Phase 2-4):
- [ ] Рефакторинг `style.css` (заменить ~200 хардкодных значений)
- [ ] Обновить `mobile-fixes.css` для использования новых переменных
- [ ] Устранить экстремальные значения (425px, 320px, 317px и т.д.)
- [ ] Тестирование на всех страницах
- [ ] Code review

---

## 🎓 Best Practices

1. **Всегда используйте переменные**, не хардкодите значения
2. **Выбирайте ближайшее значение** из шкалы, не создавайте новые
3. **Section spacing для секций**, component spacing для компонентов
4. **По умолчанию используйте `-lg`** (стандартный размер)
5. **Используйте `-xl` и `-2xl` для акцентов**, не злоупотребляйте
6. **Тестируйте на мобильных** - отступы уменьшаются автоматически

---

## 📞 Вопросы?

Если не уверены, какую переменную использовать:
1. Посмотрите на соседние секции - что они используют?
2. Используйте `--section-spacing-lg` по умолчанию для секций
3. Используйте `--component-spacing-md` по умолчанию для компонентов
4. Консультируйтесь с командой при необходимости

---

**Happy spacing! 🎨**
