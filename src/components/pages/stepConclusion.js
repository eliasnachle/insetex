import React, { Component } from 'react';
import './form.css';
import './child.css';

export class stepConclusion extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
    return(
        <div className="container-form">
        <div className="form-steps">
            <div className="content-steps">
                <div className="step-item">
                    <span className="item-steps past">1</span>
                    <span className="text-steps past-text">Dados</span>
                </div>
                <div className="step-item">
                    <span className="item-steps past">2</span>
                    <span className="text-steps present-text">Características</span>
                </div>
                <div className="step-item">
                    <span className="item-steps present">3</span>
                    <span className="text-steps present-text">Conclusão</span>
                </div>
            </div>
        </div>
        <div className="orcamento-form">
        <div className="form-content"></div>
        <div className="form-top">
            <div className="form-group">
                <label>Assunto</label>
                <input 
                    type="name" 
                    className="orcamento-input"
                    name="subject" 
                />    
            </div>
            <div className="form-group">
                <label>Área m² <i>valor aproximado</i></label>
                <input 
                    type="name" 
                    className="orcamento-input"
                    name="area" 
                />    
            </div>
        </div>
        <div className="form-bottom">
                <div className="form-bottom textarea">
                    <label>Mensagem</label>
                    <textarea 
                        name="message" 
                        className="orcamento-textarea" 
                        cols="30" 
                        rows="10"
                    />
                </div>
            </div>
    </div>
        <div className="form-btns">
            <button className="orcamento-prev" onClick={this.back}>Voltar</button>
            <button className="orcamento-next" onClick={this.continue}>Enviar</button>
        </div>
    </div>
    );
 }
}

export default stepConclusion