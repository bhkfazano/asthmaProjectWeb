import MainController from './MainController.js';
import { PatientRepository } from '../../api/index';
import { storeState } from '../../utils/Common';


export default class ManagePatientController extends MainController {

    constructor(context) {
        super(context);
        this.fetch = this.fetch.bind(context);
        this.toggleForm = this.toggleForm.bind(context);
        this.handleSubmit = this.handleSubmit.bind(context);
        this.handleClick = this.handleClick.bind(context);
        this.handleStep = this.handleStep.bind(context);
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
        values.hm_1 = "";
        values.hm_2 = "";
        values.hm_3 = "";
        values.hm_4 = "";
        values.hm_5 = "";
        values.hm_6 = "";
        values.steps = "";
        values.km = "";
        values.other = "";
        values.resp = "";
        values.obs = "";        
        values.step = 1;

        const errors = { ...this.state.errors };

        errors.e_birth_date = false;
        errors.e_cpf = false;
        errors.e_email = false;
        errors.e_full_name = false;
        errors.e_personal_phone = false;
        errors.step1 = false;
        errors.step2 = false;
        errors.step3 = false;
        
        return this.setState({ values, errors });
    }
    
    async handleSubmit() {
        
        const { cpf, full_name, personal_phone, email, birth_date, steps, km, other, resp, obs, hm_1, hm_2, hm_3, hm_4, hm_5, hm_6, step } = {...this.state.values}
        const errors = { ...this.state.errors };
        const values = { ...this.state.values };
        
        if (!steps && !km && !other && !resp && !obs) {
            errors.step3 = true
            return this.setState({ errors });
        }
        errors.step3 = false;
        try {
            const data = await this.controller.patientRepository.register({
                cpf,
                full_name,
                personal_phone,
                email,
                birth_date,
                medicalHistory: {
                    hm_1,
                    hm_2,
                    hm_3,
                    hm_4,
                    hm_5,
                    hm_6
                },
                steps,
                km,
                other,
                resp,
                obs,
                professional_id: this.props.user._id
            });
            const patients = await this.controller.patientRepository.fetchByProfessional({ id:this.props.user._id });
            await this.props.setPatients(patients.data.response);
            storeState(this.props.view, this.props.user, this.props.patients);

            return this.controller.toggleForm()
        } catch(e) {
            values.step = 1;        
            errors.step1 = "CPF ou email ja cadastrados!";  
            console.log(e.response);
            return this.setState({values, errors});
        }

    }

    handleStep() {

        const { cpf, full_name, personal_phone, email, birth_date,
                hm_1, hm_2, hm_3, hm_4, hm_5, hm_6 } = { ...this.state.values };
        var { values } = this.state;
        
        if (values.step == 1) {
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
                values.step = 2;
                this.setState({ values });
            }
            return this.setState({ errors });

        } else if (values.step == 2) {
            const errors = { ...this.state.errors };

            if (hm_1 && hm_2 && hm_3 && hm_4 && hm_5 && hm_6) {
                errors.step2 = false;
                values.step = 3;
                return this.setState({ values, errors });
            }
            errors.step2 = true
            return this.setState({ errors });
        
        }
            

    }

    async handleClick(patient) {
        this.props.changeView('patient');
        await this.props.setPatient(patient);
        return this.props.history.push(`/dashboard#patient?id=${patient.pat._id}`);
    }

}



///export default class ManagePatientController extends MainController {

///    constructor(context) {
///     super(context);
///    }

    

///}
