
(() => {
    (function(){
        emailjs.init({
            publicKey: "hy007_8F01aoLXfY7",
        }); 
    })();


    document.getElementById('contactSubmitButton').addEventListener('click', function(event) {
        event.preventDefault(); 
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const domain = window.location.hostname;
        const recaptchaResponse = grecaptcha.getResponse();
 

        const capchaContactElem = document.querySelector(".capchaContactElem");
        if (capchaContactElem.classList.contains("d-none")) {
            capchaContactElem.classList.remove("d-none");
        };

        
        if (!validateContactForm(name, email, message)) {
            return; 
        };

        
        if (!recaptchaResponse) {
            changeErrorMessageData(document.querySelector('[sumberrmass="1"]'), 1);
            showErrorVisualElement();
            return; 
        };

        
        function sanitizeInput(input) {
            return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        };

        const templateParams = {
            from_name: name,
            from_email: email,
            message: sanitizeInput(message),
           'g-recaptcha-response': recaptchaResponse
        };

        emailjs.send('service_91ok17c', 'template_8jenbmb', templateParams) 
            .then(function(response) {
                window.location.hash = 'submitPopup'; 
                removeVisitorErrorMessageData();
                grecaptcha.reset();
                capchaContactElem.classList.add("d-none"); 
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('message').value = "";

            }).catch(function(error) {
                changeErrorMessageData(document.querySelector('[sumberrmass="2"]'), 2);
                showErrorVisualElement();
            });
    });

    function validateContactForm(name, email, message) {
        if (name === "" || email === "" || message === "") {
            changeErrorMessageData(document.querySelector('[sumberrmass="3"]'), 3);
            showErrorVisualElement();
            return false;
        };
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            changeErrorMessageData(document.querySelector('[sumberrmass="4"]'), 4);
            showErrorVisualElement();
            return false;
        };
        const maxMessageLength = 2048; 
        if (message.length > maxMessageLength) {
            changeErrorMessageData(`${document.querySelector('[sumberrmass="5"]')} ${maxMessageLength} ${document.querySelector('[sumberrmass="6"]')}`, 5, maxMessageLength);
            showErrorVisualElement();
            return false;
        };

        return true;
    };

    function changeErrorMessageData(messageElement, elemValue, elemErrOption) {
        let errorInvisibleCurrentMessageContainer = document.querySelector('[errorInvisibleCurrentMessageContainer]');
        
        errorInvisibleCurrentMessageContainer.textContent = messageElement.textContent;
        errorInvisibleCurrentMessageContainer.setAttribute("errinvcontent", elemValue);
        if (elemValue == 5) {
            errorInvisibleCurrentMessageContainer.setAttribute("errcurcontoption", elemErrOption);
        }
    };    

    function showErrorVisualElement() {
        let visitorErrorMessageData = document.querySelector(".visitorErrorMessageData");
        visitorErrorMessageData.classList.remove("d-none"); 
    }

    changeElementVisibility(".visitorErrorMessageData",".contactButtonCloseErrMessage");
    
    function changeElementVisibility(elem, trigger) {
        let elemI = document.querySelector(elem);
        let triggerI = document.querySelector(trigger);
    
        if (elemI && triggerI) {
            triggerI.addEventListener('click', function(event) {
                elemI.classList.toggle('d-none');
            });
        } else {
            console.error('Element or trigger not found in "changeElementVisibility" function.');
        };
    };

    
    function removeVisitorErrorMessageData() {
        let contactButtonCloseErrMessage = document.querySelector(".contactButtonCloseErrMessage");
        if (contactButtonCloseErrMessage) {
                contactButtonCloseErrMessage.click(); 
        };
    };

    document.addEventListener("DOMContentLoaded", function() {
    const targetNode = document.querySelector(".errorInvisibleMessages");

    if (targetNode) {
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList' || mutation.type === 'characterData' || mutation.type === 'subtree') {
                    changeErrorInvisibleCurrentMessageContainer();
                    break;
                }
            }
        });

        observer.observe(targetNode, { childList: true, characterData: true, subtree: true });
    }
});

function changeErrorInvisibleCurrentMessageContainer() {
    let errorInvisibleCurrentMessageContainer = document.querySelector("[errorInvisibleCurrentMessageContainer]");
    let sumberrmassNumber = errorInvisibleCurrentMessageContainer.getAttribute("errinvcontent"); 
    let sumberrmass = document.querySelector(`[sumberrmass="${sumberrmassNumber}"]`);
    let sumberrmassTextContent = sumberrmass.textContent;
    let visitorErrorMessageData = document.querySelector(".visitorErrorMessageData");

    let button = visitorErrorMessageData.querySelector(".contactButtonCloseErrMessage");
    if (sumberrmassNumber == 5) {
        let errcurcontoption = errorInvisibleCurrentMessageContainer.getAttribute("errcurcontoption");
        let sumberrmassTextContentMix = document.querySelector(`[sumberrmass="${sumberrmassNumber}"]`).textContent +
            ` ${errcurcontoption} ` + 
            document.querySelector(`[sumberrmass="${+sumberrmassNumber + 1}"]`).textContent;
        
        errorInvisibleCurrentMessageContainer.textContent = sumberrmassTextContentMix;
        visitorErrorMessageData.textContent = sumberrmassTextContentMix; 
    } else {
        errorInvisibleCurrentMessageContainer.textContent = sumberrmassTextContent;
        visitorErrorMessageData.textContent = sumberrmassTextContent; 
    }
    
    visitorErrorMessageData.appendChild(button);
};


document.addEventListener("DOMContentLoaded", function() {
    const targetNode = document.querySelector(".errorInvisibleMessages");

    if (targetNode) {
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList' || mutation.type === 'characterData' || mutation.type === 'subtree') {
                    changeErrorInvisibleCurrentMessageContainer();
                    break;
                }
            }
        });

        observer.observe(targetNode, { childList: true, characterData: true, subtree: true });
    }
});

function changeErrorInvisibleCurrentMessageContainer() {
    let errorInvisibleCurrentMessageContainer = document.querySelector("[errorInvisibleCurrentMessageContainer]");
    let sumberrmassNumber = errorInvisibleCurrentMessageContainer.getAttribute("errinvcontent"); 
    let sumberrmass = document.querySelector(`[sumberrmass="${sumberrmassNumber}"]`);
    let sumberrmassTextContent = sumberrmass.textContent;
    let visitorErrorMessageData = document.querySelector(".visitorErrorMessageData");

    let button = visitorErrorMessageData.querySelector(".contactButtonCloseErrMessage");
    if (sumberrmassNumber == 5) {
        let errcurcontoption = errorInvisibleCurrentMessageContainer.getAttribute("errcurcontoption");
        let sumberrmassTextContentMix = document.querySelector(`[sumberrmass="${sumberrmassNumber}"]`).textContent +
            ` ${errcurcontoption} ` + 
            document.querySelector(`[sumberrmass="${+sumberrmassNumber + 1}"]`).textContent;
        
        errorInvisibleCurrentMessageContainer.textContent = sumberrmassTextContentMix;
        visitorErrorMessageData.textContent = sumberrmassTextContentMix; 
    } else {
        errorInvisibleCurrentMessageContainer.textContent = sumberrmassTextContent;
        visitorErrorMessageData.textContent = sumberrmassTextContent; 
    }
    
    visitorErrorMessageData.appendChild(button);
};
})();



window.onReCaptchaSuccess = function() {
    let submitButton = document.querySelector('.contactSubmitTrigger');
    if (submitButton) {
        submitButton.click();
    } else {
        console.error('Button element "contactSubmitButton" not found (0_0) ...');
    };
};




