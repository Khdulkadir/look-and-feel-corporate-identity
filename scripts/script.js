// SIDEBAR GIVE ACTIVE ITEM BACKGROUND COLOR

const nav = document.getElementsByClassName("menu-links")[0];
const listItems = nav.getElementsByTagName("li");

function setActive(index) {
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove("active");
  }

  listItems[index].classList.add("active");
}

setActive(0);

// MOBILE MENU COLLAPSE

const sidebar = document.querySelector(".sidebar");
const hamburgermenu = document.querySelector(".bx.bx-menu.icon");

hamburgermenu.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  hamburgermenu.classList.toggle("collapsed");
});
