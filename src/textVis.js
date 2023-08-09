(() => {
  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("preloadStratButton")
      .addEventListener("click", function () {
        setTimeout(() => {
          let elements = document.querySelectorAll(".animate-top-to-bottom");
          elements.forEach(function (element) {
            element.classList.add("visible");
          });
        }, 0); //delay time before the appearance of a specific group of elements
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
        }, 3200); //delay time before the appearance of a specific group of elements
      });
  });
})();
