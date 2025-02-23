/**
 * Class for the creating and handle a user. This class is used to create a new user and that information will be sent to the backend.
 *  
 */

class User {

    constructor(email, password, username) {
        this.email = email;
        this.password = password;
        this.username = username;

        this.userService = new UserService();

        // Validate password and Email Boolean
        this._isEmailValid = this.checkEmail();
        this._isPasswordValid = this.checkPassword();

    }

    /**
     * Getter function for the emailValidate
     */
    get isEmailValid() {
        return this._isEmailValid;
    }

    /**
     * Getter function for the passwordValidate
     */
    get isPasswordValid() {
        return this._isPasswordValid;
    }

    /**
     * Function to see if the password the user enters is valid.
     * @returns true if the password length is more then 8 letters and if the containsSpecialChar return true.
     */
    checkPassword() {
        return this.password.length >= 8 && this.containsSpecialChar();
    }

    /**
     * Function to check if the password the user enters contains a special character.
     * @returns true if the password contains a special character.
     */
    containsSpecialChar() {
        const specialChar = "!@#$%^&*()\-+={}[\]:;'<>,.?\/|\\"; 

        for (let i = this.password.length - 1; i >= 0; i--) {
            if (specialChar.includes(this.password[i])) {
                return true;
            }
        }
        return false;
    }

    /**
     * Checks the email length is not zero and that the it contains @
     * @returns true if the email the 
     */
    checkEmail() {
        for (let i = this.email.length - 1; i >= 0; i--){
            if (this.email[i] === "@" && this.email.trim() !== "") {
                return true;
            }
        }
        return false;
    }

    /**
     * Function that calls the checkPassword() and the checkEmail() functions. 
     * @returns true if checkPassword() and checkEmail() booth return true.
     */
    isValid() {
        //this.updateValidation();
        return this.isPasswordValid && this.isEmailValid;
    }

    /**
     * Function that will be called upon if the user credentials is valid. The function calls 
     */
    async registerUser() {
        this.userService.login(this.email, this.password, this.username);
    }

    
}
