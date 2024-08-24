
(() => {
  "use strict"
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  function updateYearText(currentYear) {
    let yearElement = document.getElementById("year-range");
    if (yearElement) {
      if (currentYear === 2023) {
        yearElement.innerText = "AltSandro © " + currentYear;
      } else if (currentYear < 2023) {
        yearElement.innerText = "AltSandro © 2023";
      } else {
        yearElement.innerText = "AltSandro © 2023-" + currentYear;
      }
    }
  }


  function waitForFooter() {
    return new Promise((resolve) => {
      const checkFooter = () => {
        const footerElement = document.getElementById("mainFooter");
        if (footerElement) {  
          resolve();
        } else {   
          setTimeout(checkFooter, 100);
        }
      };

      
      checkFooter();
    });
  }

  
  window.addEventListener("DOMContentLoaded", async function () {
    await waitForFooter();
    const currentYear = getCurrentYear();
    updateYearText(currentYear);
  });
})();
