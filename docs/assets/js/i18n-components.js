/**
 * i18n Component Translations
 * Automatically translates component text based on current language
 */

(function() {
  'use strict';

  // Translation mappings for components
  const componentTranslations = {
    en: {
      // Navigation
      'Solutions': 'Solutions',
      'Business Types': 'Business Types',
      'Pricing': 'Pricing',
      'Company': 'Company',
      'Careers': 'Careers',
      'Login': 'Login',
      'Get Demo': 'Get Demo',
      'Get a Demo': 'Get a Demo',
      
      // Solutions submenu
      'Software': 'Software',
      'Hardware': 'Hardware',
      'Integrations': 'Integrations',
      'POS Software': 'POS Software',
      'Payment Processing': 'Payment Processing',
      'Mobile App': 'Mobile App',
      'Admin Panel': 'Admin Panel',
      'All Hardware': 'All Hardware',
      'Tablets': 'Tablets',
      'Printers': 'Printers',
      'Cash Drawer': 'Cash Drawer',
      'Scanners': 'Scanners',
      'EMV Terminals': 'EMV Terminals',
      'Scales': 'Scales',
      
      // Business Types
      'Restaurant POS': 'Restaurant POS',
      'Retail POS': 'Retail POS',
      'Public Sector': 'Public Sector',
      'Bars & Nightclubs': 'Bars & Nightclubs',
      'Casual Dining': 'Casual Dining',
      'Fine Dining': 'Fine Dining',
      'Quick Service Restaurants (QSR)': 'Quick Service Restaurants (QSR)',
      'Coffee Shops & Bakeries': 'Coffee Shops & Bakeries',
      'Food Trucks': 'Food Trucks',
      'Liquor Stores': 'Liquor Stores',
      'Clothing and Apparel Stores': 'Clothing and Apparel Stores',
      'Grocery and Convenience Stores': 'Grocery and Convenience Stores',
      'Specialty Stores': 'Specialty Stores',
      
      // Footer
      'POS Hardware': 'POS Hardware',
      'About us': 'About us',
      'Login Merchant': 'Login Merchant',
      'Contact Us': 'Contact Us',
      'Privacy Policy': 'Privacy Policy',
      'Terms of Service': 'Terms of Service',
      'Cookie Policy': 'Cookie Policy',
      'Legal': 'Legal',
      'Copyright © 2024 Slimrate LLC. All rights reserved': 'Copyright © 2024 Slimrate LLC. All rights reserved',
      
      // Descriptions
      'Industry leading point of sale and management tools to separate you from your competition. Live support to ensure your questions are always answered.': 'Industry leading point of sale and management tools to separate you from your competition. Live support to ensure your questions are always answered.',
      'Increase revenue, streamline operations, and build customer loyalty with powerful cloud-based software.': 'Increase revenue, streamline operations, and build customer loyalty with powerful cloud-based software.',
      'Deliver a seamless user experience with durable hardware and built-in powerful technology': 'Deliver a seamless user experience with durable hardware and built-in powerful technology',
      'Connect seamlessly with your favorite tools and services': 'Connect seamlessly with your favorite tools and services',
      'Modern payment and point of sale technology for a variety of applications': 'Modern payment and point of sale technology for a variety of applications',
      
      // Common
      'More': 'More',
      'Learn More': 'Learn More',
      'Get Started': 'Get Started',
      'Get Quote': 'Get Quote',
      'View All': 'View All',
      
      // Homepage
      'Elevate Your Business with our All-in-One POS Solution': 'Elevate Your Business with our All-in-One POS Solution',
      'Seamlessly Integrated Software, Hardware, and Payment Processing': 'Seamlessly Integrated Software, Hardware, and Payment Processing',
      'Customer': 'Customer',
      'Testimonials': 'Testimonials',
      'Accessories': 'Accessories'
    },
    
    es: {
      // Navigation
      'Solutions': 'Soluciones',
      'Business Types': 'Tipos de Negocio',
      'Pricing': 'Precios',
      'Company': 'Empresa',
      'Careers': 'Carreras',
      'Login': 'Iniciar Sesión',
      'Get Demo': 'Obtener Demo',
      'Get a Demo': 'Obtener Demo',
      
      // Solutions submenu
      'Software': 'Software',
      'Hardware': 'Hardware',
      'Integrations': 'Integraciones',
      'POS Software': 'Software POS',
      'Payment Processing': 'Procesamiento de Pagos',
      'Mobile App': 'Aplicación Móvil',
      'Admin Panel': 'Panel de Administración',
      'All Hardware': 'Todo el Hardware',
      'Tablets': 'Tabletas',
      'Printers': 'Impresoras',
      'Cash Drawer': 'Cajón de Efectivo',
      'Scanners': 'Escáneres',
      'EMV Terminals': 'Terminales EMV',
      'Scales': 'Básculas',
      
      // Business Types
      'Restaurant POS': 'POS para Restaurantes',
      'Retail POS': 'POS para Retail',
      'Public Sector': 'Sector Público',
      'Bars & Nightclubs': 'Bares y Discotecas',
      'Casual Dining': 'Restaurantes Informales',
      'Fine Dining': 'Alta Cocina',
      'Quick Service Restaurants (QSR)': 'Restaurantes de Servicio Rápido (QSR)',
      'Coffee Shops & Bakeries': 'Cafeterías y Panaderías',
      'Food Trucks': 'Food Trucks',
      'Liquor Stores': 'Licorerías',
      'Clothing and Apparel Stores': 'Tiendas de Ropa',
      'Grocery and Convenience Stores': 'Supermercados y Tiendas',
      'Specialty Stores': 'Tiendas Especializadas',
      
      // Footer
      'POS Hardware': 'Hardware POS',
      'About us': 'Sobre Nosotros',
      'Login Merchant': 'Iniciar Sesión Merchant',
      'Contact Us': 'Contáctenos',
      'Privacy Policy': 'Política de Privacidad',
      'Terms of Service': 'Términos de Servicio',
      'Cookie Policy': 'Política de Cookies',
      'Legal': 'Legal',
      'Copyright © 2024 Slimrate LLC. All rights reserved': 'Copyright © 2024 Slimrate LLC. Todos los derechos reservados',
      
      // Descriptions
      'Industry leading point of sale and management tools to separate you from your competition. Live support to ensure your questions are always answered.': 'Herramientas líderes de punto de venta y gestión para diferenciarte de la competencia. Soporte en vivo para responder todas tus preguntas.',
      'Increase revenue, streamline operations, and build customer loyalty with powerful cloud-based software.': 'Aumente los ingresos, optimice las operaciones y fidelice a los clientes con un potente software basado en la nube.',
      'Deliver a seamless user experience with durable hardware and built-in powerful technology': 'Ofrezca una experiencia de usuario perfecta con hardware duradero y tecnología potente integrada',
      'Connect seamlessly with your favorite tools and services': 'Conéctese sin problemas con sus herramientas y servicios favoritos',
      'Modern payment and point of sale technology for a variety of applications': 'Tecnología moderna de pago y punto de venta para diversas aplicaciones',
      
      // Common
      'More': 'Más',
      'Learn More': 'Más Información',
      'Get Started': 'Comenzar',
      'Get Quote': 'Obtener Cotización',
      'View All': 'Ver Todo',
      
      // Homepage
      'Elevate Your Business with our All-in-One POS Solution': 'Eleve Su Negocio con Nuestra Solución POS Todo en Uno',
      'Seamlessly Integrated Software, Hardware, and Payment Processing': 'Software, Hardware y Procesamiento de Pagos Integrados',
      'Customer': 'Testimonios de',
      'Testimonials': 'Clientes',
      'Accessories': 'Accesorios',
      
      // Product descriptions
      'Powerful point of sale system for restaurants and retail': 'Potente sistema de punto de venta para restaurantes y retail',
      'Full suite of payment acceptance tools': 'Suite completa de herramientas de aceptación de pagos',
      'Manage your business from anywhere': 'Gestione su negocio desde cualquier lugar',
      'Complete control and insights for your business': 'Control total e información para su negocio',
      'Complete range of POS hardware solutions': 'Gama completa de soluciones de hardware POS',
      
      // Public Sector
      'Public Sector Overview': 'Resumen del Sector Público',
      'Government & Municipal': 'Gobierno y Municipal',
      'Education (K-12 & Higher Ed)': 'Educación (K-12 y Superior)',
      'Healthcare & Public Health': 'Salud y Salud Pública',
      'Museums & Nonprofits': 'Museos y Sin Fines de Lucro',
      'Modern POS, payments & digital commerce for government, education & nonprofits': 'POS moderno, pagos y comercio digital para gobierno, educación y organizaciones sin fines de lucro',
      
      // Restaurant descriptions
      'Cloud-based POS & management solution for restaurants of all sizes. Built to make your restaurant perform better': 'Solución POS y de gestión basada en la nube para restaurantes de todos los tamaños. Diseñada para que su restaurante funcione mejor',
      'Powerful bar and club point of sale solution to ignite your business': 'Potente solución de punto de venta para bares y clubes',
      
      // Retail descriptions
      'Sell in-style with an integrated retail POS solution that makes it easy to sell online and in-store': 'Venda con estilo con una solución POS de retail integrada que facilita la venta en línea y en tienda',
      
      // FAQ
      'FAQ': 'Preguntas Frecuentes',
      "Haven't found the answer?": '¿No encontró la respuesta?',
      'More Answers to Your Questions': 'Más Respuestas a Sus Preguntas',
      'Need more help?': '¿Necesita más ayuda?',
      'Who is Slimrate for?': '¿Para quién es Slimrate?',
      'Is Slimrate POS cloud-based?': '¿Slimrate POS está basado en la nube?',
      'What kind of hardware is needed for the POS system?': '¿Qué tipo de hardware se necesita para el sistema POS?',
      
      // Contact Form
      'Contact us': 'Contáctenos',
      "Get in Touch - Your Questions, Our Answers. Let's Connect!": 'Póngase en Contacto - Sus Preguntas, Nuestras Respuestas. ¡Conectemos!',
      'Business type?': '¿Tipo de negocio?',
      'Restaurant': 'Restaurante',
      'Retail': 'Retail',
      'First and Last Name': 'Nombre y Apellido',
      'Email': 'Correo Electrónico',
      'Phone Number': 'Número de Teléfono',
      'Company Name': 'Nombre de la Empresa',
      'Zip Code': 'Código Postal',
      'Submit': 'Enviar',
      'Name and Email are required.': 'Nombre y correo electrónico son requeridos.',
      'Thank you! We will contact you soon.': '¡Gracias! Nos pondremos en contacto pronto.',
      'Something went wrong. Please try again.': 'Algo salió mal. Por favor intente de nuevo.',
      
      // Hardware categories
      'Desktop scanner': 'Escáner de escritorio',
      'Wireless handheld scanner': 'Escáner inalámbrico de mano',
      'Wired handheld scanner': 'Escáner de mano con cable',
      'Thermal receipt printer': 'Impresora térmica de recibos',
      'Secure cash drawer': 'Cajón de efectivo seguro',
      'Payment terminal': 'Terminal de pago',
      'Mobile payment terminal': 'Terminal de pago móvil',
      'Precise measurements': 'Mediciones precisas',
      'Tablet with integrated scales': 'Tableta con báscula integrada',
      'Smart labeling scale': 'Báscula inteligente de etiquetado',
      'Flagship performance tablet': 'Tableta de alto rendimiento',
      'Sleek fanless tablet POS': 'POS tableta compacto sin ventilador',
      'Double display POS system': 'Sistema POS de doble pantalla',
      'Single display touchscreen': 'Pantalla táctil simple',
      
      // Integration descriptions
      'Employee scheduling and time tracking': 'Programación de empleados y control de tiempo',
      'Alcohol compliance and inventory management': 'Cumplimiento de alcohol y gestión de inventario',
      'Tobacco product compliance tracking': 'Seguimiento de cumplimiento de productos de tabaco',
      'Security camera integration': 'Integración de cámaras de seguridad',
      'Product information and pricing': 'Información de productos y precios',
      'E-commerce platform integration': 'Integración de plataforma de comercio electrónico'
    }
  };

  /**
   * Get translation for a text
   */
  function translate(text, lang) {
    if (!lang) {
      lang = window.i18n?.currentLang || 'en';
    }
    
    const translations = componentTranslations[lang];
    if (!translations) return text;
    
    // Try exact match first
    if (translations[text]) {
      return translations[text];
    }
    
    // Try trimmed match
    const trimmed = text.trim();
    if (translations[trimmed]) {
      return translations[trimmed];
    }
    
    return text;
  }

  /**
   * Translate all text nodes in an element
   */
  function translateElement(element, lang) {
    if (!element) return;
    
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    
    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
      if (node.textContent.trim()) {
        textNodes.push(node);
      }
    }
    
    textNodes.forEach(textNode => {
      const originalText = textNode.textContent;
      const trimmedText = originalText.trim();
      
      if (trimmedText && componentTranslations[lang]?.[trimmedText]) {
        // Preserve leading/trailing whitespace
        const leadingSpace = originalText.match(/^\s*/)[0];
        const trailingSpace = originalText.match(/\s*$/)[0];
        textNode.textContent = leadingSpace + componentTranslations[lang][trimmedText] + trailingSpace;
      }
    });
  }

  /**
   * Translate component after it's connected
   */
  function translateComponent(component) {
    const lang = window.i18n?.currentLang || 'en';
    if (lang === 'en') return; // No translation needed for English
    
    // Small delay to ensure component is fully rendered
    requestAnimationFrame(() => {
      translateElement(component, lang);
    });
  }

  // Export functions
  window.i18nComponents = {
    translate,
    translateElement,
    translateComponent,
    translations: componentTranslations
  };

  // Auto-translate components when i18n is loaded
  window.addEventListener('i18n:loaded', () => {
    const lang = window.i18n?.currentLang;
    if (lang && lang !== 'en') {
      // Translate existing components
      document.querySelectorAll('top-menu, bottom-menu, mini-faq, pricing-form').forEach(comp => {
        translateElement(comp, lang);
      });
      // Also translate static content on the page
      translateStaticContent(lang);
    }
  });

  /**
   * Translate static content on the page (headers, buttons, etc.)
   */
  function translateStaticContent(lang) {
    // Translate buttons with specific text
    document.querySelectorAll('.btn, button, input[type="submit"]').forEach(el => {
      const text = el.value || el.textContent;
      const trimmed = text?.trim();
      if (trimmed && componentTranslations[lang]?.[trimmed]) {
        if (el.value) {
          el.value = componentTranslations[lang][trimmed];
        } else {
          el.textContent = componentTranslations[lang][trimmed];
        }
      }
    });
    
    // Translate labels
    document.querySelectorAll('label').forEach(el => {
      const trimmed = el.textContent?.trim();
      if (trimmed && componentTranslations[lang]?.[trimmed]) {
        el.textContent = componentTranslations[lang][trimmed];
      }
    });
    
    // Translate h1, h2, h3 titles
    document.querySelectorAll('h1, h2, h3, .section-title, .section-descr').forEach(el => {
      const trimmed = el.textContent?.trim();
      if (trimmed && componentTranslations[lang]?.[trimmed]) {
        el.textContent = componentTranslations[lang][trimmed];
      }
    });
  }

  // Also handle DOMContentLoaded for components that load before i18n
  document.addEventListener('DOMContentLoaded', () => {
    const lang = window.i18n?.currentLang;
    if (lang && lang !== 'en') {
      setTimeout(() => {
        document.querySelectorAll('top-menu, bottom-menu, mini-faq, pricing-form').forEach(comp => {
          translateElement(comp, lang);
        });
        translateStaticContent(lang);
      }, 100);
    }
  });

})();
