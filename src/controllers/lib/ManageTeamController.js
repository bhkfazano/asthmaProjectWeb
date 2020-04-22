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
        values.add = !values.add;
        values.cpf = "";
        values.full_name = "";
        values.personal_phone = "";
        values.birth_date = "";
        values.email = "";
        return this.setState({ values });
    }

    async handleSubmit() {

        const { cpf, full_name, personal_phone, email, birth_date } = {...this.state.values};
    

        const data = await this.controller.professionalRepository.signup({
            cpf,
            full_name,
            personal_phone,
            email,
            birth_date,
            admin: false
        });
        console.log(data); //precisa exibir o códdigo e erros
    }

}
