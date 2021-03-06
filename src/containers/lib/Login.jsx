import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';

import '../styles/Login.css'
import logo from '../../assets/inalador.png'

import { LoginController } from '../../controllers/index';
import { setUser, setPatients } from '../../actions/index';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
                cpf: "",
                password: "",
                error: false,
                loading: false
            }
        };
        this.controller = new LoginController(this);
    }

    render() {
        const { submitAction, handleChange } = this.controller;
        const { cpf, password, error, loading} = this.state.values;

        return (
            <div className="container-box">
                {loading ? <LinearProgress className="loading" /> : ""}
                <div className="image-box">
                    <img className="image" src={logo} />
                </div>
                <form className="form-horizontal">
                    <div className="login-title">Login</div>
                    <div className="form-group">
                        <div className="input-box">
                            <input value={cpf} type="text" className="form-control input" placeholder="Insira seu cpf" id="cpf" onChange={event => handleChange(event)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-box">
                            <input value={password} type="password" className="form-control input" id="password" placeholder="Insira sua senha" onChange={event => handleChange(event)} />
                        </div>
                    </div>
                    <div className="bbtt" >
                        <button disabled={loading} type="button" className="login-button" onClick={submitAction} >Entrar</button>
                    </div>
                    <div className= "login-error-message">
                        {error ? error  : ""}
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        view: state.currentView,
        user: state.currentUser,
        patients: state.patients
    };
}

export default connect(mapStateToProps, { setUser, setPatients })(Login);