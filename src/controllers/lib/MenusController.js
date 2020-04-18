import MainController from './MainController.js';

export default class MenusController extends MainController {

    constructor(context) {
        super(context);
        this.handleClick = this.handleClick.bind(context);
        this.handleSideClick = this.handleSideClick.bind(context);
    }

    async handleClick(id) {
        await this.props.changeView(id);
        sessionStorage.setItem('view', id);
        this.props.toggle();
        return this.props.history.push("/dashboard#" + this.props.view);
    }

    async handleSideClick(id) {
        await this.props.changeView(id);
        sessionStorage.setItem('view', id);
        return this.props.history.push("/dashboard#" + this.props.view);
    }


}
