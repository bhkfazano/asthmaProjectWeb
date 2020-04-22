import React, { Component } from 'react';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from './IconButton';
import './styles/Header.css';

export default class Header extends Component {

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
                    {this.props.username}
                </div>
                <div className="logout-button" onClick={() => this.props.handleLogout()}>
                <Button color="primary" classname="logout-icon" size="default" Icon={ExitToAppIcon} />
                </div>
            </div>
        );
    }

}
