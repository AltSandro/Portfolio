(() => {
  "use strict"
  function handleScrollAndHover(skillsData) {
    const setElements = document.getElementsByClassName("iconSkillsSet");
    const strokePercent = skillsData.map(skill => skill.strokePercent);
    const circleClasses = skillsData.map(skill => skill.circleClass);

    for (let i = 0; i < skillsData.length; i++) {
      const setId = `_${(i + 1) * 10}`; 
      const circleId = `_${i + 1}`;
      
      const setElement = document.getElementById(setId);
      const circleElement = document.getElementById(circleId);
      
      if (isElementInBottomViewport(setElements[i])) {
        setElement.style.strokeDashoffset = strokePercent[i];
        circleElement.classList.add(circleClasses[i]);
      } else {
        setElement.style.strokeDashoffset = "260";
        circleElement.classList.remove(circleClasses[i]);
      }
    }
  }
  

  function handleScroll() {
    const timeElements = document.getElementsByClassName("time");
    for (const element of timeElements) {
      if (isElementInMiddleViewport(element)) {
        element.style.opacity = "0.78";
      } else {
        element.style.opacity = "0.21";
      }
    }
  }
  

  function isElementInMiddleViewport(element) {
    const { top, left, bottom, right } = element.getBoundingClientRect();
    const winHeight = window.innerHeight || document.documentElement.clientHeight;
    const winWidth = window.innerWidth || document.documentElement.clientWidth;
    return (
      top >= 0 && left >= 0 && bottom <= winHeight / 2.1 && right <= winWidth
    );
  }
  

  function isElementInBottomViewport(element) {
    const { top, left, bottom, right } = element.getBoundingClientRect();
    const winHeight = window.innerHeight || document.documentElement.clientHeight;
    const winWidth = window.innerWidth || document.documentElement.clientWidth;
    return (
      top >= 0 && left >= 0 && bottom <= winHeight / 1.15 && right <= winWidth
    );
  }
  

  function init() {
    fetch('json/skills-data.json')
      .then(response => response.json())
      .then(skillsData => {
        document.addEventListener("scroll", handleScroll);
        document.addEventListener("scroll", () => handleScrollAndHover(skillsData.skills));

        const observer = new MutationObserver((mutations) => {
          for (let mutation of mutations) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
              handleScroll();
              handleScrollAndHover(skillsData.skills);
            }
          }
        });

        const config = { childList: true, subtree: true };
        observer.observe(document.body, config);
      })
      .catch(error => console.error('Error loading skills data file', error));
  }

  window.addEventListener("load", init);

})();
