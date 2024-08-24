(() => {
    "use strict"
    document.addEventListener('DOMContentLoaded', () => {
        const observer = new MutationObserver((mutations, observer) => {
            const carouselInner = document.getElementById('mainProjCarouselInner');
            if (carouselInner && carouselInner.children.length > 0) {
                initializeMatrixEffect();
                observer.disconnect();
            }
        });

        
        observer.observe(document.getElementById('mainProjCarouselInner'), { childList: true });
    });

    function initializeMatrixEffect() {
        const sections = document.querySelectorAll(".MatrixEffectButton");
    
        function startAnimation(event) {
            event.preventDefault(); 
            const button = this;
            setTimeout(() => {
                button.classList.add("active");
                const message = button.querySelector(".ImgMatrixEffectMessage");

                setTimeout(() => {
                    message.classList.add("active");
                    message.style.opacity = 1;
                }, 700);

                setTimeout(() => {
                    button.classList.remove("active");
                    message.classList.remove("active");
                    message.style.opacity = "0"; 

                    const url = button.getAttribute("data-MatrUrlFollow");
                    const time = button.getAttribute("data-MatrUrlSecDelay");
                    if (url && time) {
                        setTimeout(() => {
                            window.location.href = url;
                        }, time * 1000); 
                    }
                }, 1900); 
            }, 330); 
        }

        sections.forEach((section) => {
            section.addEventListener("click", startAnimation);
        });

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
    }
})();
