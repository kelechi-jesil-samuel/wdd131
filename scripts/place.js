document.addEventListener("DOMContentLoaded", () => {
 const menuBtn = document.getElementById("menuBtn");
    const mainNav = document.getElementById("mainNav");

    if (menuBtn && mainNav) {
        menuBtn.addEventListener("click", () => {
            mainNav.classList.toggle("open");
            menuBtn.textContent = mainNav.classList.contains("open") ? "✕" : "☰";
        });
    }
    const temperature = 10;
    const windSpeed = 5;

    function calculateWindChill(temp, speed) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
    }

    const windChillEl = document.getElementById("windChill");
    if (windChillEl) {
        if (temperature <= 10 && windSpeed > 4.8) {
            windChillEl.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
        } else {
            windChillEl.textContent = "N/A";
        }
    }

    //FOOTER
    const yearEl = document.getElementById("year");
    const lastModEl = document.getElementById("lastModified");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    if (lastModEl) lastModEl.textContent = document.lastModified;
});