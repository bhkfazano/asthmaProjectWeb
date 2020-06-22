import React, { Component } from 'react';
import { showPDF } from '../../utils/pdfGenerator'
import { connect } from 'react-redux';

class PdfGenerator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
                patient: false
            }
        };
    }

    async componentDidMount() {
        const patient = await JSON.parse(sessionStorage.getItem('patient'));
        if (patient) {
            const values = { ...this.state.values };
            values.patient = patient;
            this.setState({ values });
        }
    }

    render() {
        console.log(this.state);
        return(
            <div>
                {this.state.values.patient ? showPDF(this.state.values.patient) : ""}
            </div>
        );
    }
        
}

function mapStateToProps(state) {
    return {
        currentPatient: state.currentPatient
    };
}

export default connect(mapStateToProps, {})(PdfGenerator);