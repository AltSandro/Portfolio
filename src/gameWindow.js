(() => {
  let playNowBtn = document.getElementById("play-now-btn");
  let exitCarouselButton = document.getElementById("exitCarouselButton");
  let carouselWrapper = document.getElementById("carouselWrapper");
  let carouselContainer = document.getElementById("carouselContainer");
  let iframeContainer = document.getElementById("iframeContainer");

  playNowBtn.addEventListener("click", function () {
    carouselWrapper.classList.remove("d-none");
    carouselContainer.classList.add("semi-transparent"); // Add a class for a translucent background
    iframeContainer.innerHTML = `<iframe id="embedded-iframe" class="d-block mx-auto"
            src="https://scratch.mit.edu/projects/851751963/embed" allowtransparency="true"  frameborder="0" scrolling="no" allowfullscreen></iframe>`;

    // Block the scrolling of the page when opening a carousel:
    document.body.style.overflow = "hidden";
  });

  exitCarouselButton.addEventListener("click", function () {
    carouselWrapper.classList.add("d-none");
    carouselContainer.classList.remove("semi-transparent"); //Delete the property of the transparency of the css background from the Classlist selector of the "Carousel Wrapper" element element
    iframeContainer.innerHTML = "";

    // Unlock the scrolling of the page when closing the carousel
    document.body.style.overflow = "auto";
  });
})();
