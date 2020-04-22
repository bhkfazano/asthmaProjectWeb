import React, { Component } from 'react';

import './styles/ShowProfessional.css';
import RemoveCircleSharpIcon from '@material-ui/icons/RemoveCircleSharp';import Button from './IconButton';

export default class ShowProfessional extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {

            }
        };
    }

    render() {

        const { name, phone, patients } = this.props;

        return (
            <div className="professional-box">
                <label className="professional-value">{name}</label>
                <label className="professional-value">{phone}</label>
                <label className="professional-value">{patients}</label>
                <Button classname="menu-small-icon" Icon={RemoveCircleSharpIcon} size="small" />

            </div>

        );
    }

}
