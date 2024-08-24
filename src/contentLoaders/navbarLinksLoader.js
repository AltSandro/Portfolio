    (function navbarContentLoader() {
        "use strict"
        return new Promise((resolve, reject) => {
            fetch('json/pagesNav-data.json')
                .then(response => response.json())
                .then(data => {
                    const navbarNavContainer = document.querySelector('[mainNavbarLContent]');
                    const navbarNavItems = data.navbarNav.map(item => {
                        return `<li class="nav-item me-3">
                                    <a class="nav-link text-uppercase fw-semibold" ${item.langswrs} ${item.addAttributeTwo}
                                    href="./${item.href}">${item.text}</a>
                                </li>`;
                    }).join('');
                    navbarNavContainer.innerHTML = navbarNavItems;
                    resolve(); 
                }).then(() => {
                    const baseNavContentAddedEvent = new Event('baseNavContentAdded');
                    document.dispatchEvent(baseNavContentAddedEvent);
                }).catch(error => console.error('Error loading navbarNav data:', error));
        });
    })(); 


