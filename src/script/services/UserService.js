/**
 * Class that will handle Http request for the User class. 
 */
//https://www.freecodecamp.org/news/how-to-send-http-requests-using-javascript/

class UserService {
    constructor() {
        
    }

    /**
     * Function that sends the users information to the backend. POST
     * @param {*} email Users email 
     * @param {*} password Users password
     * @param {*} username Users username
     */
    static async login(email, password, username) {

        fetch("http://våran Springboot Java backend", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                username: username,
            })
        })
        console.log("Email: ", email, " Password: ", password, " Username: ", username);
    }

    /**
     * Function that sends a request about a user that want to login.
     */
    
}