const nextButton = document.querySelector(".button-right");
const prevButton = document.querySelector(".button-left");
const slides = document.querySelector(".slides");
const firstSlide = slides.querySelector("#slide-1");
const secondSlide = slides.querySelector("#slide-2");

nextButton.addEventListener('click', e => {
    const currentSlide = slides.querySelector(".current-slide");
    if (currentSlide === firstSlide) {
        currentSlide.classList.remove("current-slide");
        secondSlide.classList.add("current-slide");
        prevButton.classList.remove("button-inactive");
        nextButton.classList.add("button-inactive")
    }
})

prevButton.addEventListener('click', e => {
    const currentSlide = slides.querySelector(".current-slide");
    if (currentSlide === secondSlide) {
        currentSlide.classList.remove("current-slide");
        firstSlide.classList.add("current-slide");
        prevButton.classList.add("button-inactive");
        nextButton.classList.remove("button-inactive")
    }
})