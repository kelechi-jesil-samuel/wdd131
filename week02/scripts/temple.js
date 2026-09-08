//Current Year
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;
//last modified date
const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = lastModified;