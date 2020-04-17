import MainController from './MainController.js';

export default class DashboardController extends MainController {

    constructor(context) {
        super(context);
        this.toggleMenu = this.toggleMenu.bind(context);
    }

    toggleMenu() {
        var values = { ...this.state.values };
        values.showMenu = !values.showMenu;
        this.setState({ values });
    }


}
