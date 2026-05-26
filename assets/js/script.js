/* =========================
   SEARCH (SAFE VERSION)
========================= */

document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".course-card");

  if (searchInput) {

    searchInput.addEventListener("input", () => {

      const value = searchInput.value.toLowerCase().trim();

      cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        card.style.display = text.includes(value) ? "block" : "none";

      });

    });

  }


  /* =========================
     THEME TOGGLE (SAFE VERSION)
  ========================= */

  const themeToggle = document.getElementById("themeToggle");

  if (themeToggle) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.body.classList.add("light-mode");
      themeToggle.textContent = "☀️";
    } else {
      themeToggle.textContent = "🌙";
    }

    themeToggle.addEventListener("click", () => {

      document.body.classList.toggle("light-mode");

      const isLight = document.body.classList.contains("light-mode");

      themeToggle.textContent = isLight ? "☀️" : "🌙";

      localStorage.setItem("theme", isLight ? "light" : "dark");

    });

  }

});