document.getElementById("year").textContent = new Date().getFullYear();

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});
