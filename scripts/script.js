// MOBILE MENU COLLAPSE

const sidebar = document.querySelector(".sidebar");
const hamburgermenu = document.querySelector(".bx.bx-menu.icon");

hamburgermenu.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  hamburgermenu.classList.toggle("collapsed");
});

// BOOK SLIDER LEESLIJST

const bookList = document.querySelector(".book-list");
const distance = 220;

function scrollRight() {
  bookList.scrollBy({
    left: distance,
    behavior: "smooth",
  });
}

function scrollLft() {
  bookList.scrollBy({
    left: -distance,
    behavior: "smooth",
  });
}
