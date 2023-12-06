// MOBILE MENU COLLAPSE

const sidebar = document.querySelector(".sidebar");
const hamburgermenu = document.querySelector(".bx.bx-menu.icon");

hamburgermenu.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  hamburgermenu.classList.toggle("collapsed");
});

// BOOK SLIDER LEESLIJST

document.addEventListener("DOMContentLoaded", function () {
  const bookList = document.querySelector(".book-list");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const bookWidth = document.querySelector(".book").offsetWidth + 60; // Adjust margin-left, margin-right, and sidebar width
  const booksToShow = 3;
  const totalBooks = document.querySelectorAll(".book").length;
  let currentPosition = 0;
  const maxScroll = Math.ceil(totalBooks / booksToShow - 1) * bookWidth;

  nextButton.addEventListener("click", function () {
    const scrollAmount = bookWidth;
    currentPosition += scrollAmount;
    if (currentPosition > maxScroll) {
      currentPosition = maxScroll;
    }
    bookList.scrollTo({
      left: currentPosition,
      behavior: "smooth",
    });
  });

  prevButton.addEventListener("click", function () {
    const scrollAmount = bookWidth;
    currentPosition -= scrollAmount;
    if (currentPosition < 0) {
      currentPosition = 0;
    }
    bookList.scrollTo({
      left: currentPosition,
      behavior: "smooth",
    });
  });
});
