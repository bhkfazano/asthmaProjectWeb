import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { ManageTeamController } from '../../controllers/index';
import { setTeam } from '../../actions/index';
import ShowProfessional from '../../components/ShowProfessional';
import Button from '../../components/IconButton';
import AddProfessional from '../../components/AddProfessional';

import AddIcon from '@material-ui/icons/Add';
import '../styles/ManageTeam.css';

class ManageTeam extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
                add: false,
                cpf: "",
                full_name: "",
                email: "",
                personal_phone: "",
                birth_date: "",
            }
        };

        this.controller = new ManageTeamController(this);
    }

    async componentDidMount() {
        await this.controller.fetch(this.props.user);
    }

    renderProfessionals() {
        return _.map(this.props.team, professional => {
            return (
                <ShowProfessional 
                    key={professional._id}
                    name={professional.full_name} 
                    phone={professional.personal_phone} 
                    patients={professional.associated_patients.length} 
                />
            );
        });
    }

    render() {
        console.log(this.state)
        const { toggleForm, handleSubmit, handleChange } = this.controller;

        if (this.state.values.add) {
            return (
                <AddProfessional 
                    handleExit={toggleForm} 
                    handleSubmit={handleSubmit}
                    handleChange = {handleChange}/>
            );
        }

        return (
            <div className="prof-list">
                <div className="prof-list-title">
                    Profissionais de saúde cadastrados
                </div>
                <div className="prof-list-header">
                    <label className="header-label">Nome</label>
                    <label className="header-label">telefone</label>
                    <label className="header-label">número de pacientes</label>
                    <Button onclick={toggleForm} classname="menu-small-icon" Icon={AddIcon} size="default" />
                </div>
                {this.renderProfessionals()}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        team: state.team
    };
}

export default connect(mapStateToProps, { setTeam })(ManageTeam);
