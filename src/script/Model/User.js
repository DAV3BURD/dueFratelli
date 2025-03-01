/**
 * Class for the creating and handle a user. This class is used to create a new user and that information will be sent to the backend.
 *  
 */

class User {

    constructor(email, password, username) {
        this.email = email;
        this.password = password;
        this.username = username;

        //this.userService = new UserService();

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
    /*
    isPasswordValid () {
        return this.getPasswordValidationRules().every(rule => rule.valid);
    }
    */

    getPasswordValidationRules() {
        return [
            { id: "length", valid: this.password.length >= 8 },
            { id: "number", valid: /[0-9]/.test(this.password) },
            { id: "uppercase", valid: /[A-Z]/.test(this.password) },
            { id: "specialChar", valid: /[!@#$%^&*]/.test(this.password) },
            
        ]
    }

    /**
     * Function to see if the password the user enters is valid.
     * @returns true if the password length is more then 8 letters and if the containsSpecialChar return true.
     */
    checkPassword() {
        return this.getPasswordValidationRules().every(rule => rule.valid);
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
        return this._isPasswordValid && this._isEmailValid;
    }

    /**
     * Function that will be called upon if the user credentials is valid. The function calls 
     */
    //async registerUser() {
      //  this.userService.login(this.email, this.password, this.username);
    //}

    
}
