//Current Year
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;
//last modified date
const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = lastModified;

// hamburger menu toggle
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  console.log("menu clicked");
});