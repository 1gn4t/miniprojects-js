const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
console.log(nextBtn);

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener("click", () => {
  counter++;
  carousel();
});
prevBtn.addEventListener("click", () => {
  counter--;
  carousel();
});

function carousel() {
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
  if (counter < slides.length - 1) nextBtn.style.display = "block";
  if (counter > 0) prevBtn.style.display = "block";
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";
