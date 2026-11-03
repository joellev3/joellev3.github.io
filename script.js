// Mobile navigation toggle
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
if (toggle && links) {
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  // Close the menu after clicking a link (on mobile)
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

// Current year in the footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Fallback for project images that haven't been added yet.
// A missing image is removed; only when none are left is a placeholder shown.
document.querySelectorAll(".project__media img").forEach((img) => {
  img.addEventListener("error", () => {
    const wrap = img.parentElement;
    const label = img.alt || "Image coming soon";
    img.remove();
    if (!wrap.querySelector("img")) {
      wrap.classList.add("is-missing");
      wrap.textContent = label + " (image coming soon)";
    }
  });
});
