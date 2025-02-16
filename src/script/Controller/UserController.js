/**
 * Controller class for User maybe handle 
 */

class UserController {

    static handleSignUp(email, password, username) {
        const newUser = new User(email, password, username);

        if (newUser.isValid()){
            /*
            Denna kan då ändras till sendToBackEnd tex för här inne är användaren  godkännd
             */
            newUser.yey()
        }
    }

}