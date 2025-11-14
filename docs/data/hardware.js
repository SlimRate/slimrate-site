const rawProductGroups = [
    {
        label: "Tablets",
        products: [
            // Newly added high-end tablets (Falcon & Swan) inserted at top of list per request
            {
                name: "SR Falcon",
                text: "Slimrate Falcon delivers flagship performance with an ultra-bright display ideal for any lighting and a modular I/O bay for peripherals. Built for speed, durability, and nonstop service.",
                available: true,
                costForBlack: 999,
                costForWhite: 999,
                availableColors: ["black"],
                link: "sr-falcon.html",
                images: [
                    "assets/hardwareimg/SR Falcon 1.png",
                    "assets/hardwareimg/SR Falcon 2.png",
                    "assets/hardwareimg/SR Falcon 3.png",
                    "assets/hardwareimg/SR Falcon 4.png",
                ],
            },
            {
                name: "SR Swan",
                text: "Slimrate Swan is a sleek, silent, fanless tablet POS with long-life components and premium aesthetics for front‑of‑house presentation.",
                available: true,
                costForBlack: 1199,
                costForWhite: 1199,
                availableColors: ["black"],
                link: "sr-swan.html",
                images: [
                    "assets/hardwareimg/SR Swan 1.png",
                    "assets/hardwareimg/SR Swan 2.png",
                    "assets/hardwareimg/SR Swan 3.png",
                ],
            },
            {
                name: "SR155 Duo",
                text: "Our double display POS system ensures seamless interaction for both customers and staff. Featuring a customer-facing display, it enhances transparency and engagement at the point of sale. Slimrate SR155 Duo \t15.6\" + 10.1\" Touchscreen terminal",
                available: false,
                costForBlack: 999,
                costForWhite: 999,
                link: "sr155-duo.html",
                images: [
                    "assets/hardwareimg/SR155 Duo 1.png",
                    "assets/hardwareimg/SR155 Duo 2.png",
                ],
            },
            {
                name: "SR155 Solo",
                text: "Streamline your checkout process with our single display POS. Designed for efficiency and ease of use, it supports quick transactions and offers a user-friendly interface for staff. 15.6\" Touchscreen terminal",
                available: true,
                costForBlack: 850,
                costForWhite: 850,
                link: "sr155-solo.html",
                images: [
                    "assets/hardwareimg/SR155 Solo 1.png",
                    "assets/hardwareimg/SR155 Solo 2.png",
                ],
            },
            // SR155 Combo removed per request
        ],
    },
    {
        label: "Printers",
        products: [
            {
                name: "SR-TRP1",
                text: "Print receipts swiftly and quietly with our Thermal Receipt Printer. Ideal for high-volume environments, it ensures crisp and clear receipts every time without the need for ink.",
                available: true,
                costForBlack: 329,
                costForWhite: 329,
                link: "sr-trp1.html",
                images: [
                    "assets/hardwareimg/SR-TRP1 1.png",
                    "assets/hardwareimg/SR-TRP1 2.png",
                ],
            },
        ],
    },
    {
        label: "Cash Drawer",
        products: [
            {
                name: "SR-410",
                text: "Secure your cash transactions with our durable Cash Drawer. Featuring a robust design and smooth operation, it integrates seamlessly with your POS system for easy cash management.",
                available: true,
                costForBlack: 129,
                costForWhite: 129,
                link: "sr-410.html",
                images: [
                    "assets/hardwareimg/SR-410 1.png",
                    "assets/hardwareimg/SR-410 2.png",
                ],
            },
        ],
    },
    {
        label: "Scanners",
        products: [
            {
                name: "SR-DS1",
                text: "Streamline your scanning process with our Desktop Scanner. Designed for high-volume use, it offers fast and accurate scanning, making it perfect for busy retail settings.",
                available: false,
                costForBlack: 279,
                costForWhite: 279,
                link: "sr-ds1.html",
                images: [
                    "assets/hardwareimg/SR-DS1 1.png",
                ],
            },
            {
                name: "SR-WLHS1",
                text: "Improve mobility and efficiency with our Wireless Handheld Scanner. Perfect for inventory management and point-of-sale scanning, it offers reliable and fast barcode scanning.",
                available: false,
                costForBlack: 399,
                costForWhite: 399,
                link: "sr-wlhs1.html",
                images: [
                    "assets/hardwareimg/SR-WLHS1 1.png",
                    "assets/hardwareimg/SR-WLHS1 2.png",
                    "assets/hardwareimg/SR-WLHS1 3.png",
                ],
            },
            {
                name: "SR-WHS1",
                text: "Ensure consistent performance with our Wired Handheld Scanner. Ideal for retail environments, it provides quick and accurate barcode scanning with a durable design.",
                available: true,
                costForBlack: 199,
                costForWhite: 199,
                link: "sr-whs1.html",
                images: [
                    "assets/hardwareimg/SR-WHS1 1.png",
                    "assets/hardwareimg/SR-WHS1 2.png",
                ],
            },
        ],
    },
    {
        label: "EMV Terminals",
        products: [
            {
                name: "A35",
                text: "The A35 Payment Terminal offers secure and efficient payment processing. Its compact design and advanced security features make it ideal for any retail environment.",
                available: false,
                costForBlack: 290,
                costForWhite: 290,
                link: "a35.html",
                images: [
                    "assets/hardwareimg/A35 1.png",
                ],
            },
            {
                name: "A920",
                text: "Enhance your mobile payments with the A920 Payment Terminal. Combining portability with robust functionality, it supports a variety of payment methods and offers a sleek design.",
                available: false,
                costForBlack: 349,
                costForWhite: 349,
                link: "a920.html",
                images: [
                    "assets/hardwareimg/A920 1.png",
                ],
            },
            // E700 removed per request
        ],
    },
    {
        label: "Scales",
        products: [
            {
                name: "Digital Scale",
                text: "Ensure precise measurements with our Digital Scale. Ideal for retail environments, it offers accurate weight readings and integrates seamlessly with your POS system.",
                available: true,
                costForBlack: 475,
                costForWhite: 475,
                link: "digital-scale.html",
                images: [
                    "assets/hardwareimg/Digital Scale 1.png",
                ],
            },
            {
                name: "AIScale POS S625",
                text: "This Slimrate device combines a tablet interface with integrated scales and a receipt printer, offering a compact, efficient solution for retail environments. Perfect for weight-based transactions, it provides both the convenience of a touchscreen and the practicality of built-in printing.",
                available: true,
                costForBlack: 1799,
                costForWhite: 1799,
                link: "aiscale-pos-s625.html",
                images: [
                    "assets/hardwareimg/AIScale POS S625 1.png",
                    "assets/hardwareimg/AIScale POS S625 2.png",
                ],
            },
            {
                name: "AIScale Label Printing S130",
                text: "These smart labeling scales with an integrated camera by Slimrate offer accurate weighing and automated product identification. Ideal for retail environments, they simplify labeling processes and enhance operational efficiency, ensuring precise product information with minimal user input.",
                available: true,
                costForBlack: 1499,
                costForWhite: 1499,
                link: "aiscale-label-printing-s130.html",
                images: [
                    "assets/hardwareimg/AIScale Label Printing S130 1.png",
                    "assets/hardwareimg/AIScale Label Printing S130 2.png",
                ],
            },
        ],
    },
];

const normalizeImagePath = (src) => {
    if (typeof src !== 'string') {
        return '';
    }

    return src.trim().replace(/\\/g, '/').replace(/\/{2,}/g, '/');
};

const normalizeProductGroups = (groups) =>
    groups.map((group) => ({
        ...group,
        products: Array.isArray(group.products)
            ? group.products.map((product) => ({
                  ...product,
                  images: Array.isArray(product.images)
                      ? product.images.map(normalizeImagePath).filter(Boolean)
                      : [],
              }))
            : [],
    }));

const deepFreeze = (value) => {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
        Object.freeze(value);
        Object.keys(value).forEach((key) => {
            deepFreeze(value[key]);
        });
    }

    return value;
};

const productGroups = normalizeProductGroups(rawProductGroups);

deepFreeze(productGroups);

export default productGroups;