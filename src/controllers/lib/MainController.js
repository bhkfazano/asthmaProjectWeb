export default class MainController {

  constructor(context) {
    this.handleChange = this.handleChange.bind(context);
  }

  handleChange(e) {
    const item = e.target;
	const values = { ...this.state.values };
    values[item.id] = item.value;
    this.setState( {values : values} );
	}

}
