import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import Input from './Input';
import {patientForm, barriers} from '../assets/patientForm';
import ClearIcon from '@material-ui/icons/Clear';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import LinearProgress from '@material-ui/core/LinearProgress';
import './styles/AddPatient.css';
import Button from './IconButton';


class AddPatient extends Component {


    constructor(props) {
        super(props);
        this.state = {
            values: {
            }
        };

    }

    renderStepOne() {
        const { full_name, cpf, email, personal_phone, birth_date, weight, height } = this.props.values;
        const { e_cpf, e_full_name, e_email, e_personal_phone, e_birth_date, step1, e_weight, e_height } = this.props.errors;

        const { handleChange, handleStep } = this.props;

        return (
            <div className="main-form">
                <div className="form-title">Informações de Cadastro</div>
                <Input value={cpf} error={e_cpf} id="cpf" type="text" label="cpf" handleChange={handleChange} />
                <Input value={full_name} error={e_full_name} id="full_name" type="text" label="Nome completo" handleChange={handleChange} />
                <Input value={email} error={e_email} id="email" type="email" label="e-mail" handleChange={handleChange} />
                <Input value={personal_phone} error={e_personal_phone} id="personal_phone" type="text" label="telefone" handleChange={handleChange} />
                <Input value={birth_date} error={e_birth_date} id="birth_date" type="date" label="data de nascimento" handleChange={handleChange} />
                <div className="horizontal-login">
                    <Input value={weight} error={e_weight} id="weight" type="number" label="peso (kg)" handleChange={handleChange} />
                    <Input value={height} error={e_height} id="height" type="number" label="altura (cm)" handleChange={handleChange} />
                </div>
                <div className="step2-error">
                    {step1 ? step1 : ""}
                </div>
                <div className="next-step-button">
                    <Button onclick={handleStep} classname="next-button-form" size="large" color="primary" Icon={NavigateNextIcon} />
                </div>
            </div>
        );
    }

    renderStepTwo() {
        const { hm_1, hm_2, hm_3, hm_4, hm_5, hm_6, hm_7 } = this.props.values;
        const { handleChange, handleStep } = this.props;
        const { step2 } = this.props.errors;
        const names = [hm_1, hm_2, hm_3, hm_4, hm_5, hm_6, hm_7]
        
        return(
            <div className="second-form">
                <div className="form-title">Questionário Inicial</div>
                    {_.map(patientForm, question => {
                        return(
                            <div className="question-form">
            
                                <div className="question-title">{question.number + ". " + question.question}</div>
                                {_.map(question.options, option => {
                                    return (
                                        <div className="radio-option">
                                            <input className="radio-input" type="radio" id={question.id} name={names[question.number - 1]} value={option} onChange={handleChange} />
                                            <label className="radio-label" for={option}>{option}</label>
                                        </div>
                                    );
                                })}
            
                            </div>
                        );
                    })}
                <div className="step2-error">
                    {step2 ? "Responda todas as questões." : ""}
                </div>
                <div className="next-step-button">
                    <Button onclick={handleStep} classname="next-button-form" size="large" color="primary" Icon={NavigateNextIcon} />
                </div>
            </div>
        );

    }

    renderStepThree() {
        const { ba_1, ba_2, ba_3, ba_4, ba_5, ba_6, ba_7, ba_8, ba_9, ba_10, ba_11, ba_12, ba_13 } = this.props.values;
        const { handleChange, handleStep } = this.props;
        const { step3 } = this.props.errors;
        const names = [ba_1, ba_2, ba_3, ba_4, ba_5, ba_6, ba_7, ba_8, ba_9, ba_10, ba_11, ba_12, ba_13]

        return(
            <div className="second-form">
                <div className="form-title">BARREIRAS PARA PRÁTICA DE ATIVIDADES FÍSICAS</div>
                {_.map(barriers.questions, question => {
                    return (
                        <div className="question-form">

                            <div className="question-title">{question.number + ". " + question.question}</div>
                            {_.map(barriers.answers, option => {
                                return (
                                    <div className="radio-option">
                                        <input className="radio-input" type="radio" id={question.id} name={question.number} value={option} onChange={handleChange} />
                                        <label className="radio-label" for={option}>{option}</label>
                                    </div>
                                );
                            })}

                        </div>
                    );
                })}
                <div className="step2-error">
                    {step3 ? "Responda todas as questões." : ""}
                </div>
                <div className="next-step-button">
                    <Button onclick={handleStep} classname="next-button-form" size="large" color="primary" Icon={NavigateNextIcon} />
                </div>
            </div>
        );

    }

    renderStepFour() {

        const { steps, km, other, resp, obs } = this.props.values;
        const { handleChange, handleSubmit } = this.props;
        const { step4 } = this.props.errors;

        return(
            <div className="last-form">
                <div className="form-title">Metas Iniciais</div>
                <Input value={steps} id="steps" type="number" label="Meta: passos / dia" handleChange={handleChange} />
                <Input value={km} id="km" type="number" label="Meta: km / semana" handleChange={handleChange} />
                <Input value={other} id="other" type="text" label="Recomendação de outras atividades:" handleChange={handleChange} />
                <Input value={resp} id="resp" type="text" label="Exercícios respiratórios:" handleChange={handleChange} />
                <Input value={obs} id="obs" type="text" label="Observações:" handleChange={handleChange} />
                
                <div onClick={handleSubmit} className="finish-button">
                    <Button classname="finish-button-icon" size="medium" color="primary" Icon={DoneOutlineIcon} />
                    confirmar cadastro
                </div>
                <div className="step2-error">
                    {step4 ? "Responda todas as questões." : ""}
                </div>
            </div >
        );
    }

    render() {
    
        const { step, loading } = this.props.values;

        return (
            <div className="form-container">
                {loading ? <LinearProgress className="loading-register-patient" /> : ""}
                <Button onclick={this.props.handleExit} classname="exit-button-form" Icon={ClearIcon} size="default" color="primary" />
                {step == 1 ? 
                    this.renderStepOne()
                : " "}                
                {step == 2 ? 
                    this.renderStepTwo()
                : " "}                
                {step == 3 ? 
                    this.renderStepThree()
                : " "}                
                {step == 4 ? 
                    this.renderStepFour()
                : " "}                
            </div>
        );
    }

}

export default connect(null, {  })(AddPatient);

