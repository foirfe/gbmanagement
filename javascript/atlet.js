
//Med hjælp fra W3Schools.com, har vi så lavet slideshow om til at skifte til forskellige info på biosiden hos Atlet.
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("bioslides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activedot", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activedot";
}

//Lightbox Modal Open
function openModal() {
  document.getElementById("modal").style.display = "block";
}

//Luk Lightbox Modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

var slideLightboxIndex = 1;
showLightboxSlides(slideLightboxIndex);

// Next/previous controls
function plusLightboxSlides(n) {
  showLightboxSlides(slideLightboxIndex += n);
}

// Thumbnail image controls
function currentLightboxSlide(n) {
  showLightboxSlides(slideLightboxIndex = n);
}

function showLightboxSlides(n) {
  var i;
  var lightboxslides = document.getElementsByClassName("lightboxSlides");
  var lightboxdots = document.getElementsByClassName("lightboxdot");
  var captionText = document.getElementById("caption");
  if (n > lightboxslides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = lightboxslides.length}
  for (i = 0; i < lightboxslides.length; i++) {
    lightboxslides[i].style.display = "none";
  }
  for (i = 0; i < lightboxdots.length; i++) {
    lightboxdots[i].className = lightboxdots[i].className.replace(" active", "");
  }
  lightboxslides[slideIndex-1].style.display = "block";
  lightboxdots[slideIndex-1].className += " active";
  captionText.innerHTML = lightboxdots[slideIndex-1].alt;
}