import MainController from './MainController.js';
import { ProfessionalRepository } from '../../api/index';

export default class ManageTeamController extends MainController {

    constructor(context) {
        super(context);
        this.fetch = this.fetch.bind(context);
        this.toggleForm = this.toggleForm.bind(context);
        this.handleSubmit = this.handleSubmit.bind(context);
        this.professionalRepository = new ProfessionalRepository();
    }

    async fetch(user) {
        var team = [];
        if (user.admin) {
            team = await this.controller.professionalRepository.fetch(); 
            await this.props.setTeam(team);
        }
        console.log(this.props);
    }

    async toggleForm() {
        var values = { ...this.state.values };
        var errors = { ...this.state.errors };

        values.add = !values.add;
        values.cpf = "";
        values.full_name = "";
        values.personal_phone = "";
        values.birth_date = "";
        values.email = "";
        errors.e_birth_date = false;
        errors.e_cpf = false;
        errors.e_email = false;
        errors.e_full_name = false;
        errors.e_personal_phone = false;

        return this.setState({ values, errors });
    }

    async handleSubmit() {

        const { cpf, full_name, personal_phone, email, birth_date } = {...this.state.values};

        const values = {...this.state.values};
        const errors = {...this.state.errors};

        errors.e_birth_date = false;
        errors.e_cpf = false;
        errors.e_email = false;
        errors.e_full_name = false;
        errors.e_personal_phone = false;

        const email_test = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (cpf === "" || cpf.length != 11 || !(/^\d+$/.test(cpf))) {
            errors.e_cpf = true;
        }
        if (personal_phone.length != 11 || !(/^\d+$/.test(personal_phone))) {
            errors.e_personal_phone = true;
        }
        if (full_name === "") {
            console.log(full_name)
            errors.e_full_name = true;
        }
        if (email === "" || !email_test.test(String(email).toLowerCase())) {
            errors.e_email = true;
        }
        if (birth_date === "") {
            errors.e_birth_date = true;
        }
        
        if (!errors.e_email && !errors.e_full_name && !errors.e_personal_phone && !errors.e_cpf && !errors.e_birth_date) {
            
            const data = await this.controller.professionalRepository.signup({
                cpf,
                full_name,
                personal_phone,
                email,
                birth_date,
                admin: false
            });
            return console.log(data);
        }
        return this.setState({ errors });
    }
}
