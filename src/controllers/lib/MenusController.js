import MainController from './MainController.js';

export default class MenusController extends MainController {

    constructor(context) {
        super(context);
        this.handleClick = this.handleClick.bind(context);
        this.handleSideClick = this.handleSideClick.bind(context);
    }

    async handleClick(id) {
        this.props.history.push("/dashboard#" + id);
        await this.props.changeView(this.props.history.location.hash);
        this.props.toggle();
    }

    async handleSideClick(id) {
        this.props.history.push("/dashboard#" + id);
        await this.props.changeView(this.props.history.location.hash);
    }


}
