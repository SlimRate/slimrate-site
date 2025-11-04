// Product Details Component
// Детальные секции с описанием и изображениями

class ProductDetails extends HTMLElement {
    connectedCallback() {
        const productId = this.getAttribute('data-product-id');
        
        if (typeof productPagesData !== 'undefined' && productPagesData[productId]) {
            const sections = productPagesData[productId].detailSections;
            if (sections && sections.length > 0) {
                this.render(sections);
            }
        }
    }

    render(sections) {
        this.innerHTML = `
            <div class="product-details">
                ${sections.map(section => this.renderSection(section)).join('')}
            </div>
        `;
    }

    renderSection(section) {
        const isReverse = section.layout === 'image-left';
        
        return `
            <div class="product-details__section">
                <div class="product-details__grid ${isReverse ? 'product-details__grid--reverse' : ''}">
                    <div class="product-details__content">
                        <h2 class="product-details__title">${section.title}</h2>
                        <p class="product-details__description">${section.content.description}</p>
                        
                        ${section.content.features && section.content.features.length > 0 ? `
                            <ul class="product-details__features">
                                ${section.content.features.map(feature => `
                                    <li class="product-details__feature">${feature}</li>
                                `).join('')}
                            </ul>
                        ` : ''}
                    </div>
                    
                    <div class="product-details__image-wrapper">
                        <img src="${section.image.src}" 
                             alt="${section.image.alt}" 
                             class="product-details__image">
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('product-details', ProductDetails);
