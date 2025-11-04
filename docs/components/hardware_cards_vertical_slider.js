import productGroups from '../data/hardware.js';

const NOT_IN_STOCK_IMAGE = 'assets/img/gallery/hardware/not in stock.png';
const ACTIVATION_KEYS = ['Enter', ' '];

const sanitizeImages = (images) => {
    if (!Array.isArray(images)) {
        return [];
    }

    return images
        .map((src) => (typeof src === 'string' ? src.trim() : ''))
        .filter(Boolean);
};

const createSliderDotsMarkup = (count) =>
    Array.from({ length: count }, (_, index) => `
                    <div class="${index === 0 ? 'active' : ''}" data-index="${index}" role="button" tabindex="0" aria-label="Show image ${index + 1}"></div>
                `).join('');

function createProductCard(data) {
    const normalizedName = data.name.replace(/\s+/g, '_');

    const card = document.createElement('div');
    card.className = "product-card";

    const sanitizedImages = sanitizeImages(data.images);
    const encodedImages = sanitizedImages.map((src) => encodeURI(src));
    const initialImage = encodedImages[0] || "";

    card.innerHTML = `
        <div class="image-container" id="image-container-${normalizedName}" role="button" tabindex="0" aria-label="Cycle product images">
            <img src="${initialImage}" alt="${data.name}" id="current-image-${normalizedName}" />
            <div class="slider" id="slider-${normalizedName}" aria-live="polite">
                ${createSliderDotsMarkup(encodedImages.length)}
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
                        <button class="black" id="black-button-${normalizedName}"></button>
                        <button class="white ml-2" id="white-button-${normalizedName}"></button>
                    </div>
                </div>
                <div class="flex flex-col justify-evenly">
                    <span id="availability-status-${normalizedName}" class="availability">${data.available ? "Available" : "To order"}</span>
                    <span class="price">$${data.available ? data.costForBlack : data.costForWhite}</span>
                </div>
            </div>
            ${data.link ? `<div class="product-link-container"><a href="${data.link}" class="btn btn-red product-details-btn">View Details</a></div>` : ''}
        </div>
    `;

    const imageContainer = card.querySelector(`#image-container-${normalizedName}`);
    const imageElement = card.querySelector(`#current-image-${normalizedName}`);
    const sliderElement = card.querySelector(`#slider-${normalizedName}`);
    const sliderDots = Array.from(card.querySelectorAll(`#slider-${normalizedName} div`));
    const whiteButton = card.querySelector(`#white-button-${normalizedName}`);
    const blackButton = card.querySelector(`#black-button-${normalizedName}`);

    let isWhiteButtonActive = false;
    let currentIndex = 0;

    const toggleSlider = (shouldShow) => {
        if (!sliderElement) {
            return;
        }

        const canShow = shouldShow && encodedImages.length > 0;
        sliderElement.style.display = canShow ? 'flex' : 'none';
        sliderElement.setAttribute('aria-hidden', canShow ? 'false' : 'true');
    };

    const setImageByIndex = (index) => {
        if (!encodedImages.length) {
            return;
        }

        const normalizedIndex = ((index % encodedImages.length) + encodedImages.length) % encodedImages.length;
        currentIndex = normalizedIndex;
        imageElement.src = encodedImages[normalizedIndex];
        sliderDots.forEach((dot, dotIndex) => {
            dot.classList.toggle('active', dotIndex === normalizedIndex);
        });
    };

    const cycleForward = () => {
        if (isWhiteButtonActive || encodedImages.length < 2) {
            return;
        }

        setImageByIndex(currentIndex + 1);
    };

    imageContainer.addEventListener('click', (event) => {
        if (event.target.closest(`#slider-${normalizedName}`)) {
            return;
        }

        cycleForward();
    });

    imageContainer.addEventListener('keydown', (event) => {
        if (!ACTIVATION_KEYS.includes(event.key)) {
            return;
        }

        event.preventDefault();
        cycleForward();
    });

    sliderDots.forEach((dot) => {
        const dotIndex = Number.parseInt(dot.getAttribute('data-index'), 10);

        dot.addEventListener('click', () => {
            if (isWhiteButtonActive || Number.isNaN(dotIndex)) {
                return;
            }

            setImageByIndex(dotIndex);
        });

        dot.addEventListener('keydown', (event) => {
            if (!ACTIVATION_KEYS.includes(event.key)) {
                return;
            }

            event.preventDefault();
            dot.click();
        });
    });

    const hasSingleColor = Array.isArray(data.availableColors) && data.availableColors.length === 1;

    if (whiteButton) {
        whiteButton.type = 'button';
        whiteButton.setAttribute('aria-pressed', 'false');

        if (hasSingleColor) {
            whiteButton.style.display = 'none';
            whiteButton.setAttribute('aria-hidden', 'true');
        }

        whiteButton.addEventListener('click', () => {
            if (hasSingleColor) {
                return;
            }

            toggleSlider(false);
            imageElement.src = encodeURI(NOT_IN_STOCK_IMAGE);
            isWhiteButtonActive = true;
            whiteButton.setAttribute('aria-pressed', 'true');
            if (blackButton) {
                blackButton.setAttribute('aria-pressed', 'false');
            }
        });
    }

    if (blackButton) {
        blackButton.type = 'button';
        blackButton.setAttribute('aria-pressed', 'true');

        blackButton.addEventListener('click', () => {
            toggleSlider(true);

            if (encodedImages.length) {
                setImageByIndex(0);
            } else {
                imageElement.removeAttribute('src');
            }

            isWhiteButtonActive = false;
            blackButton.setAttribute('aria-pressed', 'true');
            if (whiteButton && !hasSingleColor) {
                whiteButton.setAttribute('aria-pressed', 'false');
            }
        });
    }

    toggleSlider(true);
    return card;
}

function createProductGroup(group) {
    const groupContainer = document.createElement('div');
    groupContainer.className = "product-group";

    const label = document.createElement('h1');
    label.textContent = group.label;
    label.className = "font-title text-2xl text-primary";
    groupContainer.appendChild(label);

    const products = Array.isArray(group.products) ? group.products : [];

    products.forEach((product) => {
        const card = createProductCard(product);
        groupContainer.appendChild(card);
    });

    return groupContainer;
}

const container = document.getElementById('cards-container');

if (container && Array.isArray(productGroups)) {
    productGroups.forEach((group) => {
        const groupContainer = createProductGroup(group);
        container.appendChild(groupContainer);
    });
}