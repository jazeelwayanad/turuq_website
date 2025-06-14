function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburger = document.querySelector(".hamburger");

  mobileMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
}


// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburger = document.querySelector(".hamburger");
  const header = document.querySelector(".header");

  if (
    !header.contains(event.target) &&
    mobileMenu.classList.contains("active")
  ) {
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

// Close mobile menu when clicking on a menu item
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobileMenu");
    const hamburger = document.querySelector(".hamburger");

    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Handle responsive behavior
window.addEventListener("resize", function () {
  const navLinks = document.querySelector(".nav-links");
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburger = document.querySelector(".hamburger");

  if (window.innerWidth > 768) {
    navLinks.style.display = "flex";
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
  } else {
    navLinks.style.display = "none";
  }
});
