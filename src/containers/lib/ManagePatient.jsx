import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { ManagePatientController } from '../../controllers/index';
import '../styles/ManagePatient.css';
import ShowPatient from '../../components/ShowPatient.jsx'
import AddPatient from '../../components/AddPatient.jsx'
import { setPatients } from '../../actions/index';
import Button from '../../components/IconButton';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AddIcon from '@material-ui/icons/Add';

class ManagePatient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
                step: 1,
                add: false,
                cpf: "",
                full_name: "",
                email: "",
                personal_phone: "",
                birth_date: "",
                hm_1: "",
                hm_2: "",
                hm_3: "",
                hm_4: "",
                hm_5: "",
                hm_6: "",
                steps: "",
                km: "",
                other: "",
                resp: "",
                obs: ""
            },
            errors: {
                e_cpf: "",
                e_full_name: "",
                e_email: "",
                e_personal_phone: "",
                e_birth_date: "",
                step2: "",
                step3: ""
            }
        };

        this.controller = new ManagePatientController(this);
    }
	
    async componentDidMount() {
        await this.controller.fetch(this.props.user);
    }

    renderPatients() {
        if (this.props.patients) {
            return _.map(this.props.patients, patient => {
                if (patient) {
                    return (
                        <ShowPatient 
                            key={patient.pat._id}
                            name={patient.pat.full_name} 
                            phone={patient.pat.personal_phone} 
                        />
                    );
                }
            });
        }
    }

    render() {
        const { toggleForm, handleSubmit, handleChange, handleStep } = this.controller;

        return (
            !this.state.values.add ? 
            <div className="container-background">
                <div className="container-pat-header">
                    <label className="header-pat-title">Pacientes</label>
                    <label className="total-prof">
                    <label>total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.patients.length}</label>
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
            </div> : 
            <AddPatient 
                values={this.state.values} 
                errors={this.state.errors}
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                handleStep={handleStep}
                handleExit={toggleForm} />
        );
    }

}

function mapStateToProps(state) {
    return {
        patients: state.patients,
        user: state.currentUser,
        view: state.currentView
    };
}

export default connect(mapStateToProps, { setPatients })(ManagePatient);