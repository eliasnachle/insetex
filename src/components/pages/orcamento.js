import React            from 'react';
import { Link }         from 'react-router-dom';
import OrcamentoForm    from './orcamento_form';
import './child.css';



export default function Orcamento() {
    return(
        <>
        <div className="container-orcamento">
            <div className="content-orcamento">
                <h2>Orçamento</h2>
                <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor.`}</p>
                <OrcamentoForm />
            </div>
        </div>
        </>
    );
}