//using selectors inside the element
// traversing the dom

const section = document.querySelector(".section-center");

section.addEventListener("click", (evt) => {
  const btn = evt.target.closest(".question-btn");
  const question = evt.target.closest(".question");
  if (btn) {
    question.classList.toggle("show-text");
  }
});
