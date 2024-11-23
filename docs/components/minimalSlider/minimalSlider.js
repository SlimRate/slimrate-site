

import productGroups from '/data/hardware.js';

function createSlides() {
  const slidesContainer = document.getElementById('slides');

  productGroups.forEach(group => {
    group.products.forEach(product => {
      const imageSrc = product.images[0];
      const productName = product.name;
      const deviceLabel = group.label;

      // Создаем элементы
      const figure = document.createElement('figure');
      figure.dataset.productName = productName; 

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
    });
  });
}

function openPopup(product) {
  const popupOverlay = document.getElementById('popupOverlay');
  const popupContent = document.getElementById('popupContent');

  const existingContent = popupContent.querySelectorAll(':not(.close-btn)');
  existingContent.forEach(element => element.remove());

  if (product.images.length > 0) {
    const img = document.createElement('img');
    img.src = product.images[0];
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
    const percentage = (100 / imagesPerView) * currentIndex;
    slides.style.transform = `translateX(-${percentage}%)`;
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