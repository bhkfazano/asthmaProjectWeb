import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from './Input';
import { AddPatientController } from '../controllers/index';
import './styles/AddPatient.css';

class AddPatient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
                cpf: "",
                name: "",
                email: "",
                personal_phone: "",
                birth_date: "",
                hm_1: "",
                hm_2: "",
                hm_3: "",
                hm_4: "",
                hm_5: "",
                hm_6: "",
                hm_7: "",
                exerc_1: "",
                exerc_2: "",
                exerc_3: "",
                exerc_4: "",
                exerc_5: ""
            }
        };

        this.controller = new AddPatientController(this);
    }

    render() {

        const { name, cpf, email, personal_phone, birth_date, hm_1, hm_2, hm_3, hm_4, hm_5, hm_6, hm_7, exerc_1, exerc_2, exerc_3, exerc_4, exerc_5 } = this.state.values;
        const {handleChange} = this.controller;


        return (
            <div className="form-container">
                <form className="add-form" noValidate autoComplete="off">
                    <div className="half-form">
                        <div className="form-title">Informações de Cadastro</div>
                        <Input value={cpf} id="cpf" type="text" label="cpf" handleChange={handleChange} />
                        <Input value={name} id="name" type="text" label="Nome completo" handleChange={handleChange} />
                        <Input value={email} id="email" type="text" label="email" handleChange={handleChange} />
                        <Input value={personal_phone} id="personal_phone" type="text" label="telefone" handleChange={handleChange} />
                        <Input value={birth_date} id="birth_date" type="date" label="data de nascimento" handleChange={handleChange} />
                    
                        <br></br><div className="form-title">Barreiras (exercícios)</div>
                        <Input value={exerc_1} id="exerc_1" type="text" label="Meta: passos / dia" handleChange={handleChange} />
                        <Input value={exerc_2} id="exerc_2" type="text" label="Meta: km / semana" handleChange={handleChange} />
                        <Input value={exerc_3} id="exerc_3" type="text" label="Recomendação de outras atividades:" handleChange={handleChange} />
                        <Input value={exerc_4} id="exerc_4" type="text" label="Exercícios respiratórios:" handleChange={handleChange} />
                        <Input value={exerc_5} id="exerc_5" type="text" label="Observações:" handleChange={handleChange} />
                    </div>

                    <div className="divider"/>
                    <div className="half-form">
                        <div className="form-title">Questionário Inicial</div>
                        <font color = "#6482ff"><strong>1.</strong> Em média, durante os últimos sete dias, o quão frequentemente você se acordou por causa de sua
asma, durante a noite?</font>
                        <br></br><br></br><input type="radio" id="Nunca" name={hm_1} value="Nunca"/>
                        <label for="Nunca">Nunca</label><br></br>
                        <input type="radio" id="Quase nunca" name={hm_1} value="Quase nunca"/>
                        <label for="Quase nunca">Quase nunca</label><br></br>
                        <input type="radio" id="Poucas vezes" name={hm_1} value="Poucas vezes"/>
                        <label for="Poucas vezes">Poucas vezes</label><br></br>
                        <input type="radio" id="Várias vezes" name={hm_1} value="Várias vezes"/>
                        <label for="Várias vezes">Várias vezes</label><br></br>
                        <input type="radio" id="Muitas vezes" name={hm_1} value="Muitas vezes"/>
                        <label for="Muitas vezes">Muitas vezes</label><br></br>
                        <input type="radio" id="Muitíssimas vezes" name={hm_1} value="Muitíssimas vezes"/>
                        <label for="Muitíssimas vezes">Muitíssimas vezes</label><br></br>
                        <input type="radio" id="Incapaz de dormir devido à asma" name={hm_1} value="Incapaz de dormir devido à asma"/>
                        <label for="Incapaz de dormir devido à asma">Incapaz de dormir devido à asma</label><br></br>
                        <input type="radio" id="Nenhuma das anteriores" name={hm_1} value="Nenhuma das anteriores"/>
                        <label for="Nenhuma das anteriores">Nenhuma das anteriores</label><br></br><br></br>

                        <font color = "#6482ff"><strong>2.</strong> Em média, durante os últimos sete dias, o quão ruins foram os seus sintomas da asma, quando
você acordou pela manhã?</font>
                        <br></br><br></br><input type="radio" id="Sem sintomas" name={hm_2} value="Sem sintomas"/>
                        <label for="Sem sintomas">Sem sintomas</label><br></br>
                        <input type="radio" id="Sintomas muito leves" name={hm_2} value="Sintomas muito leves"/>
                        <label for="Sintomas muito leves">Sintomas muito leves</label><br></br>
                        <input type="radio" id="Sintomas leves" name={hm_2} value="Sintomas leves"/>
                        <label for="Sintomas leves">Sintomas leves</label><br></br>
                        <input type="radio" id="Sintomas moderados" name={hm_2} value="Sintomas moderados"/>
                        <label for="Sintomas moderados">Sintomas moderados</label><br></br>
                        <input type="radio" id="Sintomas um tanto graves" name={hm_2} value="Sintomas um tanto graves"/>
                        <label for="Sintomas um tanto graves">Sintomas um tanto graves</label><br></br>
                        <input type="radio" id="Sintomas graves" name={hm_2} value="Sintomas graves"/>
                        <label for="Sintomas graves">Sintomas graves</label><br></br>
                        <input type="radio" id="Sintomas muito graves" name={hm_2} value="Sintomas muito graves"/>
                        <label for="Sintomas muito graves">Sintomas muito graves</label><br></br>
                        <input type="radio" id="Nenhuma das anteriores" name={hm_2} value="Nenhuma das anteriores"/>
                        <label for="Nenhuma das anteriores">Nenhuma das anteriores</label><br></br><br></br>
                        
                        <font color = "#6482ff"><strong>3.</strong> De um modo geral, durante os últimos sete dias, o quão limitado você tem estado em suas
atividades por causa de sua asma?</font>
                        <br></br><br></br><input type="radio" id="Nada limitado" name={hm_3} value="Nada limitado"/>
                        <label for="Nada limitado">Nada limitado</label><br></br>
                        <input type="radio" id="Muito pouco limitado" name={hm_3} value="Muito pouco limitado"/>
                        <label for="Muito pouco limitado">Muito pouco limitado</label><br></br>
                        <input type="radio" id="Pouco limitado" name={hm_3} value="Pouco limitado"/>
                        <label for="Pouco limitado">Pouco limitado</label><br></br>
                        <input type="radio" id="Moderadamente limitado" name={hm_3} value="Moderadamente limitado"/>
                        <label for="Moderadamente limitado">Moderadamente limitado</label><br></br>
                        <input type="radio" id="Muito limitado" name={hm_3} value="Muito limitado"/>
                        <label for="Muito limitado">Muito limitado</label><br></br>
                        <input type="radio" id="Extremamente limitado" name={hm_3} value="Extremamente limitado"/>
                        <label for="Extremamente limitado">Extremamente limitado</label><br></br>
                        <input type="radio" id="Totalmente limitado" name={hm_3} value="Totalmente limitado"/>
                        <label for="Totalmente limitado">Totalmente limitado</label><br></br>
                        <input type="radio" id="Nenhuma das anteriores" name={hm_3} value="Nenhuma das anteriores"/>
                        <label for="Nenhuma das anteriores">Nenhuma das anteriores</label><br></br><br></br>

                        <font color = "#6482ff"><strong>4.</strong> De um modo geral, durante os últimos sete dias, o quanto de falta de ar você teve por causa de
sua asma?</font>
                        <br></br><br></br><input type="radio" id="Nenhuma" name={hm_4} value="Nenhuma"/>
                        <label for="Nenhuma">Nenhuma</label><br></br>
                        <input type="radio" id="Muito pouca" name={hm_4} value="Muito pouca"/>
                        <label for="Muito pouca">Muito pouca</label><br></br>
                        <input type="radio" id="Alguma" name={hm_4} value="Alguma"/>
                        <label for="Alguma">Alguma</label><br></br>
                        <input type="radio" id="Moderada" name={hm_4} value="Moderada"/>
                        <label for="Moderada">Moderada</label><br></br>
                        <input type="radio" id="Bastante" name={hm_4} value="Bastante"/>
                        <label for="Bastante">Bastante</label><br></br>
                        <input type="radio" id="Muita" name={hm_4} value="Muita"/>
                        <label for="Muita">Muita</label><br></br>
                        <input type="radio" id="Muitíssima" name={hm_4} value="Muitíssima"/>
                        <label for="Muitíssima">Muitíssima</label><br></br>
                        <input type="radio" id="Nenhuma das anteriores" name={hm_4} value="Nenhuma das anteriores"/>
                        <label for="Nenhuma das anteriores">Nenhuma das anteriores</label>
                        
                    </div>
                        
                    <div className="divider"/>
                    <div className="half-form">
                        <font color = "#6482ff"><strong>5.</strong> De um modo geral, durante os últimos sete dias, quanto tempo você teve chiado?</font>
                        <br></br><br></br><input type="radio" id="Nunca" name={hm_5} value="Nunca"/>
                        <label for="Nunca">Nunca</label><br></br>
                        <input type="radio" id="Quase nunca" name={hm_5} value="Quase nunca"/>
                        <label for="Quase nunca">Quase nunca</label><br></br>
                        <input type="radio" id="Pouco tempo" name={hm_5} value="Pouco tempo"/>
                        <label for="Pouco tempo">Pouco tempo</label><br></br>
                        <input type="radio" id="Algum tempo" name={hm_5} value="Algum tempo"/>
                        <label for="Algum tempo">Algum tempo</label><br></br>
                        <input type="radio" id="Bastante tempo" name={hm_5} value="Bastante tempo"/>
                        <label for="Bastante tempo">Bastante tempo</label><br></br>
                        <input type="radio" id="Quase sempre" name={hm_5} value="Quase sempre"/>
                        <label for="Quase sempre">Quase sempre</label><br></br>
                        <input type="radio" id="Sempre" name={hm_5} value="Sempre"/>
                        <label for="Sempre">Sempre</label><br></br>
                        <input type="radio" id="Nenhuma das anteriores" name={hm_5} value="Nenhuma das anteriores"/>
                        <label for="Nenhuma das anteriores">Nenhuma das anteriores</label><br></br><br></br>

                        <font color = "#6482ff"><strong>6.</strong> Em média, durante os últimos sete dias, quantos jatos de broncodilatador de resgate (Sabutamol, Fenoterol,
etc) você usou por dia?</font>
                        <br></br><br></br><input type="radio" id="Nenhum" name={hm_6} value="Nenhum"/>
                        <label for="Nenhum">Nenhum</label><br></br>
                        <input type="radio" id="1-2 jatos na maior parte dos dias" name={hm_6} value="1-2 jatos na maior parte dos dias"/>
                        <label for="1-2 jatos na maior parte dos dias">1-2 jatos na maior parte dos dias</label><br></br>
                        <input type="radio" id="3-4 jatos na maior parte dos dias" name={hm_6} value="3-4 jatos na maior parte dos dias"/>
                        <label for="3-4 jatos na maior parte dos dias">3-4 jatos na maior parte dos dias</label><br></br>
                        <input type="radio" id="5-8 jatos na maior parte dos dias" name={hm_6} value="5-8 jatos na maior parte dos dias"/>
                        <label for="5-8 jatos na maior parte dos dias">5-8 jatos na maior parte dos dias</label><br></br>
                        <input type="radio" id="9-12 jatos na maior parte dos dias" name={hm_6} value="9-12 jatos na maior parte dos dias"/>
                        <label for="9-12 jatos na maior parte dos dias">9-12 jatos na maior parte dos dias</label><br></br>
                        <input type="radio" id="13-16 jatos na maior parte dos dias" name={hm_6} value="13-16 jatos na maior parte dos dias"/>
                        <label for="13-16 jatos na maior parte dos dias">13-16 jatos na maior parte dos dias</label><br></br>
                        <input type="radio" id="Mais de 16 jatos por dia" name={hm_6} value="Mais de 16 jatos por dia"/>
                        <label for="Mais de 16 jatos por dia">Mais de 16 jatos por dia</label><br></br>
                        <input type="radio" id="Nenhuma das anteriores" name={hm_6} value="Nenhuma das anteriores"/>
                        <label for="Nenhuma das anteriores">Nenhuma das anteriores</label><br></br><br></br>

                        <font color = "#6482ff"><strong>7.</strong> VEF1 pré broncodilatador, em relação ao VEF1 previsto:</font>
                        <br></br><br></br><input type="radio" id="Mais de 95% do previsto" name={hm_7} value="Mais de 95% do previsto"/>
                        <label for="Mais de 95% do previsto">Mais de 95% do previsto</label><br></br>
                        <input type="radio" id="95-90% do previsto" name={hm_7} value="95-90% do previsto"/>
                        <label for="95-90% do previsto">95-90% do previsto</label><br></br>
                        <input type="radio" id="89-80% do previsto" name={hm_7} value="89-80% do previsto"/>
                        <label for="89-80% do previsto">89-80% do previsto</label><br></br>
                        <input type="radio" id="79-70% do previsto" name={hm_7} value="79-70% do previsto"/>
                        <label for="79-70% do previsto">79-70% do previsto</label><br></br>
                        <input type="radio" id="69-60% do previsto" name={hm_7} value="69-60% do previsto"/>
                        <label for="69-60% do previsto">69-60% do previsto</label><br></br>
                        <input type="radio" id="59-50% do previsto" name={hm_7} value="59-50% do previsto"/>
                        <label for="59-50% do previsto">59-50% do previsto</label><br></br>
                        <input type="radio" id="Menos de 50% do previsto" name={hm_7} value="Menos de 50% do previsto"/>
                        <label for="Menos de 50% do previsto">Menos de 50% do previsto</label><br></br>
                        <input type="radio" id="Nenhuma das anteriores" name={hm_7} value="Nenhuma das anteriores"/>
                        <label for="Nenhuma das anteriores">Nenhuma das anteriores</label><br></br><br></br>

                    </div>

                </form>
                <br></br><div className="add-button-container">
                    <div className="add-patient-button">cadastrar paciente</div>
                </div>
            </div>
        );
    }

}

export default connect(null, {  })(AddPatient);
