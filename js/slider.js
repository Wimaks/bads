// Находим элементы на странице
const carousel = document.querySelector('.benefit__slider');
const slides = carousel.querySelectorAll('.benefit__item');
const prevBtn = carousel.querySelector('.carousel__prev-btn');
const nextBtn = carousel.querySelector('.carousel__next-btn');

let currentSlide = 0;

// Показываем текущее изображение
function showCurrentSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

// Переключаемся на следующее изображение
function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showCurrentSlide();
}

// Переключаемся на предыдущее изображение
// function prevSlide() {
//     currentSlide--;
//     if (currentSlide < 0) {
//         currentSlide = slides.length - 1;
//     }
//     showCurrentSlide();
// }

// Обработчики событий для кнопок
// prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Показываем первое изображение
showCurrentSlide();