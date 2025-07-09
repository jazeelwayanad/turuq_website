// Search overlay functionality
document.addEventListener("DOMContentLoaded", function () {
  // Get search elements
  const searchOverlay = document.getElementById("search-overlay");
  const searchIcons = document.querySelectorAll(
    ".search-icon, .menu-search-icon",
  );
  const searchCloseButton = document.querySelector(".search-close");
  const searchInput = document.getElementById("search-input");
  const searchButton = document.querySelector(".search-button");
  const hamburgerInSearch = document.querySelector(
    "#search-overlay .hamburger-menu",
  );

  // Function to show search overlay
  function showSearchOverlay() {
    if (searchOverlay) {
      searchOverlay.style.display = "block";
      searchOverlay.classList.add("show");
      searchOverlay.classList.remove("hide");
      document.body.style.overflow = "hidden"; // Prevent scrolling when search is open

      // Focus on search input after animation
      setTimeout(() => {
        if (searchInput) {
          searchInput.focus();
        }
      }, 300);
    }
  }

  // Function to hide search overlay
  function hideSearchOverlay() {
    if (searchOverlay) {
      searchOverlay.classList.add("hide");
      searchOverlay.classList.remove("show");
      document.body.style.overflow = ""; // Restore scrolling

      // Hide the overlay after animation completes
      setTimeout(() => {
        searchOverlay.style.display = "none";
        // Clear search input
        if (searchInput) {
          searchInput.value = "";
        }
      }, 300);
    }
  }

  // Function to perform search
  function performSearch() {
    const searchTerm = searchInput ? searchInput.value.trim() : "";
    if (searchTerm) {
      // Here you would implement actual search functionality
      console.log("Searching for:", searchTerm);
      // For now, just filter the existing articles or show mock results
      filterSearchResults(searchTerm);
    }
  }

  // Function to filter search results (mock implementation)
  function filterSearchResults(searchTerm) {
    const articleCards = document.querySelectorAll(".search-article-card");
    const searchTermLower = searchTerm.toLowerCase();

    articleCards.forEach((card) => {
      const title = card.querySelector(".search-article-title");
      const author = card.querySelector(".search-article-author");

      if (title && author) {
        const titleText = title.textContent.toLowerCase();
        const authorText = author.textContent.toLowerCase();

        if (
          titleText.includes(searchTermLower) ||
          authorText.includes(searchTermLower)
        ) {
          card.style.display = "block";
          // Highlight search terms (basic implementation)
          highlightSearchTerm(title, searchTerm);
        } else {
          card.style.display = "none";
        }
      }
    });
  }

  // Function to highlight search terms
  function highlightSearchTerm(element, searchTerm) {
    if (!searchTerm) return;

    const text = element.textContent;
    const highlightedText = text.replace(
      new RegExp(searchTerm, "gi"),
      (match) =>
        `<mark style="background-color: #FFEDD9; color: #D64545;">${match}</mark>`,
    );
    element.innerHTML = highlightedText;
  }

  // Function to reset search results
  function resetSearchResults() {
    const articleCards = document.querySelectorAll(".search-article-card");
    articleCards.forEach((card) => {
      card.style.display = "block";
      const title = card.querySelector(".search-article-title");
      if (title) {
        // Remove highlights
        title.innerHTML = title.textContent;
      }
    });
  }

  // Add click listeners to search icons
  searchIcons.forEach(function (searchIcon) {
    searchIcon.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      showSearchOverlay();
    });
  });

  // Add click listener to search close button
  if (searchCloseButton) {
    searchCloseButton.addEventListener("click", function (e) {
      e.preventDefault();
      hideSearchOverlay();
    });
  }

  // Add click listener to search button
  if (searchButton) {
    searchButton.addEventListener("click", function (e) {
      e.preventDefault();
      performSearch();
    });
  }

  // Add enter key functionality to search input
  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        performSearch();
      }
    });

    // Reset results when input is cleared
    searchInput.addEventListener("input", function (e) {
      if (e.target.value.trim() === "") {
        resetSearchResults();
      }
    });
  }

  // Add click listener to hamburger menu in search overlay
  if (hamburgerInSearch) {
    hamburgerInSearch.addEventListener("click", function (e) {
      e.preventDefault();
      // Hide search overlay first, then show menu
      hideSearchOverlay();
      setTimeout(() => {
        // Trigger menu overlay if the function exists
        if (typeof showMenu === "function") {
          showMenu();
        }
      }, 300);
    });
  }

  // Close search overlay when clicking outside content area
  if (searchOverlay) {
    searchOverlay.addEventListener("click", function (e) {
      if (e.target === searchOverlay) {
        hideSearchOverlay();
      }
    });
  }

  // Close search overlay with Escape key
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      searchOverlay &&
      searchOverlay.style.display === "block"
    ) {
      hideSearchOverlay();
    }
  });

  // Listen for custom event to show search overlay
  document.addEventListener("showSearchOverlay", function (e) {
    showSearchOverlay();
  });

  // Add hover effects for search article cards
  const searchArticleCards = document.querySelectorAll(".search-article-card");
  searchArticleCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
      const border = this.querySelector(".search-article-border");
      if (border) {
        border.style.transform = "translateY(-5px)";
        border.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
      }
    });

    card.addEventListener("mouseleave", function () {
      const border = this.querySelector(".search-article-border");
      if (border) {
        border.style.transform = "translateY(0)";
        border.style.boxShadow = "none";
      }
    });

    // Add click functionality to navigate to article
    card.addEventListener("click", function () {
      // Here you would implement navigation to the article
      console.log(
        "Navigate to article:",
        this.querySelector(".search-article-title").textContent,
      );
    });
  });

  // Add smooth hover transitions for nav links in search overlay
  const searchNavLinks = document.querySelectorAll(".search-nav-link");
  searchNavLinks.forEach(function (link) {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
});

// Function to initialize search overlay on any page
function initializeSearchOverlay() {
  // Check if search overlay HTML is already loaded
  if (!document.getElementById("search-overlay")) {
    // Load search overlay HTML
    fetch("search-overlay.html")
      .then((response) => response.text())
      .then((html) => {
        document.body.insertAdjacentHTML("beforeend", html);

        // Load search overlay CSS
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "search-overlay.css";
        document.head.appendChild(link);

        // Re-run the initialization after search overlay is loaded
        const event = new Event("DOMContentLoaded");
        document.dispatchEvent(event);
      })
      .catch((error) => {
        console.error("Error loading search overlay:", error);
      });
  }
}

// Make functions globally available for interaction with menu.js
window.showSearchOverlay = showSearchOverlay;
window.hideSearchOverlay = hideSearchOverlay;

// Export functions for use in other scripts (Node.js compatibility)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    showSearchOverlay,
    hideSearchOverlay,
    initializeSearchOverlay,
  };
}
