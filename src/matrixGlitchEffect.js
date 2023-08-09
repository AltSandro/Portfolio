(() => {
  (() => {
    const sections = document.querySelectorAll(".MatrixEffectButton");

    function startAnimation() {
      setTimeout(() => {
        this.classList.add("active");
        const message = this.querySelector(".ImgMatrixEffectMessage");
        setTimeout(() => {
          message.classList.add("active");
          message.style.opacity = 1;
        }, 700);

        setTimeout(() => {
          this.classList.remove("active");
          message.classList.remove("active");
          message.style.opacity = "0"; /*identical to default property in CSS */
        }, 2900); /*How much will the Glich effect lasts*/
      }, 330); /*delay before Glitch*/
    }

    sections.forEach((section) => {
      section.addEventListener("click", startAnimation);
    });
  })();

  //Скрипт для подсасывания фотки из подчиненного:
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".MatrixEffectButton");

    buttons.forEach((button) => {
      const imageUrl = button.querySelector(".MatrixEffectImg").src;
      const style = document.createElement("style");
      style.innerHTML = `
        .MatrixEffectButton[data-unique='${imageUrl}']::before {
          background-image: url(${imageUrl});
        }
      `;
      button.setAttribute("data-unique", imageUrl);
      document.head.appendChild(style);
    });
  });
})();
