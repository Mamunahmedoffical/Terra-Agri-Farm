let scrollContaner = document.querySelector(".contaner");
let leftBtn = document.getElementById("leftarrow");
let rightBtn = document.getElementById("rightarrow");

scrollContaner.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContaner.scrollLeft += evt.deltaY;
  scrollContaner.style.scrollBehavior = "auto";
});
leftBtn.addEventListener("click", () => {
  scrollContaner.style.scrollBehavior = "smooth";
  scrollContaner.scrollLeft -= 1145;
});
rightBtn.addEventListener("click", () => {
  scrollContaner.style.scrollBehavior = "smooth";
  scrollContaner.scrollLeft += 1145;
});
