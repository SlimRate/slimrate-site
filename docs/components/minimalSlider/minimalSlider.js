import productGroups from '../../data/hardware.js';

function createSlides() {
  const slidesContainer = document.getElementById('slides');

  if (!slidesContainer || !Array.isArray(productGroups)) {
    return;
  }

  productGroups.forEach(group => {
    if (!Array.isArray(group.products)) {
      return;
    }

    group.products.forEach(product => {
      const firstImage = Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : '';
      const imageSrc = firstImage ? encodeURI(firstImage) : '';
      const productName = product.name;
      const deviceLabel = group.label;

      // Create elements
      const figure = document.createElement('figure');
  figure.dataset.productName = productName; 
  figure.tabIndex = 0;
  figure.setAttribute('role', 'button');
  figure.setAttribute('aria-label', `${deviceLabel}: ${productName}`);

      const img = document.createElement('img');
      img.src = imageSrc;
      img.alt = productName;
      img.loading = 'lazy'; 

      const figcaption = document.createElement('figcaption');

      const labelSpan = document.createElement('span');
      labelSpan.classList.add('label');
      labelSpan.textContent = deviceLabel + ": ";

      const separatorSpan = document.createElement('span');
      separatorSpan.classList.add('separator');
      separatorSpan.textContent = ':';

      const nameSpan = document.createElement('span');
      nameSpan.classList.add('product-name');
      nameSpan.textContent = productName;

      figcaption.appendChild(labelSpan);
      figcaption.appendChild(nameSpan);

      figure.appendChild(img);
      figure.appendChild(figcaption);

      slidesContainer.appendChild(figure);

      figure.addEventListener('click', () => openPopup(product));
      figure.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openPopup(product);
        }
      });
    });
  });
}

function openPopup(product) {
  const popupOverlay = document.getElementById('popupOverlay');
  const popupContent = document.getElementById('popupContent');

  const existingContent = popupContent.querySelectorAll(':not(.close-btn)');
  existingContent.forEach(element => element.remove());

  if (Array.isArray(product.images) && product.images.length > 0) {
    const img = document.createElement('img');
    img.src = encodeURI(product.images[0]);
    img.alt = product.name;
    img.loading = 'lazy'; 
    popupContent.appendChild(img);
  }

  const title = document.createElement('h2');
  title.textContent = product.name;
  popupContent.appendChild(title);

  const description = document.createElement('p');
  description.textContent = product.text;
  popupContent.appendChild(description);

  popupOverlay.classList.add('active');
}

function closePopup() {
  const popupOverlay = document.getElementById('popupOverlay');
  popupOverlay.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
  createSlides(); 
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides figure');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  const totalImages = images.length;
  
  const getImagesPerView = () => {
    const width = window.innerWidth;
    if (width <= 480) return 1;
    if (width <= 768) return 2;
    if (width <= 1024) return 3;
    return 4;
  };

  let imagesPerView = getImagesPerView();
  let currentIndex = 0;

  window.addEventListener('resize', () => {
    const oldImagesPerView = imagesPerView;
    imagesPerView = getImagesPerView();
    if (currentIndex > totalImages - imagesPerView) {
      currentIndex = totalImages - imagesPerView;
      if (currentIndex < 0) currentIndex = 0;
      updateSlidePosition();
    } else if (oldImagesPerView !== imagesPerView) {
      updateSlidePosition();
    }
  });

  const updateSlidePosition = () => {
    const firstFigure = slides.querySelector('figure');
    if (!firstFigure) {
      return;
    }

    const styles = window.getComputedStyle(slides);
    const gapValue = parseFloat(styles.gap || styles.columnGap || '0');
    const stepWidth = firstFigure.offsetWidth + gapValue;
    const offset = stepWidth * currentIndex;
    slides.style.transform = `translateX(-${offset}px)`;
  };

  const nextSlide = () => {
    if (currentIndex < totalImages - imagesPerView) {
      currentIndex++;
    } else {
      currentIndex = 0; 
    }
    updateSlidePosition();
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalImages - imagesPerView; 
    }
    updateSlidePosition();
  };

  let slideInterval = setInterval(nextSlide, 3000);

  document.querySelector('.slider-container').addEventListener('mouseover', () => {
    clearInterval(slideInterval);
  });

  document.querySelector('.slider-container').addEventListener('mouseout', () => {
    slideInterval = setInterval(nextSlide, 3000);
  });

  // nextButton.addEventListener('click', nextSlide);
  // prevButton.addEventListener('click', prevSlide);

  const closeBtn = document.getElementById('closeBtnUp');
  closeBtn.addEventListener('click', closePopup);

  const popupOverlay = document.getElementById('popupOverlay');
  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
      closePopup();
    }
  });
});