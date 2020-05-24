import React, { Component } from 'react';

import './styles/ShowPatient.css';
import RemoveCircleSharpIcon from '@material-ui/icons/RemoveCircleSharp';import Button from './IconButton';

export default class ShowPatient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {

            }
        };
    }

    render() {

        const { name, phone } = this.props;

        return (
            <div className="patient-box">
                <label className="patient-value">{name}</label>
                <label className="patient-value">{phone}</label>
                <Button classname="menu-small-icon" Icon={RemoveCircleSharpIcon} size="small" />

            </div>

        );
    }

}
