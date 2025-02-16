

const email = document.getElementById("emailBox");
const password = document.getElementById("passwordBox");
const username = document.getElementById("usernameBox");

function test() {
    const buttonClicked = document.getElementById("signUpButton")
    alert( "Email:  " + email.value + " password: " + password.value + " username: " + username.value)

}

document.getElementById("signUpButton").addEventListener("click", test)