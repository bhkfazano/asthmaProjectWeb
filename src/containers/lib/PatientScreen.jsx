import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/PatientScreen.css';

class PatientScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
            }
        };
    }

    render() {
        
        const { goals, history, pat } = this.props.currentPatient;

        return(
            <div className="patient-view-container">
                <div className="patient-view-header">
                    <label className="patient-view-title">{pat.full_name}</label>
                </div>
                <div className="patient-view-content">
                    <div className="patient-overview">
                        
                    </div>
                </div>
            </div>
        );
    

    }

}

function mapStateToProps(state) {
    return {
        view: state.currentView,
        currentPatient: state.currentPatient
    };
}

export default connect(mapStateToProps, {})(PatientScreen);
