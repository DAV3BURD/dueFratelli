/**
 * Controller class for User 
 */

class UserController {
    constructor() {
        
    }

    handleUserInput(email, password, username) {

        const user = new User(email, password, username);

        console.log("Password:", password);
        console.log("Password valid:", user.isPasswordValid);
        console.log("Email valid:", user.isEmailValid);
        
        this.view.updateUI({
                isEmailValid: user.isEmailValid,
                isPasswordValid: user.isPasswordValid
        });
        
        if (user.isValid()) {
            console.log("User is valid")

            this.view.showSuccessMessage()
            
            // Only call this when the users credentials is valid
            this.user.login();
        } else {
            console.log("Error Messages:");
            console.log("isPasswordValid:", user.isPasswordValid);
            console.log("isEmailValid:", user.isEmailValid);
        }
    }

    setView(view) {
        this.view = view;
    }
}