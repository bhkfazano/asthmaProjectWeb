import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '../../components/IconButton';
import '../styles/Header.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {

            }
        };

        //this.controller = new DashboardController(this);
    }

    render() {
        return (
            <div className="dash-header">
                <div className="header-name">
                    {this.props.user.name}
                </div>
                <div className="logout-button" onClick={() => this.props.handleLogout()}>
                    <div className="logout-button-text">
                        Logout
                    </div>
                    <Button color="disabled" classname="logout-icon" size="large" Icon={ExitToAppIcon} />
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

export default connect(mapStateToProps, {  })(Header);
