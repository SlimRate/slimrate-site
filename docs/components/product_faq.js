// Product FAQ Component
// FAQ section for product

class ProductFAQ extends HTMLElement {
    connectedCallback() {
        const productId = this.getAttribute('data-product-id');
        
        if (typeof productPagesData !== 'undefined' && productPagesData[productId]) {
            const faq = productPagesData[productId].faq;
            if (faq && faq.show && faq.questions) {
                this.render(faq.questions);
                this.attachEventListeners();
            }
        }
    }

    render(questions) {
        this.innerHTML = `
            <section class="product-faq">
                <div class="product-faq__container">
                    <h2 class="product-faq__title">FAQ</h2>
                    
                    <div class="product-faq__list">
                        ${questions.map((item, index) => `
                            <div class="product-faq__item">
                                <button class="product-faq__question" data-index="${index}">
                                    <span>${item.question}</span>
                                    <span class="product-faq__question-icon">▼</span>
                                </button>
                                <div class="product-faq__answer" data-index="${index}">
                                    <p class="product-faq__answer-text">${item.answer}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    attachEventListeners() {
        const questions = this.querySelectorAll('.product-faq__question');
        
        questions.forEach(question => {
            question.addEventListener('click', () => {
                const index = question.getAttribute('data-index');
                const answer = this.querySelector(`.product-faq__answer[data-index="${index}"]`);
                
                // Toggle active state
                question.classList.toggle('active');
                answer.classList.toggle('active');
            });
        });
    }
}

customElements.define('product-faq', ProductFAQ);
