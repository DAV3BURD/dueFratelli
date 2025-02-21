/**
 * Controller class for User 
 */

class UserController {
    constructor() {
        
    }

    handleUserInput(email, password, username) {
        // Skapa en användare med den inmatade informationen
        const user = new User(email, password, username);
        
        if (user.isValid()) {

            this.view.updateUI(user);
            this.view.showSuccessMessage()
        } else {
            // Om användaren inte är giltig, visa felmeddelanden
            this.view.showErrorMessages(user);
        }
    }

    setView(view) {
        this.view = view;
    }
}