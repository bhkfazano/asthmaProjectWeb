import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/ProfessionalDashboard.css'

import { SideMenu } from '../index';
import { changeView, removeUser } from '../../actions/index';
import { DashboardController } from '../../controllers/index';
import Header from '../../components/Header';
import ManageTeam from './ManageTeam';
import ManagePatient from './ManagePatient'
import PatientScreen from './PatientScreen'

class ProfessionalDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
                showMenu : false
            }
        };

        this.controller = new DashboardController(this);
    }

    render() {
        const { view } = this.props;
        const { admin } = this.props.user;

        return (
            <div className="dashboard">
                <SideMenu history={this.props.history} classname={this.state.values.showMenu ? "" : "off"} toggle={this.controller.toggleMenu} />
                <div className="dash-container">
                    <Header username={this.props.user.full_name} handleLogout={this.controller.logout}/>
                    <div className="content-box">
                        {view == "patients" ? <ManagePatient history={this.props.history} /> : ""}
                        {view == "team" && admin ? <ManageTeam user={this.props.user} /> : ""}
                        {view == "patient" ? <PatientScreen location={this.props.location} /> : ""}
                    </div>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return { 
        view: state.currentView,
        user: state.currentUser
    };
}

export default connect(mapStateToProps, { changeView, removeUser })(ProfessionalDashboard);
