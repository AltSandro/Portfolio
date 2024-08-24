
(function autorPhotoButtonContentLoader() {
    "use strict"
    return new Promise((resolve, reject) => {

        fetch('json/buttons-data.json')
            .then(response => response.json())
            .then(data => {
                const autorPhotoButtonContainer = document.querySelector('.aboutMebutton-animation');
                if (data.buttons.length > 0) {
                    const autorButtonData = data.buttons[0]; 
                    autorPhotoButtonContainer.href = autorButtonData.href;
                    autorPhotoButtonContainer.textContent = autorButtonData.text; 
                    autorPhotoButtonContainer.setAttribute("langswrs", ""); 
                    autorPhotoButtonContainer.setAttribute("data-langswitch-item", "13");
                }
                resolve();
            })
            .catch(error => {
                console.error('Error loading buttons or loading "AutorButton" data:', error);
                reject(error); 
            });
    });
}
)();
