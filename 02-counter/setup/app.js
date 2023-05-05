const value = document.getElementById("value");
let count = 0;

// const btns = document.querySelectorAll(".btn");
// btns.forEach((btn) => {
//   btn.addEventListener("click", (evt) => {
//     const styles = evt.currentTarget.classList;
//     if (styles.contains("decrease")) count--;
//     if (styles.contains("increase")) count++;
//     if (styles.contains("reset")) count = 0;
//     if (count > 0) value.style.color = "green";
//     if (count < 0) value.style.color = "red";
//     if (styles.contains("reset")) count = 0;
//     value.textContent = count;
//   });
// });

const containerBtn = document.querySelector(".button-container");
containerBtn.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("decrease")) count--;
  if (evt.target.classList.contains("increase")) count++;
  if (evt.target.classList.contains("reset")) count = 0;
  value.style.color = count > 0 ? "green" : "red";
  value.textContent = count;
});
