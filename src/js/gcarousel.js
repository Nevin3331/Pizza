const backButtonSecond = document.querySelector(".gallery__head_press_button-back");
const allowButtonSecond = document.querySelector(".gallery__head_press_button-allow");
const imageLineSecond = document.querySelector(".gallery__image_line");
const imageWidthSecond = document.querySelector(".gallery__image_line-img").offsetWidth + 20; // Ширина одной картинки

let currentIndex = 0;
const numImages = imageLineSecond.querySelectorAll(".gallery__image_line-img").length;
const numVisibleImages = 2; // Количество одновременно видимых изображений

function showImage(index) {
    imageLineSecond.style.transform = `translateX(-${index * imageWidthSecond}px)`;
}

backButtonSecond.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + numImages) % numImages;
    showImage(currentIndex);
});

allowButtonSecond.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % numImages;
    showImage(currentIndex);
});

// Показать первые две картинки при загрузке страницы
showImage(currentIndex);

