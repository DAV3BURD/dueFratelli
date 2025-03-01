/**
 * Controller class for User 
 */

class UserController {
    constructor() {
        console.log("UserController instantiated i Usercontroller");
        this.isEmailValid = false;
        this.isPasswordValid = false;
    }

    handleUserInput(email, password, username) {

        const user = new User(email, password, username);

        this.view.updateUIEmail({ isEmailValid: user.isEmailValid });
        // En dubbel koll om användaren verkligen stämmer
        if (user.isValid()) {

            this.view.showSuccessMessage()
            // Only call this when the users credentials is valid
            //user.login();

            window.location.href = "../components/index.html";
        } 
    }

    isFormValid(email, password) {
        const user = new User(email, password, "");

        this.isEmailValid = user.isEmailValid;
        this.isPasswordValid = user.isPasswordValid;
        return user.isValid();
    }

    validatePassword(password) {
        const user = new User("", password, "");
        const rules = user.getPasswordValidationRules();
        this.view.updatePasswordValidation(rules);
    }

    setView(view) {
        this.view = view;
    }
}