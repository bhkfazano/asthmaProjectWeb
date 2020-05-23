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
        const { cpf, full_name, email, personal_phone, birth_date} = this.props.values;

        var class_name = `form-container-prof ${show ? "show" : "hide"}`

        return (

            <div className={class_name}>
                <Button onclick={handleExit} classname="exit-button-form" Icon={ClearIcon} size="default" color="primary"/>
                <form className="add-form" noValidate autoComplete="off">
                    <Input value={cpf} id="cpf" type="text" label="cpf" onChange={handleChange} />
                    <Input value={full_name} id="full_name" type="text" label="Nome completo" onChange={handleChange} />
                    <Input value={email} id="email" type="email" label="e-mail" onChange={handleChange} />
                    <Input value={personal_phone} id="personal_phone" type="text" label="telefone" onChange={handleChange} />
                    <Input value={birth_date} id="birth_date" type="date" label="data de nascimento" onChange={handleChange} />
                </form>
                <div className="add-button-container">
                    <div className="add-patient-button" onClick={(e) => handleSubmit()} >cadastrar</div>
                </div>
            </div>
        );
    }

}