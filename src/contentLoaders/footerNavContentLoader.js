(() => {
  "use strict"
    if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
      footerContentLoader();
    } else {
      document.addEventListener('footerCopyAdded', function () { 
        if (!document.querySelector('#mainFooter[data-loaded="true"]')) {
          footerContentLoader();
        }
      });
    }

    function footerContentLoader() {
      fetch('json/pagesNav-data.json', { cache: "no-cache" }) 
        .then(response => response.json())
        .then(data => {
          const mainNavbar = document.querySelectorAll('[dataSocLinkRef]');
          const mainNavItems = data.footerNav.map(item => {
            return `<li class="nav-item"><a href="${item.href}" class="nav-link px-2"${item.langswrs} 
            ${item.addAttributeTwo}>${item.text}</a></li>`;
          }).join('');
          mainNavbar.forEach(container => {
            container.innerHTML = mainNavItems;
          });

          const socialLinkContainers = document.querySelectorAll('[dataSocLinkContent]');
          const socialLinksItems = data.socialLinks.map((item, index) => {
            const additionalClasses = index === 0 ? 'ps-0 pe-2' : 'px-2';
            return `<li class="${additionalClasses}"><a href="${item.href}" target="_blank" rel="noopener noreferrer">
            <img src="${item.imgSrc}" alt="${item.alt}"></a></li>`;
          }).join('');
          socialLinkContainers.forEach(container => {
            container.innerHTML = socialLinksItems;
          });

          const footer = document.querySelector('#mainFooter');
          if (footer) footer.setAttribute('data-loaded', 'true');
        }).then(() => {
          const baseFooterContentAddedEvent = new Event('baseFooterContentAdded');
          document.dispatchEvent(baseFooterContentAddedEvent);
        }).catch(error => console.error('Error loading navbar or socialLinks data:', error));
    }
    
})();
