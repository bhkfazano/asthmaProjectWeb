import MainController from './MainController.js';
import { PatientRepository } from '../../api/index';

export default class ManagePatientController extends MainController {

    constructor(context) {
        super(context);
        this.fetch = this.fetch.bind(context);
        this.toggleForm = this.toggleForm.bind(context);
        this.handleSubmit = this.handleSubmit.bind(context);
        this.patientRepository = new PatientRepository();
    }

    async fetch(user) {
        console.log(this.props);
    }

    async toggleForm() {
        var values = { ...this.state.values };
        values.add = !values.add;
        values.cpf = "";
        values.full_name = "";
        values.personal_phone = "";
        values.birth_date = "";
        values.email = "";
        return this.setState({ values });
    }

    async handleSubmit() {

        console.log(this.state)

        const { cpf, full_name, personal_phone, email, birth_date } = {...this.state.values};

        const data = await this.controller.patientRepository.signup({
            cpf,
            full_name,
            personal_phone,
            email,
            birth_date,
            //admin: false
        });
        console.log(data); //precisa exibir o código e erros
    }

}


///export default class ManagePatientController extends MainController {

///    constructor(context) {
///     super(context);
///    }

    

///}
