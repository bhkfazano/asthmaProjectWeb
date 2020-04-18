import React, { Component } from 'react';

export default class Button extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { classname, onclick, Icon, size, color } = this.props;

        return (

            <div className={classname} onClick={onclick}>
                <Icon fontSize={size} color={color} />
            </div>
        );
    }
}