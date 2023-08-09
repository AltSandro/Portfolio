(function () {
  // Modification for dimming during scrolling:
  window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 0);
  });

  //Modification of the self-evident text (i.e. any tag taging "Data-Colorinvers" and "Span.typed-cursor", as well as the buttons and colors of the portrait shadows):
  window.addEventListener("scroll", function () {
    let textSpecModif = document.querySelectorAll(
      "[data-HrColorInverse], [data-colorInverse], [data-textColorInverse], .textSpecialMain, span.typed-cursor, .aboutMebutton-animation, .animated-image"
    );
    for (let elem of textSpecModif) {
      elem.classList.toggle("scrolled-inverse", window.scrollY > 0);
    }
  });

  // Modification for hiding when clicking outside the tolbar:
  document.addEventListener("click", function (event) {
    let isClickInside = document
      .querySelector(".navbar")
      .contains(event.target);
    if (!isClickInside) {
      let navbarCollapsed = document.querySelector(".navbar-collapse");
      if (navbarCollapsed.classList.contains("show")) {
        let navbarToggle = document.querySelector(".navbar-toggler");
        navbarToggle.click();
      }
    }
  });

  //Modification for replacing the burger symbol with a cross:
  document.addEventListener("DOMContentLoaded", function () {
    const navbarTogglerIcon = document.getElementById("navbarTogglerIcon");
    const navbarCollapse = document.getElementById("navbarNav");
    let navbarIcon = document.querySelector(".navbar");

    navbarCollapse.addEventListener("show.bs.collapse", function () {
      navbarTogglerIcon.classList.add("cd");
      navbarTogglerIcon.innerHTML = "✕";
      navbarIcon.classList.add("cd");
    });

    navbarCollapse.addEventListener("hide.bs.collapse", function () {
      navbarTogglerIcon.classList.remove("cd");
      navbarTogglerIcon.innerHTML = `
        <span class="nThD hamburgerTop"></span>
        <span class="nThD hamburgerMid"></span>
        <span class="nThD hamburgerBottom"></span>
        `; 
      navbarIcon.classList.remove("cd");
    });
  });
})();
