let count = Number(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("reviewCount", count);

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#reviewCount").textContent = count;
    document.querySelector("#currentyear").textContent = new Date().getFullYear();
    document.querySelector("#last-modified").textContent = document.lastModified;
});