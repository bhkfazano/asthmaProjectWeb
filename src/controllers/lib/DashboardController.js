import MainController from './MainController.js';
import { resetState, removeUserSession } from '../../utils/Common';

export default class DashboardController extends MainController {

    constructor(context) {
        super(context);
        this.toggleMenu = this.toggleMenu.bind(context);
        this.logout = this.logout.bind(context);
    }

    toggleMenu() {
        var values = { ...this.state.values };
        values.showMenu = !values.showMenu;
        this.setState({ values });
    }

    async logout() {
        removeUserSession();
        resetState();
        await this.props.changeView("home");
        await this.props.removeUser({});
        console.log(this.props);
        return this.props.history.push('/');
    }


}
