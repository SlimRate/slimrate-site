const productGroups = [
    {
        label: "Tablets",
        products: [
            {
                name: "SR155_Duo",
                text: "Our double display POS system ensures seamless interaction for both customers and staff. Featuring a customer-facing display, it enhances transparency and engagement at the point of sale. Slimrate SR155 Duo 15.6” + 10.1” Touchscreen terminal",
                avalible: false,
                costForBlack: 999,
                costForWhite: 999,
                images: [
                    "assets/img/gallery/hardware/SR155 Duo 1.png",
                    "assets/img/gallery/hardware/SR155 Duo 2.png",
                    "assets/img/gallery/hardware/SR155 Duo 3.png",
                ],
            },
            {
                name: "SR155_Solo",
                text: "Streamline your checkout process with our single display POS. Designed for efficiency and ease of use, it supports quick transactions and offers a user-friendly interface for staff. 15.6” Touchscreen terminal",
                avalible: true,
                costForBlack: 850,
                costForWhite: 850,
                images: [
                    "assets/img/gallery/hardware/SR155 Solo 1.png",
                    "assets/img/gallery/hardware/SR155 Solo 2.png",
                ],
            }
        ]
    },
    {
        label: "Printers",
        products: [
            {
                name: "SR-TRP1",
                text: "Print receipts swiftly and quietly with our Thermal Receipt Printer. Ideal for high-volume environments, it ensures crisp and clear receipts every time without the need for ink.",
                avalible: true,
                costForBlack: 329,
                costForWhite: 329,
                images: [
                    "assets/img/gallery/hardware/SR-TRP1 Thermal Receipt Printer 1.png",
                    "assets/img/gallery/hardware/SR-TRP1 Thermal Receipt Printer 2.png",
                ],
            }
            
        ]
    },
    {
        label: "Cash Drawer",
        products: [
            {
                name: "SR-410",
                text: "Secure your cash transactions with our durable Cash Drawer. Featuring a robust design and smooth operation, it integrates seamlessly with your POS system for easy cash management.",
                avalible: true,
                costForBlack: 129,
                costForWhite: 129,
                images: [
                    "assets/img/gallery/hardware/SR-410 Cash Drawer 1.png",
                    "assets/img/gallery/hardware/SR-410 Cash Drawer 2.png",
                ],
            }
        ]
    },
    {
        label: "Scanners",
        products: [
            {
                name: "SR-DS1",
                text: "Streamline your scanning process with our Desktop Scanner. Designed for high-volume use, it offers fast and accurate scanning, making it perfect for busy retail settings.",
                avalible: false,
                costForBlack: 279,
                costForWhite: 279,
                images: [
                    "assets/img/gallery/hardware/SR-WHS1 Wired Table Scanner 1.png",
                ],
            },
            {
                name: "SR-WLHS1",
                text: "Improve mobility and efficiency with our Wireless Handheld Scanner. Perfect for inventory management and point-of-sale scanning, it offers reliable and fast barcode scanning.",
                avalible: false,
                costForBlack: 399,
                costForWhite: 399,
                images: [
                    "assets/img/gallery/hardware/SR-WLHS1 Wireless Handheld Scanner 3.png",
                    "assets/img/gallery/hardware/SR-WHS1 Wired Handheld Scanner 2.png",
                    "assets/img/gallery/hardware/SR-WHS1 Wired Handheld Scanner 3.png",
                ],
            },
            {
                name: "SR-WHS1",
                text: "Ensure consistent performance with our Wired Handheld Scanner. Ideal for retail environments, it provides quick and accurate barcode scanning with a durable design.",
                avalible: true,
                costForBlack: 199,
                costForWhite: 199,
                images: [
                    "assets/img/gallery/hardware/SR-WHS1.png",
                ],
            }
        ]
    },
    {
        label: "EMV Terminals",
        products: [
            {
                name: "A35",
                text: "The A35 Payment Terminal offers secure and efficient payment processing. Its compact design and advanced security features make it ideal for any retail environment.",
                avalible: false,
                costForBlack: 290,
                costForWhite: 290,
                images: [
                    "assets/img/gallery/hardware/A35 Payment Terminal 1.png",
                ],
            },
            {
                name: "A920",
                text: "Enhance your mobile payments with the A920 Payment Terminal. Combining portability with robust functionality, it supports a variety of payment methods and offers a sleek design.",
                avalible: false,
                costForBlack: 349,
                costForWhite: 349,
                images: [
                    "assets/img/gallery/hardware/A920 Payment Terminal 1.png",
                ],
            },

            {
                name: "E700",
                text: "Experience the power of all-in-one payments with the E700 Payment Terminal. Featuring a large touchscreen and advanced processing capabilities, it simplifies transactions and enhances customer experience.",
                avalible: true,
                costForBlack: 950,
                costForWhite: 950,
                images: [
                    "assets/img/gallery/hardware/E700 Payment Terminal 1.png",
                ],
            }
        ]
    },
    {
        label: "Scales",
        products: [
            {
                name: "Digital_Scale",
                text: "Ensure precise measurements with our Digital Scale. Ideal for retail environments, it offers accurate weight readings and integrates seamlessly with your POS system.",
                avalible: true,
                costForBlack: 475,
                costForWhite: 475,
                images: [
                    "assets/img/gallery/hardware/DS1.png",
                ],
            },
            {
                name: "Smart_Scale",
                text: "Upgrade your weighing process with our Smart Scale. Featuring advanced technology, it provides accurate measurements and can connect with your POS system for seamless integration.",
                avalible: true,
                costForBlack: 1475,
                costForWhite: 1475,
                images: [
                    "assets/img/gallery/hardware/Digital Scale 1.png",
                ],
            }
        ]
    }
  ];

  function createSlides() {
    const slidesContainer = document.getElementById('slides');

    productGroups.forEach(group => {
      group.products.forEach(product => {
        const imageSrc = product.images[0];
        const productName = product.name;

        const figure = document.createElement('figure');
        figure.dataset.productName = productName; 

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = productName;

        const figcaption = document.createElement('figcaption');
        figcaption.textContent = productName;

        figure.appendChild(img);
        figure.appendChild(figcaption);

        slidesContainer.appendChild(figure);

        // open popUp
        figure.addEventListener('click', () => openPopup(product));
      });
    });
  }

  // popUp
  function openPopup(product) {
    const popupOverlay = document.getElementById('popupOverlay');
    const popupContent = document.getElementById('popupContent');

    const existingContent = popupContent.querySelectorAll(':not(.close-btn)');
    existingContent.forEach(element => element.remove());

   
    if (product.images.length > 0) {
      const img = document.createElement('img');
      img.src = product.images[0];
      img.alt = product.name;
      popupContent.appendChild(img);
    }

    const title = document.createElement('h2');
    title.textContent = product.name;
    popupContent.appendChild(title);

    const description = document.createElement('p');
    description.textContent = product.text;
    popupContent.appendChild(description);

    // const availability = document.createElement('p');
    // availability.classList.add('availability');
    // availability.textContent = `Наличие: ${product.avalible ? 'В наличии' : 'Нет в наличии'}`;
    // popupContent.appendChild(availability);

    // const price = document.createElement('p');
    // price.classList.add('price');
    // price.textContent = `Цена: Черный - ${product.costForBlack} руб., Белый - ${product.costForWhite} руб.`;
    // popupContent.appendChild(price);

    popupOverlay.classList.add('active');
  }

  function closePopup() {
    const popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.classList.remove('active');
  }

  document.addEventListener('DOMContentLoaded', () => {
    createSlides(); 

    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides figure');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    const totalImages = images.length;
    
    const getImagesPerView = () => {
      const width = window.innerWidth;
      if (width <= 480) return 1;
      if (width <= 768) return 2;
      if (width <= 1024) return 3;
      return 4;
    };

    let imagesPerView = getImagesPerView();
    let currentIndex = 0;

    window.addEventListener('resize', () => {
      const oldImagesPerView = imagesPerView;
      imagesPerView = getImagesPerView();
      if (currentIndex > totalImages - imagesPerView) {
        currentIndex = totalImages - imagesPerView;
        if (currentIndex < 0) currentIndex = 0;
        updateSlidePosition();
      } else if (oldImagesPerView !== imagesPerView) {
        updateSlidePosition();
      }
    });

    const updateSlidePosition = () => {
      const percentage = (100 / imagesPerView) * currentIndex;
      slides.style.transform = `translateX(-${percentage}%)`;
    };

    const nextSlide = () => {
      if (currentIndex < totalImages - imagesPerView) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateSlidePosition();
    };

    const prevSlide = () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalImages - imagesPerView;
      }
      updateSlidePosition();
    };

    let slideInterval = setInterval(nextSlide, 3000);

    
    document.querySelector('.slider-container').addEventListener('mouseover', () => {
      clearInterval(slideInterval);
    });

   
    document.querySelector('.slider-container').addEventListener('mouseout', () => {
      slideInterval = setInterval(nextSlide, 3000);
    });

    // nextButton.addEventListener('click', nextSlide);
    // prevButton.addEventListener('click', prevSlide);

    const closeBtn = document.getElementById('closeBtnUp');
    closeBtn.addEventListener('click', closePopup);

    const popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.addEventListener('click', (e) => {
      if (e.target === popupOverlay) {
        closePopup();
      }
    });
  });