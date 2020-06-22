import MainController from './MainController.js';
import { ProfessionalRepository, PatientRepository} from '../../api/index';
import { setUserSession, getToken, storeState } from '../../utils/Common';

export default class LoginController extends MainController {

  constructor(context) {
    super(context);
    this.submitAction = this.submitAction.bind(context);
    this.professionalRepository = new ProfessionalRepository();
    this.patientRepository = new PatientRepository();
  }

  async submitAction() {
    const values = { ...this.state.values };
    values.loading = true;
    this.setState({ values });

    try{
      const res = await this.controller.professionalRepository.login(values);

      const { _id } = res.data.prof;
      const patients = await this.controller.patientRepository.fetchByProfessional({ id : _id });

      if (res && res.status === 200) {
        values.error = false;
        values.loading = false;
        this.setState({values : values});
        delete res.data.prof.password;
        setUserSession(res.data.token, res.data.prof._id);

        await this.props.setUser(res.data.prof);
        await this.props.setPatients(patients.data.response);

        storeState(this.props.view, this.props.user, this.props.patients);
        
        return this.props.history.push('/dashboard#home');
      }
    }
    catch(error){
      if (error.response.status === 400 || error.response.status == 401) {
        values.error = "CPF ou senha inválidos!";
        values.loading = false;
        this.setState({values : values});
      }
      else {
        values.error = "Erro no servidor, tente novamente mais tarde!";
        values.loading = false;
        this.setState({values : values});
      }
    }
  }
}
