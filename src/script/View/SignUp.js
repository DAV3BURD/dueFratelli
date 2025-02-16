// Event listener för button 
document.getElementById("signUpButton").addEventListener("click", function () {
    console.log("Button clicked");

    const inputEmail = document.getElementById("emailBox").value;
    const inputPassword = document.getElementById("passwordBox").value;
    const inputUsername = document.getElementById("usernameBox").value;

    UserController.handleSignUp(inputEmail, inputPassword, inputUsername);

});