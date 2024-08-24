(() => {
    "use strict"
    fetch('json/loc-data.json')
    .then(response => response.json())
    .then(data => {
        document.querySelector('[dataLocText]').textContent = data.locationInfo.linkText;
        document.querySelector('[dataMapSrc]').src = data.locationInfo.mapSrc;
    })
    .catch(error => console.error('Error loading location data:', error));

})();