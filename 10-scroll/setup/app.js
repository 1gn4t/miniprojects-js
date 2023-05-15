// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const btn = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

btn.addEventListener("click", () => {
  const containerHeight = linksContainer.offsetHeight;
  const linksHeight = links.offsetHeight;

  switch (containerHeight) {
    case 0:
      linksContainer.style.height = `${linksHeight}px`;
      break;
    default:
      linksContainer.style.height = 0;
  }
});
// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.offsetHeight;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (evt) => {
    evt.preventDefault();
    const id = evt.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const fixedNav = navbar.classList.contains("fixed-nav");
    const navHeight = navbar.offsetHeight - linksContainer.offsetHeight;
    let position = element.offsetTop - navHeight;
    if (!fixedNav) position -= navbar.offsetHeight;

    window.scrollTo(0, position);

    linksContainer.style.height = 0;
  });
});
