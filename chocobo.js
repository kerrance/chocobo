/*
  Name: Chocobo.js
  Version: 1.0
  Website: https://kerrance.github.io/chocobo/
*/

let currentSlide = 1;

function shiftSlide(int) {
  showSlides(currentSlide += int)
}

function showSlides(int) {
  var i;
  var allSlides = document.getElementsByClassName("slide");

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

showSlides(currentSlide);
