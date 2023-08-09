(() => {
  // Create a new xmlhttprequest object
  let xhr = new XMLHttpRequest();

  // Open the index.html file in asynchronous mode
  xhr.open("GET", "index.html", true);

  // Install the processor of the event change event
  xhr.onreadystatechange = function () {
    // We check if the request has been successfully made and whether the answer contains the necessary data
    if (xhr.readyState === 4 && xhr.status === 200) {
      // We extract the contents of the tag with ID "Mainnavbar" from the response received
      let response = xhr.responseText;
      let parser = new DOMParser();
      let doc = parser.parseFromString(response, "text/html");
      let mainNavbar = doc.getElementById("mainNavbar");

      // We check if there is a tag on the current page before which you need to insert the contents
      let targetElement = document.querySelector("body");
      if (targetElement) {
        // We insert the contents of the tag in front of the target element
        targetElement.insertAdjacentHTML("afterbegin", mainNavbar.outerHTML);
      }
    }
  };

  // Отправляем запрос на получение файла index.html
  xhr.send();
})();
