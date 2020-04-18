import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/Login.css'
import logo from '../../assets/inalador.png'

import { LoginController } from '../../controllers/index';
import { setUser, setPacients } from '../../actions/index';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
                cpf: "",
                password: ""
            }
        };
        this.controller = new LoginController(this);
    }

    render() {

        const { submitAction, handleChange } = this.controller;
        const { cpf, password } = this.state.values;

        return (
            <div className="container-box">
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
                        <button type="button" className="login-button" onClick={submitAction} >Entrar</button>
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
        pacients: state.pacients
    };
}

export default connect(mapStateToProps, { setUser, setPacients })(Login);