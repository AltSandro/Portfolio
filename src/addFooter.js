//<!--adding footer script:-->
(() => {
  document.addEventListener("DOMContentLoaded", function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "index.html", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let response = xhr.responseText;
        let parser = new DOMParser();
        let doc = parser.parseFromString(response, "text/html");
        let footerContent = doc.getElementById("mainFooter");

        document.body.appendChild(footerContent);
      }
    };
    xhr.send();
  });
})();
