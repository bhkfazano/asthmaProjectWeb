import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import '../styles/Login.css'

class FitbitSync extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
                cpf: "",
                password: "",
                token: ""
            }
        };
        this.sendToken = this.sendToken.bind(this);
    }

    componentDidMount() {
        const token = this.props.location.search.split("=")[1];
        const values = { ...this.state.values };
        values.token = token;
        this.setState({ values });
    }

    handleChange(e) {
        const item = e.target;
        const values = { ...this.state.values };
        values[item.id] = item.value;
        this.setState({ values: values });
    }

    sendToken() {
        const { password, token, cpf } = this.state.values;
        axios.post('http://localhost:8080/fitbitSync', { cpf, password, token });
    }

    render() {

        const { cpf, password, token } = this.state.values;

        return (
            <div className="container-box">
                <form className="form-horizontal">
                    <div className="login-title">Token</div>
                    <div className="form-group">
                        <div className="input-box">
                            <input value={token} type="text" className="form-control input" placeholder="Token" readOnly id="token" />
                        </div>
                    </div>
                    <div className="login-title">Credenciais</div>
                    <div className="form-group">
                        <div className="input-box">
                            <input value={cpf} type="text" className="form-control input" placeholder="Insira seu cpf" id="cpf" onChange={event => this.handleChange(event)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-box">
                            <input value={password} type="password" className="form-control input" id="password" placeholder="Insira sua senha" onChange={event => this.handleChange(event)} />
                        </div>
                    </div>
                    <div className="bbtt" >
                        <button type="button" className="login-button" onClick={this.sendToken}>Validar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, {  })(FitbitSync);