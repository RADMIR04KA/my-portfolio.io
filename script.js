// Функция для инициализации слайдера
function initializeSlider(sliderContainerClass) {
  const sliderContainer = document.querySelector(`.${sliderContainerClass}`);
  if (!sliderContainer) {
    console.error(`Слайдер с классом ${sliderContainerClass} не найден.`);
    return;
  }

  const slider = sliderContainer.querySelector(".slider");
  const slides = slider ? slider.querySelectorAll(".slide") : [];
  const prevButton = sliderContainer.querySelector(".prev-button");
  const nextButton = sliderContainer.querySelector(".next-button");

  if (!slider || slides.length === 0 || !prevButton || !nextButton) {
    console.error("Не удалось найти необходимые элементы слайдера.");
    return;
  }

  let currentIndex = 0;

  // Функция для обновления позиции слайдера
  function updateSlider() {
    const slideWidth = slides[0].clientWidth; // Ширина одного слайда
    const gap = parseInt(window.getComputedStyle(slider).gap); // Отступ между слайдами
    const offset = (slideWidth + gap) * currentIndex; // Общее смещение
    slider.style.transform = `translateX(-${offset}px)`;
  }

  // Переключение на предыдущий слайд
  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slides.length - 1; // Переход к последнему слайду
    }
    updateSlider();
  });

  // Переключение на следующий слайд
  nextButton.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Переход к первому слайду
    }
    updateSlider();
  });

  // Инициализация слайдера
  updateSlider();
}

// Инициализация слайдеров
document.addEventListener("DOMContentLoaded", () => {
  initializeSlider("portfolio-slider");
});
