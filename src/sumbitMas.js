(() => {
  document.addEventListener("DOMContentLoaded", function (event) {
    
    let submitButton = document.getElementById("contactSumbitButton");
    submitButton.addEventListener("click", function (event) {
      let nameInput = document.getElementById("name");
      let emailInput = document.getElementById("email");
      let messageInput = document.getElementById("message");

      let name = nameInput.value;
      let email = emailInput.value;
      let message = messageInput.value;

      
      console.log("Name: " + name);
      console.log("Email: " + email);
      console.log("Message: " + message);

      
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    });
  });
})();
