const nextButton = document.querySelector(".button-right");
const prevButton = document.querySelector(".button-left");

let slideIndex = 1;
// showSlides(slideIndex);

prevButton.addEventListener('click', e => {
    plusSlides(-1)
})

nextButton.addEventListener('click', e => {
    plusSlides(1)
})

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("current-slide")
    }
    slides[slideIndex-1].classList.add('current-slide')
}