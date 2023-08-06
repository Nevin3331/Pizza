// Получаем элементы DOM для первого слайдера
const prevButton1 = document.querySelector('.gallery__item-carousel-btn-prev');
const nextButton1 = document.querySelector('.gallery__item-carousel-btn-next');
const carouselLine1 = document.querySelector('.gallery__item-carousel-line');

// Получаем элементы DOM для второго слайдера
const prevButton2 = document.querySelector('.gallery__item-block-carousel-sliders-btn-prev');
const nextButton2 = document.querySelector('.gallery__item-block-carousel-sliders-btn-next');
const carouselLine2 = document.querySelector('.gallery__item-block-carousel-sliders-line');

// Устанавливаем начальное значение смещения (offset) в 0 для обоих слайдеров
let offset1 = 0;
let offset2 = 0;

// Устанавливаем ширину одного слайда (gallery__image)
const slideWidth1 = carouselLine1.firstElementChild.offsetWidth;
const slideWidth2 = carouselLine2.firstElementChild.offsetWidth;

// Функция для обработки прокрутки слайдера
function scrollCarousel(offset, slideWidth, carouselLine) {
  offset -= slideWidth;
  if (offset < -(slideWidth * (carouselLine.childElementCount - 1))) {
    offset = 0;
  }
  carouselLine.style.transform = `translateX(${offset}px)`;
  return offset;
}

// Обработчики кликов для первого слайдера
prevButton1.addEventListener('click', () => {
  offset1 = scrollCarousel(offset1, slideWidth1, carouselLine1);
});

nextButton1.addEventListener('click', () => {
  offset1 = scrollCarousel(offset1, slideWidth1, carouselLine1);
});

// Обработчики кликов для второго слайдера
prevButton2.addEventListener('click', () => {
  offset2 = scrollCarousel(offset2, slideWidth2, carouselLine2);
});

nextButton2.addEventListener('click', () => {
  offset2 = scrollCarousel(offset2, slideWidth2, carouselLine2);
});
