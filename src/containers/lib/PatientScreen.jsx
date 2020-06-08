import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Legend
} from 'recharts';
import Progress from 'react-circle-progress-bar'

import '../styles/PatientScreen.css';
import Button from '../../components/IconButton'
import Input from '../../components/Input'
import { PatientScreenController } from '../../controllers'
import CancelIcon from '@material-ui/icons/Cancel';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SaveIcon from '@material-ui/icons/Save';
import { setPatient, setPatients } from '../../actions/index';

class PatientScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
                changeGoals: false,
                graphic_view: "steps",
                graphic_time: "7D",
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

    getData() {
        const { steps, distance, sedentary, active } = this.props.currentPatient.history;
        const { kmPerWeek, stepsPerDay } = this.props.currentPatient.goals;

        var mSteps = 0;
        var mDistance = 0;
        var mActive = 0;
        for (var i = 0; i < sedentary.length; i++) {
            mSteps +=parseFloat(steps[i].value);
            mDistance += parseFloat(distance[i].value);
            mActive  += parseFloat(active[i].value);
        }
        mActive = mActive/steps.length; 
        mSteps = mSteps*100/steps.length/stepsPerDay; 
        mDistance = mDistance*700/steps.length/kmPerWeek; 
        return { mActive, mDistance, mSteps };
    }

    renderGraphic() {
        const { graphic_view } = this.state.values;
        const { steps, distance, sedentary, active } = this.props.currentPatient.history;

        if (graphic_view == "activity") {
            const data = []
            for (var i = 0; i < sedentary.length; i++) {
                data.push({ dateTime : sedentary[i].dateTime, sedentary : sedentary[i].value, active : active[i].value });
            }
            console.log(data)
            return(
                <AreaChart
                    width={450}
                    height={350}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dateTime" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="active" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="sedentary" stackId="1" stroke="#b50404" fill="#b50404" />
                </AreaChart>
            );
        } else {
            return(
                <AreaChart
                    width={450}
                    height={350}
                    data={graphic_view == "steps" ? steps : distance}
                    className="graphic"
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dateTime" />
                    <YAxis dataKey="value" />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            );
        }
    }

    render() {
        console.log(this.props);
        const { goals, history, pat } = this.props.currentPatient;
        const { toggleForm, handleChange, handleSubmit, handleTimeChange, handleTypeChange } = this.controller;
        const { changeGoals, km, steps, resp, obs, other, graphic_time, graphic_view } = this.state.values;
        const { mActive, mDistance, mSteps } = this.getData();
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
                    <div className="patient-view-mid">
                        <div className="patient-view-status">
                            <div className="status-percent">
                                <div className="percent-item">
                                    <label className="percent-title">META DE PASSOS</label>
                                    <Progress 
                                        progress={mSteps}
                                        strokeWidth={16}
                                        ballStrokeWidth={0}
                                        reduction={0}
                                        className="circular-progress"
                                        gradient={[{
                                            stop: 0.0, color: '#757396c2' }, { stop: 1, color: '#b7b4e8' }]}
                                    />
                                </div>
                                <div className="percent-item">
                                    <label className="percent-title">META DE DISTÂNCIA</label>
                                    <Progress 
                                        progress={mDistance}
                                        strokeWidth={16}
                                        ballStrokeWidth={0}
                                        reduction={0}
                                        className="circular-progress"
                                        gradient={[{
                                            stop: 0.0, color: '#757396c2' }, { stop: 1, color: '#b7b4e8' }]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="patient-view-goals">
                            <div className="graphic-menu">
                                <div className="graphic-list">
                                    <label id="steps" onClick={handleTypeChange} className={`graphic-type-item ${graphic_view == "steps" ? "selected" : ""}`}>PASSOS</label>
                                    <label id="distance" onClick={handleTypeChange} className={`graphic-type-item ${graphic_view == "distance" ? "selected" : ""}`}>DISTANCIA</label>
                                    <label id="activity" onClick={handleTypeChange} className={`graphic-type-item ${graphic_view == "activity" ? "selected" : ""}`}>ATIVIDADE</label>
                                </div>
                                <div className="graphic-list">
                                    <label id="7D" onClick={handleTimeChange} className={`graphic-time-item ${graphic_time == "7D" ? "selected" : ""}`}>7D</label>
                                    <label id="1M" onClick={handleTimeChange} className={`graphic-time-item ${graphic_time == "1M" ? "selected" : ""}`}>1M</label>
                                    <label id="3M" onClick={handleTimeChange} className={`graphic-time-item ${graphic_time == "3M" ? "selected" : ""}`}>3M</label>
                                    <label id="6M" onClick={handleTimeChange} className={`graphic-time-item ${graphic_time == "6M" ? "selected" : ""}`}>6M</label>
                                    <label id="1A" onClick={handleTimeChange} className={`graphic-time-item ${graphic_time == "1A" ? "selected" : ""}`}>1A</label>
                                </div>
                            </div>
                            {this.renderGraphic()}
                        </div>
                    </div>
                    <div className="patient-view-header">
                        <label className="patient-view-title">histórico médico e diário de sintomas</label>
                    </div>
                    <div className="patient-view-last">

                    </div>
                </div>
            </div>
        );
    

    }

}

function mapStateToProps(state) {
    return {
        view: state.currentView,
        currentPatient: state.currentPatient,
        currentUser : state.currentUser,
        patients : state.patients
    };
}

export default connect(mapStateToProps, {setPatient, setPatients})(PatientScreen);
