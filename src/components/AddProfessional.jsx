import React, { Component } from 'react';

import Input from './Input';
import './styles/AddProfessional.css';
import ClearIcon from '@material-ui/icons/Clear';
import Button from './IconButton';

export default class AddProfessional extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
                cpf_error: false,
                cpf_invalid: false,
                number_error: false,
                birth_date_error: false,
                name_error: false,
                e_mail_error: false
            }
        };
    }

    render() {

        const { handleSubmit, handleChange, handleExit, show } = this.props;
        const { cpf, full_name, email, personal_phone, birth_date, cpf_error, cpf_invalid, number_error,birth_date_error,name_error,e_mail_error} = this.props.values;
        var class_name = `form-container-prof ${show ? "show" : "hide"}`

        return (

            <div className={class_name}>
                <Button onclick={handleExit} classname="exit-button-form" Icon={ClearIcon} size="default" color="primary"/>
                <form className="add-form" noValidate autoComplete="off">
                    <Input value={cpf} id="cpf" type="text" label="cpf" handleChange={handleChange} />
                    <div className= "error-message">
                    {cpf_error ? <div>CPF inválido.</div> : ""}
                    </div>
                    <Input value={full_name} id="full_name" type="text" label="Nome completo" handleChange={handleChange} />
                    <div className= "error-message">
                    {name_error ? <div>Nome inválido.</div> : ""}
                    </div>
                    <Input value={email} id="email" type="text" label="email" handleChange={handleChange} />
                    <div className= "error-message">
                    {e_mail_error ? <div>E-mail inválido.</div> : ""}
                    </div>
                    <Input value={personal_phone} id="personal_phone" type="text" label="telefone" handleChange={handleChange} />
                    <div className= "error-message">
                    {number_error ? <div>Número de telefone inválido.</div> : ""}
                    </div>
                    <Input value={birth_date} id="birth_date" type="text" label="data de nascimento" handleChange={handleChange} />
                    <div className= "error-message">
                    {birth_date_error ? <div>Data de nascimento inválida.</div> : ""}
                    </div>
                    <div className= "error-message">
                    {cpf_invalid ? <div>CPF já cadastrado.</div> : ""}
                    </div>
                </form>
                <div className="add-button-container">
                    <div className="add-patient-button" onClick={(e) => handleSubmit()} >cadastrar</div>
                </div>
            </div>
        );
    }

}