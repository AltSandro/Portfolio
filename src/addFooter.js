(() => {
  "use strict"
  
  document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("mainFooter")) return; 

    const observer = new MutationObserver(function (mutationsList, observer) {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          let targetElement = document.querySelector("body");

          if (targetElement && !document.getElementById("mainFooter")) {
            observer.disconnect(); 

            let xhr = new XMLHttpRequest();
            xhr.open("GET", "index.html", true);
            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4 && xhr.status === 200) {
                let response = xhr.responseText;
                let parser = new DOMParser();
                let doc = parser.parseFromString(response, "text/html");
                let footerContent = doc.getElementById("mainFooter");

                if (footerContent) {
                  if (!document.getElementById("mainFooter")) {
                    targetElement.appendChild(footerContent);
                    
                    const footerAddedEvent = new Event('footerCopyAdded');
                    document.dispatchEvent(footerAddedEvent);
                  }
                }
              }
            };
            xhr.send();
          }
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  });
})();
