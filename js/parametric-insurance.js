const prevButton = document.querySelector(".button-left");
const nextButton = document.querySelector(".button-right");
let slides = document.getElementsByClassName("slide");

let slideIndex = 1;

prevButton.addEventListener('click', e => {
    if (slideIndex !== 1) {
        plusSlides(-1);
    }
});

nextButton.addEventListener('click', e => {
    if (slideIndex !== slides.length) {
        plusSlides(1);
    }
});

function plusSlides(n) {
    showSlides(slideIndex += n);
};

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("current-slide")
    }
    slides[slideIndex-1].classList.add('current-slide');

    if (slideIndex === slides.length) {
        nextButton.classList.add('button-inactive');
        prevButton.classList.remove('button-inactive');
    }
    if (slideIndex === 1) {
        prevButton.classList.add('button-inactive');
        nextButton.classList.remove('button-inactive');
    }
    
}

//////////////////////////////////////

const ideationPrevButton = document.querySelector(".ideation__button-left");
const ideationNextButton = document.querySelector(".ideation__button-right");
let ideationSlides = document.getElementsByClassName("ideation__slide");

let ideationSlideIndex = 1;

ideationPrevButton.addEventListener('click', e => {
    if (ideationSlideIndex !== 1) {
        ideationPlusSlides(-1);
    }
});

ideationNextButton.addEventListener('click', e => {
    if (ideationSlideIndex !== ideationSlides.length) {
        ideationPlusSlides(1);
    }
});

function ideationPlusSlides(n) {
    showSlidesIdeation(ideationSlideIndex += n);
};

function showSlidesIdeation(n) {
    if (n > ideationSlides.length) {
        ideationSlideIndex = 1;
    }    
    if (n < 1) {
        ideationSlideIndex = ideationSlides.length;
    }
    for (let i = 0; i < ideationSlides.length; i++) {
        ideationSlides[i].classList.remove("current-slide")
    }
    ideationSlides[ideationSlideIndex-1].classList.add('current-slide');

    if (ideationSlideIndex === ideationSlides.length) {
        ideationNextButton.classList.add('button-inactive');
        ideationPrevButton.classList.remove('button-inactive');
    }
    if (ideationSlideIndex === 1) {
        ideationPrevButton.classList.add('button-inactive');
        ideationNextButton.classList.remove('button-inactive');
    }
};