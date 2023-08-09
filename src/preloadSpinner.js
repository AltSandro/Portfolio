(() => {
  // Function for blocking scrolling at the top of the page
  function disableScroll() {
    document.body.style.overflow = "hidden";
  }
  // Function for unlocking scrolling at the top of the page
  function enableScroll() {
    document.body.style.overflow = "";
  }
  // Call the function for blocking scrolling immediately after loading the page
  // (and even if it is scrolled, it will return up)
  window.addEventListener("load", function () {
    disableScroll();
  });

  /*JavaScript code for controlling spinner and darkened background*/
  // When loading the page:
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document
        .getElementById("preloadGreeting")
        .classList.remove("hiddenGreeting");
    }, 777);
    setTimeout(function () {
      document.getElementById("preloadStratButton").classList.remove("hiddenB");
    }, 2777);
    document
      .getElementById("preloadStratButton")
      .addEventListener("click", function () {
        document.getElementById("overlay").style.display = "none"; // Hide the darkened background and spinner
        document.getElementById("preload-video").style.display = "none"; // Hide the video
        enableScroll(); // We unlock scrolling
        document
          .querySelector(".animated-image")
          .classList.add("visibleAnimateElem"); //Start the procedure of animation photo
        document
          .querySelector(".aboutMebutton")
          .classList.add("visibleAnimateElem"); //Start the procedure of animation button under the photo
        loadAfterPreloadContentAndScripts();
      });
  });

  function loadAfterPreloadContentAndScripts() {
    // Ways to scripts that we will load after completing the screensaver (for the future)
    const scriptPaths = [];

    // Loading all scripts in Body (either through the FOR cycle)
    scriptPaths.forEach((path) => {
      let scriptElement = document.createElement("script");
      scriptElement.src = path;
      document.body.appendChild(scriptElement);
    });
  }
})();
