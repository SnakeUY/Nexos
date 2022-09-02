if ($(window).width() < 480 || $(window).height() < 480) {
        //the script has been added to the DOM, you can now use it's code

    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("caja");
    let dots = document.getElementsByClassName("boton");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "grid";
    dots[slideIndex-1].className += " active";
    }
}
let button = document.getElementById("pressButton");
button.addEventListener("click", addEmail);

function addEmail() {
  let inputemail = document.getElementById("email");
  let email = inputemail.value;
}
