// Product Sidebar Component
// Боковая навигация по продуктам категории

class ProductSidebar extends HTMLElement {
    connectedCallback() {
        const category = this.getAttribute('category') || 'Tablets';
        const activeProduct = this.getAttribute('active-product') || '';
        
        this.render(category, activeProduct);
        this.attachEventListeners();
    }

    render(category, activeProduct) {
        // Получаем список продуктов из hardware.js
        const products = this.getProductsByCategory(category);
        
        this.innerHTML = `
            <aside class="product-sidebar" id="productSidebar">
                <div class="product-sidebar__header">
                    <div class="product-sidebar__category">${category}</div>
                </div>
                <ul class="product-sidebar__list">
                    ${products.map(product => `
                        <li class="product-sidebar__item">
                            <a href="${product.url}" 
                               class="product-sidebar__link ${product.id === activeProduct ? 'active' : ''}">
                                ${product.name}
                                ${product.id === activeProduct ? '<span class="product-sidebar__link-arrow">→</span>' : ''}
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </aside>
            <button class="product-sidebar__toggle" id="sidebarToggle" aria-label="Toggle sidebar">
                ☰
            </button>
        `;
    }

    getProductsByCategory(category) {
        const productMap = {
            'Tablets': [
                { id: 'sr-falcon', name: 'SR Falcon', url: 'sr-falcon.html' },
                { id: 'sr-swan', name: 'SR Swan', url: 'sr-swan.html' },
                { id: 'sr155-duo', name: 'SR155 Duo', url: 'sr155-duo.html' },
                { id: 'sr155-solo', name: 'SR155 Solo', url: 'sr155-solo.html' }
            ],
            'EMV Terminals': [
                { id: 'a35', name: 'A35', url: 'a35.html' },
                { id: 'a920', name: 'A920', url: 'a920.html' }
            ],
            'Printers': [
                { id: 'sr-trp1', name: 'SR-TRP1', url: 'sr-trp1.html' }
            ],
            'Scanners': [
                { id: 'sr-ds1', name: 'SR-DS1', url: 'sr-ds1.html' },
                { id: 'sr-wlhs1', name: 'SR-WLHS1', url: 'sr-wlhs1.html' },
                { id: 'sr-whs1', name: 'SR-WHS1', url: 'sr-whs1.html' }
            ],
            'Scales': [
                { id: 'digital-scale', name: 'Digital Scale', url: 'digital-scale.html' },
                { id: 'aiscale-pos-s625', name: 'AIScale POS S625', url: 'aiscale-pos-s625.html' },
                { id: 'aiscale-label-printing-s130', name: 'AIScale Label Printing S130', url: 'aiscale-label-printing-s130.html' }
            ],
            'Cash Drawer': [
                { id: 'sr-410', name: 'SR-410', url: 'sr-410.html' }
            ]
        };

        return productMap[category] || [];
    }

    attachEventListeners() {
        const toggle = this.querySelector('#sidebarToggle');
        const sidebar = this.querySelector('#productSidebar');
        
        if (toggle && sidebar) {
            toggle.addEventListener('click', () => {
                sidebar.classList.toggle('open');
            });

            // Закрытие при клике вне сайдбара на мобильных
            document.addEventListener('click', (e) => {
                if (window.innerWidth <= 1024) {
                    if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
                        sidebar.classList.remove('open');
                    }
                }
            });
        }
    }
}

customElements.define('product-sidebar', ProductSidebar);
