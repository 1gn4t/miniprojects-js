const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  document.body.style.backgroundColor = generateHexStr();
  color.textContent = generateHexStr();
});

function generateHexStr() {
  let str = "#";
  for (let i = 0; i < 6; i++) {
    str += hex[getRandomNumber()];
  }
  return str;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
