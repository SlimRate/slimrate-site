/**
 * Language Switcher Web Component
 * Dropdown component for switching between languages
 */

const languageSwitcherTemplate = document.createElement('template');
languageSwitcherTemplate.innerHTML = `
<style>
  :host {
    display: inline-block;
  }
  
  .lang-switcher {
    position: relative;
    display: inline-flex;
    align-items: center;
    margin-left: 12px;
    font-family: inherit;
  }
  
  .lang-current {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    background: transparent;
    border: 1px solid rgba(64, 122, 244, 0.3);
    border-radius: 6px;
    color: #333;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    font-family: inherit;
    transition: all 0.2s ease;
  }
  
  .lang-current:hover {
    background: rgba(64, 122, 244, 0.08);
    border-color: rgba(64, 122, 244, 0.5);
  }
  
  .lang-current:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(64, 122, 244, 0.2);
  }
  
  .lang-flag {
    width: 20px;
    height: 14px;
    border-radius: 2px;
    object-fit: cover;
    flex-shrink: 0;
  }
  
  .lang-code {
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .lang-arrow {
    width: 10px;
    height: 10px;
    transition: transform 0.2s ease;
  }
  
  .lang-switcher.open .lang-arrow {
    transform: rotate(180deg);
  }
  
  .lang-dropdown {
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(0, 0, 0, 0.08);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition: all 0.2s ease;
    z-index: 1000;
    min-width: 150px;
    overflow: hidden;
  }
  
  .lang-switcher.open .lang-dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .lang-option {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    color: #333;
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.15s ease;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    font-family: inherit;
  }
  
  .lang-option:hover {
    background: #f5f7fa;
  }
  
  .lang-option.active {
    background: rgba(64, 122, 244, 0.08);
    color: #407AF4;
    font-weight: 500;
  }
  
  .lang-option .lang-flag {
    width: 22px;
    height: 16px;
  }
  
  .lang-option-name {
    flex: 1;
  }
  
  .lang-option-check {
    width: 16px;
    height: 16px;
    opacity: 0;
  }
  
  .lang-option.active .lang-option-check {
    opacity: 1;
  }
  
  /* Mobile styles */
  @media (max-width: 768px) {
    .lang-switcher {
      margin-left: 8px;
    }
    
    .lang-current {
      padding: 5px 8px;
    }
    
    .lang-dropdown {
      right: -10px;
    }
  }
  
  /* Dark header variant */
  :host(.header-dark) .lang-current {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.3);
  }
  
  :host(.header-dark) .lang-current:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }
</style>

<div class="lang-switcher">
  <button class="lang-current" aria-label="Select language" aria-expanded="false" aria-haspopup="listbox">
    <img class="lang-flag current-flag" src="" alt="">
    <span class="lang-code current-code">EN</span>
    <svg class="lang-arrow" viewBox="0 0 10 6" fill="currentColor">
      <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>
  </button>
  <div class="lang-dropdown" role="listbox" aria-label="Available languages">
    <!-- Options will be dynamically inserted -->
  </div>
</div>
`;

class LanguageSwitcher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(languageSwitcherTemplate.content.cloneNode(true));
    
    this.languages = [
      { code: 'en', name: 'English', nativeName: 'English' },
      { code: 'es', name: 'Spanish', nativeName: 'Español' }
    ];
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
    
    // Listen for i18n loaded event to update
    window.addEventListener('i18n:loaded', () => this.render());
  }

  disconnectedCallback() {
    this.removeEventListeners();
  }

  render() {
    const currentLang = window.i18n?.currentLang || 'en';
    const basePath = window.i18n?.getBasePath() || '';
    
    // Update current language display
    const flagImg = this.shadowRoot.querySelector('.current-flag');
    const codeSpan = this.shadowRoot.querySelector('.current-code');
    
    flagImg.src = `${basePath}assets/img/flags/${currentLang}.svg`;
    flagImg.alt = this.languages.find(l => l.code === currentLang)?.name || '';
    codeSpan.textContent = currentLang.toUpperCase();
    
    // Render dropdown options
    const dropdown = this.shadowRoot.querySelector('.lang-dropdown');
    dropdown.innerHTML = this.languages.map(lang => {
      const isActive = lang.code === currentLang;
      const url = window.i18n?.buildLanguageUrl(lang.code) || `/${lang.code}/`;
      
      return `
        <a class="lang-option ${isActive ? 'active' : ''}" 
           href="${url}" 
           data-lang="${lang.code}"
           role="option"
           aria-selected="${isActive}">
          <img class="lang-flag" src="${basePath}assets/img/flags/${lang.code}.svg" alt="${lang.name}">
          <span class="lang-option-name">${lang.nativeName}</span>
          <svg class="lang-option-check" viewBox="0 0 16 16" fill="currentColor">
            <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
          </svg>
        </a>
      `;
    }).join('');
  }

  setupEventListeners() {
    const switcher = this.shadowRoot.querySelector('.lang-switcher');
    const button = this.shadowRoot.querySelector('.lang-current');
    const dropdown = this.shadowRoot.querySelector('.lang-dropdown');
    
    // Toggle dropdown
    this._onButtonClick = (e) => {
      e.stopPropagation();
      const isOpen = switcher.classList.toggle('open');
      button.setAttribute('aria-expanded', isOpen);
    };
    button.addEventListener('click', this._onButtonClick);
    
    // Handle option click
    this._onDropdownClick = (e) => {
      const option = e.target.closest('.lang-option');
      if (option) {
        const lang = option.dataset.lang;
        localStorage.setItem('slimrate-lang', lang);
        // Let the link navigate naturally
      }
    };
    dropdown.addEventListener('click', this._onDropdownClick);
    
    // Close on outside click
    this._onDocumentClick = (e) => {
      if (!this.contains(e.target)) {
        switcher.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
      }
    };
    document.addEventListener('click', this._onDocumentClick);
    
    // Keyboard navigation
    this._onKeydown = (e) => {
      if (e.key === 'Escape') {
        switcher.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
        button.focus();
      }
    };
    this.shadowRoot.addEventListener('keydown', this._onKeydown);
  }

  removeEventListeners() {
    document.removeEventListener('click', this._onDocumentClick);
  }
}

customElements.define('language-switcher', LanguageSwitcher);
