// Product Pages Data
// Данные для персональных страниц hardware продуктов

const productPagesData = {
  "sr-falcon": {
    // Meta информация
    meta: {
      title: "SR Falcon - Premium POS Tablet | Slimrate",
      description: "SR Falcon is a next-gen POS tablet built for speed, style, and reliability with 14-slot processor, Android 12, and rugged design for 24/7 operation.",
      keywords: "POS tablet, SR Falcon, restaurant POS, retail POS, Android POS"
    },
    
    // Hero секция
    hero: {
      productId: "sr-falcon",
      categoryNav: "Tablets",
      name: "SR Falcon",
      tagline: "SR Falcon",
      description: "SR Falcon is a next-gen POS tablet built for speed, style, and reliability, with server performance and high-end specs to satisfy even the most demanding user needs and retail stores to mobile sales. Everything your business needs.",
      price: "$1,600.00",
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
        main: "../../assets/img/products/hardware/falcon/80 printer -1.png",
        gallery: [
          "../../assets/img/products/hardware/falcon/80 printer -1.png",
          "../../assets/img/products/hardware/falcon/80 printer -2.png",
          "../../assets/img/products/hardware/falcon/80 printer -3.png",
          "../../assets/img/products/hardware/falcon/80 printer -4.png"
        ]
      }
    },
    
    // Детальные секции
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
          src: "../../assets/img/products/hardware/falcon/80 printer -2.png",
          alt: "SR Falcon All-in-One POS Solution"
        }
      },
      {
        id: "section-2",
        title: "Powerful Dock. Endless Possibilities.",
        layout: "image-left",
        content: {
          description: "Choose the modular dock for your workflow – host charging charging ports, connect peripheral devices, and expand your system capabilities without limitations.",
          features: [
            "RMS-certified Wi-Fi for industry use",
            "Rugged aluminum body",
            "Fingerprint-rated dust and water IP65 protection"
          ]
        },
        image: {
          src: "../../assets/img/products/hardware/falcon/80 printer -3.png",
          alt: "SR Falcon Modular Dock"
        }
      }
    ],
    
    // Баннер
    banner: {
      show: true,
      text: "Streamlined POS Solutions for Every Business",
      subtitle: "From quick-service restaurants to retail stores and beyond, our POS systems help you serve customers faster and smarter."
    },
    
    // Сетка преимуществ
    featuresGrid: {
      show: true,
      title: null,
      items: [
        {
          icon: "reliability",
          title: "Reliability Meets Efficiency",
          description: "Built for non-stop operation. If your POS goes down, it doesn't just hurt you – it hurts your customers' experience, too. Slow service means lost sales and frustrated guests."
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
    
    // Технические характеристики
    specifications: {
      show: true,
      title: "What kind of hardware is needed for the POS system?",
      content: "You'll need tablets, terminals, or a regular laptop connected to the internet. Slimrate supports a variety of devices, so you can choose what fits your budget and setup. In addition, we offer complete hardware bundles to get you started quickly."
    },
    
    // Целевая аудитория
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
    
    // Форма контакта
    contactForm: {
      show: true,
      title: "Contact us",
      subtitle: "Get in Touch – Your Questions, Our Answers. Let's Connect!",
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
        text: "Get demo",
        link: "#contact"
      },
      keyFeatures: [
        "Compact and portable design",
        "Advanced security features",
        "Multiple payment methods"
      ],
      images: {
        main: "../../assets/img/gallery/hardware/A35 Payment Terminal 1.png",
        gallery: [
          "../../assets/img/gallery/hardware/A35 Payment Terminal 1.png"
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
          src: "../../assets/img/gallery/hardware/A35 Payment Terminal 1.png",
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
        text: "Get demo",
        link: "#contact"
      },
      keyFeatures: [
        "High-speed thermal printing",
        "No ink required",
        "Compatible with all POS systems"
      ],
      images: {
        main: "../../assets/img/gallery/hardware/SR-TRP1 Thermal Receipt Printer 1.png",
        gallery: [
          "../../assets/img/gallery/hardware/SR-TRP1 Thermal Receipt Printer 1.png",
          "../../assets/img/gallery/hardware/SR-TRP1 Thermal Receipt Printer 2.png"
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
  }
};

// Экспорт данных
if (typeof module !== 'undefined' && module.exports) {
  module.exports = productPagesData;
}
