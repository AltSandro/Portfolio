(() => {
    "use strict"
    document.addEventListener('DOMContentLoaded', () => {
        fetch('json/scratchProjectGallery-data.json')
            .then(response => response.json())
            .then(data => {
                const gallery = document.getElementById('scratchProjectGallery');
                data.images.forEach(image => {
                    const col = document.createElement('div');
                    col.classList.add('col-sm-6', 'col-lg-4', 'zoom-on-hover');
    
                    const link = document.createElement('a');
                    link.classList.add('portfolio-box', 'awSlider-item');
                    link.href = image.href;
    
                    const img = document.createElement('img');
                    img.classList.add('img-fluid');
                    img.alt = image.alt;
                    img.src = image.src;
                    link.appendChild(img);
    
                    const caption = document.createElement('div');
                    caption.classList.add('portfolio-box-caption');
    
                    const captionContent = document.createElement('div');
                    captionContent.classList.add('portfolio-box-caption-content');
    
                    const projectCategory = document.createElement('div');
                    projectCategory.classList.add('project-category', 'text-faded');
                    const projectCategorySpan = document.createElement('span');
                    projectCategorySpan.textContent = image.category;
                    projectCategory.appendChild(projectCategorySpan);
    
                    const projectName = document.createElement('div');
                    projectName.classList.add('project-name');
                    const projectNameSpan = document.createElement('span');
                    projectNameSpan.textContent = image.name;
                    projectName.appendChild(projectNameSpan);
    
                    captionContent.appendChild(projectCategory);
                    captionContent.appendChild(projectName);
                    caption.appendChild(captionContent);
                    link.appendChild(caption);
    
                    col.appendChild(link);
                    gallery.appendChild(col);
                });
            })
            .catch(error => console.error('Error loading scratchProjectGallery data:', error));
    });
    
})();