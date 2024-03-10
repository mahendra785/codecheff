
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function scrollCarousel(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = items.length - 1;
  } else if (currentIndex >= items.length) {
    currentIndex = 0;
  }
  updateCarousel();
}

function updateCarousel() {
  const transformValue = -currentIndex * 100 + '%';
  carouselInner.style.transform = 'translateX(' + transformValue + ')';
}

function scroll(offset) {
  const scrollableDiv = document.getElementById('scrollableDiv');
  scrollableDiv.scrollLeft += offset;
}