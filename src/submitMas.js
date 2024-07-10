(() => {
    (function(){
        emailjs.init("5maW-jT_4DU9RPENV"); 
    })();

    document.getElementById('contactSubmitButton').addEventListener('click', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        
        if (typeof grecaptcha === 'undefined') {
            showVisitorErrorMessageData('reCAPTCHA not loaded.');
            console.error('reCAPTCHA not loaded.');
            return;
        }

        const recaptchaResponse = grecaptcha.getResponse();
        
       
        if (!recaptchaResponse) {
            showVisitorErrorMessageData('Please complete the reCAPTCHA.');
            return;
        }

       
        if (!validateContactForm(name, email, message)) {
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

        console.log(templateParams); 

        emailjs.send('service_91ok17c', 'template_8jenbmb', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                window.location.hash = 'submitPopup'; 
                removeVisitorErrorMessageData();

                
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('message').value = "";
                grecaptcha.reset(); 

            }).catch(function(error) {
                console.error('FAILED...', error);
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
    }

    (function hideVisitorErrorMessageData() {
        let contactButtonCloseErrMessage = document.querySelector(".contactButtonCloseErrMessage");
        contactButtonCloseErrMessage.addEventListener('click', function(event) {
            let visitorErrorMessageData = document.querySelector(".visitorErrorMessageData");
            visitorErrorMessageData.classList.add("d-none");
        });
    })();

    function removeVisitorErrorMessageData() {
        let contactButtonCloseErrMessage = document.querySelector(".contactButtonCloseErrMessage");
        if (contactButtonCloseErrMessage) {
            contactButtonCloseErrMessage.click(); 
        };
    };
})();
