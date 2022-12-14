let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide-container");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
        console.log(slides.length)
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    for (i = 0; i < dots.length; i++) {
        if (i % 4 === slideIndex) {
            dots[i - 1].className += " active";
        }
    }
    if (slideIndex === 4) {
        dots[dots.length - 1].className += " active";
    }
}

