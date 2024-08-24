(() => {
  "use strict"
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "index.html", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = xhr.responseText;
      let parser = new DOMParser();
      let doc = parser.parseFromString(response, "text/html");
      let mainNavbar = doc.getElementById("mainNavbar");

      let targetElement = document.querySelector("body");
      if (targetElement) {
       
        targetElement.insertAdjacentHTML("afterbegin", mainNavbar.outerHTML);

        const navbarLoadedEvent = new Event('navbarLoaded');
        document.dispatchEvent(navbarLoadedEvent);
      }
    }
  };

  
  xhr.send();
})();
