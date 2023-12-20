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

// BOOK SLIDER POP UP

// Get all book elements
const bookElements = document.querySelectorAll(".book");

// Get the popup element and its components
const popup = document.querySelector(".popup");
const popupTitle = document.querySelector(".popup-title");
const popupInfo = document.querySelector(".popup-info");
const popupImg = document.querySelector(".popup-book-img");

// Function to show the popup
function showPopup(title, info, imgSrc) {
  popupTitle.textContent = title;
  popupInfo.textContent = info;
  popupImg.src = imgSrc;
  popup.style.display = "flex";
}

// Function to hide the popup
function hidePopup() {
  popup.style.display = "none";
}

// Add click event to each book element
bookElements.forEach((book, index) => {
  book.addEventListener("click", () => {
    const title = book.querySelector(".book-title").textContent;
    const writer = book.querySelector(".writer").textContent;
    const info = book.querySelector(".info-text").textContent;
    const imgSrc = book.querySelector("img").src;
    showPopup(title, info, imgSrc);
  });
});

// Add click event to close button in the popup
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", hidePopup);
