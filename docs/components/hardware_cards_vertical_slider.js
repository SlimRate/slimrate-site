import productGroups from '/data/hardware.js';

function createProductCard(data) {
    const normalizedName = data.name.replace(/\s+/g, '_');
    
    const card = document.createElement('div');
    card.className = "product-card";
    
    // Pre-encode image paths (spaces / unicode) for safety
    const encodedImages = (data.images || []).map(src => encodeURI(src));

    card.innerHTML = `
        <div class="image-container" id="image-container-${normalizedName}">
            <img src="${encodedImages[0] || ''}" alt="${data.name}" id="current-image-${normalizedName}" />
            ${encodedImages.length > 1 ? `<button class="nav prev" id="prev-${normalizedName}" aria-label="Previous image">&#10094;</button>` : ''}
            ${encodedImages.length > 1 ? `<button class="nav next" id="next-${normalizedName}" aria-label="Next image">&#10095;</button>` : ''}
            <div class="slider" id="slider-${normalizedName}">
                ${encodedImages.map((_, index) => `
                    <div class="${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Go to image ${index+1}" role="button" tabindex="0"></div>
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
    const setImageByIndex = (idx) => {
        if (!encodedImages.length) return;
        currentIndex = ((idx % encodedImages.length) + encodedImages.length) % encodedImages.length;
        imageElement.src = encodedImages[currentIndex];
        const sliderDots = card.querySelectorAll(`#slider-${normalizedName} div`);
        sliderDots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
    };

    // Click on container cycles forward (only if multiple images and white mode inactive)
    card.querySelector(`#image-container-${normalizedName}`).addEventListener('click', (e) => {
        // Ignore clicks on nav buttons or dots
        if (e.target.closest('.nav') || e.target.closest('#slider-'+normalizedName)) return;
        if (isWhiteButtonActive || encodedImages.length < 2) return;
        setImageByIndex(currentIndex + 1);
    });

    // Dot (slider) click / keyboard navigation
    const sliderDots = card.querySelectorAll(`#slider-${normalizedName} div`);
    sliderDots.forEach(dot => {
        dot.addEventListener('click', () => {
            if (isWhiteButtonActive) return;
            const idx = parseInt(dot.getAttribute('data-index'));
            setImageByIndex(idx);
        });
        dot.addEventListener('keydown', (ev) => {
            if (ev.key === 'Enter' || ev.key === ' ') {
                ev.preventDefault();
                dot.click();
            }
        });
    });

    // Prev / Next buttons
    const prevBtn = card.querySelector(`#prev-${normalizedName}`);
    const nextBtn = card.querySelector(`#next-${normalizedName}`);
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); if (!isWhiteButtonActive) setImageByIndex(currentIndex - 1); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); if (!isWhiteButtonActive) setImageByIndex(currentIndex + 1); });
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
            imageElement.src = encodedImages[0];
            currentIndex = 0;
            const sliderElements = card.querySelectorAll(`#slider-${normalizedName} div`);
            sliderElements.forEach((dot, index) => {
                dot.classList.toggle('active', index === 0);
                sliderElement.style.display = 'flex';
            });
                imageElement.src = encodedImages[0];
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