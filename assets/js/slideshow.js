// Slideshow functionality
// This script controls the slideshow functionality for the image gallery
// It allows users to navigate through images using next and previous buttons
// and also automatically advances the slides every 5 seconds

// Initialize the slide index
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Auto advance slides every 5 seconds
setInterval(() => {
    currentSlide(slideIndex + 1);
}, 5000);