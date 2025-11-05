// Product Features Grid Component
// Feature/benefits grid with icons

class ProductFeaturesGrid extends HTMLElement {
    connectedCallback() {
        const productId = this.getAttribute('data-product-id');
        const show = this.getAttribute('data-show') !== 'false';
        
        if (!show) {
            this.style.display = 'none';
            return;
        }
        
        if (typeof productPagesData !== 'undefined' && productPagesData[productId]) {
            const featuresGrid = productPagesData[productId].featuresGrid;
            if (featuresGrid && featuresGrid.show && featuresGrid.items) {
                this.render(featuresGrid);
            } else {
                this.style.display = 'none';
            }
        }
    }

    render(data) {
        const iconMap = {
            'reliability': '🛡️',
            'effortless': '⚡',
            'support': '💬',
            'flexible': '📈',
            'security': '🔒',
            'speed': '⚡',
            'versatility': '🔄',
            'portable': '📱',
            'quiet': '🔇',
            'reliable': '✓',
            'easy': '👍'
        };

        this.innerHTML = `
            <section class="product-features-grid">
                <div class="product-features-grid__container">
                    ${data.title ? `<h2 class="product-features-grid__title">${data.title}</h2>` : ''}
                    
                    <div class="product-features-grid__grid">
                        ${data.items.map(item => `
                            <div class="product-features-grid__item">
                                <div class="product-features-grid__icon">
                                    ${iconMap[item.icon] || '⭐'}
                                </div>
                                <h3 class="product-features-grid__title">${item.title}</h3>
                                <p class="product-features-grid__description">${item.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('product-features-grid', ProductFeaturesGrid);
