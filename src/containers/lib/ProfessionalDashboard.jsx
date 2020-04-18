import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/ProfessionalDashboard.css'

import { SideMenu, Header } from '../index';
import { changeView, removeUser } from '../../actions/index';
import { DashboardController } from '../../controllers/index';

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
        console.log(this.props);
        return (
            <div className="dashboard">
                <SideMenu history={this.props.history} classname={this.state.values.showMenu ? "" : "off"} toggle={this.controller.toggleMenu} />
                <div className="dash-container">
                    <Header handleLogout={this.controller.logout}/>
                    <div className="content-box">

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
