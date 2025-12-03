// Product Hero Component
// Hero section with product image and main information

class ProductHero extends HTMLElement {
    connectedCallback() {
        const productId = this.getAttribute('data-product-id');
        
        if (typeof productPagesData !== 'undefined' && productPagesData[productId]) {
            this.render(productPagesData[productId].hero);
        }
    }

    render(data) {
        this.innerHTML = `
            <section class="product-hero">
                <div class="product-hero__container">
                    <nav class="product-breadcrumbs">
                        <a href="index.html">Home</a> / 
                        <a href="hardware.html">Hardware</a> / 
                        <a href="hardware.html#${data.categoryNav.toLowerCase()}">${data.categoryNav}</a> / 
                        <span>${data.name}</span>
                    </nav>
                    
                    <div class="product-hero__grid">
                        <div class="product-hero__content">
                            <h1 class="product-hero__name">${data.tagline}</h1>
                            <p class="product-hero__description">${data.description}</p>
                            
                            ${data.keyFeatures && data.keyFeatures.length > 0 ? `
                                <ul class="product-hero__features">
                                    ${data.keyFeatures.map(feature => `
                                        <li class="product-hero__feature">${feature}</li>
                                    `).join('')}
                                </ul>
                            ` : ''}
                            
                            <div class="product-hero__price-container">
                                <div class="product-hero__price">${data.price}</div>
                            </div>
                            
                            <div class="product-hero__cta">
                                <a href="${data.ctaButton.link}">
                                    <button class="btn btn-red">${data.ctaButton.text}</button>
                                </a>
                            </div>
                        </div>
                        
                        <div class="product-hero__image-wrapper">
                            <img src="${data.images.main}" 
                                 alt="${data.name}" 
                                 class="product-hero__image"
                                 id="mainProductImage">
                            
                            ${data.images.gallery && data.images.gallery.length > 1 ? `
                                <div class="product-hero__gallery">
                                    ${data.images.gallery.map((img, index) => `
                                        <img src="${img}" 
                                             alt="${data.name} - view ${index + 1}" 
                                             class="product-hero__gallery-thumb ${index === 0 ? 'active' : ''}"
                                             data-full-image="${img}">
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </section>
        `;

        this.attachEventListeners();
    }

    attachEventListeners() {
        const mainImage = this.querySelector('#mainProductImage');
        const thumbs = this.querySelectorAll('.product-hero__gallery-thumb');

        thumbs.forEach(thumb => {
            thumb.addEventListener('click', () => {
                const fullImage = thumb.getAttribute('data-full-image');
                if (mainImage && fullImage) {
                    mainImage.src = fullImage;
                    
                    // Update active thumbnail
                    thumbs.forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                }
            });
        });
    }
}

customElements.define('product-hero', ProductHero);
