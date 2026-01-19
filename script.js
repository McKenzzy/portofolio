// Mobile nav
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("[data-nav]");

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form (demo)
function handleSubmit(e){
  e.preventDefault();
  const note = document.getElementById("formNote");
  note.textContent = "Sent (demo). Connect to Formspree / Netlify Forms for production.";
  e.target.reset();
  return false;
}
