import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';

import '../styles/Login.css'

class FitbitSync extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
                cpf: "",
                password: "",
                token: "",
                error: "",
                loading: false
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

    async sendToken() {
        const { password, token, cpf, error, loading } = this.state.values;
        const values = {...this.state.values};

        values.error = "";
        values.loading = true;
        await this.setState({ values });
        
        try {
            const res = await axios.post('https://asthma-project-api.herokuapp.com/fitbitSync', { cpf, password, token });
            if (res && res.status == 200) {
                values.loading = false;
                this.setState({ values });
                return this.props.history.push('/');
                console.log(res);
            }
        } catch(e) {
            if (e.response.status == 500) {
                values.loading = false;
                values.error = "Código expirado";
                this.setState({ values });
            } else if (e.response.status == 401) {
                values.loading = false;
                values.error = "Credenciais incorretas";
                this.setState({ values });
            } else if (e.response.status == 400) {
                values.loading = false;
                values.error = "Credenciais incorretas";
                this.setState({ values });
            }
        }
    }

    render() {

        const { cpf, password, token, loading, error } = this.state.values;

        return (
            <div className="container-box">
                {loading ? <LinearProgress className="loading" /> : ""}
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
                    <div className="login-error-message">
                        {error ? error : ""}
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, {  })(FitbitSync);