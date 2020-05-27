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
                
            }
        };
    }

    render() {

        const { handleSubmit, handleChange, handleExit, show } = this.props;
        const { cpf, full_name, email, personal_phone, birth_date } = this.props.values;
        const { e_cpf, e_full_name, e_email, e_personal_phone, e_birth_date } = this.props.errors;
        var class_name = `form-container-prof ${show ? "show" : "hide"}`

        return (

            <div className={class_name}>
                <Button onclick={handleExit} classname="exit-button-form" Icon={ClearIcon} size="default" color="primary"/>
                <form className="add-form" noValidate autoComplete="off">
                    <Input error={e_cpf} value={cpf} id="cpf" type="text" label="cpf" handleChange={handleChange} />
                    
                    <Input error={e_full_name} value={full_name} id="full_name" type="text" label="Nome completo" handleChange={handleChange} />
                    
                    <Input error={e_email} value={email} id="email" type="text" label="email" handleChange={handleChange} />
                    
                    <Input error={e_personal_phone} value={personal_phone} id="personal_phone" type="text" label="telefone" handleChange={handleChange} />
                    
                    <Input error={e_birth_date} value={birth_date} id="birth_date" type="date" label="data de nascimento" handleChange={handleChange} />
                </form>
                <div className="add-button-container">
                    <div className="add-patient-button" onClick={(e) => handleSubmit()} >cadastrar</div>
                </div>
            </div>
        );
    }

}