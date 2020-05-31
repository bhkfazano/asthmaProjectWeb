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

        const { name, phone, handleClick } = this.props;

        return (
            <div className="patient-box" onClick={handleClick}>
                <label className="patient-value">{name}</label>
                <label className="patient-value">{phone}</label>
                
            </div>

        );
    }

}
