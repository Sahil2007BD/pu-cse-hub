/* SEARCH */

const searchInput = document.getElementById("searchInput");

if (searchInput) {

  searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".course-card");

    cards.forEach(card => {

      const text = card.innerText.toLowerCase();

      if (text.includes(value)) {

        card.style.display = "block";

      }

      else {

        card.style.display = "none";

      }

    });

  });

}


/* THEME TOGGLE */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

  document.body.classList.add("light-mode");

  themeToggle.textContent = "☀️";

}

else {

  themeToggle.textContent = "🌙";

}

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  const isLight =
    document.body.classList.contains("light-mode");

  if (isLight) {

    localStorage.setItem("theme", "light");

    themeToggle.textContent = "☀️";

  }

  else {

    localStorage.setItem("theme", "dark");

    themeToggle.textContent = "🌙";

  }

});