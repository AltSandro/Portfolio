(() => {
    "use strict"
    document.addEventListener('DOMContentLoaded', function() {
        fetch('json/buttons-data.json')
            .then(response => response.json())
            .then(data => {
                const heroButtonsContainer = document.querySelector('.heroButtons');
                const heroButtons = data.heroButtons.map(button => {
                    return `<a role="button" class="btn btn-primary btn-lg px-4 me-md-3 mb-3" ${button.langswrs} ${button.addAttributeTwo}
                    href="${button.href}">${button.text}</a>`;
                }).join('');
                heroButtonsContainer.innerHTML = heroButtons;
            })
            .catch(error => console.error('Error loading buttons data:', error));
    });
})();
