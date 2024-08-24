(() => {
    "use strict"
    
    document.addEventListener("DOMContentLoaded", async function () {
        document.getElementById("preloadStratButton").addEventListener("click", async function () {
            document.getElementById("overlay").style.display = "none"; 
            document.getElementById("preload-video").style.display = "none"; 
            document.querySelector(".animated-image").classList.add("visibleAnimateElem"); 
            document.querySelector(".aboutMebutton").classList.add("visibleAnimateElem");
            enableScroll(); 
            try {
                await loadAfterPreloadContentAndScripts(); 
            } catch (error) {
                console.error('Error during autorPhotoButtonLoader:', error);
            } 
        });
    });

    async function loadAfterPreloadContentAndScripts() {
        return new Promise((resolve, reject) => {
        const scriptPaths = []; 

       
        scriptPaths.forEach((path) => {
        let scriptElement = document.createElement("script");
        scriptElement.src = path;
        document.body.appendChild(scriptElement);
         resolve(); 
        });
        });
    }

    
    function enableScroll() {
        window.scrollTo(0, 0);
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
    }
})();