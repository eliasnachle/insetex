import React, { Component } from 'react';
import './form.css';
import './child.css';

export class stepDetails extends Component {
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
                    <span className="item-steps past">1</span>
                    <span className="text-steps past-text">Dados</span>
                </div>
                <div className="step-item">
                    <span className="item-steps present">2</span>
                    <span className="text-steps present-text">Características</span>
                </div>
                <div className="step-item">
                    <span className="item-steps future">3</span>
                    <span className="text-steps future-text">Conclusão</span>
                </div>
            </div>
        </div>
        <div className="orcamento-form">
        <div className="form-content">
            <h2>Qual o problema?</h2>
            <div className="container-check">
                <div className="content-check">
                    <label className="form-label">
                        <input type="checkbox" className="form-checkbox" />
                        <span> Baratas</span>
                    </label>
                </div>
                <div className="content-check">
                    <label className="form-label">
                        <input type="checkbox" className="form-checkbox" />
                        <span> Formigas</span>
                    </label>
                </div>
                <div className="content-check">
                    <label className="form-label">
                        <input type="checkbox" className="form-checkbox" />
                        <span> Ratos</span>
                    </label>
                </div>
                <div className="content-check">
                    <label className="form-label">
                        <input type="checkbox" className="form-checkbox" />
                        <span> Cupim</span>
                    </label>
                </div>
                <div className="content-check">
                    <label className="form-label">
                        <input type="checkbox" className="form-checkbox" />
                        <span> Escorpião</span>
                    </label>
                </div>
                <div className="content-check">
                    <label className="form-label">
                        <input type="checkbox" className="form-checkbox" />
                        <span> Pombos</span>
                    </label>
                </div>
                <div className="content-check">
                    <label className="form-label">
                        <input type="checkbox" className="form-checkbox" />
                        <span> Pernilongos</span>
                    </label>
                </div>
                <div className="content-check">
                    <label className="form-label">
                        <input type="checkbox" className="form-checkbox" />
                        <span> Covid</span>
                    </label>
                </div>
                <div className="content-check">
                    <label className="form-label">
                        <input type="checkbox" className="form-checkbox" />
                        <span> Limpeza de Caixas D' Água</span>
                    </label>
                </div>
            </div>
        </div>
        <div className="form-check">
            <h2>Observações</h2>
            <div className="container-check">
                <div className="content-check">
                    <label className="form-label">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="form-span"> Alergicos</span>
                    </label>
                </div>
                <div className="content-check">
                    <label className="form-label">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="form-span"> Animais</span>
                    </label>
                </div>
                <div className="content-check">
                    <label className="form-label">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="form-span"> Crianças</span>
                    </label>
                </div>
            </div>
        </div>
        <div className="form-check">
            <h2>Tipo de Local</h2>
            <div className="container-check">
                <div className="content-check">
                    <label className="form-label">
                        <input type="checkbox" className="checkbox-residencial"/>
                        <span className="form-span-local">Residencial</span>
                    </label>
                </div>
                <div className="content-check">
                    <label className="form-label">
                        <input type="checkbox" className="checkbox-comercial"/>
                        <span className="form-span-local">Residencial</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
        <div className="form-btns">
            <button className="orcamento-prev" onClick={this.back}>Voltar</button>
            <button className="orcamento-next" onClick={this.continue}>Avançar</button>
        </div>
    </div>
    );
}
}

export default stepDetails