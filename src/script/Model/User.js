/**
 * Class to create a new User
 * som ska flyttas till Model
 */

class User {

    constructor(email, password, username) {
        this.email = email;
        this.password = password;
        this.username = username;

        // Validate password and Email Boolean
        this.isPasswordValid = this.checkPassword(); 
        this.isEmailValid = this.checkEmail();

    }

    // Function to check if password is valid
    checkPassword() {
        const passwordElement = document.getElementById("passwordFormatWrong");
        passwordElement.innerHTML = ""
            
        if (this.password.length < 8) {
            passwordElement.innerHTML = `<p>Password to short</p>`;
            return false;
        }
        
        if(!this.containsSpecialChar()) {
            passwordElement.innerHTML = `<p>Password must contain special character</p>`;
            return false
        }

        return true;
    }
    
    // Function to see if the password contains a special character
    containsSpecialChar() {
        const specialChar = "!@#$%^&*()\-+={}[\]:;'<>,.?\/|\\";
        for (let i = this.password.length - 1; i >= 0; i--) {
            if (specialChar.includes(this.password[i])) {
                return true;
            }
        }
        return false;
    }

    // Function to see if the email is valid
    checkEmail() {

        console.log("Email kör")
        const emailElement = document.getElementById("emailFormatWrong");
        emailElement.innerHTML = "";

        if (this.email.trim() === "") {
            emailElement.innerHTML = `<p>Email field cannot be empty</p>`;
            return false;
        }

        let emailCorrect = false;

        for (let i = this.email.length - 1; i >= 0; i--){
            if (this.email[i] === "@") {
                emailCorrect = true;
                break;
            }
        }
        
        if (!emailCorrect) {
            emailElement.innerHTML = `<p> Email format wrong </p>`;
            return false;
        }

        return true;
    }

    // Function that returns the values of password and email to verify the users input
    isValid() {
        return this.isPasswordValid && this.isEmailValid;
    }

    yey() {
        alert("Account created");
    }
}
