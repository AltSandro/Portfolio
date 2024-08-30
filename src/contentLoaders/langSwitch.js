(function langSwitch(){
    "use strict"
    
    async function loadLanguageData() {
        try {
            const response = await fetch('json/lang-data.json');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error loading language data:', error);
            return {}; 
        }
    }

    async function initialize() {
        let languageData = await loadLanguageData();

        const userLanguage = navigator.language || navigator.userLanguage;
        const languageDropdown = document.getElementById("languageDropdown");
        const availableLanguages = Array.from(languageDropdown.options).map(option => option.value);

        function getLanguageBasedOnUserLanguage(userLanguage, availableLanguages) {
            const userLanguagePrefix = userLanguage.substring(0, 2);

            if (availableLanguages.includes(userLanguagePrefix)) {
                return userLanguagePrefix;
            }

            return "en";
        }

        const defaultLanguage = getLanguageBasedOnUserLanguage(userLanguage, availableLanguages);
        languageDropdown.value = defaultLanguage;

        function updateContent(language) {
            const contentItems = document.querySelectorAll('[langSwrs]');

            contentItems.forEach(item => {
                const itemId = item.getAttribute('data-langSwitch-item');
                const languageEntries = languageData[language] || [];
                const fallbackEntries = languageData["en"] || [];
            
                const getContentById = (id, entries) => {
                    const entry = entries.find(entry => entry.key === id);
                    return entry ? entry.value : null;
                };
                    
                
                let content = getContentById(itemId, languageEntries) || getContentById(itemId, fallbackEntries);

                if (!content) {
                    if (item.classList.contains('textareaSpecSubmitMessage')) {
                        content = item.placeholder;
                    } else if (item.hasAttribute('data-textContent')) {
                        content = item.getAttribute('data-textContent');
                    } else if (item.tagName === 'INPUT') {
                        if (item.type === 'text' || item.type === 'email' || item.type === 'password' || item.type === 'file') {
                            content = item.placeholder;
                        } else if (item.type === 'button' || item.type === 'submit') {
                            content = item.value;
                        }
                    } else if (item.tagName === 'TEXTAREA') {
                        content = item.value;
                    } else if (item.tagName === 'SELECT') {
                        const selectedOption = item.options[item.selectedIndex];
                        if (selectedOption) {
                            content = selectedOption.textContent;
                        }
                    } else if (item.tagName === 'BUTTON') {
                        content = item.textContent;
                    } else if (item.tagName === 'A') {
                        content = item.textContent;
                    } else if (item.tagName === 'DIV' || item.tagName === 'SPAN') {
                        content = item.textContent;
                    } else if (item.tagName === 'IMG') {
                        content = item.alt;
                        if (item.classList.contains('imgWSpesTollTip')) {
                            content = item.getAttribute("data-bs-original-title");
                        }
                    } else {
                        content = item.textContent;
                    }
                }



                if (item.classList.contains('textareaSpecSubmitMessage')) {
                    item.placeholder = content;
                } else if (item.hasAttribute('data-textContent')) {
                    item.setAttribute('data-textContent', content);
                } else if (item.tagName === 'INPUT' && (item.type === 'text' || item.type === 'email' || item.type === 'password')) {
                    item.placeholder = content;
                } else if (item.tagName === 'TEXTAREA') {
                        item.value = content;
                } else if (item.tagName === 'SELECT') {
                    const option = item.querySelector(`option[value="${content}"]`);
                    if (option) {
                        option.selected = true;
                    }
                } else if (item.tagName === 'BUTTON' || (item.tagName === 'INPUT' && item.type === 'button')) {
                    item.textContent = content;
                } else if (item.tagName === 'A') {
                    item.textContent = content;
                } else if (item.tagName === 'DIV' || item.tagName === 'SPAN') {
                    item.textContent = content;
                } else if (item.tagName === 'IMG') {  
                    if (item.classList.contains('imgWSpesTollTip')) {
                        item.setAttribute("data-bs-original-title", content);
                    } else {
                        item.alt = content; 
                    }
                } else {
                    item.textContent = content;
                }
            });
            try {
            } catch {
            }
        }

        languageDropdown.addEventListener("change", function() {
            const selectedLanguage = this.value;
            updateContent(selectedLanguage);
            try {
                localStorage.setItem('selectedLanguage', selectedLanguage);
            } catch {
            }
        });

        const savedLanguage = localStorage.getItem('selectedLanguage') || defaultLanguage;
        languageDropdown.value = savedLanguage;
        updateContent(savedLanguage);

    }

    (() => {
        let baseFooterContentAdded = false;
        let baseNavContentAdded = false;
        let is404Page = false;

        function checkInitialization() {
            if ((baseFooterContentAdded && baseNavContentAdded) || is404Page) {
                initialize();
            }
        }
        if (window.location.pathname === '/404.html' || document.title.includes('404')) {
            is404Page = true;
                checkInitialization();
        }
        document.addEventListener('baseFooterContentAdded', function () {
            baseFooterContentAdded = true;
            checkInitialization();
        });
        document.addEventListener('baseNavContentAdded', function () {
            baseNavContentAdded = true;
            checkInitialization();
        });

    })();
    

})();
