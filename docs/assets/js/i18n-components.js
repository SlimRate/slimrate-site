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
      
      // Integrations menu items
      'Liquor Control': 'Control de Licores',
      'Tobacco Scan Data': 'Datos de Escaneo de Tabaco',
      'Barcode Lookup': 'Búsqueda de Código de Barras',
      'Digital Scale': 'Báscula Digital',
      'AIScale POS S625': 'AIScale POS S625',
      'AIScale Label S130': 'AIScale Label S130',
      
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
      'E-commerce platform integration': 'Integración de plataforma de comercio electrónico',
      
      // Tariff Cards
      'Slimrate rates': 'Tarifas de Slimrate',
      'Basic Plan': 'Plan Básico',
      'Premium Plan': 'Plan Premium',
      'Custom Plan': 'Plan Personalizado',
      'For businesses starting out or needing essential POS functionality, our Basic Plan covers all your core needs.': 'Para negocios que comienzan o necesitan funcionalidad POS esencial, nuestro Plan Básico cubre todas sus necesidades principales.',
      'Unlock advanced features and boost your business operations with our Premium Plan. This plan offers enhanced capabilities to streamline your workflow and grow your business.': 'Desbloquee funciones avanzadas y mejore las operaciones de su negocio con nuestro Plan Premium. Este plan ofrece capacidades mejoradas para optimizar su flujo de trabajo y hacer crecer su negocio.',
      'For businesses with unique needs, our Custom Plan provides a fully tailored POS experience. Work with our in-house software team to build a solution that aligns perfectly with your business requirements.': 'Para negocios con necesidades únicas, nuestro Plan Personalizado proporciona una experiencia POS completamente adaptada. Trabaje con nuestro equipo de software interno para construir una solución que se alinee perfectamente con los requisitos de su negocio.',
      'Standard POS software with essential sales and inventory management': 'Software POS estándar con gestión esencial de ventas e inventario',
      'Basic reporting and analytics': 'Reportes y análisis básicos',
      'Access to standard hardware options (POS display, receipt printers, cash drawers)': 'Acceso a opciones de hardware estándar (pantalla POS, impresoras de recibos, cajones de efectivo)',
      'Integrated payment processing with competitive rates': 'Procesamiento de pagos integrado con tarifas competitivas',
      '24/7 live customer support': 'Soporte al cliente en vivo 24/7',
      'All Basic Plan features plus advanced inventory management': 'Todas las funciones del Plan Básico más gestión avanzada de inventario',
      'Multi-location and multi-user management': 'Gestión multi-ubicación y multi-usuario',
      'Enhanced reporting and custom analytics dashboards': 'Reportes mejorados y paneles de análisis personalizados',
      'Loyalty programs and customer relationship management (CRM)': 'Programas de lealtad y gestión de relaciones con clientes (CRM)',
      'Access to expanded hardware options and integrations': 'Acceso a opciones de hardware e integraciones expandidas',
      'Priority support with dedicated account management': 'Soporte prioritario con gestión de cuenta dedicada',
      'Completely customized software tailored to your business operations': 'Software completamente personalizado adaptado a las operaciones de su negocio',
      'Integration with existing systems and third-party applications': 'Integración con sistemas existentes y aplicaciones de terceros',
      'Personalized hardware and software configuration': 'Configuración personalizada de hardware y software',
      'Advanced analytics and reporting customized to your business': 'Análisis y reportes avanzados personalizados para su negocio',
      'Dedicated project manager and ongoing support': 'Gerente de proyecto dedicado y soporte continuo',
      'Perfect for: Small businesses, startups, cafes, and boutique retailers.': 'Perfecto para: Pequeños negocios, startups, cafés y tiendas boutique.',
      'Perfect for: Medium-sized businesses, multi-location stores, and businesses looking to scale.': 'Perfecto para: Negocios medianos, tiendas con múltiples ubicaciones y negocios que buscan escalar.',
      'Perfect for: Large enterprises, specialty retailers, and businesses with complex requirements.': 'Perfecto para: Grandes empresas, tiendas especializadas y negocios con requisitos complejos.',
      'Starting at': 'Desde',
      '/month': '/mes',
      'Custom price': 'Precio personalizado',
      'Shop Now': 'Comprar Ahora',
      'View all featres →': 'Ver todas las funciones →',
      
      // Software Advantages
      'Comprehensive, Easy-to-use Software': 'Software Completo y Fácil de Usar',
      'Powerful restaurant and retail software for restaurants and retail stores of all sizes': 'Potente software para restaurantes y tiendas de todos los tamaños',
      'Simple and Easy-to-use': 'Simple y Fácil de Usar',
      'Easy-to-use POS solution built to simplify operations with a lightning-fast interface': 'Solución POS fácil de usar diseñada para simplificar operaciones con una interfaz ultrarrápida',
      'Seamless Onboarding': 'Incorporación Sin Problemas',
      'The easiest way to start a business and get our system up and running in the fastest way possible': 'La forma más fácil de iniciar un negocio y poner nuestro sistema en funcionamiento lo más rápido posible',
      'Industry Leading Customer Support': 'Soporte al Cliente Líder en la Industria',
      'Above and beyond when it comes to customer care. 24/7/365 live support': 'Más allá de lo esperado en atención al cliente. Soporte en vivo 24/7/365',
      'Training': 'Capacitación',
      'Online and in-person training so you can get help when you need it': 'Capacitación en línea y presencial para que pueda obtener ayuda cuando la necesite',
      
      // H-Advantages (Our tools section)
      'Our tools - your business': 'Nuestras herramientas - tu negocio',
      '-Inventory Management': '-Gestión de Inventario',
      '-Sell Online + In-store': '-Venta Online + En Tienda',
      '-Multi-location Functions': '-Funciones Multi-ubicación',
      '-Fraud and Loss Prevention': '-Prevención de Fraude y Pérdidas',
      '-Loyalty + Marketing Tools': '-Herramientas de Lealtad + Marketing',
      '-Detailed Reporting': '-Reportes Detallados',
      '-All-in-one Touchscreen Terminal': '-Terminal Táctil Todo en Uno',
      '-Customer-facing Display': '-Pantalla para el Cliente',
      '-Secure Payment Terminals': '-Terminales de Pago Seguras',
      '-Thermal/Impact Printers': '-Impresoras Térmicas/de Impacto',
      '-Barcode + Scale Integrations': '-Integraciones de Código de Barras + Básculas',
      '-Kitchen Displays': '-Pantallas de Cocina',
      'Payment Technology': 'Tecnología de Pago',
      '-EMV + Contactless Payments': '-Pagos EMV + Sin Contacto',
      '-Next Day Funding': '-Financiamiento al Día Siguiente',
      '-Supports Cash Discount Program': '-Soporta Programa de Descuento por Efectivo',
      '-E-invoicing': '-Facturación Electrónica',
      '-Offline Processing': '-Procesamiento Sin Conexión',
      '-Gift Card Processing': '-Procesamiento de Tarjetas de Regalo',
      '24/7/365 Support': 'Soporte 24/7/365',
      '-Professional Installation': '-Instalación Profesional',
      '-Quick, Seamless Setup and Implementation': '-Configuración e Implementación Rápida y Sin Problemas',
      '-Live Support': '-Soporte en Vivo',
      '-Virtual Trainings': '-Capacitaciones Virtuales',
      '-On-site and Remote Technical Support': '-Soporte Técnico Presencial y Remoto',
      '-12-Month Limited Warranty': '-Garantía Limitada de 12 Meses',
      
      // Hardware Advantages
      'Reliable Hardware Designed to Perform': 'Hardware Confiable Diseñado para Rendir',
      'Discover the Excellence of Our POS Hardware: Designed for Performance and Efficiency': 'Descubra la Excelencia de Nuestro Hardware POS: Diseñado para Rendimiento y Eficiencia',
      "In today's fast-paced business world, the right tools can make all the difference. Our POS hardware is more than just a piece of equipment; it's a powerful tool designed to help you operate with efficiency and effectiveness, setting you apart from the competition. Here's why our hardware is the best choice for your business:": 'En el acelerado mundo empresarial de hoy, las herramientas adecuadas pueden marcar la diferencia. Nuestro hardware POS es más que un simple equipo; es una herramienta poderosa diseñada para ayudarlo a operar con eficiencia y efectividad, diferenciándolo de la competencia. He aquí por qué nuestro hardware es la mejor opción para su negocio:',
      'Durable and Reliable Hardware': 'Hardware Duradero y Confiable',
      'High-performance POS hardware built tough, specifically for restaurant and retail applications.': 'Hardware POS de alto rendimiento construido resistente, específicamente para aplicaciones de restaurantes y comercios.',
      '24/7/365 Tech Support': 'Soporte Técnico 24/7/365',
      'Direct access to technical support 24 hour a day. 7 days a week. Available both online and by phone.': 'Acceso directo a soporte técnico las 24 horas del día, los 7 días de la semana. Disponible en línea y por teléfono.',
      'Professional Installations and Trainings': 'Instalaciones y Capacitaciones Profesionales',
      'Professional installation by our Slimrate certified technicians. Live trainings to keep you up to speed on the latest features.': 'Instalación profesional por nuestros técnicos certificados de Slimrate. Capacitaciones en vivo para mantenerlo al día con las últimas funciones.',
      'Quality Guaranteed': 'Calidad Garantizada',
      'All Slimrate POS hardware includes a 12-month limited warranty.': 'Todo el hardware POS de Slimrate incluye una garantía limitada de 12 meses.',
      
      // Who Cards section
      'For whom?': '¿Para quién?',
      'Bars and Nightclubs': 'Bares y Discotecas',
      'All in one POS solution designed specifically for bars and nightclubs.': 'Solución POS todo en uno diseñada específicamente para bares y discotecas.',
      'Fully integrated POS solution to help turn tables faster.': 'Solución POS completamente integrada para ayudar a rotar mesas más rápido.',
      'Fine dining specialized POS solution delivers an exceptional customer experience with the latest ordering and payment technology': 'La solución POS especializada para alta cocina ofrece una experiencia excepcional al cliente con la última tecnología de pedidos y pagos',
      'Quick Service Restaurants': 'Restaurantes de Servicio Rápido',
      'Quick service tools and features designed to outperform your competition': 'Herramientas y funciones de servicio rápido diseñadas para superar a tu competencia',
      'Coffee Shop and Bakeries': 'Cafeterías y Panaderías',
      'All-in-one software built to simplify operations and delight your customers': 'Software todo en uno diseñado para simplificar operaciones y deleitar a tus clientes',
      'Food Truck': 'Food Truck',
      'Order and payment technology for your mobile kitchen': 'Tecnología de pedidos y pagos para tu cocina móvil',
      'The comprehensive and user-friendly wine and spirits solution to build customer loyalty and keep them coming back': 'La solución integral y fácil de usar para vinos y licores para fidelizar clientes y hacer que regresen',
      'Best in class point of sale solution for clothing and apparel stores.': 'La mejor solución de punto de venta para tiendas de ropa y moda.',
      'Turn more customers with a seamless checkout process. Customizable reward and loyalty programs to engage your customers': 'Convierta más clientes con un proceso de pago fluido. Programas personalizables de recompensas y lealtad para involucrar a sus clientes',
      'Product and management solutions that will help You run your business': 'Soluciones de producto y gestión que te ayudarán a administrar tu negocio',
      
      // Mini FAQ
      'More Answers to Your Questions': 'Más Respuestas a Sus Preguntas',
      'Slimrate POS caters primarily to the restaurant and retail sectors, offering tailored solutions for these industries. However, our commitment to versatility means that we also provide specialized solutions for various other business types. To discover the ideal Slimrate solution for your business, we recommend connecting with one of our agents. They\'ll work with you to determine how our system can best meet your specific needs, ensuring you get the most out of your Slimrate experience.': 'Slimrate POS atiende principalmente a los sectores de restaurantes y retail, ofreciendo soluciones adaptadas para estas industrias. Sin embargo, nuestro compromiso con la versatilidad significa que también proporcionamos soluciones especializadas para varios otros tipos de negocios. Para descubrir la solución Slimrate ideal para su negocio, le recomendamos conectarse con uno de nuestros agentes. Ellos trabajarán con usted para determinar cómo nuestro sistema puede satisfacer mejor sus necesidades específicas.',
      'Indeed, Slimrate POS operates as a cloud-based solution. This means that your Slimrate accounts are continuously updated in real-time, and you can access them from virtually anywhere at any time. Whether you\'re in your store, at home, or on the go, you can seamlessly connect to your Slimrate POS system to oversee your business operations, make crucial decisions, and stay in control no matter where you are.': 'Efectivamente, Slimrate POS opera como una solución basada en la nube. Esto significa que sus cuentas de Slimrate se actualizan continuamente en tiempo real, y puede acceder a ellas desde prácticamente cualquier lugar en cualquier momento. Ya sea que esté en su tienda, en casa o en movimiento, puede conectarse sin problemas a su sistema Slimrate POS para supervisar las operaciones de su negocio.',
      'All-in-one touchscreen tablet, thermal or impact printer, and a payment terminal.': 'Tablet táctil todo en uno, impresora térmica o de impacto, y un terminal de pago.',
      
      // Features slider
      'Features': 'Características',
      'Payment processing': 'Procesamiento de pagos',
      'Full suite of payment acceptance tools - in-store, online, and mobile': 'Suite completa de herramientas de aceptación de pagos - en tienda, en línea y móvil',
      'Offline mode': 'Modo sin conexión',
      "Keep your business running, even if your internet isn't": 'Mantén tu negocio funcionando, incluso si tu internet no lo está',
      'Barcode and scale integration': 'Integración de código de barras y báscula',
      'Easily scan and weigh products to streamline checkout and control inventory': 'Escanea y pesa productos fácilmente para agilizar el pago y controlar el inventario',
      'Inventory management': 'Gestión de inventario',
      'Streamline back-office management with central access to track inventory across multiple channels and locations': 'Optimiza la gestión administrativa con acceso central para rastrear inventario en múltiples canales y ubicaciones',
      'Employee scheduling and payroll': 'Programación de empleados y nómina',
      'Built-in scheduling and payroll management tools': 'Herramientas integradas de programación y gestión de nómina',
      'ID scanning and age verification': 'Escaneo de ID y verificación de edad',
      'Enhance security and ensure compliance in your business': 'Mejora la seguridad y asegura el cumplimiento en tu negocio',
      'Fraud and loss prevention': 'Prevención de fraude y pérdidas',
      'Reduce or eliminate shrinkage, stock-outs, and inventory discrepancies': 'Reduce o elimina mermas, faltantes de stock y discrepancias de inventario',
      'Gift cards and loyalty programs': 'Tarjetas de regalo y programas de lealtad',
      'Track and reward loyal customers. Promote your business with promotional codes and gift cards': 'Rastrea y premia a clientes leales. Promociona tu negocio con códigos promocionales y tarjetas de regalo',
      'Business accounting and reporting': 'Contabilidad y reportes del negocio',
      'Exportable detailed reporting for accounting and tracking business progress': 'Reportes detallados exportables para contabilidad y seguimiento del progreso del negocio',
      
      // Pricing Advantages
      'Why Slimrate': 'Por qué Slimrate',
      'Easy Management System': 'Sistema de Gestión Fácil',
      "Whether you're online, in-store, or both, our intuitive dashboard brings all your business data together in one place.": 'Ya sea en línea, en tienda o ambos, nuestro panel intuitivo reúne todos los datos de tu negocio en un solo lugar.',
      'Versatile solutions': 'Soluciones versátiles',
      'Introducing a versatile and flexible POS system for your business': 'Presentamos un sistema POS versátil y flexible para tu negocio',
      '24/7 support': 'Soporte 24/7',
      'A powerful POS solution and 24/7 support to help you stay ahead of the competition': 'Una potente solución POS y soporte 24/7 para ayudarte a mantenerte por delante de la competencia',
      'Security': 'Seguridad',
      'Secure and fast transactions to keep your business moving at a fast pace': 'Transacciones seguras y rápidas para mantener tu negocio en movimiento a un ritmo acelerado',
      
      // Pricing Comparison Table
      'Want a side-by-side comparison?': '¿Quieres una comparación lado a lado?',
      'Compare Plans': 'Comparar Planes',
      'Features & Benefits': 'Características y Beneficios',
      'Basic': 'Básico',
      'Premium': 'Premium',
      'Custom': 'Personalizado',
      'POS Terminal with Customer Display': 'Terminal POS con Pantalla para Cliente',
      'Sales & Inventory Management': 'Gestión de Ventas e Inventario',
      'Reporting Dashboard': 'Panel de Reportes',
      'Receipt Printer & Cash Drawer': 'Impresora de Recibos y Cajón de Efectivo',
      '24/7 Customer Support': 'Soporte al Cliente 24/7',
      'Priority Support': 'Soporte Prioritario',
      'Dedicated Account Manager': 'Gerente de Cuenta Dedicado',
      'Multi-Location Management': 'Gestión Multi-Ubicación',
      'Multi-User Management': 'Gestión Multi-Usuario',
      'Advanced Inventory Management': 'Gestión de Inventario Avanzada',
      'Customer Loyalty Programs': 'Programas de Lealtad de Clientes',
      'Customer Relationship Management (CRM)': 'Gestión de Relaciones con Clientes (CRM)',
      'Custom Analytics Dashboards': 'Paneles de Análisis Personalizados',
      'Custom Software Development': 'Desarrollo de Software Personalizado',
      'Third-Party Integration Support': 'Soporte de Integración de Terceros',
      'Personalized Hardware Configuration': 'Configuración de Hardware Personalizada',
      'Dedicated Project Manager': 'Gerente de Proyecto Dedicado',
      'Custom Training & Onboarding': 'Capacitación e Incorporación Personalizada',
      '✓ MULTIPLE': '✓ MÚLTIPLES',
      '✓ ADVANCED': '✓ AVANZADO',
      
      // Type Cards
      'Specifically designed for retail, restaurant and specialty applications.': 'Diseñado específicamente para aplicaciones de retail, restaurantes y especialidades.',
      
      // Our Products / Expertise
      'Our': 'Nuestra',
      'Expertise': 'Experiencia',
      'All expertise →': 'Toda la experiencia →',
      'Together we creatte the most powerful software for companies': 'Juntos creamos el software más poderoso para empresas',
      'Fintech': 'Fintech',
      'The intuitive nature of our financial software solutions is the result of our extensive expertise in Fintech.': 'La naturaleza intuitiva de nuestras soluciones de software financiero es el resultado de nuestra amplia experiencia en Fintech.',
      'IoT': 'IoT',
      'IoT systems help control any environment and bring peace of mind into the world.': 'Los sistemas IoT ayudan a controlar cualquier entorno y brindan tranquilidad al mundo.',
      'Blockchain': 'Blockchain',
      'Crypto-born blockchain technology is a game changer for many industries.': 'La tecnología blockchain nacida de las criptomonedas es un cambio revolucionario para muchas industrias.',
      'AdTech': 'AdTech',
      'Optimize your ads for the best results with software platform development services': 'Optimiza tus anuncios para mejores resultados con servicios de desarrollo de plataformas de software',
      
      // Cookie Consent
      'We use cookies to enhance your browsing experience and analyze site traffic. By clicking "Accept", you consent to our use of cookies.': 'Utilizamos cookies para mejorar su experiencia de navegación y analizar el tráfico del sitio. Al hacer clic en "Aceptar", usted consiente nuestro uso de cookies.',
      'Learn more': 'Más información',
      'Decline': 'Rechazar',
      'Accept': 'Aceptar',
      
      // Rest Who Cards / R Who Cards
      'Bars and nightclubs': 'Bares y discotecas',
      'Fine dining': 'Alta cocina',
      'Quick service restaurant': 'Restaurante de servicio rápido',
      'Transform your checkout process into a lifelong customer relationship': 'Transforma tu proceso de pago en una relación de por vida con el cliente',
      'Increase your sales and profits with a hassle-free POS solution': 'Aumenta tus ventas y ganancias con una solución POS sin complicaciones',
      'Integrated POS solution to run and grow your business from a single cloud-based dashboard': 'Solución POS integrada para administrar y hacer crecer tu negocio desde un único panel basado en la nube',
      'Manage your inventory and grow your business with an all-in-one high performance POS solution': 'Administra tu inventario y haz crecer tu negocio con una solución POS todo en uno de alto rendimiento'
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
      document.querySelectorAll('top-menu, bottom-menu, mini-faq, pricing-form, tariff-cards, software-advantages, hardware-advantages, h-advantages, h-who-cards, r-who-cards, rest-who-cards, p-who-cards').forEach(comp => {
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
    // Detect language from URL path (more reliable than waiting for i18n)
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const lang = (pathParts.length > 0 && pathParts[0] === 'es') ? 'es' : (window.i18n?.currentLang || 'en');
    
    if (lang && lang !== 'en') {
      // Initial translation with small delay
      setTimeout(() => {
        translateAllComponents(lang);
      }, 50);
      
      // Additional pass after components fully load
      setTimeout(() => {
        translateAllComponents(lang);
      }, 300);
      
      // Final pass for dynamically loaded content
      setTimeout(() => {
        translateAllComponents(lang);
      }, 800);
    }
  });
  
  /**
   * Translate all known components and static content
   */
  function translateAllComponents(lang) {
    document.querySelectorAll('top-menu, bottom-menu, mini-faq, pricing-form, tariff-cards, software-advantages, hardware-advantages, h-advantages, h-who-cards, r-who-cards, rest-who-cards, p-who-cards, h-something-slider, r-something-slider, equip-main, equip-company, type-cards, hardware-cards, our-products, pricing-advantages, pricing-comparison, we-support, united-partners, tech-stack, new-app, mobile-app-download, customer-testimonials, cookie-consent, product-cards').forEach(comp => {
      translateElement(comp, lang);
    });
    translateStaticContent(lang);
  }
  
  // Watch for new components being added to the DOM
  const observer = new MutationObserver((mutations) => {
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const lang = (pathParts.length > 0 && pathParts[0] === 'es') ? 'es' : (window.i18n?.currentLang || 'en');
    
    if (lang === 'en') return;
    
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          // Translate the added element if it's a known component
          const tagName = node.tagName?.toLowerCase();
          if (tagName && (tagName.includes('-') || node.classList?.contains('section-title'))) {
            translateElement(node, lang);
          }
          // Also translate any components inside the added node
          node.querySelectorAll?.('top-menu, bottom-menu, mini-faq, pricing-form, tariff-cards, software-advantages, hardware-advantages, h-advantages, h-who-cards, r-who-cards, rest-who-cards, p-who-cards').forEach(comp => {
            translateElement(comp, lang);
          });
        }
      });
    });
  });
  
  // Start observing when DOM is ready
  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      observer.observe(document.body, { childList: true, subtree: true });
    });
  }

})();
