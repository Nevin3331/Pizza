const prevButton = document.querySelectorFirst(".carousel__head_push_button-prev");
const nextButton = document.querySelectorFirst(".carousel__head_push_button-next");
const imageLine = document.querySelectorFirst(".carousel__image_line");

const numVisibleImages = 2; // Количество одновременно видимых изображений
let currentIndex = 0;

const imagesArray = Array.from(imageLine.querySelectorAll(".carousel__image_line-img"));
const numImages = imagesArray.length;

function showImage(index) {
    imagesArray.forEach((image, i) => {
        const isImageVisible = (i >= index && i < index + numVisibleImages) || (i >= index - numImages + numVisibleImages && i < index - numImages + numVisibleImages + numVisibleImages);
        image.style.display = isImageVisible ? "block" : "none";
    });

    imageLine.style.transform = `translateX(-${index * 50}%)`; // Предполагается, что ширина каждой картинки - 50%
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + numImages) % numImages;
    showImage(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % numImages;
    showImage(currentIndex);
});

// Показать первые две картинки при загрузке страницы
showImage(currentIndex);
