const slides = document.querySelectorAll(".promo__item");
const prev = document.querySelector(".promo__control--prev");
const next = document.querySelector(".promo__control--next");
let current = 0;
const slidesButtons = document.querySelectorAll(".promo__slider-button");

const slidePromo = () => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("promo__item--current");
  }
  slides[current].classList.add("promo__item--current");
};

const toggleClasses = (slideButton, slide) => {
  const currentButton = document.querySelector(".promo__slider-button--current");
  const currentSlide = document.querySelector(".promo__item--current");
  currentButton.classList.remove("promo__slider-button--current");
  slideButton.classList.add("promo__slider-button--current");
  currentSlide.classList.remove("promo__item--current");
  slide.classList.add("promo__item--current");
};

const showSlide = (slideButton, slide) => {
  slideButton.addEventListener("click", () => {
    toggleClasses(slideButton, slide);
  });
};

if (slides.length) {
  slidePromo();

  prev.addEventListener('click', () => {
    if (current === 0) {
      current = slides.length - 1;
    } else {
      current--;
    }
    slidePromo();
    toggleClasses(slidesButtons[current], slides[current]);
  });

  next.addEventListener('click', () => {
    if (current === slides.length - 1) {
      current = 0;
    } else {
      current++;
    }
    slidePromo();
    toggleClasses(slidesButtons[current], slides[current]);
  });

  for (let i = 0; i < slidesButtons.length; i++) {
    showSlide(slidesButtons[i], slides[i]);
  };
};
