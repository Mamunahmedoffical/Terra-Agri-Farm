const track = document.getElementById("sliderTrack");
const dots = document.querySelectorAll(".dot");
const cards = document.querySelectorAll(".service-card");

function moveSlide(index) {
  const cardWidth = cards[0].offsetWidth + 20; // card + margin
  const offset = cardWidth * 3 * index;
  track.style.transform = `translateX(-${offset}px)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");

  cards.forEach((card) => card.classList.remove("active"));
  const start = index * 3;
  for (let i = start; i < start + 3 && i < cards.length; i++) {
    cards[i].classList.add("active");
  }
}
