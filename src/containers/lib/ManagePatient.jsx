import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { ManagePatientController } from '../../controllers/index';
import '../styles/ManagePatient.css';
import ShowPatient from '../../components/ShowPatient.jsx'
import AddPatient from '../../components/AddPatient.jsx'
import Button from '../../components/IconButton';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AddIcon from '@material-ui/icons/Add';

class ManagePatient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
                add: false,
                cpf: "",
                name: "",
                email: "",
                personal_phone: "",
                birth_date: "",
                hm_1: "",
                hm_2: "",
                hm_3: "",
                hm_4: "",
                hm_5: "",
                hm_6: "",
                hm_7: "",
                exerc_1: "",
                exerc_2: "",
                exerc_3: "",
                exerc_4: "",
                exerc_5: ""
            }
        };

        this.controller = new ManagePatientController(this);
    }
	
    async componentDidMount() {
        await this.controller.fetch(this.props.user);
    }

    renderPatients() {
        return _.map(this.props.patients, patient => {
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
        console.log(this.props)
        const { toggleForm, handleSubmit, handleChange } = this.controller;

        return (
            !this.state.values.add ? <div className="container-background">
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
            </div> : <AddPatient values={this.state.values} handleChange={handleChange} handleSubmit={handleSubmit} handleExit={toggleForm} />
        );
    }

}

function mapStateToProps(state) {
    return {
        patients: state.patients
    };
}

export default connect(mapStateToProps, { })(ManagePatient);