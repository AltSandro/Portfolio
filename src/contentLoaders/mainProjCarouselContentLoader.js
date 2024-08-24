(() => {
    "use strict"
    document.addEventListener('DOMContentLoaded', () => {
        fetch('json/mainProjCarousel-data.json')
            .then(response => response.json())
            .then(data => {
                const slides = data.slides; 
                const carouselIndicators = document.getElementById('mainProjCarouselIndicators');
                const carouselInner = document.getElementById('mainProjCarouselInner');

                slides.forEach((slide, index) => {
                    const indicator = document.createElement('li');
                    indicator.classList.add('awSr');
                    if (index === 0) indicator.classList.add('active');
                    indicator.setAttribute('data-target', '.carousel');
                    indicator.setAttribute('data-slide-to', index);
                    carouselIndicators.appendChild(indicator);

                    const slideItem = document.createElement('div');
                    slideItem.classList.add('awSr', 'item');
                    if (index === 0) slideItem.classList.add('active');

                    const link = document.createElement('a');
                    link.classList.add('awSr', 'aImg');
                    link.href = slide.link;
                    link.setAttribute('rel', 'noopener noreferrer');

                    const image = document.createElement('img');
                    image.classList.add('awSr');
                    image.alt = slide.alt;
                    image.src = slide.image;
                    link.appendChild(image);

                    if (slide.isMatrixEffect) {
                        link.classList.add('MatrixEffectButton');
                        link.setAttribute('role', 'button');
                        link.setAttribute('data-matrUrlFollow', slide.link);
                        link.setAttribute('data-matrUrlSecDelay', slide.matrixEffectDelay);
                        link.setAttribute('rel', 'noopener noreferrer');
                        image.classList.add('MatrixEffectImg');

                        const matrixEffectMessage = document.createElement('p');
                        matrixEffectMessage.classList.add('ImgMatrixEffectMessage');
                        const span = document.createElement('span');
                        span.textContent = slide.matrixEffectMessage;
                        matrixEffectMessage.appendChild(span);
                        link.appendChild(matrixEffectMessage);
                    }

                    slideItem.appendChild(link);

                    const caption = document.createElement('div');
                    caption.classList.add('awSr', 'carousel-caption');
                    caption.setAttribute(`${slide.langswrs}`, "");
                    caption.setAttribute('data-langswitch-item', slide.dataLangswitchItem);
                    
                    caption.textContent = slide.caption;
                    slideItem.appendChild(caption);

                    carouselInner.appendChild(slideItem);
                });
            })
            .catch(error => console.error('Error loading mainProjCarousel data:', error));
    });
})();