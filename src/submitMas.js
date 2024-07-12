
(() => {
    (function(){
        emailjs.init({
            publicKey: "5maW-jT_4DU9RPENV",
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
            showVisitorErrorMessageData('Please complete the reCAPTCHA.');
            return; 
        };

        
        function sanitizeInput(input) {
            return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        };

        const templateParams = {
            from_name: name,
            from_email: email,
            message: sanitizeInput(message),
            domain: domain,
           'g-recaptcha-response': recaptchaResponse
        };

        emailjs.send('service_91ok17c', 'template_8jenbmb', templateParams) 
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                window.location.hash = 'submitPopup'; 
                removeVisitorErrorMessageData();
                grecaptcha.reset();
                capchaContactElem.classList.add("d-none"); 

                
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('message').value = "";

            }).catch(function(error) {
                console.log('FAILED...', error);
                showVisitorErrorMessageData('Error sending message. Please try again later...');
            });
    });

    
    function validateContactForm(name, email, message) {
        
        if (name === "" || email === "" || message === "") {
            showVisitorErrorMessageData('Please fill out all fields.');
            return false;
        };

       
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            showVisitorErrorMessageData('Please enter a valid email address.');
            return false;
        };

        
        const maxMessageLength = 2048; 
        if (message.length > maxMessageLength) {
            showVisitorErrorMessageData(`Message exceeds ${maxMessageLength} characters. Please shorten your message.`);
            return false;
        };

        return true;
    };

    
    function showVisitorErrorMessageData(message) {
        let visitorErrorMessageData = document.querySelector(".visitorErrorMessageData");
        
        
        let button = visitorErrorMessageData.querySelector(".contactButtonCloseErrMessage");
        visitorErrorMessageData.innerHTML = '';
        visitorErrorMessageData.appendChild(document.createTextNode(message));
        visitorErrorMessageData.appendChild(button);
    
        visitorErrorMessageData.classList.remove("d-none"); 
    };

    
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
})();



window.onReCaptchaSuccess = function() {
    let submitButton = document.querySelector('.contactSubmitTrigger');
    if (submitButton) {
        submitButton.click();
    } else {
        console.error('Button element "contactSubmitButton" not found (0_0) ...');
    };
};




