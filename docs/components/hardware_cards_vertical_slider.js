function createProductCard(data) {
    const card = document.createElement('div');
    card.className = "product-card";
    
    card.innerHTML = `
        <div class="image-container" id="image-container-${data.name}">
            <img src="${data.images[0]}" alt="${data.name}" id="current-image-${data.name}" />
            <div class="slider" id="slider-${data.name}">
                ${data.images.map((_, index) => `
                    <div class="${index === 0 ? 'active' : ''}" data-index="${index}"></div>
                `).join('')}
            </div>
        </div>
        <div class="mainContainer">
            <div class="topRow">
                <h1 class="font-title text-2xl text-primary cardHeader">${data.name}</h1>
                <p>${data.text}</p>
            </div>
            <div class="lowerRow">
                <div class="flex items-center">
                    <span>Color:</span>
                    <div class="color-options ml-2">
                        <button class="black" id="black-button-${data.name}"></button>
                        <button class="white ml-2" id="white-button-${data.name}"></button>
                    </div>
                </div>
                <div class="flex flex-col justify-evenly">
                    <span id="availability-status-${data.name}" class="availability">${data.avalible ? "Available" : "To order"}</span>
                    <span class="price">$${data.avalible ? data.costForBlack : data.costForWhite}</span>
                </div>
            </div>
        </div>
    `;

    const imageElement = card.querySelector(`#current-image-${data.name}`);
    const sliderElement = card.querySelector(`#slider-${data.name}`);
    const whiteButton = card.querySelector(`#white-button-${data.name}`);
    const blackButton = card.querySelector(`#black-button-${data.name}`);
    let isWhiteButtonActive = false;

    let currentIndex = 0;

    card.querySelector(`#image-container-${data.name}`).addEventListener('click', () => {
        if (isWhiteButtonActive) return;

        currentIndex = (currentIndex + 1) % data.images.length;
        imageElement.src = data.images[currentIndex];

        const sliderElements = card.querySelectorAll(`#slider-${data.name} div`);
        sliderElements.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    });

    whiteButton.addEventListener('click', () => {
        if (sliderElement) {
            sliderElement.style.display = 'none';
        }

        imageElement.src = 'assets/img/gallery/hardware/not in stock.png';
       
        isWhiteButtonActive = true;
    });

    blackButton.addEventListener('click', () => {
        if (sliderElement) {
            sliderElement.style.display = 'flex';
        }

        imageElement.src = data.images[0];
        currentIndex = 0;

        const sliderElements = card.querySelectorAll(`#slider-${data.name} div`);
        sliderElements.forEach((dot, index) => {
            dot.classList.toggle('active', index === 0);
        });

        isWhiteButtonActive = false;
    });

    return card;
}


function createProductGroup(group) {
    const groupContainer = document.createElement('div');
    groupContainer.className = "product-group";

    const label = document.createElement('h1');
    label.textContent = group.label;
    label.className = "font-title text-2xl text-primary";
    groupContainer.appendChild(label);

    group.products.forEach(product => {
        const card = createProductCard(product);
        groupContainer.appendChild(card);
    });

    return groupContainer;
}

const productGroups = [
    {
        label: "Screens",
        products: [
            {
                name: "SR155_Duo",
                text: "Our double display POS system ensures seamless interaction for both customers and staff. Featuring a customer-facing display, it enhances transparency and engagement at the point of sale.",
                avalible: false,
                costForBlack: 400,
                costForWhite: 500,
                images: [
                    "assets/img/gallery/hardware/SR155 Duo 1.png",
                    "assets/img/gallery/hardware/SR155 Duo 2.png",
                    "assets/img/gallery/hardware/SR155 Duo 3.png",
                ],
            },
            {
                name: "SR155_Solo",
                text: "Streamline your checkout process with our single display POS. Designed for efficiency and ease of use, it supports quick transactions and offers a user-friendly interface for staff.",
                avalible: true,
                costForBlack: 400,
                costForWhite: 500,
                images: [
                    "assets/img/gallery/hardware/SR155 Solo 1.png",
                ],
            }
        ]
    },
    {
        label: "Printers",
        products: [
            {
                name: "SR-TRP1_Thermal_Receipt_Printer",
                text: "Print receipts swiftly and quietly with our Thermal Receipt Printer. Ideal for high-volume environments, it ensures crisp and clear receipts every time without the need for ink.",
                avalible: true,
                costForBlack: 200,
                costForWhite: 250,
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
                name: "SR-410_Cash_Drawer",
                text: "Secure your cash transactions with our durable Cash Drawer. Featuring a robust design and smooth operation, it integrates seamlessly with your POS system for easy cash management.",
                avalible: true,
                costForBlack: 200,
                costForWhite: 250,
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
                name: "SR-DS1_Desktop_Scanner",
                text: "Streamline your scanning process with our Desktop Scanner. Designed for high-volume use, it offers fast and accurate scanning, making it perfect for busy retail settings.",
                avalible: false,
                costForBlack: 400,
                costForWhite: 500,
                images: [
                    "assets/img/gallery/hardware/SR-DS1 Desktop Scanner 1.png",
                ],
            },
            {
                name: "SR-WLHS1_Wireless_Handheld_Scanner",
                text: "Improve mobility and efficiency with our Wireless Handheld Scanner. Perfect for inventory management and point-of-sale scanning, it offers reliable and fast barcode scanning.",
                avalible: false,
                costForBlack: 400,
                costForWhite: 500,
                images: [
                    "assets/img/gallery/hardware/SR-WLHS1 Wireless Handheld Scanner 1.png",
                ],
            },
            {
                name: "SR-WHS1_Wired_Handheld_Scanner",
                text: "Ensure consistent performance with our Wired Handheld Scanner. Ideal for retail environments, it provides quick and accurate barcode scanning with a durable design.",
                avalible: true,
                costForBlack: 400,
                costForWhite: 500,
                images: [
                    "assets/img/gallery/hardware/SR-WHS1 Wired Handheld Scanner 1.png",
                ],
            }
        ]
    },
    {
        label: "EMV Terminals",
        products: [
            {
                name: "A35_Payment_Terminal",
                text: "The A35 Payment Terminal offers secure and efficient payment processing. Its compact design and advanced security features make it ideal for any retail environment.",
                avalible: false,
                costForBlack: 400,
                costForWhite: 500,
                images: [
                    "assets/img/gallery/hardware/A35 Payment Terminal 1.png",
                ],
            },
            {
                name: "A920_Payment_Terminal",
                text: "Enhance your mobile payments with the A920 Payment Terminal. Combining portability with robust functionality, it supports a variety of payment methods and offers a sleek design.",
                avalible: false,
                costForBlack: 400,
                costForWhite: 500,
                images: [
                    "assets/img/gallery/hardware//A920 Payment Terminal 1.png",
                ],
            },

            {
                name: "E700_Payment_Terminal",
                text: "Experience the power of all-in-one payments with the E700 Payment Terminal. Featuring a large touchscreen and advanced processing capabilities, it simplifies transactions and enhances customer experience.",
                avalible: true,
                costForBlack: 400,
                costForWhite: 500,
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
                costForBlack: 200,
                costForWhite: 250,
                images: [
                    "assets/img/gallery/hardware/Digital Scale 1.png",
                ],
            }
        ]
    }
];

const container = document.getElementById('cards-container');
productGroups.forEach(group => {
    const groupContainer = createProductGroup(group);
    container.appendChild(groupContainer);
});