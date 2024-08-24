(() => {

fetch('json/favicon-data.json')
    .then(response => response.json())
    .then(data => {
        data.favicon.forEach(icon => {
            let link = document.createElement('link');
            link.rel = icon.rel;
            link.href = icon.href;
            
            if (icon.sizes) {
                link.sizes = icon.sizes;
            }
            if (icon.type) {
                link.type = icon.type;
            }
            
            document.head.appendChild(link);
        });
    })
    .catch(error => console.error('Error loading favicon:', error));
})();
