import React, { Component } from 'react';

import './styles/Input.css';

export default class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {

            }
        };
    }

    render() {

        const { value, type, id, handleChange, label, error, placeholder } = this.props;

        return (
            <div className="input-box">
                <label className="input-label">{label}</label>
                <input autoComplete="coconuts" placeholder={placeholder} value={value} type={type} className={!error ? "input-text" : "input-text error"} id={id} onChange={event => handleChange(event)} />
            </div>

        );
    }

}
