// footerYear.js
(() => {
  // Function for obtaining the current year
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  // Function for updating text with a year
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

  // Function for waiting for the appearance of a footer on the page
  function waitForFooter() {
    return new Promise((resolve) => {
      const checkFooter = () => {
        const footerElement = document.getElementById("mainFooter");
        if (footerElement) {
          // If the footer is found, we allow for the proof
          resolve();
        } else {
          // If the footer is not found, we repeat the check after 100 ms
          setTimeout(checkFooter, 100);
        }
      };

      // We start checking the footer
      checkFooter();
    });
  }

  // We wait for the download of DOM and the footer, then we update the year
  window.addEventListener("DOMContentLoaded", async function () {
    // We wait for the appearance of the footer
    await waitForFooter();

    // We get the current year and update the text with a year
    const currentYear = getCurrentYear();
    updateYearText(currentYear);
  });
})();
