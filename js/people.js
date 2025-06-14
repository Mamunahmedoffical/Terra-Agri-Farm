const track = document.getElementById("sliderTrack");
const dots = document.querySelectorAll(".dot");

function moveToSlide(slideIndex) {
  const cardWidth = document.querySelector(".card").offsetWidth;
  const offset = cardWidth * 3.2 * slideIndex;
  track.style.transform = `translateX(-${offset}px)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[slideIndex].classList.add("active");
}
