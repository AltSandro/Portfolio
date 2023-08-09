(() => {
  // When loading the main pages, we give 0.77 seconds to the load:
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.getElementById("overlay").style.display = "none"; // Hide the darkened background and spinner
    }, 470);
  });
})();
