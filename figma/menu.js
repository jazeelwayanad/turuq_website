// Menu functionality
document.addEventListener("DOMContentLoaded", function () {
  // Get menu elements
  const menuOverlay = document.getElementById("menu-overlay");
  const hamburgerMenus = document.querySelectorAll(
    ".hamburger-menu, .menu-icon",
  );
  const closeButton = document.querySelector(".hamburger-close");
  const menuSearchIcons = document.querySelectorAll(".menu-search-icon");

  // Function to show menu
  function showMenu() {
    if (menuOverlay) {
      menuOverlay.style.display = "block";
      menuOverlay.classList.add("show");
      menuOverlay.classList.remove("hide");
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    }
  }

  // Function to hide menu
  function hideMenu() {
    if (menuOverlay) {
      menuOverlay.classList.add("hide");
      menuOverlay.classList.remove("show");
      document.body.style.overflow = ""; // Restore scrolling

      // Hide the overlay after animation completes
      setTimeout(() => {
        menuOverlay.style.display = "none";
      }, 300);
    }
  }

  // Add click listeners to hamburger menus
  hamburgerMenus.forEach(function (hamburger) {
    hamburger.addEventListener("click", function (e) {
      e.preventDefault();
      showMenu();
    });
  });

  // Add click listener to close button
  if (closeButton) {
    closeButton.addEventListener("click", function (e) {
      e.preventDefault();
      hideMenu();
    });
  }

  // Close menu when clicking outside content area
  if (menuOverlay) {
    menuOverlay.addEventListener("click", function (e) {
      if (e.target === menuOverlay) {
        hideMenu();
      }
    });
  }

  // Close menu with Escape key
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      menuOverlay &&
      menuOverlay.style.display === "block"
    ) {
      hideMenu();
    }
  });

  // Add click listeners to search icons in menu
  menuSearchIcons.forEach(function (searchIcon) {
    searchIcon.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      // Hide menu first, then show search overlay
      hideMenu();
      setTimeout(() => {
        // Trigger search overlay if the function exists
        if (typeof showSearchOverlay === "function") {
          showSearchOverlay();
        } else {
          // Fallback: dispatch custom event for search overlay
          const searchEvent = new CustomEvent("showSearchOverlay");
          document.dispatchEvent(searchEvent);
        }
      }, 300);
    });
  });

  // Category hover effects
  const categories = document.querySelectorAll(".menu-category");
  categories.forEach(function (category) {
    category.addEventListener("click", function () {
      // Remove active class from all categories
      categories.forEach(function (cat) {
        cat.classList.remove("menu-category-active");
      });

      // Add active class to clicked category
      this.classList.add("menu-category-active");

      // Here you could add functionality to change the articles based on category
      // For now, we'll just show the active state
    });
  });

  // Add smooth hover transitions for nav links
  const navLinks = document.querySelectorAll(".menu-nav-link");
  navLinks.forEach(function (link) {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Add hover effects for article cards
  const articleCards = document.querySelectorAll(".menu-article-card");
  articleCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
      this.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "none";
    });
  });
});

// Function to initialize menu on any page
function initializeMenu() {
  // Check if menu HTML is already loaded
  if (!document.getElementById("menu-overlay")) {
    // Load menu HTML
    fetch("menu.html")
      .then((response) => response.text())
      .then((html) => {
        document.body.insertAdjacentHTML("beforeend", html);

        // Re-run the initialization after menu is loaded
        const event = new Event("DOMContentLoaded");
        document.dispatchEvent(event);
      })
      .catch((error) => {
        console.error("Error loading menu:", error);
      });
  }
}

// Make functions globally available for interaction with search overlay
window.showMenu = showMenu;
window.hideMenu = hideMenu;

// Export functions for use in other scripts (Node.js compatibility)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    showMenu,
    hideMenu,
    initializeMenu,
  };
}
