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
    const loadPageSpinner = document.querySelector('.loadPageLoaderSpinner');
        
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
           
            if (mutation.attributeName === 'style') {
              const spinnerStyle = window.getComputedStyle(loadPageSpinner);
              const opacity = spinnerStyle.opacity;
              const visibility = spinnerStyle.visibility;
              
              if (opacity =='0' || visibility =='hidden') {
                
                setTimeout(function () {
                  document.getElementById("preloadGreeting").classList.remove("hiddenGreeting");
                }, 377);
                setTimeout(function () {
                  document.getElementById("preloadStratButton").classList.remove("hiddenB");
                }, 2407);
                
                observer.disconnect(); 
              }
            }
          });
        });
    
        
        observer.observe(loadPageSpinner, { attributes: true, attributeFilter: ['style'] });
    
        
        setTimeout(function () {
          const spinnerStyle = window.getComputedStyle(loadPageSpinner);
          if (spinnerStyle.opacity !== '0' && spinnerStyle.visibility !== 'hidden') {
            loadPageSpinner.style.opacity = '0'; 
            loadPageSpinner.style.visibility = 'hidden';
            
          }
        }, 470);
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("preloadStratButton").addEventListener("click", function () {
        document.getElementById("overlay").style.display = "none"; 
        document.getElementById("preload-video").style.display = "none"; 
        enableScroll(); 
        document.querySelector(".animated-image").classList.add("visibleAnimateElem"); 
        document.querySelector(".aboutMebutton").classList.add("visibleAnimateElem"); 
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