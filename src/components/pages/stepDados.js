import React, { Component } from 'react';
import './form.css';
import './child.css';


export class stepDados extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render(){
    return(
        <div className="container-form">
        <div className="form-steps">
            <div className="content-steps">
                <div className="step-item">
                    <span className="item-steps present">1</span>
                    <span className="text-steps present-text">Dados</span>
                </div>
                <div className="step-item">
                    <span className="item-steps future">2</span>
                    <span className="text-steps future-text">Características</span>
                </div>
                <div className="step-item">
                    <span className="item-steps future">3</span>
                    <span className="text-steps future-text">Conclusão</span>
                </div>
            </div>
        </div>
        <div className="orcamento-form">
        <div className="form-content">
            <div className="form-top">
                    <div className="form-group">
                        <label>Nome</label>
                        <input 
                            type="name" 
                            className="orcamento-input"
                            name="name" 
                        />    
                    </div>
                    <div className="form-group">                        
                        <label>Telefone</label>
                        <input 
                            type="tel" 
                            className="orcamento-input"
                            name="tel" 
                        />
                    </div>
                </div>
                <div className="form-bot">
                    <div className="form-group">
                        <label>E-mail</label>
                        <input 
                            type="email" 
                            className="orcamento-input"
                            name="email" 
                        />
                    </div>
                    <div className="form-group">
                        <label>Data</label>
                        <input 
                            type="date" 
                            className="orcamento-input"
                            name="date"
                        />
                    </div>
                </div>
                <div className="form-bottom">
                    <label>Endereço</label>
                    <input 
                        type="text" 
                        className="orcamento-input" 
                        name="adress" 
                    />
                </div>
        </div>
            <div className="form-btns left">
                <button className="orcamento-next" onClick={this.continue}>Avançar</button>
            </div>
        </div>
    </div>
    );
}
}

export default stepDados