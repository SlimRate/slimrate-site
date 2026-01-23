// Product Pages Data (Spanish)
// Datos para páginas personales de productos hardware

const productPagesData = {
  "sr-falcon": {
    // Meta información
    meta: {
      title: "SR Falcon - Tableta POS Premium | Slimrate",
      description: "SR Falcon es una tableta POS de próxima generación construida para velocidad, estilo y confiabilidad con procesador de 14 núcleos, Android 12 y diseño robusto para operación 24/7.",
      keywords: "tableta POS, SR Falcon, POS restaurante, POS retail, POS Android"
    },
    
    // Sección Hero
    hero: {
      productId: "sr-falcon",
      categoryNav: "Tabletas",
      name: "SR Falcon",
      tagline: "SR Falcon",
      description: "SR Falcon es una tableta POS de próxima generación construida para velocidad, estilo y confiabilidad, con rendimiento de servidor y especificaciones de alta gama para satisfacer incluso las necesidades de usuarios más exigentes, desde tiendas minoristas hasta ventas móviles. Todo lo que su negocio necesita.",
      price: "$1,600.00",
      ctaButton: {
        text: "Obtener Cotización",
        link: "#contact"
      },
      keyFeatures: [
        "Procesador de 14 núcleos con Android 12",
        "16 GB para tareas intensivas de memoria",
        "Diseño robusto para uso 24/7"
      ],
      images: {
        main: "../assets/img/products/hardware/falcon/80 printer -1.png",
        gallery: [
          "../assets/img/products/hardware/falcon/80 printer -1.png",
          "../assets/img/products/hardware/falcon/80 printer -2.png",
          "../assets/img/products/hardware/falcon/80 printer -3.png",
          "../assets/img/products/hardware/falcon/80 printer -4.png"
        ]
      }
    },
    
    // Secciones detalladas
    detailSections: [
      {
        id: "section-1",
        title: "Solución POS Inteligente Todo en Uno",
        layout: "image-right",
        content: {
          description: "El SR Falcon es un POS todo en uno que combina una tableta potente con amplia conectividad. Diseñado para un rendimiento de alta velocidad, es perfecto para restaurantes, tiendas minoristas y operaciones de ventas móviles.",
          features: [
            "Wi-Fi y Bluetooth 5.4, LTE y NFC",
            "Soporta escáner y periféricos de pago",
            "Estación de acoplamiento para conectividad perfecta"
          ]
        },
        image: {
          src: "../assets/img/products/hardware/falcon/80 printer -2.png",
          alt: "Solución POS Todo en Uno SR Falcon"
        }
      },
      {
        id: "section-2",
        title: "Base Potente. Posibilidades Infinitas.",
        layout: "image-left",
        content: {
          description: "Elija la base modular para su flujo de trabajo: aloje puertos de carga, conecte dispositivos periféricos y expanda las capacidades de su sistema sin limitaciones.",
          features: [
            "Wi-Fi certificado por RMS para uso industrial",
            "Cuerpo de aluminio robusto",
            "Protección IP65 contra polvo y agua clasificada para huellas dactilares"
          ]
        },
        image: {
          src: "../assets/img/products/hardware/falcon/80 printer -3.png",
          alt: "Base Modular SR Falcon"
        }
      }
    ],
    
    // Banner
    banner: {
      show: true,
      text: "Soluciones POS Simplificadas para Cada Negocio",
      subtitle: "Desde restaurantes de servicio rápido hasta tiendas minoristas y más allá, nuestros sistemas POS le ayudan a atender a los clientes de manera más rápida e inteligente."
    },
    
    // Cuadrícula de características
    featuresGrid: {
      show: true,
      title: null,
      items: [
        {
          icon: "reliability",
          title: "La Confiabilidad se Encuentra con la Eficiencia",
          description: "Construido para operación ininterrumpida. Si su POS falla, no solo le afecta a usted, también afecta la experiencia de sus clientes. Un servicio lento significa ventas perdidas e invitados frustrados."
        },
        {
          icon: "effortless",
          title: "Configuración Sin Esfuerzo",
          description: "Nosotros manejamos la configuración, el software y la configuración del procesamiento de pagos, para que todo funcione en conjunto a la perfección desde el primer día, permitiéndole concentrarse en dirigir su negocio."
        },
        {
          icon: "support",
          title: "Soporte Confiable, Siempre Activo.",
          description: "Nuestro equipo de soporte está disponible 24/7 para responder preguntas y resolver problemas rápidamente. Ya sea un problema técnico o una consulta simple, estamos aquí para garantizar operaciones fluidas e ininterrumpidas."
        },
        {
          icon: "flexible",
          title: "Flexible y Escalable",
          description: "Nuestra solución POS crece con su negocio. Comience con una terminal y agregue más según sea necesario. Ya sea que opere una sola ubicación o múltiples tiendas, facilitamos la expansión."
        }
      ]
    },
    
    // Especificaciones técnicas
    specifications: {
      show: true,
      title: "¿Qué tipo de hardware se necesita para el sistema POS?",
      content: "Necesitará tabletas, terminales o una computadora portátil normal conectada a Internet. Slimrate admite una variedad de dispositivos, por lo que puede elegir lo que se ajuste a su presupuesto y configuración. Además, ofrecemos paquetes completos de hardware para comenzar rápidamente."
    },
    
    // Audiencia objetivo
    audience: {
      show: true,
      title: "¿Para quién es Slimrate?",
      useGlobalCards: true
    },
    
    // FAQ
    faq: {
      show: true,
      questions: [
        {
          question: "¿Slimrate POS está alojado en la nube?",
          answer: "Sí, Slimrate POS opera como una solución basada en la nube. Esto significa que sus datos se almacenan de forma segura en línea, lo que le permite acceder a ellos desde cualquier lugar con conexión a Internet. El alojamiento en la nube también garantiza actualizaciones automáticas, copias de seguridad y sincronización perfecta en múltiples dispositivos y ubicaciones."
        },
        {
          question: "¿Qué tipo de hardware se necesita para el sistema POS?",
          answer: "Necesitará tabletas, terminales o una computadora portátil normal conectada a Internet. Slimrate admite una variedad de dispositivos, por lo que puede elegir lo que se ajuste a su presupuesto y configuración. Además, ofrecemos paquetes completos de hardware para comenzar rápidamente."
        }
      ]
    },
    
    // Forma de contacto
    contactForm: {
      show: true,
      title: "Contáctenos",
      subtitle: "Póngase en contacto: sus preguntas, nuestras respuestas. ¡Conectemos!",
      variant: "blue-box"
    }
  },

  "a35": {
    meta: {
      title: "Terminal de Pago A35 - Procesamiento EMV Seguro | Slimrate",
      description: "La Terminal de Pago A35 ofrece procesamiento de pagos seguro y eficiente con diseño compacto y características de seguridad avanzadas.",
      keywords: "terminal de pago, A35, terminal EMV, lector de tarjetas, terminal POS"
    },
    hero: {
      productId: "a35",
      categoryNav: "Terminales EMV",
      name: "A35",
      tagline: "Terminal de Pago A35",
      description: "La Terminal de Pago A35 ofrece procesamiento de pagos seguro y eficiente. Su diseño compacto y características de seguridad avanzadas la hacen ideal para cualquier entorno minorista.",
      price: "$290.00",
      ctaButton: {
        text: "Obtener Cotización",
        link: "#contact"
      },
      keyFeatures: [
        "Diseño compacto y portátil",
        "Características de seguridad avanzadas",
        "Múltiples métodos de pago"
      ],
      images: {
        main: "../assets/img/gallery/hardware/A35 Payment Terminal 1.png",
        gallery: [
          "../assets/img/gallery/hardware/A35 Payment Terminal 1.png"
        ]
      }
    },
    detailSections: [
      {
        id: "section-1",
        title: "Procesamiento de Pagos Seguro",
        layout: "image-right",
        content: {
          description: "El A35 garantiza que cada transacción sea segura con encriptación de extremo a extremo y cumplimiento de PCI-DSS. Perfecto para empresas que necesitan un procesamiento de pagos confiable.",
          features: [
            "Soporte para tarjetas con chip EMV",
            "Pagos sin contacto (NFC)",
            "Encriptación de extremo a extremo"
          ]
        },
        image: {
          src: "../assets/img/gallery/hardware/A35 Payment Terminal 1.png",
          alt: "Terminal de Pago A35"
        }
      }
    ],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      title: null,
      items: [
        {
          icon: "security",
          title: "Seguridad Avanzada",
          description: "El cumplimiento de PCI con encriptación de extremo a extremo garantiza que cada transacción esté protegida contra el fraude."
        },
        {
          icon: "speed",
          title: "Transacciones Rápidas",
          description: "Procese pagos de manera rápida y eficiente, reduciendo los tiempos de espera para sus clientes."
        },
        {
          icon: "versatility",
          title: "Múltiples Tipos de Pago",
          description: "Acepte pagos con chip, banda magnética y sin contacto, incluidos Apple Pay y Google Pay."
        },
        {
          icon: "portable",
          title: "Diseño Compacto",
          description: "Pequeña huella perfecta para cualquier espacio de mostrador sin sacrificar la funcionalidad."
        }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        {
          question: "¿Qué métodos de pago acepta el A35?",
          answer: "El A35 acepta tarjetas con chip EMV, tarjetas de banda magnética y pagos sin contacto, incluidos Apple Pay, Google Pay y Samsung Pay."
        },
        {
          question: "¿El A35 cumple con la normativa PCI?",
          answer: "Sí, el A35 cumple totalmente con PCI-DSS con encriptación de extremo a extremo para transacciones seguras."
        }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  "sr-trp1": {
    meta: {
      title: "Impresora Térmica de Recibos SR-TRP1 | Slimrate",
      description: "Imprima recibos rápida y silenciosamente con nuestra Impresora Térmica de Recibos. Ideal para entornos de alto volumen.",
      keywords: "impresora térmica, impresora de recibos, impresora POS, SR-TRP1"
    },
    hero: {
      productId: "sr-trp1",
      categoryNav: "Impresoras",
      name: "SR-TRP1",
      tagline: "Impresora Térmica de Recibos SR-TRP1",
      description: "Imprima recibos rápida y silenciosamente con nuestra Impresora Térmica de Recibos. Ideal para entornos de alto volumen, garantiza recibos nítidos y claros cada vez sin necesidad de tinta.",
      price: "$329.00",
      ctaButton: {
        text: "Obtener Cotización",
        link: "#contact"
      },
      keyFeatures: [
        "Impresión térmica de alta velocidad",
        "No requiere tinta",
        "Compatible con todos los sistemas POS"
      ],
      images: {
        main: "../assets/img/gallery/hardware/SR-TRP1 Thermal Receipt Printer 1.png",
        gallery: [
          "../assets/img/gallery/hardware/SR-TRP1 Thermal Receipt Printer 1.png",
          "../assets/img/gallery/hardware/SR-TRP1 Thermal Receipt Printer 2.png"
        ]
      }
    },
    detailSections: [],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      title: null,
      items: [
        {
          icon: "speed",
          title: "Impresión Rápida",
          description: "La impresión térmica de alta velocidad para entornos ocupados mantiene sus filas en movimiento rápidamente."
        },
        {
          icon: "quiet",
          title: "Operación Silenciosa",
          description: "Opera silenciosamente sin molestar a los clientes ni al personal durante las horas pico."
        },
        {
          icon: "reliable",
          title: "Rendimiento Confiable",
          description: "Construida para uso diario de alto volumen con componentes duraderos que perduran."
        },
        {
          icon: "easy",
          title: "Fácil Integración",
          description: "Funciona perfectamente con su sistema POS: configuración plug and play."
        }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        {
          question: "¿Qué tipo de papel usa la SR-TRP1?",
          answer: "La SR-TRP1 utiliza papel térmico estándar para recibos (80 mm de ancho). No se requieren cartuchos de tinta ni tóner."
        },
        {
          question: "¿Requiere tinta o tóner?",
          answer: "No, la SR-TRP1 es una impresora térmica y no requiere cartuchos de tinta ni tóner, reduciendo los costos continuos."
        },
        {
          question: "¿Es compatible con mi sistema POS?",
          answer: "Sí, la SR-TRP1 es compatible con la mayoría de los sistemas POS y se conecta mediante USB o Ethernet."
        }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  // ========== TABLETS (others) ==========
  
  "sr-swan": {
    meta: {
      title: "SR Swan - Tableta POS Premium Sin Ventilador | Slimrate",
      description: "Slimrate Swan es una tableta POS elegante, silenciosa y sin ventilador con componentes de larga duración y estética premium.",
      keywords: "tableta POS, SR Swan, POS sin ventilador, POS silencioso, tableta retail"
    },
    hero: {
      productId: "sr-swan",
      categoryNav: "Tabletas",
      name: "SR Swan",
      tagline: "SR Swan",
      description: "Slimrate Swan es una tableta POS elegante, silenciosa y sin ventilador con componentes de larga duración y estética premium para presentación de cara al cliente.",
      price: "$1,199.00",
      ctaButton: {
        text: "Obtener Cotización",
        link: "#contact"
      },
      keyFeatures: [
        "Operación silenciosa sin ventilador",
        "Estética premium",
        "Componentes de larga duración"
      ],
      images: {
        main: "../assets/img/products/hardware/swan 2/Swan2main.png",
        gallery: [
          "../assets/img/products/hardware/swan 2/Swan2main.png",
          "../assets/img/products/hardware/swan 2/Swan2front.png",
          "../assets/img/products/hardware/swan 2/Swan2back.png"
        ]
      }
    },
    detailSections: [
      {
        id: "section-1",
        title: "Diseño Elegante y Silencioso",
        layout: "image-right",
        content: {
          description: "El SR Swan combina un diseño elegante con operación silenciosa, perfecto para entornos minoristas y de restaurantes de lujo donde la estética importa.",
          features: [
            "Sistema de enfriamiento sin ventilador",
            "Materiales premium",
            "Diseño moderno y elegante"
          ]
        },
        image: {
          src: "../assets/img/products/hardware/swan 2/Swan2front.png",
          alt: "Vista Frontal SR Swan"
        }
      }
    ],
    banner: { show: true, text: "Soluciones POS Premium para Negocios Exigentes", subtitle: "Donde el rendimiento se encuentra con la elegancia" },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "quiet", title: "Operación Silenciosa", description: "El diseño sin ventilador asegura una operación completamente silenciosa en cualquier entorno" },
        { icon: "reliability", title: "Construido para Durar", description: "Componentes de larga duración diseñados para años de servicio confiable" },
        { icon: "versatility", title: "Diseño Elegante", description: "Estética premium que complementa cualquier entorno comercial" },
        { icon: "speed", title: "Rendimiento Rápido", description: "Procesamiento potente para una operación fluida y receptiva" }
      ]
    },
    specifications: { show: true, title: "Especificaciones Técnicas", content: "Tableta sin ventilador de alto rendimiento con componentes premium diseñados para presentación de cara al cliente." },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "¿Es el SR Swan completamente silencioso?", answer: "Sí, el SR Swan utiliza un sistema de enfriamiento sin ventilador, lo que lo hace completamente silencioso durante la operación." },
        { question: "¿Qué hace diferente al SR Swan?", answer: "El SR Swan combina estética premium con operación silenciosa y componentes de larga duración, perfecto para negocios de lujo." }
      ]
    },
    contactForm: { show: true, variant: "blue-box" }
  },

  "sr155-duo": {
    meta: {
      title: "SR155 Duo - Sistema POS de Doble Pantalla | Slimrate",
      description: "Sistema POS de doble pantalla con pantalla orientada al cliente para mayor transparencia y compromiso.",
      keywords: "POS doble pantalla, SR155 Duo, pantalla cliente, terminal táctil"
    },
    hero: {
      productId: "sr155-duo",
      categoryNav: "Tabletas",
      name: "SR155 Duo",
      tagline: "SR155 Duo",
      description: "Nuestro sistema POS de doble pantalla asegura una interacción fluida tanto para clientes como para el personal. Con una pantalla orientada al cliente, mejora la transparencia y la participación en el punto de venta.",
      price: "$999.00",
      ctaButton: {
        text: "Obtener Cotización",
        link: "#contact"
      },
      keyFeatures: [
        "Terminales táctiles de 15.6\" + 10.1\"",
        "Pantalla orientada al cliente",
        "Transparencia mejorada"
      ],
      images: {
        main: "../assets/img/gallery/hardware/SR155 Duo 1.png",
        gallery: [
          "../assets/img/gallery/hardware/SR155 Duo 1.png",
          "../assets/img/gallery/hardware/SR155 Duo 2.png",
          "../assets/img/gallery/hardware/SR155 Duo 3.png"
        ]
      }
    },
    detailSections: [
      {
        id: "section-1",
        title: "Innovación de Doble Pantalla",
        layout: "image-right",
        content: {
          description: "Mejore la participación del cliente con una pantalla dedicada orientada al cliente que muestra los detalles de la transacción en tiempo real.",
          features: [
            "Pantalla principal de operador de 15.6\"",
            "Pantalla secundaria de cliente de 10.1\"",
            "Visibilidad de transacciones en tiempo real"
          ]
        },
        image: {
          src: "../assets/img/gallery/hardware/SR155 Duo 2.png",
          alt: "Pantalla Doble SR155 Duo"
        }
      }
    ],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "versatility", title: "Pantallas Dobles", description: "Pantallas separadas para el operador y el cliente mejoran la experiencia de pago" },
        { icon: "reliability", title: "Construido para Retail", description: "Diseñado específicamente para entornos minoristas de alto volumen" },
        { icon: "easy", title: "Fácil de Usar", description: "Interfaz intuitiva tanto para el personal como para los clientes" },
        { icon: "speed", title: "Pago Rápido", description: "Agilice las transacciones con la eficiencia de doble pantalla" }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "¿Cuáles son los tamaños de pantalla?", answer: "El SR155 Duo cuenta con una pantalla principal de operador de 15.6\" y una pantalla orientada al cliente de 10.1\"." },
        { question: "¿Pueden interactuar los clientes con su pantalla?", answer: "La pantalla del cliente generalmente muestra información de la transacción. La interacción táctil se puede configurar según sus necesidades." }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  "sr155-solo": {
    meta: {
      title: "SR155 Solo - Terminal POS de Pantalla Única | Slimrate",
      description: "Agilice su pago con nuestro eficiente terminal POS de pantalla única. Pantalla táctil de 15.6\".",
      keywords: "POS pantalla única, SR155 Solo, terminal táctil, POS retail"
    },
    hero: {
      productId: "sr155-solo",
      categoryNav: "Tabletas",
      name: "SR155 Solo",
      tagline: "SR155 Solo",
      description: "Agilice su proceso de pago con nuestro POS de pantalla única. Diseñado para eficiencia y facilidad de uso, soporta transacciones rápidas y ofrece una interfaz fácil de usar para el personal.",
      price: "$850.00",
      ctaButton: {
        text: "Obtener Cotización",
        link: "#contact"
      },
      keyFeatures: [
        "Terminal táctil de 15.6\"",
        "Diseñado para eficiencia",
        "Interfaz fácil de usar"
      ],
      images: {
        main: "../assets/img/gallery/hardware/SR155 Solo 1.png",
        gallery: [
          "../assets/img/gallery/hardware/SR155 Solo 1.png",
          "../assets/img/gallery/hardware/SR155 Solo 2.png"
        ]
      }
    },
    detailSections: [],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "speed", title: "Transacciones Rápidas", description: "Procese ventas rápidamente con una interfaz intuitiva de una sola pantalla" },
        { icon: "easy", title: "Operación Simple", description: "Fácil de aprender y usar para todos los miembros del personal" },
        { icon: "reliable", title: "Confiable", description: "Construido para uso diario de alto volumen en entornos minoristas" },
        { icon: "versatility", title: "Versátil", description: "Adecuado para varios negocios minoristas y de hostelería" }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "¿Cuál es el tamaño de la pantalla?", answer: "El SR155 Solo cuenta con una pantalla táctil de 15.6\"." },
        { question: "¿Es adecuado para pequeñas empresas?", answer: "Sí, el SR155 Solo es perfecto para pequeñas y medianas empresas que buscan una solución POS eficiente y asequible." }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  // ========== EMV TERMINALS ==========

  "a920": {
    meta: {
      title: "Terminal de Pago A920 - Solución EMV Móvil | Slimrate",
      description: "Terminal de pago portátil que combina movilidad con funcionalidad robusta y diseño elegante.",
      keywords: "A920, terminal de pago móvil, EMV portátil, pago inalámbrico"
    },
    hero: {
      productId: "a920",
      categoryNav: "Terminales EMV",
      name: "A920",
      tagline: "Terminal de Pago A920",
      description: "Mejore sus pagos móviles con la Terminal de Pago A920. Combinando portabilidad con funcionalidad robusta, admite una variedad de métodos de pago y ofrece un diseño elegante.",
      price: "$349.00",
      ctaButton: {
        text: "Obtener Cotización",
        link: "#contact"
      },
      keyFeatures: [
        "Móvil y portátil",
        "Múltiples métodos de pago",
        "Impresora integrada"
      ],
      images: {
        main: "../assets/img/gallery/hardware/A920 Payment Terminal 1.png",
        gallery: [
          "../assets/img/gallery/hardware/A920 Payment Terminal 1.png"
        ]
      }
    },
    detailSections: [
      {
        id: "section-1",
        title: "Solución de Pago Móvil",
        layout: "image-right",
        content: {
          description: "El A920 lleva el procesamiento de pagos a cualquier lugar de su negocio con su diseño portátil e impresora de recibos integrada.",
          features: [
            "Conectividad inalámbrica",
            "Batería de larga duración",
            "Impresora de recibos integrada"
          ]
        },
        image: {
          src: "../assets/img/gallery/hardware/A920 Payment Terminal 1.png",
          alt: "Terminal Móvil A920"
        }
      }
    ],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "portable", title: "Verdaderamente Móvil", description: "Realice pagos en cualquier lugar con conectividad inalámbrica y batería de larga duración" },
        { icon: "security", title: "Pagos Seguros", description: "Cumplimiento de PCI con encriptación de extremo a extremo para todas las transacciones" },
        { icon: "speed", title: "Procesamiento Rápido", description: "El procesamiento rápido de pagos mantiene sus filas en movimiento" },
        { icon: "versatility", title: "Todos los Tipos de Pago", description: "Acepte pagos con chip, banda magnética, toque y billetera móvil" }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "¿Tiene el A920 una impresora integrada?", answer: "Sí, el A920 incluye una impresora de recibos integrada para recibos de clientes sobre la marcha." },
        { question: "¿Cuánto dura la batería?", answer: "El A920 ofrece una duración de batería extendida adecuada para un día completo de transacciones móviles." }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  // ========== SCANNERS ==========

  "sr-ds1": {
    meta: {
      title: "Escáner de Escritorio SR-DS1 | Slimrate",
      description: "Escáner de escritorio de alto volumen para escaneo de códigos de barras rápido y preciso en retail.",
      keywords: "escáner de escritorio, SR-DS1, escáner de código de barras, escáner retail"
    },
    hero: {
      productId: "sr-ds1",
      categoryNav: "Escáneres",
      name: "SR-DS1",
      tagline: "Escáner de Escritorio SR-DS1",
      description: "Agilice su proceso de escaneo con nuestro Escáner de Escritorio. Diseñado para uso de alto volumen, ofrece un escaneo rápido y preciso, lo que lo hace perfecto para entornos minoristas ocupados.",
      price: "$279.00",
      ctaButton: {
        text: "Obtener Cotización",
        link: "#contact"
      },
      keyFeatures: [
        "Escaneo de alto volumen",
        "Rápido y preciso",
        "Operación manos libres"
      ],
      images: {
        main: "../assets/img/gallery/hardware/SR-WHS1 Wired Table Scanner 1.png",
        gallery: [
          "../assets/img/gallery/hardware/SR-WHS1 Wired Table Scanner 1.png"
        ]
      }
    },
    detailSections: [],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "speed", title: "Escaneo Rápido", description: "Escaneo de alta velocidad para líneas de pago ocupadas" },
        { icon: "reliable", title: "Lecturas Precisas", description: "Reconocimiento confiable de códigos de barras en el primer escaneo" },
        { icon: "easy", title: "Manos Libres", description: "El diseño de escritorio permite escaneo manos libres" },
        { icon: "versatility", title: "Universal", description: "Lee todos los códigos de barras 1D y 2D comunes" }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "¿Qué códigos de barras puede escanear el SR-DS1?", answer: "El SR-DS1 lee todos los códigos de barras 1D y 2D comunes, incluidos UPC, EAN, códigos QR y más." },
        { question: "¿Es adecuado para retail de alto volumen?", answer: "Sí, el SR-DS1 está diseñado específicamente para entornos minoristas de alto volumen con escaneo rápido y preciso." }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  "sr-wlhs1": {
    meta: {
      title: "Escáner de Mano Inalámbrico SR-WLHS1 | Slimrate",
      description: "Escáner de mano inalámbrico para gestión de inventario y necesidades de escaneo móvil.",
      keywords: "escáner inalámbrico, SR-WLHS1, escáner de mano, escáner móvil"
    },
    hero: {
      productId: "sr-wlhs1",
      categoryNav: "Escáneres",
      name: "SR-WLHS1",
      tagline: "Escáner de Mano Inalámbrico SR-WLHS1",
      description: "Mejore la movilidad y eficiencia con nuestro Escáner de Mano Inalámbrico. Perfecto para gestión de inventario y escaneo en el punto de venta, ofrece un escaneo de códigos de barras confiable y rápido.",
      price: "$399.00",
      ctaButton: {
        text: "Obtener Cotización",
        link: "#contact"
      },
      keyFeatures: [
        "Libertad inalámbrica",
        "Escaneo de largo alcance",
        "Diseño ergonómico"
      ],
      images: {
        main: "../assets/img/gallery/hardware/SR-WLHS1 Wireless Handheld Scanner 3.png",
        gallery: [
          "../assets/img/gallery/hardware/SR-WLHS1 Wireless Handheld Scanner 3.png",
          "../assets/img/gallery/hardware/SR-WHS1 Wired Handheld Scanner 2.png",
          "../assets/img/gallery/hardware/SR-WHS1 Wired Handheld Scanner 3.png"
        ]
      }
    },
    detailSections: [],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "portable", title: "Libertad Inalámbrica", description: "Sin cables significa libertad para escanear en cualquier lugar de su tienda" },
        { icon: "speed", title: "Escaneo Rápido", description: "Reconocimiento rápido de códigos de barras para operaciones eficientes" },
        { icon: "reliable", title: "Batería de Larga Duración", description: "Batería extendida para escaneo durante todo el día" },
        { icon: "easy", title: "Ergonómico", description: "Agarre cómodo para uso prolongado" }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "¿Cuál es el alcance inalámbrico?", answer: "El SR-WLHS1 ofrece conectividad inalámbrica confiable hasta 100 metros (330 pies) de línea de visión." },
        { question: "¿Cuánto dura la batería?", answer: "La batería proporciona hasta 50,000 escaneos o varios días de uso típico con una sola carga." }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  "sr-whs1": {
    meta: {
      title: "Escáner de Mano con Cable SR-WHS1 | Slimrate",
      description: "Escáner de mano con cable para escaneo de códigos de barras consistente en retail.",
      keywords: "escáner con cable, SR-WHS1, escáner de mano, lector de códigos de barras"
    },
    hero: {
      productId: "sr-whs1",
      categoryNav: "Escáneres",
      name: "SR-WHS1",
      tagline: "Escáner de Mano con Cable SR-WHS1",
      description: "Asegure un rendimiento consistente con nuestro Escáner de Mano con Cable. Ideal para entornos minoristas, proporciona escaneo de códigos de barras rápido y preciso con un diseño duradero.",
      price: "$199.00",
      ctaButton: {
        text: "Obtener Cotización",
        link: "#contact"
      },
      keyFeatures: [
        "Conexión por cable confiable",
        "Velocidad de escaneo rápida",
        "Diseño ergonómico"
      ],
      images: {
        main: "../assets/img/gallery/hardware/SR-WHS1.png",
        gallery: [
          "../assets/img/gallery/hardware/SR-WHS1.png"
        ]
      }
    },
    detailSections: [],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "reliable", title: "Siempre Conectado", description: "La conexión por cable asegura un rendimiento consistente sin baterías" },
        { icon: "speed", title: "Escaneo Rápido", description: "Reconocimiento rápido de códigos de barras para pago eficiente" },
        { icon: "easy", title: "Plug and Play", description: "Configuración simple sin necesidad de configuración" },
        { icon: "versatility", title: "Construcción Duradera", description: "Construido para soportar el uso diario en retail" }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "¿Necesita baterías?", answer: "No, el SR-WHS1 se alimenta a través de su conexión USB con cable, por lo que no se requieren baterías." },
        { question: "¿Qué códigos de barras puede leer?", answer: "El SR-WHS1 lee todos los códigos de barras 1D estándar, incluidos UPC, EAN, Code 39, Code 128 y más." }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  // ========== SCALES ==========

  "digital-scale": {
    meta: {
      title: "Báscula Digital - Pesaje de Precisión para Retail | Slimrate",
      description: "Báscula digital precisa con integración POS para precios precisos basados en peso.",
      keywords: "báscula digital, báscula retail, báscula POS, balanza"
    },
    hero: {
      productId: "digital-scale",
      categoryNav: "Básculas",
      name: "Báscula Digital",
      tagline: "Báscula Digital",
      description: "Asegure mediciones precisas con nuestra Báscula Digital. Ideal para entornos minoristas, ofrece lecturas de peso precisas y se integra perfectamente con su sistema POS.",
      price: "$475.00",
      ctaButton: {
        text: "Obtener Cotización",
        link: "#contact"
      },
      keyFeatures: [
        "Lecturas de peso precisas",
        "Integración POS",
        "Construcción duradera"
      ],
      images: {
        main: "../assets/img/gallery/hardware/DS1.png",
        gallery: [
          "../assets/img/gallery/hardware/DS1.png"
        ]
      }
    },
    detailSections: [],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "reliable", title: "Pesaje Preciso", description: "Mediciones precisas para precios basados en peso" },
        { icon: "easy", title: "Integración POS", description: "Se conecta perfectamente a su sistema POS" },
        { icon: "versatility", title: "Uso Versátil", description: "Perfecto para productos, carnes y artículos a granel" },
        { icon: "speed", title: "Lecturas Rápidas", description: "Estabilización rápida para un pago más rápido" }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "¿Se integra con Slimrate POS?", answer: "Sí, la Báscula Digital se integra perfectamente con Slimrate POS para el cálculo automático de precios basado en el peso." },
        { question: "¿Cuál es la capacidad máxima de peso?", answer: "La báscula puede manejar pesos de hasta 30 libras (15 kg) con precisión." }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  "aiscale-pos-s625": {
    meta: {
      title: "AIScale POS S625 - Terminal Todo en Uno con Báscula | Slimrate",
      description: "Terminal POS integrado con báscula y impresora de recibos incorporada para transacciones basadas en peso.",
      keywords: "AIScale S625, terminal con báscula, báscula POS, báscula integrada"
    },
    hero: {
      productId: "aiscale-pos-s625",
      categoryNav: "Básculas",
      name: "AIScale POS S625",
      tagline: "AIScale POS S625",
      description: "Este dispositivo Slimrate combina una interfaz de tableta con básculas integradas y una impresora de recibos, ofreciendo una solución compacta y eficiente para entornos minoristas. Perfecto para transacciones basadas en peso.",
      price: "$1,799.00",
      ctaButton: {
        text: "Obtener Cotización",
        link: "#contact"
      },
      keyFeatures: [
        "Báscula y POS integrado",
        "Impresora de recibos incorporada",
        "Interfaz táctil"
      ],
      images: {
        main: "../assets/img/gallery/hardware/AIScale Cash Register S625 1.png",
        gallery: [
          "../assets/img/gallery/hardware/AIScale Cash Register S625 1.png",
          "../assets/img/gallery/hardware/AIScale Cash Register S625 2.png"
        ]
      }
    },
    detailSections: [],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "versatility", title: "Todo en Uno", description: "POS, báscula e impresora en una unidad compacta" },
        { icon: "speed", title: "Servicio Rápido", description: "Agilice las transacciones basadas en peso" },
        { icon: "easy", title: "Fácil de Usar", description: "Interfaz táctil intuitiva" },
        { icon: "reliable", title: "Preciso", description: "Pesaje preciso con precios automáticos" }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "¿Qué incluye el S625?", answer: "El S625 incluye una báscula integrada, terminal POS táctil e impresora de recibos, todo en una unidad." },
        { question: "¿Es adecuado para tiendas de comestibles?", answer: "Sí, el S625 es perfecto para tiendas de comestibles, delis y cualquier negocio que venda por peso." }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  "aiscale-label-printing-s130": {
    meta: {
      title: "AIScale Impresión de Etiquetas S130 - Báscula Inteligente | Slimrate",
      description: "Báscula de etiquetado impulsada por IA con cámara para identificación y etiquetado automatizado de productos.",
      keywords: "AIScale S130, báscula de impresión de etiquetas, báscula inteligente, báscula IA"
    },
    hero: {
      productId: "aiscale-label-printing-s130",
      categoryNav: "Básculas",
      name: "AIScale Label Printing S130",
      tagline: "AIScale Label Printing S130",
      description: "Estas básculas de etiquetado inteligentes con cámara integrada de Slimrate ofrecen pesaje preciso e identificación automatizada de productos. Ideales para entornos minoristas, simplifican los procesos de etiquetado y mejoran la eficiencia operativa.",
      price: "$1,499.00",
      ctaButton: {
        text: "Obtener Cotización",
        link: "#contact"
      },
      keyFeatures: [
        "Reconocimiento de productos por IA",
        "Etiquetado automatizado",
        "Cámara integrada"
      ],
      images: {
        main: "../assets/img/gallery/hardware/AIScale Label Printing S130 1.png",
        gallery: [
          "../assets/img/gallery/hardware/AIScale Label Printing S130 1.png",
          "../assets/img/gallery/hardware/AIScale Label Printing S130 2.png"
        ]
      }
    },
    detailSections: [],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "versatility", title: "Reconocimiento IA", description: "La cámara identifica automáticamente los productos para un etiquetado más rápido" },
        { icon: "speed", title: "Etiquetado Rápido", description: "Imprima etiquetas precisas en segundos" },
        { icon: "easy", title: "Operación Simple", description: "Se requiere una entrada mínima del usuario con asistencia de IA" },
        { icon: "reliable", title: "Preciso", description: "Pesaje e información de producto precisos" }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "¿Cómo funciona el reconocimiento por IA?", answer: "La cámara integrada identifica los productos visualmente, seleccionando automáticamente el artículo correcto y el precio para el etiquetado." },
        { question: "¿Puede imprimir etiquetas personalizadas?", answer: "Sí, el S130 puede imprimir etiquetas personalizadas con peso, precio, códigos de barras e información del producto." }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  // ========== CASH DRAWER ==========

  "sr-410": {
    meta: {
      title: "Cajón de Efectivo SR-410 - Gestión Segura de Efectivo | Slimrate",
      description: "Cajón de efectivo duradero con diseño robusto para gestión segura de efectivo e integración POS.",
      keywords: "cajón de efectivo, SR-410, cajón POS, cajón retail"
    },
    hero: {
      productId: "sr-410",
      categoryNav: "Cajón de Efectivo",
      name: "SR-410",
      tagline: "Cajón de Efectivo SR-410",
      description: "Asegure sus transacciones en efectivo con nuestro Cajón de Efectivo duradero. Con un diseño robusto y operación suave, se integra perfectamente con su sistema POS para una fácil gestión del efectivo.",
      price: "$129.00",
      ctaButton: {
        text: "Obtener Cotización",
        link: "#contact"
      },
      keyFeatures: [
        "Construcción de metal robusta",
        "Mecanismo de deslizamiento suave",
        "Integración POS"
      ],
      images: {
        main: "../assets/img/gallery/hardware/SR-410 Cash Drawer 1.png",
        gallery: [
          "../assets/img/gallery/hardware/SR-410 Cash Drawer 1.png",
          "../assets/img/gallery/hardware/SR-410 Cash Drawer 2.png"
        ]
      }
    },
    detailSections: [],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "security", title: "Almacenamiento Seguro", description: "La construcción de metal robusta mantiene el efectivo seguro" },
        { icon: "reliable", title: "Diseño Duradero", description: "Construido para soportar el uso diario intenso" },
        { icon: "easy", title: "Fácil Integración", description: "Funciona perfectamente con su sistema POS" },
        { icon: "speed", title: "Operación Suave", description: "Mecanismo de liberación rápida para acceso rápido" }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "¿Cómo se conecta al POS?", answer: "El SR-410 se conecta mediante cable a su sistema POS y se abre automáticamente cuando se completa una transacción en efectivo." },
        { question: "¿Cuántos compartimentos de billetes/monedas tiene?", answer: "El SR-410 cuenta con 5 compartimentos para billetes y 5 para monedas para una gestión organizada del efectivo." }
      ]
    },
    contactForm: { show: true, variant: "default" }
  }
};

// Export data
if (typeof module !== 'undefined' && module.exports) {
  module.exports = productPagesData;
}

// For browser
if (typeof window !== 'undefined') {
  window.productPagesData = productPagesData;
}
