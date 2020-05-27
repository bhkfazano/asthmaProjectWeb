import React, { Component } from 'react';

import { connect } from 'react-redux';

import Input from './Input';
import ClearIcon from '@material-ui/icons/Clear';
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

    render() {

        const { name, cpf, email, personal_phone, birth_date, hm_1, hm_2, hm_3, hm_4, hm_5, hm_6, hm_7, exerc_1, exerc_2, exerc_3, exerc_4, exerc_5 } = this.props.values;
        const { handleChange } = this.props;
        return (
            <div className="form-container">
                <Button onclick={this.props.handleExit} classname="exit-button-form" Icon={ClearIcon} size="default" color="primary" />
                <form className="add-form" noValidate autoComplete="off">
                    <div className="half-form">
                        <div className="form-title">Informações de Cadastro</div>
                        <Input value={cpf} id="cpf" type="text" label="cpf" handleChange={handleChange} />
                        <Input value={name} id="name" type="text" label="Nome completo" handleChange={handleChange} />
                        <Input value={email} id="email" type="email" label="e-mail" handleChange={handleChange} />
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
                        <br></br><br></br><input type="radio" id="hm_1" name={hm_1} value="Nunca" onChange={handleChange}/>
                        <label for="Nunca">Nunca</label><br></br>
                        <input type="radio" id="hm_1" name={hm_1} value="Quase nunca" onChange={handleChange}/>
                        <label for="Quase nunca">Quase nunca</label><br></br>
                        <input type="radio" id="hm_1" name={hm_1} value="Poucas vezes" onChange={handleChange}/>
                        <label for="Poucas vezes">Poucas vezes</label><br></br>
                        <input type="radio" id="hm_1" name={hm_1} value="Várias vezes" onChange={handleChange}/>
                        <label for="Várias vezes">Várias vezes</label><br></br>
                        <input type="radio" id="hm_1" name={hm_1} value="Muitas vezes" onChange={handleChange}/>
                        <label for="Muitas vezes">Muitas vezes</label><br></br>
                        <input type="radio" id="hm_1" name={hm_1} value="Muitíssimas vezes" onChange={handleChange}/>
                        <label for="Muitíssimas vezes">Muitíssimas vezes</label><br></br>
                        <input type="radio" id="hm_1" name={hm_1} value="Incapaz de dormir devido à asma" onChange={handleChange}/>
                        <label for="Incapaz de dormir devido à asma">Incapaz de dormir devido à asma</label><br></br>
                        <input type="radio" id="hm_1" name={hm_1} value="Nenhuma das anteriores" onChange={handleChange}/>
                        <label for="Nenhuma das anteriores">Nenhuma das anteriores</label><br></br><br></br>

                        <font color = "#6482ff"><strong>2.</strong> Em média, durante os últimos sete dias, o quão ruins foram os seus sintomas da asma, quando
você acordou pela manhã?</font>
                        <br></br><br></br><input type="radio" id="hm_2" name={hm_2} value="Sem sintomas" onChange={handleChange}/>
                        <label for="Sem sintomas">Sem sintomas</label><br></br>
                        <input type="radio" id="hm_2" name={hm_2} value="Sintomas muito leves" onChange={handleChange}/>
                        <label for="Sintomas muito leves">Sintomas muito leves</label><br></br>
                        <input type="radio" id="hm_2" name={hm_2} value="Sintomas leves" onChange={handleChange}/>
                        <label for="Sintomas leves">Sintomas leves</label><br></br>
                        <input type="radio" id="hm_2" name={hm_2} value="Sintomas moderados" onChange={handleChange}/>
                        <label for="Sintomas moderados">Sintomas moderados</label><br></br>
                        <input type="radio" id="hm_2" name={hm_2} value="Sintomas um tanto graves" onChange={handleChange}/>
                        <label for="Sintomas um tanto graves">Sintomas um tanto graves</label><br></br>
                        <input type="radio" id="hm_2" name={hm_2} value="Sintomas graves" onChange={handleChange}/>
                        <label for="Sintomas graves">Sintomas graves</label><br></br>
                        <input type="radio" id="hm_2" name={hm_2} value="Sintomas muito graves" onChange={handleChange}/>
                        <label for="Sintomas muito graves">Sintomas muito graves</label><br></br>
                        <input type="radio" id="hm_2" name={hm_2} value="Nenhuma das anteriores" onChange={handleChange}/>
                        <label for="Nenhuma das anteriores">Nenhuma das anteriores</label><br></br><br></br>
                        
                        <font color = "#6482ff"><strong>3.</strong> De um modo geral, durante os últimos sete dias, o quão limitado você tem estado em suas
atividades por causa de sua asma?</font>
                        <br></br><br></br><input type="radio" id="hm_3" name={hm_3} value="Nada limitado" onChange={handleChange}/>
                        <label for="Nada limitado">Nada limitado</label><br></br>
                        <input type="radio" id="hm_3" name={hm_3} value="Muito pouco limitado" onChange={handleChange}/>
                        <label for="Muito pouco limitado">Muito pouco limitado</label><br></br>
                        <input type="radio" id="hm_3" name={hm_3} value="Pouco limitado" onChange={handleChange}/>
                        <label for="Pouco limitado">Pouco limitado</label><br></br>
                        <input type="radio" id="hm_3" name={hm_3} value="Moderadamente limitado" onChange={handleChange}/>
                        <label for="Moderadamente limitado">Moderadamente limitado</label><br></br>
                        <input type="radio" id="hm_3" name={hm_3} value="Muito limitado" onChange={handleChange}/>
                        <label for="Muito limitado">Muito limitado</label><br></br>
                        <input type="radio" id="hm_3" name={hm_3} value="Extremamente limitado" onChange={handleChange}/>
                        <label for="Extremamente limitado">Extremamente limitado</label><br></br>
                        <input type="radio" id="hm_3" name={hm_3} value="Totalmente limitado" onChange={handleChange}/>
                        <label for="Totalmente limitado">Totalmente limitado</label><br></br>
                        <input type="radio" id="hm_3" name={hm_3} value="Nenhuma das anteriores" onChange={handleChange}/>
                        <label for="Nenhuma das anteriores">Nenhuma das anteriores</label><br></br><br></br>

                        <font color = "#6482ff"><strong>4.</strong> De um modo geral, durante os últimos sete dias, o quanto de falta de ar você teve por causa de
sua asma?</font>
                        <br></br><br></br><input type="radio" id="hm_4" name={hm_4} value="Nenhuma" onChange={handleChange}/>
                        <label for="Nenhuma">Nenhuma</label><br></br>
                        <input type="radio" id="hm_4" name={hm_4} value="Muito pouca" onChange={handleChange}/>
                        <label for="Muito pouca">Muito pouca</label><br></br>
                        <input type="radio" id="hm_4" name={hm_4} value="Alguma" onChange={handleChange}/>
                        <label for="Alguma">Alguma</label><br></br>
                        <input type="radio" id="hm_4" name={hm_4} value="Moderada" onChange={handleChange}/>
                        <label for="Moderada">Moderada</label><br></br>
                        <input type="radio" id="hm_4" name={hm_4} value="Bastante" onChange={handleChange}/>
                        <label for="Bastante">Bastante</label><br></br>
                        <input type="radio" id="hm_4" name={hm_4} value="Muita" onChange={handleChange}/>
                        <label for="Muita">Muita</label><br></br>
                        <input type="radio" id="hm_4" name={hm_4} value="Muitíssima" onChange={handleChange}/>
                        <label for="Muitíssima">Muitíssima</label><br></br>
                        <input type="radio" id="hm_4" name={hm_4} value="Nenhuma das anteriores" onChange={handleChange}/>
                        <label for="Nenhuma das anteriores">Nenhuma das anteriores</label>
                        
                    </div>
                        
                    <div className="divider"/>
                    <div className="half-form">
                        <font color = "#6482ff"><strong>5.</strong> De um modo geral, durante os últimos sete dias, quanto tempo você teve chiado?</font>
                        <br></br><br></br><input type="radio" id="hm_5" name={hm_5} value="Nunca" onChange={handleChange}/>
                        <label for="Nunca">Nunca</label><br></br>
                        <input type="radio" id="hm_5" name={hm_5} value="Quase nunca" onChange={handleChange}/>
                        <label for="Quase nunca">Quase nunca</label><br></br>
                        <input type="radio" id="hm_5" name={hm_5} value="Pouco tempo" onChange={handleChange}/>
                        <label for="Pouco tempo">Pouco tempo</label><br></br>
                        <input type="radio" id="hm_5" name={hm_5} value="Algum tempo" onChange={handleChange}/>
                        <label for="Algum tempo">Algum tempo</label><br></br>
                        <input type="radio" id="hm_5" name={hm_5} value="Bastante tempo" onChange={handleChange}/>
                        <label for="Bastante tempo">Bastante tempo</label><br></br>
                        <input type="radio" id="hm_5" name={hm_5} value="Quase sempre" onChange={handleChange}/>
                        <label for="Quase sempre">Quase sempre</label><br></br>
                        <input type="radio" id="hm_5" name={hm_5} value="Sempre" onChange={handleChange}/>
                        <label for="Sempre">Sempre</label><br></br>
                        <input type="radio" id="hm_5" name={hm_5} value="Nenhuma das anteriores" onChange={handleChange}/>
                        <label for="Nenhuma das anteriores">Nenhuma das anteriores</label><br></br><br></br>

                        <font color = "#6482ff"><strong>6.</strong> Em média, durante os últimos sete dias, quantos jatos de broncodilatador de resgate (Sabutamol, Fenoterol,
etc) você usou por dia?</font>
                        <br></br><br></br><input type="radio" id="hm_6" name={hm_6} value="Nenhum" onChange={handleChange}/>
                        <label for="Nenhum">Nenhum</label><br></br>
                        <input type="radio" id="hm_6" name={hm_6} value="1-2 jatos na maior parte dos dias" onChange={handleChange}/>
                        <label for="1-2 jatos na maior parte dos dias">1-2 jatos na maior parte dos dias</label><br></br>
                        <input type="radio" id="hm_6" name={hm_6} value="3-4 jatos na maior parte dos dias" onChange={handleChange}/>
                        <label for="3-4 jatos na maior parte dos dias">3-4 jatos na maior parte dos dias</label><br></br>
                        <input type="radio" id="hm_6" name={hm_6} value="5-8 jatos na maior parte dos dias" onChange={handleChange}/>
                        <label for="5-8 jatos na maior parte dos dias">5-8 jatos na maior parte dos dias</label><br></br>
                        <input type="radio" id="hm_6" name={hm_6} value="9-12 jatos na maior parte dos dias" onChange={handleChange}/>
                        <label for="9-12 jatos na maior parte dos dias">9-12 jatos na maior parte dos dias</label><br></br>
                        <input type="radio" id="hm_6" name={hm_6} value="13-16 jatos na maior parte dos dias" onChange={handleChange}/>
                        <label for="13-16 jatos na maior parte dos dias">13-16 jatos na maior parte dos dias</label><br></br>
                        <input type="radio" id="hm_6" name={hm_6} value="Mais de 16 jatos por dia" onChange={handleChange}/>
                        <label for="Mais de 16 jatos por dia">Mais de 16 jatos por dia</label><br></br>
                        <input type="radio" id="hm_6" name={hm_6} value="Nenhuma das anteriores" onChange={handleChange}/>
                        <label for="Nenhuma das anteriores">Nenhuma das anteriores</label><br></br><br></br>

                        <font color = "#6482ff"><strong>7.</strong> VEF1 pré broncodilatador, em relação ao VEF1 previsto:</font>
                        <br></br><br></br><input type="radio" id="hm_7" name={hm_7} value="Mais de 95% do previsto" onChange={handleChange}/>
                        <label for="Mais de 95% do previsto">Mais de 95% do previsto</label><br></br>
                        <input type="radio" id="hm_7" name={hm_7} value="95-90% do previsto" onChange={handleChange}/>
                        <label for="95-90% do previsto">95-90% do previsto</label><br></br>
                        <input type="radio" id="hm_7" name={hm_7} value="89-80% do previsto" onChange={handleChange}/>
                        <label for="89-80% do previsto">89-80% do previsto</label><br></br>
                        <input type="radio" id="hm_7" name={hm_7} value="79-70% do previsto" onChange={handleChange}/>
                        <label for="79-70% do previsto">79-70% do previsto</label><br></br>
                        <input type="radio" id="hm_7" name={hm_7} value="69-60% do previsto" onChange={handleChange}/>
                        <label for="69-60% do previsto">69-60% do previsto</label><br></br>
                        <input type="radio" id="hm_7" name={hm_7} value="59-50% do previsto" onChange={handleChange}/>
                        <label for="59-50% do previsto">59-50% do previsto</label><br></br>
                        <input type="radio" id="hm_7" name={hm_7} value="Menos de 50% do previsto" onChange={handleChange}/>
                        <label for="Menos de 50% do previsto">Menos de 50% do previsto</label><br></br>
                        <input type="radio" id="hm_7" name={hm_7} value="Nenhuma das anteriores" onChange={handleChange}/>
                        <label for="Nenhuma das anteriores">Nenhuma das anteriores</label><br></br><br></br>

                    </div>

                </form>
                <br></br><div className="add-button-container">
                    <div className="add-patient-button" onClick={this.props.handleSubmit}>cadastrar paciente</div>
                </div>
                
            </div>
        );
    }

}

export default connect(null, {  })(AddPatient);

