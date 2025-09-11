
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
    console.log("CLICKE D HTME");
    const root = document.documentElement;

    if (root.dataset.theme === "dark") {
        root.dataset.theme = "light";
        toggle.innerText = "Light Mode";
    } else {
        root.dataset.theme = "dark";
        toggle.innerText = "Dark Mode";
    }
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
