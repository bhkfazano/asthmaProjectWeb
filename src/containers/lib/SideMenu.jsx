import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/SideMenu.css'
import SideButtons from '../../components/SideButtons';
import { MenusController } from '../../controllers/index'
import { changeView } from '../../actions/index';

class SideMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {

            }
        };

        this.controller = new MenusController(this);
    }

    render() {
        const select = this.props.view;
        const admin = this.props.user.admin;

        return (
            <div className={"main-menu-container " + this.props.classname + "-main"}>
                <SideButtons admin={admin} select={select} onclick={this.controller.handleSideClick} toggle={this.props.toggle} />
                <div className={"side-menu " + this.props.classname}>
                    <div className="side-menu-button first">
                        Menu
                    </div>
                    <div className={(select === "statistics" ? "sele" : "") + " side-menu-button mid"} onClick={(e) => this.controller.handleClick("statistics")}>
                        Estatísticas
                    </div>
                    <div className={(select === "patients" ? "sele" : "") + " side-menu-button mid"} onClick={(e) => this.controller.handleClick("patients")}>
                        Pacientes
                    </div>
                    {admin ? <div className={(select === "team" ? "sele" : "") + " side-menu-button mid"} onClick={(e) => this.controller.handleClick("team")}>
                        Equipe
                    </div> : <div className="side-menu-button mid hidden" />}
                    <div className={(select === "settings" ? "sele" : "") + " side-menu-button last"} onClick={(e) => this.controller.handleClick("settings")}>
                        Configurações
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { view: state.currentView, user: state.currentUser };
}

export default connect(mapStateToProps, { changeView })(SideMenu);
