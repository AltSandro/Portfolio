(() => {
  "use strict"
  document.addEventListener("DOMContentLoaded", function () {
    
    document
      .getElementById("preloadStratButton")
      .addEventListener("click", function () {
        setTimeout(() => {
          let elements = document.querySelectorAll(".animate-top-to-bottom");
          elements.forEach(function (element) {
            element.classList.add("visible");
          });
        }, 0); 
      });
  });

  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("preloadStratButton")
      .addEventListener("click", function () {
        setTimeout(() => {
          let elements = document.querySelectorAll(".textSpecialM");
          elements.forEach(function (element) {
            element.classList.add("visible");
          });
        }, 3500); 
      });
  });
})();
