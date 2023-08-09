(() => {
  document.addEventListener("DOMContentLoaded", function (event) {
    // Add the processor of an event of pressing the Submit button
    let submitButton = document.getElementById("contactSumbitButton");
    submitButton.addEventListener("click", function (event) {
      let nameInput = document.getElementById("name");
      let emailInput = document.getElementById("email");
      let messageInput = document.getElementById("message");

      let name = nameInput.value;
      let email = emailInput.value;
      let message = messageInput.value;

      // We display data from form to console
      console.log("Name: " + name);
      console.log("Email: " + email);
      console.log("Message: " + message);

      // We clean the input fields
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    });
  });
})();
