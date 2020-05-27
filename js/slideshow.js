var slideIndex = 0;
automatedSlideShow();

function automatedSlideShow() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(automatedSlideShow, 10000); // Change image every 10 seconds
}

//Mattia Sassone
