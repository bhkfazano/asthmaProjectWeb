import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Input from '../../components/Input';
import { ManagePatientController } from '../../controllers/index';
import '../styles/ManagePatient.css';
import ShowPatient from '../../components/ShowPatient.jsx'
import Button from '../../components/IconButton';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AddIcon from '@material-ui/icons/Add';
import AddPatient from './AddPatient.jsx'


class ManagePatient extends Component {

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

        this.controller = new ManagePatientController(this);
    }
	
    async componentDidMount() {
        await this.controller.fetch(this.props.user);
    }

    renderPatients() {
        return _.map(this.props.user.patient, patient => {
            return (
                <ShowPatient 
                    key={patient._id}
                    name={patient.full_name} 
                    phone={patient.personal_phone} 
                />
            );
        });
    }

    render() {
        console.log(this.state)
        const { toggleForm, handleSubmit, handleChange } = this.controller;

        return (
            <div className="container-background">
                <div className="container-pat-header">
                    <label className="header-pat-title">Paciente</label>
                    <label className="total-prof">
                        <Button Icon={EmojiPeopleIcon} size="large"/>
                    </label>
                </div>
                <div className="horizontal-pat">
                    <div className="pat-list">
                        <div className="pat-list-header">
                            <label className="header-label">Nome</label>
                            <label className="header-label">telefone</label>

                            <Button onclick={toggleForm} classname="add-prof-icon" Icon={AddIcon} size="default" />
                        </div>
                        {this.renderPatients()}
                    </div>
                    
                    
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        user: state.currentUser
    };
}

export default connect(mapStateToProps, { })(ManagePatient);