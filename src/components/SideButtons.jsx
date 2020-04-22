import React, { Component } from 'react';

import './styles/SideButtons.css'
import MenuIcon from '@material-ui/icons/Menu';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SettingsIcon from '@material-ui/icons/Settings';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import HomeIcon from '@material-ui/icons/Home';

import Button from './IconButton';

export default class SideButtons extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { onclick, select } = this.props;
        return (
            <div className="menu-box">
                <Button classname="menu-button" Icon={MenuIcon} size="large" onclick={() => { this.props.toggle() }} />
                <div className="small-items">
                    <Button classname={(select === "home" ? "sel" : "") + " menu-small-icon"} onclick={(e) => onclick("home")} Icon={HomeIcon} size="large" />
                    <Button classname={(select === "patients" ? "sel" : "") + " menu-small-icon"} onclick={(e) => onclick("patients")} Icon={PersonAddIcon} size="large" />
                    <Button classname={(select === "team" ? "sel" : "") + " menu-small-icon"} onclick={(e) => onclick("team")} Icon={LocalHospitalIcon} size="large" />
                    <Button classname={(select === "statistics" ? "sel" : "") + " menu-small-icon"} onclick={(e) => onclick("statistics")} Icon={EqualizerIcon} size="large" />
                </div>
                <Button classname={(select === "settings" ? "sel" : "") + " menu-small-icon bottom-icon"} onclick={(e) => onclick("settings")} Icon={SettingsIcon} size="large" />
            </div>
        );
    }
}