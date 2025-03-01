/**
 * View class for User. This class get the information from the user and then sends it to the UserController class.
 * This class also updates the html for the sign in file.
 */

class UserView {
    constructor() {
        this.emailElement = document.getElementById("emailFormatWrong");
        console.log("UserView instantiated i UserView");
        
        // For password
        this.passwordInput = document.getElementById("passwordBox");
        this.passwordChecklist = document.getElementById('password-checklist');
        

        this.rules = {
            length:document.getElementById("length"),
            number:document.getElementById("number"),
            capital:document.getElementById("uppercase"),
            special:document.getElementById("specialChar")
        }

        this.passwordInput.addEventListener("focus", () => this.showMessage());
        this.passwordInput.addEventListener("blur", () => this.hideMessage());
        this.passwordInput.addEventListener("input", () => this.controller.validatePassword(this.passwordInput.value));
        
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

        if (!this.controller.isFormValid(email, password)) { 
            alert("Invalid information");
            this.updateUIEmail({ isEmailValid: false })
            return;
        }
        this.updateUIEmail({ isEmailValid: true })

        this.controller.handleUserInput(email, password, username);
    }

    /**
     * Function that calls the updateEmailFeedback to update the p tag under the input boxes.
     * Called from controller.
     * @param {*} user 
     */
    updateUIEmail({ isEmailValid }) {
        this.emailElement.innerHTML = isEmailValid ? "" : "<p>Email format is invalid</p>";
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
    // ------------------------------------------------------------------------
    /**
     * Password validation
     */

    showMessage() {
        console.log("showMessage");
        this.passwordChecklist.style.display = "block";
        this.passwordChecklist.style.opacity = "1";
        setTimeout(() => {
            this.passwordChecklist.classList.add("show");
        }, 1);
    }

    hideMessage() {
        console.log("hideMessage");
        this.passwordChecklist.classList.remove("show");
        setTimeout(() => {
            this.passwordChecklist.style.display = "none";
            this.passwordChecklist.style.opacity = "0";
        }, 1); // Samma tid som transition i CSS (0.5s)
    }

    updatePasswordValidation(rules) {
        rules.forEach(rule => {
            this.updateRule(rule.id, rule.valid);
        });
    }

    updateRule(ruleId, isValid) {
        
        const element = document.getElementById(ruleId); 
        
        if (isValid) {
            element.classList.remove("invalid");
            element.classList.add("valid");
        } else {
            element.classList.remove("valid");
            element.classList.add("invalid");
        }
    }
}
