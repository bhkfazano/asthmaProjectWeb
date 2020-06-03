import MainController from './MainController.js';

export default class PatientScreenController extends MainController {

    constructor(context) {
        super(context);
        this.toggleForm = this.toggleForm.bind(context);
        this.handleSubmit = this.handleSubmit.bind(context);
    }

    async toggleForm() {
        const values = {...this.state.values};
        values.changeGoals = !values.changeGoals;
        await this.setState({ values });
    }

    async handleSubmit() {
        const values = {...this.state.values};
        console.log(values);
    }


}
