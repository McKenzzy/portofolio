// Mobile nav
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("[data-nav]");

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form (demo only)
function handleSubmit(e){
  e.preventDefault();
  const note = document.getElementById("formNote");
  note.textContent = "Terkirim (demo). Untuk production, hubungkan ke Formspree / Netlify Forms.";
  e.target.reset();
  return false;
}
