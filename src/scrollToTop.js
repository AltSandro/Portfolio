(() => {
  "use strict"

  document.addEventListener("DOMContentLoaded", function () {
    
    window.addEventListener("scroll", handleScroll);
    
    document.getElementById("scrollBtn").addEventListener("click", scrollToTop);

    
    function handleScroll() {
      if (
        document.body.scrollTop > 70 ||
        document.documentElement.scrollTop > 70
      ) {
        
        showScrollButton();
      } else {
        
        hideScrollButton();
      }
    }

    
    function showScrollButton() {
      document.getElementById("scrollBtn").classList.add("show");
    }

    
    function hideScrollButton() {
      document.getElementById("scrollBtn").classList.remove("show");
    }

    
    function scrollToTop() {
      if (isMobileDevice()) {
        
        scrollToTopMobile();
      } else {
        
        scrollToTopDesktop();
      }
    }

    
    function scrollToTopMobile() {
      document.documentElement.style.scrollBehavior = "smooth";
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

      setTimeout(function () {
        document.documentElement.style.scrollBehavior = "auto";
      }, 1000);
    }

    
    function scrollToTopDesktop() {
      const scrollDuration = 650;
      const scrollHeight = window.scrollY;
      const scrollStep = -scrollHeight / (scrollDuration / 15);
      let scrollCount = 0;
      let scrollMargin;

      requestAnimationFrame(step);

      function step() {
        if (window.scrollY !== 0) {
          scrollCount += scrollStep;
          scrollMargin = scrollHeight + scrollCount;
          window.scrollTo(0, scrollMargin);

          if (scrollMargin > 0) {
            requestAnimationFrame(step);
          } else {
            window.scrollTo(0, 0);
          }
        }
      }
    }

    
    function isMobileDevice() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }
  });

  
  document
    .getElementById("scrollBtn")
    .addEventListener("touchstart", function () {
      document.body.style.overflow = "auto";
    });
})();
