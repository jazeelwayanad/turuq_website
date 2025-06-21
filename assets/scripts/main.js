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
  const navLinks = document.querySelectorAll(".nav-links");
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburger = document.querySelector(".hamburger");

  if (window.innerWidth > 768) {
    navLinks.forEach(link => link.style.display = "flex");
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
  } else {
    navLinks.forEach(link => link.style.display = "none");
  }
});

document.querySelectorAll(".dotted-border").forEach(box => {
  const width = box.offsetWidth;
  const height = box.offsetHeight;

  const style = getComputedStyle(box);
  

  // Read from CSS variables or fallback to data attributes or default
  const gapTop = parseInt(style.getPropertyValue("--gap-top")) || parseInt(box.dataset.gapTop) || 25;
  const gapRight = parseInt(style.getPropertyValue("--gap-right")) || parseInt(box.dataset.gapRight) || 25;
  const gapBottom = parseInt(style.getPropertyValue("--gap-bottom")) || parseInt(box.dataset.gapBottom) || 25;
  const gapLeft = parseInt(style.getPropertyValue("--gap-left")) || parseInt(box.dataset.gapLeft) || 25;

  const strokeColor = style.getPropertyValue("--stroke-color")?.trim() || "#000";
  const strokeWidth = parseFloat(style.getPropertyValue("--stroke-width")) || 0.5;
  const dashLength = parseInt(style.getPropertyValue("--dash-length")) || 4;
  const dashGap = parseInt(style.getPropertyValue("--dash-gap")) || 4;

  // Support BOTH class and CSS custom property (either one should work)
  const showTop = box.classList.contains("border-top") || parseInt(style.getPropertyValue("--border-top")) === 1;
  const showRight = box.classList.contains("border-right") || parseInt(style.getPropertyValue("--border-right")) === 1;
  const showBottom = box.classList.contains("border-bottom") || parseInt(style.getPropertyValue("--border-bottom")) === 1;
  const showLeft = box.classList.contains("border-left") || parseInt(style.getPropertyValue("--border-left")) === 1;

  function createSVGLine(x1, y1, x2, y2, direction) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("class", "border-svg");

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", strokeColor);
    line.setAttribute("stroke-width", strokeWidth);
    line.setAttribute("stroke-dasharray", `${dashLength},${dashGap}`);
    svg.appendChild(line);

    const triangle1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const triangle2 = document.createElementNS("http://www.w3.org/2000/svg", "path");

    function trianglePath(cx, cy, dir) {
      const triangleWidth = 7;
      const triangleHeight = 10;
      switch (dir) {
        case 'up': return `M${cx - triangleWidth / 2},${cy - triangleHeight} L${cx + triangleWidth / 2},${cy - triangleHeight} L${cx},${cy} Z`;
        case 'down': return `M${cx - triangleWidth / 2},${cy + triangleHeight} L${cx + triangleWidth / 2},${cy + triangleHeight} L${cx},${cy} Z`;
        case 'left': return `M${cx - triangleHeight},${cy - triangleWidth / 2} L${cx - triangleHeight},${cy + triangleWidth / 2} L${cx},${cy} Z`;
        case 'right': return `M${cx + triangleHeight},${cy - triangleWidth / 2} L${cx + triangleHeight},${cy + triangleWidth / 2} L${cx},${cy} Z`;
      }
    }

    if (direction === "top") {
      triangle1.setAttribute("d", trianglePath(x1, y1, "left"));
      triangle2.setAttribute("d", trianglePath(x2, y2, "right"));
    } else if (direction === "bottom") {
      triangle1.setAttribute("d", trianglePath(x1, y1, "left"));
      triangle2.setAttribute("d", trianglePath(x2, y2, "right"));
    } else if (direction === "left") {
      triangle1.setAttribute("d", trianglePath(x1, y1, "up"));
      triangle2.setAttribute("d", trianglePath(x2, y2, "down"));
    } else if (direction === "right") {
      triangle1.setAttribute("d", trianglePath(x1, y1, "up"));
      triangle2.setAttribute("d", trianglePath(x2, y2, "down"));
    }

    [triangle1, triangle2].forEach(tri => {
      tri.setAttribute("fill", strokeColor);
      svg.appendChild(tri);
    });

    svg.style.position = "absolute";
    svg.style.top = 0;
    svg.style.left = 0;
    svg.style.pointerEvents = "none";
    svg.style.overflow = "visible";

    box.style.position = "relative";
    // box.style.overflow = "visible";
    // box.style.padding = `${gapTop}px ${gapRight}px ${gapBottom}px ${gapLeft}px`;
    box.appendChild(svg);
  }

  if (showTop) {
    createSVGLine(gapTop, 0, width - gapTop, 0, "top");
  }
  if (showBottom) {
    createSVGLine(gapBottom, height, width - gapBottom, height, "bottom");
  }
  if (showLeft) {
    createSVGLine(0, gapLeft, 0, height - gapLeft, "left");
  }
  if (showRight) {
    createSVGLine(width, gapRight, width, height - gapRight, "right");
  }
});
