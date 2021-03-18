import React, { Component } from 'react';
import './child.css';

export default class Steps extends Component{
    constructor() {
        super()
        this.state =  {};
    }
    render() {
        return(
        
        <div className="form-steps">
            <div className="content-steps">
                <div className="step-item">
                    <span className="item-steps">1</span>
                    <span className="text-steps">Dados</span>
                </div>
                <div className="step-item">
                    <span className="item-steps">2</span>
                    <span className="text-steps">Características</span>
                </div>
                <div className="step-item">
                    <span className="item-steps">3</span>
                    <span className="text-steps">Conclusão</span>
                </div>
            </div>
        </div>
        );
    }
}