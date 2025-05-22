const searchToggle = document.getElementById("search-toggle");
const searchBar = document.getElementById("search-bar");

searchToggle.addEventListener("click", () => {
  searchBar.classList.toggle("active");
  searchBar.focus();
});
