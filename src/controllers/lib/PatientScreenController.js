import MainController from './MainController.js';
import { PatientRepository } from '../../api/index';
import { storeState } from '../../utils/Common';



export default class PatientScreenController extends MainController {

    constructor(context) {
        super(context);
        this.toggleForm = this.toggleForm.bind(context);
        this.handleSubmit = this.handleSubmit.bind(context);
        this.handleTimeChange = this.handleTimeChange.bind(context);
        this.handleTypeChange = this.handleTypeChange.bind(context);
        this.handleSelect = this.handleSelect.bind(context);
        this.generateCSVdata = this.generateCSVdata.bind(context);
        this.patientRepository = new PatientRepository();
    }

    async toggleForm() {
        const values = {...this.state.values};
        if (values.changeGoals == true) {
            values.steps = "";
            values.km = "";
            values.other = "";
            values.resp = "";
            values.obs = "";
        }
        values.changeGoals = !values.changeGoals;
        await this.setState({ values });
    }

    async handleSubmit() {
        var { steps, km, other, resp, obs} = this.state.values;
        const res = await this.controller.patientRepository.updateGoals({
            steps,
            km,
            other,
            resp,
            obs,
            patient_id : this.props.currentPatient.pat._id,
            goals_id : this.props.currentPatient.goals._id
        });

        const patients = await this.controller.patientRepository.fetchByProfessional({ id : this.props.currentUser._id });
        this.props.setPatients(patients.data.response);
        await this.props.setPatient(res.data);
        storeState(null, null, this.props.patients);
        return this.controller.toggleForm();

    }

    handleTypeChange(e) {
        const value = e.target.id;
        const values = { ...this.state.values };
        values.graphic_view = value;
        this.setState({ values: values });
    }

    handleTimeChange(e) {
        const value = e.target.id;
        const values = { ...this.state.values };
        values.graphic_time = value;
        this.setState({ values: values });
    }

    handleSelect(e) {
        const value = e.target.value;
        const values = { ...this.state.values };
        values.date = value;
        this.setState({ values: values });
    }

    generateCSVdata() {

        const { pat, history, goals } = this.props.currentPatient;

        const csvData = [
            ["data", "nome", "cpf", "data de nascimento", "e-mail", "id fitbit", "telefone", "peso", "altura", "meta de passos", "meta de distancia", "passos", "distancia"]
        ];

        for (var i = 0; i < history.steps.length; i ++) {
            csvData.push([
                history.steps[i].dateTime, pat.full_name, pat.cpf, pat.birth_date, pat.email, pat.fitbit_id, pat.personal_phone,
                pat.weight, pat.height, goals.stepsPerDay, goals.kmPerWeek, history.steps[i].value, history.distance[i].value
            ]);
        }
        return csvData;
    }

}
