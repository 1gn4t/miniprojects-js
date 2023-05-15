const btnContainer = document.querySelector(".btn-container");
const btns = document.querySelectorAll(".tab-btn");
const article = document.querySelectorAll(".content");

btnContainer.addEventListener("click", (evt) => {
  const id = evt.target.dataset.id;
  // remove active from other btns
  btns.forEach((element) => {
    element.classList.remove("active");
    evt.target.classList.add("active");
  });
  // remove active from other article
  article.forEach((element) => {
    element.classList.remove("active");
    if (element.id == id) element.classList.add("active");
  });
});
