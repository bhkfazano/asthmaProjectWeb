import MainController from './MainController.js';
import { ProfessionalRepository} from '../../api/index';
import { setUserSession, getToken, storeState } from '../../utils/Common';

export default class LoginController extends MainController {

  constructor(context) {
    super(context);
    this.submitAction = this.submitAction.bind(context);
    this.professionalRepository = new ProfessionalRepository();
  }

  async submitAction() {
    const values = { ...this.state.values };
    const token = getToken();

    // const config ={
    //   headers: { Authorization : `Bearer ${token}` }
    // };
  
    const res = await this.controller.professionalRepository.login(values);

    if (res && res.status === 200) {
      delete res.data.prof.password;
      setUserSession(res.data.token, res.data.prof._id);
      //console.log(res);
      await this.props.setUser(res.data.prof);
      await this.props.setPatients(res.data.prof.associated_patients);

      storeState(this.props.view, this.props.user);
      
      return this.props.history.push('/dashboard#home');
    }
  }

}
