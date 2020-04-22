import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../../components/Input';
import { AddPatientController } from '../../controllers/index';
import '../styles/AddPatient.css';

class AddPatient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
                cpf: "",
                name: "",
                email: "",
                personal_phone: "",
                birth_date: "",
                ans_1: "",
                ans_2: "",
                ans_3: "",
                ans_4: "",
                ans_5: ""
            }
        };

        this.controller = new AddPatientController(this);
    }

    render() {

        const { name, cpf, email, personal_phone, birth_date, ans_1, ans_2, ans_3, ans_4, ans_5 } = this.state.values;
        const {handleChange} = this.controller;

        return (
            <div className="form-container">
                <form className="add-form" noValidate autoComplete="off">
                    <div className="half-form">

                        <div className="form-title">Informações de Cadastro</div>
                        <Input value={cpf} id="cpf" type="text" label="cpf" handleChange={handleChange} />
                        <Input value={name} id="name" type="text" label="Nome completo" handleChange={handleChange} />
                        <Input value={email} id="email" type="text" label="email" handleChange={handleChange} />
                        <Input value={personal_phone} id="personal_phone" type="text" label="telefone" handleChange={handleChange} />
                        <Input value={birth_date} id="birth_date" type="text" label="data de nascimento" handleChange={handleChange} />
                    </div>
                    <div className="divider"/>
                    <div className="half-form">
                        <div className="form-title">Histórico médico</div>
                        <Input value={ans_1} id="ans_1" type="text" label="questão 01" handleChange={handleChange} />
                        <Input value={ans_2} id="ans_2" type="text" label="questão 02" handleChange={handleChange} />
                        <Input value={ans_3} id="ans_3" type="text" label="questão 03" handleChange={handleChange} />
                        <Input value={ans_4} id="ans_4" type="text" label="questão 04" handleChange={handleChange} />
                        <Input value={ans_5} id="ans_5" type="text" label="questão 05" handleChange={handleChange} />
                    </div>
                    <div className="divider"/>
                    <div className="half-form">
                        <div className="form-title">Barreiras (exercícios)</div>
                        <Input value={ans_1} id="ans_1" type="text" label="questão 01" handleChange={handleChange} />
                        <Input value={ans_2} id="ans_2" type="text" label="questão 02" handleChange={handleChange} />
                        <Input value={ans_3} id="ans_3" type="text" label="questão 03" handleChange={handleChange} />
                        <Input value={ans_4} id="ans_4" type="text" label="questão 04" handleChange={handleChange} />
                        <Input value={ans_5} id="ans_5" type="text" label="questão 05" handleChange={handleChange} />
                    </div>
                </form>
                <div className="add-button-container">
                    <div className="add-patient-button">cadastrar paciente</div>
                </div>
            </div>
        );
    }

}

export default connect(null, {  })(AddPatient);
