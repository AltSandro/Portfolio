(() => {
  
  function handleScrollAndHover() {
    const setElements = document.getElementsByClassName("iconSkillsSet");
    const strokePercent = ["40", "40", "40", "70", "115", "70", "70", "70", "90", "110", "115", "95"];
    const circleClasses = ["circle1", "circle2", "circle3", "circle4", "circle5", "circle6", "circle7", "circle8", "circle9", "circle10", "circle11", "circle12"];
    
    for (let i = 0; i < 12; i++) {
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
  
  
  window.addEventListener("load", function () {
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("scroll", handleScrollAndHover);
  });
})();
