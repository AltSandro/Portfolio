(function () {
  "use strict";

  document.addEventListener('DOMContentLoaded', () => {
    const observer = new MutationObserver((mutationsList, observer) => {
      const gallery = document.querySelector('.popup-gallery');
      if (gallery && gallery.children.length > 0) {
        baguetteBox.run('.popup-gallery', { animation: 'slideIn' });
        observer.disconnect();
      }
    });

   
    const gallery = document.querySelector('.popup-gallery');
    if (gallery) {
      observer.observe(gallery, { childList: true });
    }
  });
})();
