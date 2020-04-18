import MainController from './MainController.js';
import { ProfessionalRepository} from '../../api/index';
import { setUserSession, getToken } from '../../utils/Common';

export default class LoginController extends MainController {

  constructor(context) {
    super(context);
    this.submitAction = this.submitAction.bind(context);
    this.professionalRepository = new ProfessionalRepository();
    console.log(this.professionalRepository);
  }

  async submitAction() {
    const values = { ...this.state.values };
    const token = getToken();

    const config ={
      headers: { Authorization : `Bearer ${token}` }
    };
  
    const res = await this.controller.professionalRepository.login(values);
    if (res && res.status == 200) {
      setUserSession(res.data.token, res.data.prof._id);
      this.props.history.push('/dashboard#home');
      console.log(res);
    }
  }

}
