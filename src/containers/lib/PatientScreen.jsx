import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/PatientScreen.css';
import Button from '../../components/IconButton'
import Input from '../../components/Input'
import { PatientScreenController } from '../../controllers'
import CancelIcon from '@material-ui/icons/Cancel';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SaveIcon from '@material-ui/icons/Save';

class PatientScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
                changeGoals: false,
                steps: "",
                km: "",
                other: "",
                resp: "",
                obs: ""
            }
        };
        this.controller = new PatientScreenController(this);
    }

    parseDate(date) {
        var temp = date.split("T")[0];
        temp = temp.split("-");
        return temp[2]+"/"+temp[1]+"/"+temp[0];
    }

    render() {
        console.log(this.props.currentPatient);
        const { goals, history, pat } = this.props.currentPatient;
        const { toggleForm, handleChange, handleSubmit } = this.controller;
        const { changeGoals, km, steps, resp, obs, other } = this.state.values;

        return(
            <div className="patient-view-container">
                <div className="patient-view-header">
                    <label className="patient-view-title">{pat.full_name}</label>
                    <label className="goals-title">
                        metas
                        <Button onclick={toggleForm} classname="add-goals" size="medium" color="primary" Icon={!changeGoals ? AddCircleIcon : CancelIcon} />
                    </label>
                </div>
                <div className="patient-view-content">
                    <div className="patient-overview">
                        <div className="overview-left">
                            <div className="overview-item">
                                <label className="topic-label">email</label>
                                <label className="topic-value">{pat.email}</label>
                            </div>
                            <div className="overview-item">
                                <label className="topic-label">telefone</label>
                                <label className="topic-value">{pat.personal_phone}</label>
                            </div>
                            <div className="overview-item">
                                <label className="topic-label">data de nascimento</label>
                                <label className="topic-value">{this.parseDate(pat.birth_date)}</label>
                            </div>
                        </div>
                        {!changeGoals ? 
                        <div className="overview-right">
                            <div className="overview-item">
                                <label className="topic-label">meta de passos por dia</label>
                                <label className="topic-value">{goals.stepsPerDay}</label>
                            </div>
                            <div className="overview-item">
                                <label className="topic-label">meta de km por semana</label>
                                <label className="topic-value">{goals.kmPerWeek}</label>
                            </div>
                            <div className="overview-item">
                                <label className="topic-label">Outros exercícios</label>
                                <label className="topic-value">{goals.other}</label>
                            </div>
                            <div className="overview-item">
                                <label className="topic-label">Exercícios respiratórios</label>
                                <label className="topic-value">{goals.resp}</label>
                            </div>
                            <div className="overview-item">
                                <label className="topic-label">Observações</label>
                                <label className="topic-value">{goals.obs}</label>
                            </div>
                        </div> :
                        <div className="overview-right form">
                            <div className="form-col">
                                <Input value={steps} id="steps" type="number" placeholder="Meta: passos / dia" handleChange={handleChange} />
                                <Input value={km} id="km" type="number" placeholder="Meta: km / semana" handleChange={handleChange} />
                                <Input value={other} id="other" type="text" placeholder="Recomendação de outras atividades:" handleChange={handleChange} />
                            </div>
                            <div className="form-col">
                                <Input value={resp} id="resp" type="text" placeholder="Exercícios respiratórios:" handleChange={handleChange} />
                                <Input value={obs} id="obs" type="text" placeholder="Observações:" handleChange={handleChange} />
                                    <div className="update-goals" onClick={handleSubmit}>
                                    atualizar
                                    <Button classname="update-goals-icon" size="medium" color="primary" Icon={SaveIcon} />
                                </div>

                            </div>
                        </div>}
                    </div>
                    <div className="patient-view-header">
                        <label className="patient-view-title">status</label>
                        <label className="goals-title">progresso</label>
                    </div>
                    <div className="patient-wiew-mid">
                        <div className="patient-view-goals">
                            
                        </div>
                        <div className="patient-view-goals">

                        </div>
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
