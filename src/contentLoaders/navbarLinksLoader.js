(() => {
    "use strict";
  
    async function navbarContentLoader() {
      try {
        const response = await fetch('json/pagesNav-data.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
  
        const navbarNavContainer = document.querySelector('[mainNavbarLContent]');
        if (!navbarNavContainer) {
          throw new Error('Navbar container element not found.');
        }
  
        const navbarNavItems = data.navbarNav.map(item => {
          return `<li class="nav-item me-3">
                      <a class="nav-link text-uppercase fw-semibold" ${item.langswrs || ''} ${item.addAttributeTwo || ''}
                      href="./${item.href}">${item.text}</a>
                  </li>`;
        }).join('');
        navbarNavContainer.innerHTML = navbarNavItems;
  
        const baseNavContentAddedEvent = new Event('baseNavContentAdded');
        document.dispatchEvent(baseNavContentAddedEvent);
  
      } catch (error) {
        console.error('Error loading navbarNav data:', error);
      }
    }
  
    if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
      navbarContentLoader();
    } else {
      document.addEventListener('navbarCopyLoaded', () => {
        navbarContentLoader();
      });
    }
  
  })();
  
