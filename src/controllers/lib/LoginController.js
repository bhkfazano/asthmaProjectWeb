import MainController from './MainController.js';
import { ProfessionalRepository} from '../../api/index';

export default class LoginController extends MainController {

  constructor(context) {
    super(context);
    this.submitAction = this.submitAction.bind(context);
    this.professionalRepository = new ProfessionalRepository();
    console.log(this.professionalRepository);
  }

  async submitAction() {
    const values = { ...this.state.values };
    const res = await this.controller.professionalRepository.login(values);
    console.log(res);
    //this.props.history.push('/dashboard#home');
  }

}
