import productGroups from '/data/hardware.js';

function createProductCard(data) {
    const normalizedName = data.name.replace(/\s+/g, '_');
    
    const card = document.createElement('div');
    card.className = "product-card";
    
    card.innerHTML = `
        <div class="image-container" id="image-container-${normalizedName}">
            <img src="${data.images[0]}" alt="${data.name}" id="current-image-${normalizedName}" />
            <div class="slider" id="slider-${normalizedName}">
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
                        <button class="black" id="black-button-${normalizedName}"></button>
                        <button class="white ml-2" id="white-button-${normalizedName}"></button>
                    </div>
                </div>
                <div class="flex flex-col justify-evenly">
                    <span id="availability-status-${normalizedName}" class="availability">${data.available ? "Available" : "To order"}</span>
                    <span class="price">$${data.available ? data.costForBlack : data.costForWhite}</span>
                </div>
            </div>
        </div>
    `;

    const imageElement = card.querySelector(`#current-image-${normalizedName}`);
    const sliderElement = card.querySelector(`#slider-${normalizedName}`);
    const whiteButton = card.querySelector(`#white-button-${normalizedName}`);
    const blackButton = card.querySelector(`#black-button-${normalizedName}`);
    let isWhiteButtonActive = false;

    // Handle single-color products (e.g., Falcon, Swan) by hiding the white option
    const hasSingleColor = Array.isArray(data.availableColors) && data.availableColors.length === 1;
    if (hasSingleColor) {
        if (whiteButton) whiteButton.style.display = 'none';
        // If only black color, also hide the Color: label container if desired
        const colorLabelWrapper = card.querySelector('.color-options')?.parentElement?.parentElement;
        if (colorLabelWrapper) {
            // Keep label but could remove if necessary; currently leaving for consistency
        }
    }

    let currentIndex = 0;

    card.querySelector(`#image-container-${normalizedName}`).addEventListener('click', () => {
        if (isWhiteButtonActive) return;

        currentIndex = (currentIndex + 1) % data.images.length;
        imageElement.src = data.images[currentIndex];

        const sliderElements = card.querySelectorAll(`#slider-${normalizedName} div`);
        sliderElements.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    });

    if (whiteButton) {
        whiteButton.addEventListener('click', () => {
            if (hasSingleColor) return; // ignore clicks when single color
            if (sliderElement) {
                sliderElement.style.display = 'none';
            }
            imageElement.src = 'assets/img/gallery/hardware/not in stock.png';
            isWhiteButtonActive = true;
        });
    }

    if (blackButton) {
        blackButton.addEventListener('click', () => {
            if (sliderElement) {
                sliderElement.style.display = 'flex';
            }
            imageElement.src = data.images[0];
            currentIndex = 0;
            const sliderElements = card.querySelectorAll(`#slider-${normalizedName} div`);
            sliderElements.forEach((dot, index) => {
                dot.classList.toggle('active', index === 0);
            });
            isWhiteButtonActive = false;
        });
    }

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

const container = document.getElementById('cards-container');
productGroups.forEach(group => {
    const groupContainer = createProductGroup(group);
    container.appendChild(groupContainer);
});