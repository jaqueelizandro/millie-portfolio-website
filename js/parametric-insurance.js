const nextButton = document.querySelector(".button-right");
const prevButton = document.querySelector(".button-left");
let slides = document.getElementsByClassName("slide");

let slideIndex = 1;

prevButton.addEventListener('click', e => {
    if (slideIndex !== 1) {
        plusSlides(-1);
    }
})

nextButton.addEventListener('click', e => {
    if (slideIndex !== slides.length) {
        plusSlides(1);
    }
})

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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