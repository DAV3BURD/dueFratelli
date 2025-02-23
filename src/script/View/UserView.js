/**
 * View class for User. This class get the information from the user and then sends it to the UserController class.
 * This class also updates the html for the sign in file.
 */

class UserView {
    constructor() {
        this.passwordElement = document.getElementById("passwordFormatWrong");
        this.emailElement = document.getElementById("emailFormatWrong");

        // Event listener för Sign Up-button
        document.getElementById("signUpButton").addEventListener("click", () => this.handleSignUp());
    }

    /**
     * Function that get the information from the input boxes and then transfer that information the controller class. 
     */
    handleSignUp() {
        const email = document.getElementById("emailBox").value;
        const password = document.getElementById("passwordBox").value;
        const username = document.getElementById("usernameBox").value;

        this.controller.handleUserInput(email, password, username);
    }


    /**
     * Function that updates the text under the input boxes depending on isValid value. For Email
     * @param {*} isValid 
     */
    updateEmailFeedback(isValid) {
        if (isValid) {
            this.emailElement.innerHTML = "";
        } else {
            this.emailElement.innerHTML = "<p>Email is invalid</p>";
        }
    }

    /**
     * Function that updates the text under the input boxen depending on isValid value. For password.
     * @param {*} isValid True or false
     */
    updatePasswordFeedback(isValid) {
        if (isValid) {
            this.passwordElement.innerHTML = "";
        } else {
            this.passwordElement.innerHTML = "<p>Password is invalid</p>";
        }
    }

    /**
     * Function that calls the updatePasswordFeedback and updateEmailFeedback to update the p tag under the input boxes.
     * Called from controller.
     * @param {*} user 
     */
    updateUI({ isEmailValid, isPasswordValid }) {
        this.updateEmailFeedback(isEmailValid);
        this.updatePasswordFeedback(isPasswordValid);
    }

    /**
     * 
     */
    showSuccessMessage() {
        alert("Account created");
    }
    
    /**
     * Function to connect view to controller. Called in the Main class.
     * @param {*} controller 
     */
    setController(controller) {
        this.controller = controller;
    }
}
