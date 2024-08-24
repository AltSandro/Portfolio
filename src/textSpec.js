(() => {
  "use strict"
  document
    .getElementById("preloadStratButton")
    .addEventListener("click", function () {
      setTimeout(() => {
        let mainText = document.querySelector(".textSpecialInvisibleConteiner").textContent;

        const typedMain = new Typed(".textSpecialMain", {
          strings: [mainText],
          typeSpeed: 90,
          backSpeed: 90,
          backDelay: 1000,
          loop: false,
          onComplete: () => {
            const languageUpdated = new Event('specTextEntered');
            document.dispatchEvent(languageUpdated);
            console.log('текст ввелся');
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
                  typedElement.classList.add("visible");
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
            }, 3000); 
          },
        });

      }, 3000); 
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


  document.addEventListener('specTextEntered', function() {
    const textSpecialMain = document.querySelector(".textSpecialMain");
    const textSpecialInvisibleConteiner = document.querySelector(".textSpecialInvisibleConteiner");
    let specContainerLangSwitchElemValue = textSpecialInvisibleConteiner.getAttribute("data-langswitch-item");
    textSpecialMain.setAttribute("langswrs","");
    textSpecialMain.setAttribute("data-langswitch-item", specContainerLangSwitchElemValue);
    textSpecialMain.textContent = textSpecialInvisibleConteiner.textContent;
  })



})();


