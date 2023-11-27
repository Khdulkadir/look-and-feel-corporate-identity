const nav = document.getElementsByClassName("menu-links")[0];
const listItems = nav.getElementsByTagName("li");

// Function to add or remove the active class
function setActive(index) {
  // Remove active class from all list items
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove("active");
  }

  // Add active class to the specified index
  listItems[index].classList.add("active");
}

// Usage: Set 'About' as active (index 1)
setActive(1);
