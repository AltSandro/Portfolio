(() => {
  
  function disableScroll() {
    document.body.style.overflow = "hidden";
  }
  
  function enableScroll() {
    document.body.style.overflow = "";
  }
  
  window.addEventListener("load", function () {
    disableScroll();
  });


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
        document.getElementById("overlay").style.display = "none"; 
        document.getElementById("preload-video").style.display = "none"; 
        enableScroll(); 
        document
          .querySelector(".animated-image")
          .classList.add("visibleAnimateElem"); 
        document
          .querySelector(".aboutMebutton")
          .classList.add("visibleAnimateElem"); 
        loadAfterPreloadContentAndScripts();
      });
  });

  function loadAfterPreloadContentAndScripts() {
    
    const scriptPaths = [];

    
    scriptPaths.forEach((path) => {
      let scriptElement = document.createElement("script");
      scriptElement.src = path;
      document.body.appendChild(scriptElement);
    });
  }
})();
