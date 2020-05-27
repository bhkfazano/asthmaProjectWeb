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

        const {cpf, full_name, personal_phone, email, birth_date } = {...this.state.values};
        const values = {...this.state.values};
        // date e email_test são usados para verificar se a data e e-mail recebidos estão no formato correto. Email_test porém, não pode dizer se algum e-mail enviado realmente existe
        // ele diz somente se o string recebido tem o formato adequado para um e-mail.
        const date = new Date(birth_date);
        const email_test = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        values.cpf_invalid = false;
        values.cpf_error = false;
        values.number_error = false;
        values.birth_date_error = false;
        values.name_error = false;
        values.e_mail_error = false;
        if(cpf === "" || cpf.length != 11 || !(/^\d+$/.test(cpf))){
            values.cpf_error = true;
        }
        if(personal_phone.length != 11 || !(/^\d+$/.test(personal_phone))){
            values.number_error = true;
        }
        // Verifica se a data de nascimento é valida, se utilizando do formato inglês para datas exemplo:
        // 16/02/1995 é valido no Brasil, mas no formato inglês, seria aceito somente 02/16/1995
        // São aceitos anos de nascimento entre 1920 e 2001.
        if(isNaN(date.getTime()) || birth_date.length != 10 || date.getFullYear() < 1920 || date.getFullYear() > 2001){
            values.birth_date_error = true;
        }
        if(full_name === "" || !/^[a-zA-Z]+$/.test(full_name)){
            values.name_error = true;
        }
        if(email === "" || !email_test.test(String(email).toLowerCase())){
            values.e_mail_error = true;
        }
        if(!values.cpf_invalid && !values.cpf_error && !values.number_error && !values.e_mail_error && !values.name_error && !values.birth_date_error){
            try{
                const data = await this.controller.professionalRepository.signup({
                    cpf,
                    full_name,
                    personal_phone,
                    email,
                    birth_date,
                    admin: false
                    });
                }
            catch(error){
                values.cpf_invalid = true;
                this.setState({values : values});
                }
            }
        this.setState({values : values});
        }
    }
