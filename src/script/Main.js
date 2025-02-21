/**
 * Main class that is called when the browser loads,
 */
class Main {
    constructor() {

        this.controller = new UserController();
        this.view = new UserView();

        // Connecting UserController and UserView
        this.view.setController(this.controller);
        // Connecting UserView and Controller
        this.controller.setView(this.view);
    }
}

// Event listener for Main class
document.addEventListener("DOMContentLoaded", () => {
    new Main();
});