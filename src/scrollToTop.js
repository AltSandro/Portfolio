(() => {
  //Script script: Scrolling:
  // Event handler after loading the contents of the page
  document.addEventListener("DOMContentLoaded", function () {
    // Add the page scroll processor
    window.addEventListener("scroll", handleScroll);
    // Add the click processor to the "Upster" button
    document.getElementById("scrollBtn").addEventListener("click", scrollToTop);

    // Function for processing the page scrolling event
    function handleScroll() {
      if (
        document.body.scrollTop > 70 ||
        document.documentElement.scrollTop > 70
      ) {
        // If scrolling is more than 70 pixels, show the button
        showScrollButton();
      } else {
        // Otherwise, hide the button
        hideScrollButton();
      }
    }

    // Function for showing the "Upster" button
    function showScrollButton() {
      document.getElementById("scrollBtn").classList.add("show");
    }

    // Function for hiding the "Upster" button
    function hideScrollButton() {
      document.getElementById("scrollBtn").classList.remove("show");
    }

    // Function for scrolling the page up
    function scrollToTop() {
      if (isMobileDevice()) {
        // If the device is mobile, we use smooth scroll
        scrollToTopMobile();
      } else {
        // Otherwise, we use scrolling for a computer
        scrollToTopDesktop();
      }
    }

    // Function for smooth scrolling of the page on mobile devices
    function scrollToTopMobile() {
      document.documentElement.style.scrollBehavior = "smooth";
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

      setTimeout(function () {
        document.documentElement.style.scrollBehavior = "auto";
      }, 1000);
    }

    // Function for scrolling the page on the computer
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

    // The function to determine whether the device is a mobile
    function isMobileDevice() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }
  });

  // Interception of the events of touch and scroll resolution after clicking on the button
  document
    .getElementById("scrollBtn")
    .addEventListener("touchstart", function () {
      document.body.style.overflow = "auto";
    });
})();
