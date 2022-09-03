    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
    }
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    if ($(window).width() < 480 || $(window).height() < 480) {
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

$('div.miEmpresa').click(function(){
    let boton =document.getElementById("botonNombre");
    let boton2 =document.getElementById("buttonNav");
    boton.innerText ="EMPRESA";
    boton.className+=" afterclick";
    boton2.className+=" afterclick";
});

$('div.miOrganizacion').click(function(){
    let boton =document.getElementById("botonNombre");
    let boton2 =document.getElementById("buttonNav");
    boton.innerText ="ORGANIZACION";
    boton.className+=" afterclick";
    boton2.className+=" afterclick";
});

function validaremail(){
    console.log("dispatch")
    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };

        const $result = document.getElementById("txtpressButton")
        const email =document.getElementById("email").value;
        $result
        if (validateEmail(email)) {
            $result.innerText = email + ' is valid :)'
            $result.classList.add("correct")
            $result.classList.remove("wrong")
        } else {
            $result.innerText = email + ' is not valid :('
            $result.classList.add("wrong")
            $result.classList.remove("correct")
        }
}