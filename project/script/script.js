let menuBtn = document.getElementById("menuBtn");
let nav = document.getElementById("mainNav");

menuBtn.addEventListener("click", function() {
    if (nav.style.display == "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
});

document.getElementById("last-modified").textContent = document.lastModified;