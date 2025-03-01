/**
 * Main class that is called when the browser loads,
 */
class Main {
    constructor() {

        this.controller = new UserController();
        this.view = new UserView();

        // Connecting UserController and UserView
        this.view.setController(this.controller);
        console.log("UserController instantiated");
        // Connecting UserView and Controller
        this.controller.setView(this.view);
        console.log("UserView instantiated");
    }
}

// Event listener for Main class
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded");
    new Main();
});