// Product Pages Data
// Ð”Ð°Ð½Ð½Ñ‹Ðµ Ð´Ð»Ñ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ñ… ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ† hardware Ð¿Ñ€Ð¾Ð´ÑƒÐºÑ‚Ð¾Ð²

const productPagesData = {
  "sr-falcon": {
    // Meta Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ
    meta: {
      title: "SR Falcon - Premium POS Tablet | Slimrate",
      description: "SR Falcon is a next-gen POS tablet built for speed, style, and reliability with 14-slot processor, Android 12, and rugged design for 24/7 operation.",
      keywords: "POS tablet, SR Falcon, restaurant POS, retail POS, Android POS"
    },
    
    // Hero ÑÐµÐºÑ†Ð¸Ñ
    hero: {
      productId: "sr-falcon",
      categoryNav: "Tablets",
      name: "SR Falcon",
      tagline: "SR Falcon",
      description: "SR Falcon is a next-gen POS tablet built for speed, style, and reliability, with server performance and high-end specs to satisfy even the most demanding user needs and retail stores to mobile sales. Everything your business needs.",
      price: "$1,600.00",
      priceUnit: "pcs.",
      ctaButton: {
        text: "Get Quote",
        link: "#contact"
      },
      keyFeatures: [
        "14-slot processor with Android 12",
        "16 GB for memory-intensive tasks",
        "Rugged design for 24/7 use"
      ],
      images: {
        main: "assets/img/products/hardware/falcon/80 printer -1.png",
        gallery: [
          "assets/img/products/hardware/falcon/80 printer -1.png",
          "assets/img/products/hardware/falcon/80 printer -2.png",
          "assets/img/products/hardware/falcon/80 printer -3.png",
          "assets/img/products/hardware/falcon/80 printer -4.png"
        ]
      }
    },
    
    // Ð”ÐµÑ‚Ð°Ð»ÑŒÐ½Ñ‹Ðµ ÑÐµÐºÑ†Ð¸Ð¸
    detailSections: [
      {
        id: "section-1",
        title: "All-in-One Smart POS Solution",
        layout: "image-right",
        content: {
          description: "The SR Falcon is an all-in-one POS that combines a powerful tablet with extensive connectivity. Designed for high-speed performance, it's perfect for restaurants, retail, and mobile sales operations.",
          features: [
            "Wi-Fi & Bluetooth 5.4, LTE, and NFC",
            "Supports scanner and payment peripherals",
            "Docking station for seamless connectivity"
          ]
        },
        image: {
          src: "assets/img/products/hardware/falcon/80 printer -2.png",
          alt: "SR Falcon All-in-One POS Solution"
        }
      },
      {
        id: "section-2",
        title: "Powerful Dock. Endless Possibilities.",
        layout: "image-left",
        content: {
          description: "Choose the modular dock for your workflow â€“ host charging charging ports, connect peripheral devices, and expand your system capabilities without limitations.",
          features: [
            "RMS-certified Wi-Fi for industry use",
            "Rugged aluminum body",
            "Fingerprint-rated dust and water IP65 protection"
          ]
        },
        image: {
          src: "assets/img/products/hardware/falcon/80 printer -3.png",
          alt: "SR Falcon Modular Dock"
        }
      }
    ],
    
    // Ð‘Ð°Ð½Ð½ÐµÑ€
    banner: {
      show: true,
      text: "Streamlined POS Solutions for Every Business",
      subtitle: "From quick-service restaurants to retail stores and beyond, our POS systems help you serve customers faster and smarter."
    },
    
    // Ð¡ÐµÑ‚ÐºÐ° Ð¿Ñ€ÐµÐ¸Ð¼ÑƒÑ‰ÐµÑÑ‚Ð²
    featuresGrid: {
      show: true,
      title: null,
      items: [
        {
          icon: "reliability",
          title: "Reliability Meets Efficiency",
          description: "Built for non-stop operation. If your POS goes down, it doesn't just hurt you â€“ it hurts your customers' experience, too. Slow service means lost sales and frustrated guests."
        },
        {
          icon: "effortless",
          title: "Effortless Setup",
          description: "We'll handle the configuration, software, and payment processing setup, so everything works together seamlessly from day one, allowing you to focus on running your business."
        },
        {
          icon: "support",
          title: "Reliable Support, Always On.",
          description: "Our support team is available 24/7 to answer questions and resolve issues quickly. Whether it's a technical problem or a simple how-to, we're here to ensure smooth, uninterrupted operations."
        },
        {
          icon: "flexible",
          title: "Flexible and Scalable",
          description: "Our POS solution grows with your business. Start with one terminal and add more as needed. Whether you operate a single location or multiple stores, we make it easy to expand."
        }
      ]
    },
    
    // Ð¢ÐµÑ…Ð½Ð¸Ñ‡ÐµÑÐºÐ¸Ðµ Ñ…Ð°Ñ€Ð°ÐºÑ‚ÐµÑ€Ð¸ÑÑ‚Ð¸ÐºÐ¸
    specifications: {
      show: true,
      title: "What kind of hardware is needed for the POS system?",
      content: "You'll need tablets, terminals, or a regular laptop connected to the internet. Slimrate supports a variety of devices, so you can choose what fits your budget and setup. In addition, we offer complete hardware bundles to get you started quickly."
    },
    
    // Ð¦ÐµÐ»ÐµÐ²Ð°Ñ Ð°ÑƒÐ´Ð¸Ñ‚Ð¾Ñ€Ð¸Ñ
    audience: {
      show: true,
      title: "Who is Slimrate for?",
      useGlobalCards: true
    },
    
    // FAQ
    faq: {
      show: true,
      questions: [
        {
          question: "Is Slimrate POS Hosted in the Cloud?",
          answer: "Yes, Slimrate POS operates as a cloud-based solution. This means your data is stored securely online, allowing you to access it from anywhere with an internet connection. Cloud hosting also ensures automatic updates, backups, and seamless synchronization across multiple devices and locations."
        },
        {
          question: "What kind of hardware is needed for the POS system?",
          answer: "You'll need tablets, terminals, or a regular laptop connected to the internet. Slimrate supports a variety of devices, so you can choose what fits your budget and setup. In addition, we offer complete hardware bundles to get you started quickly."
        }
      ]
    },
    
    // Ð¤Ð¾Ñ€Ð¼Ð° ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ð°
    contactForm: {
      show: true,
      title: "Contact us",
      subtitle: "Get in Touch â€“ Your Questions, Our Answers. Let's Connect!",
      variant: "blue-box"
    }
  },

  "a35": {
    meta: {
      title: "A35 Payment Terminal - Secure EMV Processing | Slimrate",
      description: "The A35 Payment Terminal offers secure and efficient payment processing with compact design and advanced security features.",
      keywords: "payment terminal, A35, EMV terminal, card reader, POS terminal"
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
        text: "Get Quote",
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
          description: "The A35 ensures every transaction is secure with end-to-end encryption and PCI-DSS compliance. Perfect for businesses that need reliable payment processing.",
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
      title: null,
      items: [
        {
          icon: "security",
          title: "Advanced Security",
          description: "PCI-compliant with end-to-end encryption ensures every transaction is protected from fraud."
        },
        {
          icon: "speed",
          title: "Fast Transactions",
          description: "Process payments quickly and efficiently, reducing wait times for your customers."
        },
        {
          icon: "versatility",
          title: "Multiple Payment Types",
          description: "Accept chip, swipe, and contactless payments including Apple Pay and Google Pay."
        },
        {
          icon: "portable",
          title: "Compact Design",
          description: "Small footprint perfect for any counter space without sacrificing functionality."
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
          answer: "The A35 accepts EMV chip cards, magnetic stripe cards, and contactless payments including Apple Pay, Google Pay, and Samsung Pay."
        },
        {
          question: "Is the A35 PCI compliant?",
          answer: "Yes, the A35 is fully PCI-DSS compliant with end-to-end encryption for secure transactions."
        }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  "sr-trp1": {
    meta: {
      title: "SR-TRP1 Thermal Receipt Printer | Slimrate",
      description: "Print receipts swiftly and quietly with our Thermal Receipt Printer. Ideal for high-volume environments.",
      keywords: "thermal printer, receipt printer, POS printer, SR-TRP1"
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
        text: "Get Quote",
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
    detailSections: [],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      title: null,
      items: [
        {
          icon: "speed",
          title: "Fast Printing",
          description: "High-speed thermal printing for busy environments keeps your lines moving quickly."
        },
        {
          icon: "quiet",
          title: "Quiet Operation",
          description: "Operates quietly without disturbing customers or staff during busy hours."
        },
        {
          icon: "reliable",
          title: "Reliable Performance",
          description: "Built for high-volume daily use with durable components that last."
        },
        {
          icon: "easy",
          title: "Easy Integration",
          description: "Works seamlessly with your POS system - plug and play setup."
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
          answer: "The SR-TRP1 uses standard thermal receipt paper (80mm width). No ink or toner cartridges are required."
        },
        {
          question: "Does it require ink or toner?",
          answer: "No, the SR-TRP1 is a thermal printer and does not require ink or toner cartridges, reducing ongoing costs."
        },
        {
          question: "Is it compatible with my POS system?",
          answer: "Yes, the SR-TRP1 is compatible with most POS systems and connects via USB or Ethernet."
        }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  // ========== TABLETS (Ð¾ÑÑ‚Ð°Ð»ÑŒÐ½Ñ‹Ðµ) ==========
  
  "sr-swan": {
    meta: {
      title: "SR Swan - Premium Fanless POS Tablet | Slimrate",
      description: "Slimrate Swan is a sleek, silent, fanless tablet POS with long-life components and premium aesthetics.",
      keywords: "POS tablet, SR Swan, fanless POS, silent POS, retail tablet"
    },
    hero: {
      productId: "sr-swan",
      categoryNav: "Tablets",
      name: "SR Swan",
      tagline: "SR Swan",
      description: "Slimrate Swan is a sleek, silent, fanless tablet POS with long-life components and premium aesthetics for frontâ€‘ofâ€‘house presentation.",
      price: "$1,199.00",
      priceUnit: "pcs.",
      ctaButton: {
        text: "Get Quote",
        link: "#contact"
      },
      keyFeatures: [
        "Silent fanless operation",
        "Premium aesthetics",
        "Long-life components"
      ],
      images: {
        main: "assets/img/products/hardware/swan 2/Swan2main.png",
        gallery: [
          "assets/img/products/hardware/swan 2/Swan2main.png",
          "assets/img/products/hardware/swan 2/Swan2front.png",
          "assets/img/products/hardware/swan 2/Swan2back.png"
        ]
      }
    },
    detailSections: [
      {
        id: "section-1",
        title: "Elegant & Silent Design",
        layout: "image-right",
        content: {
          description: "The SR Swan combines elegant design with silent operation, perfect for upscale retail and restaurant environments where aesthetics matter.",
          features: [
            "Fanless cooling system",
            "Premium materials",
            "Sleek modern design"
          ]
        },
        image: {
          src: "assets/img/products/hardware/swan 2/Swan2front.png",
          alt: "SR Swan Front View"
        }
      }
    ],
    banner: { show: true, text: "Premium POS Solutions for Discerning Businesses", subtitle: "Where performance meets elegance" },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "quiet", title: "Silent Operation", description: "Fanless design ensures completely quiet operation in any environment" },
        { icon: "reliability", title: "Built to Last", description: "Long-life components designed for years of reliable service" },
        { icon: "versatility", title: "Elegant Design", description: "Premium aesthetics that complement any business environment" },
        { icon: "speed", title: "Fast Performance", description: "Powerful processing for smooth, responsive operation" }
      ]
    },
    specifications: { show: true, title: "Technical Specifications", content: "High-performance fanless tablet with premium components designed for front-of-house presentation." },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "Is the SR Swan completely silent?", answer: "Yes, the SR Swan uses a fanless cooling system, making it completely silent during operation." },
        { question: "What makes the SR Swan different?", answer: "The SR Swan combines premium aesthetics with silent operation and long-life components, perfect for upscale businesses." }
      ]
    },
    contactForm: { show: true, variant: "blue-box" }
  },

  "sr155-duo": {
    meta: {
      title: "SR155 Duo - Dual Display POS System | Slimrate",
      description: "Double display POS system with customer-facing display for enhanced transparency and engagement.",
      keywords: "dual display POS, SR155 Duo, customer display, touchscreen terminal"
    },
    hero: {
      productId: "sr155-duo",
      categoryNav: "Tablets",
      name: "SR155 Duo",
      tagline: "SR155 Duo",
      description: "Our double display POS system ensures seamless interaction for both customers and staff. Featuring a customer-facing display, it enhances transparency and engagement at the point of sale.",
      price: "$999.00",
      priceUnit: "pcs.",
      ctaButton: {
        text: "Get Quote",
        link: "#contact"
      },
      keyFeatures: [
        "15.6\" + 10.1\" Touchscreen terminals",
        "Customer-facing display",
        "Enhanced transparency"
      ],
      images: {
        main: "assets/img/gallery/hardware/SR155 Duo 1.png",
        gallery: [
          "assets/img/gallery/hardware/SR155 Duo 1.png",
          "assets/img/gallery/hardware/SR155 Duo 2.png",
          "assets/img/gallery/hardware/SR155 Duo 3.png"
        ]
      }
    },
    detailSections: [
      {
        id: "section-1",
        title: "Dual Display Innovation",
        layout: "image-right",
        content: {
          description: "Enhance customer engagement with a dedicated customer-facing display that shows transaction details in real-time.",
          features: [
            "Main 15.6\" operator display",
            "Secondary 10.1\" customer display",
            "Real-time transaction visibility"
          ]
        },
        image: {
          src: "assets/img/gallery/hardware/SR155 Duo 2.png",
          alt: "SR155 Duo Dual Display"
        }
      }
    ],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "versatility", title: "Dual Displays", description: "Separate displays for operator and customer enhance the checkout experience" },
        { icon: "reliability", title: "Built for Retail", description: "Designed specifically for high-volume retail environments" },
        { icon: "easy", title: "Easy to Use", description: "Intuitive interface for both staff and customers" },
        { icon: "speed", title: "Fast Checkout", description: "Streamline transactions with dual-screen efficiency" }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "What are the display sizes?", answer: "The SR155 Duo features a 15.6\" main operator display and a 10.1\" customer-facing display." },
        { question: "Can customers interact with their display?", answer: "The customer display typically shows transaction information. Touch interaction can be configured based on your needs." }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  "sr155-solo": {
    meta: {
      title: "SR155 Solo - Single Display POS Terminal | Slimrate",
      description: "Streamline your checkout with our efficient single display POS terminal. 15.6\" touchscreen.",
      keywords: "single display POS, SR155 Solo, touchscreen terminal, retail POS"
    },
    hero: {
      productId: "sr155-solo",
      categoryNav: "Tablets",
      name: "SR155 Solo",
      tagline: "SR155 Solo",
      description: "Streamline your checkout process with our single display POS. Designed for efficiency and ease of use, it supports quick transactions and offers a user-friendly interface for staff.",
      price: "$850.00",
      priceUnit: "pcs.",
      ctaButton: {
        text: "Get Quote",
        link: "#contact"
      },
      keyFeatures: [
        "15.6\" Touchscreen terminal",
        "Designed for efficiency",
        "User-friendly interface"
      ],
      images: {
        main: "assets/img/gallery/hardware/SR155 Solo 1.png",
        gallery: [
          "assets/img/gallery/hardware/SR155 Solo 1.png",
          "assets/img/gallery/hardware/SR155 Solo 2.png"
        ]
      }
    },
    detailSections: [],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "speed", title: "Fast Transactions", description: "Process sales quickly with an intuitive single-screen interface" },
        { icon: "easy", title: "Simple Operation", description: "Easy to learn and use for all staff members" },
        { icon: "reliable", title: "Dependable", description: "Built for daily high-volume use in retail environments" },
        { icon: "versatility", title: "Versatile", description: "Suitable for various retail and hospitality businesses" }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "What's the screen size?", answer: "The SR155 Solo features a 15.6\" touchscreen display." },
        { question: "Is it suitable for small businesses?", answer: "Yes, the SR155 Solo is perfect for small to medium-sized businesses looking for an efficient, affordable POS solution." }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  // ========== EMV TERMINALS ==========

  "a920": {
    meta: {
      title: "A920 Payment Terminal - Mobile EMV Solution | Slimrate",
      description: "Portable payment terminal combining mobility with robust functionality and sleek design.",
      keywords: "A920, mobile payment terminal, portable EMV, wireless payment"
    },
    hero: {
      productId: "a920",
      categoryNav: "EMV Terminals",
      name: "A920",
      tagline: "A920 Payment Terminal",
      description: "Enhance your mobile payments with the A920 Payment Terminal. Combining portability with robust functionality, it supports a variety of payment methods and offers a sleek design.",
      price: "$349.00",
      priceUnit: "pcs.",
      ctaButton: {
        text: "Get Quote",
        link: "#contact"
      },
      keyFeatures: [
        "Mobile and portable",
        "Multiple payment methods",
        "Built-in printer"
      ],
      images: {
        main: "assets/img/gallery/hardware/A920 Payment Terminal 1.png",
        gallery: [
          "assets/img/gallery/hardware/A920 Payment Terminal 1.png"
        ]
      }
    },
    detailSections: [
      {
        id: "section-1",
        title: "Mobile Payment Solution",
        layout: "image-right",
        content: {
          description: "The A920 brings payment processing anywhere in your business with its portable design and built-in receipt printer.",
          features: [
            "Wireless connectivity",
            "Long battery life",
            "Integrated receipt printer"
          ]
        },
        image: {
          src: "assets/img/gallery/hardware/A920 Payment Terminal 1.png",
          alt: "A920 Mobile Terminal"
        }
      }
    ],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "portable", title: "Truly Mobile", description: "Take payments anywhere with wireless connectivity and long battery life" },
        { icon: "security", title: "Secure Payments", description: "PCI-compliant with end-to-end encryption for all transactions" },
        { icon: "speed", title: "Fast Processing", description: "Quick payment processing keeps your lines moving" },
        { icon: "versatility", title: "All Payment Types", description: "Accept chip, swipe, tap, and mobile wallet payments" }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "Does the A920 have a built-in printer?", answer: "Yes, the A920 includes an integrated receipt printer for customer receipts on the go." },
        { question: "How long does the battery last?", answer: "The A920 offers extended battery life suitable for a full day of mobile transactions." }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  // ========== SCANNERS ==========

  "sr-ds1": {
    meta: {
      title: "SR-DS1 Desktop Scanner | Slimrate",
      description: "High-volume desktop scanner for fast and accurate barcode scanning in retail.",
      keywords: "desktop scanner, SR-DS1, barcode scanner, retail scanner"
    },
    hero: {
      productId: "sr-ds1",
      categoryNav: "Scanners",
      name: "SR-DS1",
      tagline: "SR-DS1 Desktop Scanner",
      description: "Streamline your scanning process with our Desktop Scanner. Designed for high-volume use, it offers fast and accurate scanning, making it perfect for busy retail settings.",
      price: "$279.00",
      priceUnit: "pcs.",
      ctaButton: {
        text: "Get Quote",
        link: "#contact"
      },
      keyFeatures: [
        "High-volume scanning",
        "Fast and accurate",
        "Hands-free operation"
      ],
      images: {
        main: "assets/img/gallery/hardware/SR-WHS1 Wired Table Scanner 1.png",
        gallery: [
          "assets/img/gallery/hardware/SR-WHS1 Wired Table Scanner 1.png"
        ]
      }
    },
    detailSections: [],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "speed", title: "Fast Scanning", description: "High-speed scanning for busy checkout lines" },
        { icon: "reliable", title: "Accurate Reads", description: "Reliable barcode recognition on first scan" },
        { icon: "easy", title: "Hands-Free", description: "Desktop design allows hands-free scanning" },
        { icon: "versatility", title: "Universal", description: "Reads all common 1D and 2D barcodes" }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "What barcodes can the SR-DS1 scan?", answer: "The SR-DS1 reads all common 1D and 2D barcodes including UPC, EAN, QR codes, and more." },
        { question: "Is it suitable for high-volume retail?", answer: "Yes, the SR-DS1 is specifically designed for high-volume retail environments with fast, accurate scanning." }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  "sr-wlhs1": {
    meta: {
      title: "SR-WLHS1 Wireless Handheld Scanner | Slimrate",
      description: "Wireless handheld scanner for inventory management and mobile scanning needs.",
      keywords: "wireless scanner, SR-WLHS1, handheld scanner, mobile scanner"
    },
    hero: {
      productId: "sr-wlhs1",
      categoryNav: "Scanners",
      name: "SR-WLHS1",
      tagline: "SR-WLHS1 Wireless Handheld Scanner",
      description: "Improve mobility and efficiency with our Wireless Handheld Scanner. Perfect for inventory management and point-of-sale scanning, it offers reliable and fast barcode scanning.",
      price: "$399.00",
      priceUnit: "pcs.",
      ctaButton: {
        text: "Get Quote",
        link: "#contact"
      },
      keyFeatures: [
        "Wireless freedom",
        "Long-range scanning",
        "Ergonomic design"
      ],
      images: {
        main: "assets/img/gallery/hardware/SR-WLHS1 Wireless Handheld Scanner 3.png",
        gallery: [
          "assets/img/gallery/hardware/SR-WLHS1 Wireless Handheld Scanner 3.png",
          "assets/img/gallery/hardware/SR-WHS1 Wired Handheld Scanner 2.png",
          "assets/img/gallery/hardware/SR-WHS1 Wired Handheld Scanner 3.png"
        ]
      }
    },
    detailSections: [],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "portable", title: "Wireless Freedom", description: "No cables means freedom to scan anywhere in your store" },
        { icon: "speed", title: "Fast Scanning", description: "Quick barcode recognition for efficient operations" },
        { icon: "reliable", title: "Long Battery", description: "Extended battery life for all-day scanning" },
        { icon: "easy", title: "Ergonomic", description: "Comfortable grip for extended use" }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "What's the wireless range?", answer: "The SR-WLHS1 offers reliable wireless connectivity up to 100 meters (330 feet) line of sight." },
        { question: "How long does the battery last?", answer: "The battery provides up to 50,000 scans or several days of typical use on a single charge." }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  "sr-whs1": {
    meta: {
      title: "SR-WHS1 Wired Handheld Scanner | Slimrate",
      description: "Reliable wired handheld scanner for consistent barcode scanning in retail.",
      keywords: "wired scanner, SR-WHS1, handheld scanner, barcode reader"
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
        text: "Get Quote",
        link: "#contact"
      },
      keyFeatures: [
        "Reliable wired connection",
        "Fast scanning speed",
        "Ergonomic design"
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
    featuresGrid: { 
      show: true,
      items: [
        { icon: "reliable", title: "Always Connected", description: "Wired connection ensures consistent performance without batteries" },
        { icon: "speed", title: "Fast Scanning", description: "Quick barcode recognition for efficient checkout" },
        { icon: "easy", title: "Plug and Play", description: "Simple setup with no configuration required" },
        { icon: "versatility", title: "Durable Build", description: "Built to withstand daily retail use" }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "Does it need batteries?", answer: "No, the SR-WHS1 is powered through its wired USB connection, so no batteries are required." },
        { question: "What barcodes can it read?", answer: "The SR-WHS1 reads all standard 1D barcodes including UPC, EAN, Code 39, Code 128, and more." }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  // SR-WHS1 already exists above

  // ========== SCALES ==========

  "digital-scale": {
    meta: {
      title: "Digital Scale - Precision Weighing for Retail | Slimrate",
      description: "Precise digital scale with POS integration for accurate weight-based pricing.",
      keywords: "digital scale, retail scale, POS scale, weighing scale"
    },
    hero: {
      productId: "digital-scale",
      categoryNav: "Scales",
      name: "Digital Scale",
      tagline: "Digital Scale",
      description: "Ensure precise measurements with our Digital Scale. Ideal for retail environments, it offers accurate weight readings and integrates seamlessly with your POS system.",
      price: "$475.00",
      priceUnit: "pcs.",
      ctaButton: {
        text: "Get Quote",
        link: "#contact"
      },
      keyFeatures: [
        "Accurate weight readings",
        "POS integration",
        "Durable construction"
      ],
      images: {
        main: "assets/img/gallery/hardware/DS1.png",
        gallery: [
          "assets/img/gallery/hardware/DS1.png"
        ]
      }
    },
    detailSections: [],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "reliable", title: "Precise Weighing", description: "Accurate measurements for weight-based pricing" },
        { icon: "easy", title: "POS Integration", description: "Seamlessly connects to your POS system" },
        { icon: "versatility", title: "Versatile Use", description: "Perfect for produce, deli, and bulk items" },
        { icon: "speed", title: "Fast Readings", description: "Quick stabilization for faster checkout" }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "Does it integrate with Slimrate POS?", answer: "Yes, the Digital Scale seamlessly integrates with Slimrate POS for automatic price calculation based on weight." },
        { question: "What's the maximum weight capacity?", answer: "The scale can handle weights up to 30 lbs (15 kg) with precision accuracy." }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  "aiscale-pos-s625": {
    meta: {
      title: "AIScale POS S625 - All-in-One Scale Terminal | Slimrate",
      description: "Integrated POS terminal with built-in scale and receipt printer for weight-based transactions.",
      keywords: "AIScale S625, scale terminal, POS scale, integrated scale"
    },
    hero: {
      productId: "aiscale-pos-s625",
      categoryNav: "Scales",
      name: "AIScale POS S625",
      tagline: "AIScale POS S625",
      description: "This Slimrate device combines a tablet interface with integrated scales and a receipt printer, offering a compact, efficient solution for retail environments. Perfect for weight-based transactions.",
      price: "$1,799.00",
      priceUnit: "pcs.",
      ctaButton: {
        text: "Get Quote",
        link: "#contact"
      },
      keyFeatures: [
        "Integrated scale and POS",
        "Built-in receipt printer",
        "Touchscreen interface"
      ],
      images: {
        main: "assets/img/gallery/hardware/AIScale Cash Register S625 1.png",
        gallery: [
          "assets/img/gallery/hardware/AIScale Cash Register S625 1.png",
          "assets/img/gallery/hardware/AIScale Cash Register S625 2.png"
        ]
      }
    },
    detailSections: [],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "versatility", title: "All-in-One", description: "POS, scale, and printer in one compact unit" },
        { icon: "speed", title: "Fast Service", description: "Streamline weight-based transactions" },
        { icon: "easy", title: "Easy to Use", description: "Intuitive touchscreen interface" },
        { icon: "reliable", title: "Accurate", description: "Precise weighing with automatic pricing" }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "What's included in the S625?", answer: "The S625 includes an integrated scale, touchscreen POS terminal, and receipt printer all in one unit." },
        { question: "Is it suitable for grocery stores?", answer: "Yes, the S625 is perfect for grocery stores, delis, and any business selling by weight." }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  "aiscale-label-printing-s130": {
    meta: {
      title: "AIScale Label Printing S130 - Smart Labeling Scale | Slimrate",
      description: "AI-powered labeling scale with camera for automated product identification and labeling.",
      keywords: "AIScale S130, label printing scale, smart scale, AI scale"
    },
    hero: {
      productId: "aiscale-label-printing-s130",
      categoryNav: "Scales",
      name: "AIScale Label Printing S130",
      tagline: "AIScale Label Printing S130",
      description: "These smart labeling scales with an integrated camera by Slimrate offer accurate weighing and automated product identification. Ideal for retail environments, they simplify labeling processes and enhance operational efficiency.",
      price: "$1,499.00",
      priceUnit: "pcs.",
      ctaButton: {
        text: "Get Quote",
        link: "#contact"
      },
      keyFeatures: [
        "AI product recognition",
        "Automated labeling",
        "Integrated camera"
      ],
      images: {
        main: "assets/img/gallery/hardware/AIScale Label Printing S130 1.png",
        gallery: [
          "assets/img/gallery/hardware/AIScale Label Printing S130 1.png",
          "assets/img/gallery/hardware/AIScale Label Printing S130 2.png"
        ]
      }
    },
    detailSections: [],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "versatility", title: "AI Recognition", description: "Camera automatically identifies products for faster labeling" },
        { icon: "speed", title: "Fast Labeling", description: "Print accurate labels in seconds" },
        { icon: "easy", title: "Simple Operation", description: "Minimal user input required with AI assistance" },
        { icon: "reliable", title: "Precise", description: "Accurate weighing and product information" }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "How does the AI recognition work?", answer: "The integrated camera identifies products visually, automatically selecting the correct item and price for labeling." },
        { question: "Can it print custom labels?", answer: "Yes, the S130 can print customizable labels with weight, price, barcodes, and product information." }
      ]
    },
    contactForm: { show: true, variant: "default" }
  },

  // ========== CASH DRAWER ==========

  "sr-410": {
    meta: {
      title: "SR-410 Cash Drawer - Secure Cash Management | Slimrate",
      description: "Durable cash drawer with robust design for secure cash management and POS integration.",
      keywords: "cash drawer, SR-410, POS cash drawer, retail cash drawer"
    },
    hero: {
      productId: "sr-410",
      categoryNav: "Cash Drawer",
      name: "SR-410",
      tagline: "SR-410 Cash Drawer",
      description: "Secure your cash transactions with our durable Cash Drawer. Featuring a robust design and smooth operation, it integrates seamlessly with your POS system for easy cash management.",
      price: "$129.00",
      priceUnit: "pcs.",
      ctaButton: {
        text: "Get Quote",
        link: "#contact"
      },
      keyFeatures: [
        "Robust metal construction",
        "Smooth sliding mechanism",
        "POS integration"
      ],
      images: {
        main: "assets/img/gallery/hardware/SR-410 Cash Drawer 1.png",
        gallery: [
          "assets/img/gallery/hardware/SR-410 Cash Drawer 1.png",
          "assets/img/gallery/hardware/SR-410 Cash Drawer 2.png"
        ]
      }
    },
    detailSections: [],
    banner: { show: false },
    featuresGrid: { 
      show: true,
      items: [
        { icon: "security", title: "Secure Storage", description: "Robust metal construction keeps cash safe" },
        { icon: "reliable", title: "Durable Design", description: "Built to withstand daily heavy use" },
        { icon: "easy", title: "Easy Integration", description: "Works seamlessly with your POS system" },
        { icon: "speed", title: "Smooth Operation", description: "Quick-release mechanism for fast access" }
      ]
    },
    specifications: { show: false },
    audience: { show: true, useGlobalCards: true },
    faq: { 
      show: true, 
      questions: [
        { question: "How does it connect to the POS?", answer: "The SR-410 connects via cable to your POS system and opens automatically when a cash transaction is completed." },
        { question: "How many bill/coin compartments does it have?", answer: "The SR-410 features 5 bill compartments and 5 coin compartments for organized cash management." }
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


