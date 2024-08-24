(function () {
  "use strict";


  window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 0);
    }
  });


  window.addEventListener("scroll", function () {
    let textSpecModif = document.querySelectorAll(
      "[data-HrColorInverse], [data-colorInverse], [data-textColorInverse], .navbar-brand, .navSpiner, .textSpecialMain, span.typed-cursor, .aboutMebutton-animation, .animated-image"
    );
    for (let elem of textSpecModif) {
      elem.classList.toggle("scrolled-inverse", window.scrollY > 0);
    }
  });


  document.addEventListener("click", function (event) {
    let navbar = document.querySelector(".navbar");
    if (navbar) {
      let isClickInside = navbar.contains(event.target);
      if (!isClickInside) {
        let navbarCollapsed = document.querySelector(".navbar-collapse");
        if (navbarCollapsed && navbarCollapsed.classList.contains("show")) {
          let navbarToggle = document.querySelector(".navbar-toggler");
          if (navbarToggle) {
            navbarToggle.click();
          }
        }
      }
    }
  });


  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.addedNodes.length) {
        const navbarTogglerIcon = document.getElementById("navbarTogglerIcon");
        const navbarCollapse = document.getElementById("navbarNav");
        let navbarIcon = document.querySelector(".navbar");

        if (navbarTogglerIcon && navbarCollapse && navbarIcon) {
          navbarCollapse.addEventListener("show.bs.collapse", function () {
            navbarTogglerIcon.classList.add("cd");
            navbarTogglerIcon.textContent = "✕"; 
            navbarIcon.classList.add("cd");
          });

          navbarCollapse.addEventListener("hide.bs.collapse", function () {
            navbarTogglerIcon.classList.remove("cd");
           
            navbarTogglerIcon.textContent = '';
            const topSpan = document.createElement('span'); 
            topSpan.className = 'nThD hamburgerTop';
            const midSpan = document.createElement('span');
            midSpan.className = 'nThD hamburgerMid';
            const bottomSpan = document.createElement('span');
            bottomSpan.className = 'nThD hamburgerBottom';

            navbarTogglerIcon.appendChild(topSpan);
            navbarTogglerIcon.appendChild(midSpan);
            navbarTogglerIcon.appendChild(bottomSpan);
            navbarIcon.classList.remove("cd");
          });

          observer.disconnect();
        }
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();

