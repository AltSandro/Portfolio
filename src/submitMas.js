//Cкприпт челез emailJS
(() => {
    (function(){
        emailjs.init({
            publicKey: "5maW-jT_4DU9RPENV",
        }); // Замените YOUR_PUBLIC_KEY на ваш ключ из сайта пользователя EmailJS
    })();

    document.getElementById('contactSubmitButton').addEventListener('click', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const domain = window.location.hostname;
       // const recaptchaResponse = grecaptcha.getResponse();


        // Проверка капчи
       /*if (!recaptchaResponse) {
            showVisitorErrorMessageData('Please complete the reCAPTCHA.');
            return;
        }*/
        
        
        // Вызываем функцию для проверки данных
        if (!validateContactForm(name, email, message)) {
            return;
        };
        
        // Далее проводим защиту от XSS (простейший вариант)
        function sanitizeInput(input) {
            return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        };

        const templateParams = {
            from_name: name,
            from_email: email,
            message: sanitizeInput(message),
            domain: domain,
           // 'g-recaptcha-response': recaptchaResponse
        };

        emailjs.send('service_91ok17c', 'template_8jenbmb', templateParams) //первый агргумент 'Email servises', второй шаблон 'Email Templates
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                window.location.hash = 'submitPopup'; // добавляет хэш #submitPopup для активации CSS селектора видимости
                removeVisitorErrorMessageData();

                // Выводим данные из формы в консоль //Чисто для отладки
                //console.log("Name: " + name);
                //console.log("Email: " + email);
                //console.log("Message: " + message);

                // Очищаем поля ввода
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('message').value = "";

            }).catch(function(error) {
                console.log('FAILED...', error);
                showVisitorErrorMessageData('Error sending message. Please try again later...');
            });
    });

    //Проверки на корректность
    function validateContactForm(name, email, message) {
        // Простейшая валидация данных
        if (name === "" || email === "" || message === "") {
            showVisitorErrorMessageData('Please fill out all fields.');
            return false;
        };

        // Проверка корректности email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            showVisitorErrorMessageData('Please enter a valid email address.');
            return false;
        };

        // Ограничение на длину сообщения
        const maxMessageLength = 2048; // Пример: ограничение до 2048 символов
        if (message.length > maxMessageLength) {
            showVisitorErrorMessageData(`Message exceeds ${maxMessageLength} characters. Please shorten your message.`);
            return false;
        };

        return true;
    };

    //активируем видимость элемента
    function showVisitorErrorMessageData(message) {
        let visitorErrorMessageData = document.querySelector(".visitorErrorMessageData");
        
        // Очистить предыдущие текстовые узлы, кроме кнопки
        let button = visitorErrorMessageData.querySelector(".contactButtonCloseErrMessage");
        visitorErrorMessageData.innerHTML = '';
        visitorErrorMessageData.appendChild(document.createTextNode(message));
        visitorErrorMessageData.appendChild(button);
    
        visitorErrorMessageData.classList.remove("d-none"); // делаем видимым
    }
    
    //Закрытие окна ошибки (у крестика должен быть удалено стандартное поведение)
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





