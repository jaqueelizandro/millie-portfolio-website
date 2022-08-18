const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll("nav a");
window.onscroll = () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });
  navLink.forEach((link) => {
    link.classList.remove("active");
    if (current === null) {
        current = "home";
    }
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
};