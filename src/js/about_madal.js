document.addEventListener("DOMContentLoaded", () => {
    const openModalButton = document.querySelector(".feedback__leave-btn");
    const modalContainer = document.querySelector(".overlay");
    const closeModalButton = document.querySelector(".modal__close");
  
    openModalButton.addEventListener("click", () => {
      modalContainer.style.display = "block"; // Показываем модальное окно
    });
  
    closeModalButton.addEventListener("click", () => {
      modalContainer.style.display = "none"; // Скрываем модальное окно
    });
  });
  