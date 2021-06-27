let slideIndex = 1;
let slideButtons = document.querySelectorAll(".switcher-button");
let slides = document.querySelectorAll(".slider-item");
let indexBody = document.querySelector(".index-body");
function currentSlide(n) {
    if (n != slideIndex) {
        slideButtons[slideIndex - 1].classList.remove("switcher-button-current");
        slideButtons[n - 1].classList.add("switcher-button-current");
        slides[slideIndex - 1].classList.remove("slide-current");
        slides[n - 1].classList.add("slide-current");
        indexBody.classList.replace("page-body-bg-" + slideIndex, "page-body-bg-" + n);
        slideIndex = n
    }
}
