/*
  Name: Chocobo.js
  Version: 1.0
  Website: https://kerrance.github.io/chocobo/
*/

let currentSlide = 1;
let allSlides = document.getElementsByClassName("slide");
let interval = 5000;

function shiftSlide(int) {
  showSlides(currentSlide += int)
}

function nextSlide() {
  shiftSlide(1);
}

function showSlides(int) {
  var i;

  if (int > allSlides.length) {
    currentSlide = 1;
  }

  if (int < 1) {
    currentSlide = allSlides.length;
  }

  for (
    i = 0;
    i < allSlides.length;
    i ++
  ) {
    allSlides[i].style.display = "none";
  }

  allSlides[currentSlide-1].style.display = "block";
}

setInterval(nextSlide, interval);
showSlides(currentSlide);
