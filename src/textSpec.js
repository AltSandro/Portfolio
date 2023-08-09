(() => {
  document
    .getElementById("preloadStratButton")
    .addEventListener("click", function () {
      setTimeout(() => {
        const typedMain = new Typed(".textSpecialMain", {
          strings: ["This is a homepage created using"],
          typeSpeed: 90,
          backSpeed: 90,
          backDelay: 1000,
          loop: false,
          onComplete: () => {
            setTimeout(() => {
              typedMain.cursor.remove();
              const languages = ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"];
              const typedTwo = new Typed(".textSpecial", {
                strings: languages,
                typeSpeed: 90,
                backSpeed: 90,
                backDelay: 1000,
                loop: true,
                onStart: () => {
                  const typedElement = document.querySelector(".textSpecial");
                  typedElement.classList.add("visible"); // Display of the second cursor before starting languages
                  typedElement.dataset.language = languages[0];
                  typedElement.style.color = getLanguageColor(languages[0]);
                },
                preStringTyped: (arrayPos, self) => {
                  const currentLanguage = self.strings[arrayPos];
                  const typedElement = document.querySelector(".textSpecial");
                  typedElement.dataset.language = currentLanguage;
                  typedElement.style.color = getLanguageColor(currentLanguage);
                },
              });
            }, 3000); // A delay of 3 seconds before removing the first cursor and the beginning of languages input
          },
        });
      }, 3000); // delay before the first sentence entry
    });

  function getLanguageColor(language) {
    switch (language) {
      case "HTML":
        return "red";
      case "CSS":
        return "rgb(13,110,253)";
      case "JavaScript":
        return "rgb(227,172,23)";
      case "Bootstrap":
        return "purple";
      case "jQuery":
        return "rgb(83,204,241)";
      default:
        return "black";
    }
  }
})();
