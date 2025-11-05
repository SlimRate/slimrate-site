// Product Banner Component
// Intermediate banner with call to action

class ProductBanner extends HTMLElement {
    connectedCallback() {
        const productId = this.getAttribute('data-product-id');
        const show = this.getAttribute('data-show') !== 'false';
        
        if (!show) {
            this.style.display = 'none';
            return;
        }
        
        if (typeof productPagesData !== 'undefined' && productPagesData[productId]) {
            const banner = productPagesData[productId].banner;
            if (banner && banner.show) {
                this.render(banner);
            } else {
                this.style.display = 'none';
            }
        }
    }

    render(data) {
        this.innerHTML = `
            <div class="product-banner">
                <div class="product-banner__container">
                    <div class="product-banner__text">${data.text}</div>
                    ${data.subtitle ? `<div class="product-banner__subtitle">${data.subtitle}</div>` : ''}
                </div>
            </div>
        `;
    }
}

customElements.define('product-banner', ProductBanner);
