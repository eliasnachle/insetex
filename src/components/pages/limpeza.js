import React from 'react';
import { Link }             from 'react-router-dom';
import img_service          from '../../imgs/servico_limpeza.jpg';
import '../../App.css';
import './home.css';
import './child.css';

export default function Contact() {
    return(
        <>
        <div className="header-child desinsetizacao">
            <h1>Limpeza de Caixas D' Àgua</h1>
        </div>
        <div className="container-service">
            <div className="content-service">
                <h2>Limpeza de Caixas D' Àgua</h2>
                <p>
                {`A `}<strong>Insetex</strong>{` possui a mais alta tecnologia no combate de pragas urbanas e desinsetização:

                Aranhas, aedes aegypti, baratas,barbeiros, besouros, carunchos, escaravelhos, formigas, gorgulhos, moscas, mosquitos, percevejos, pulgas, piolhos, traças, vespas entre outros.

                Utilizamos técnicas altamente eficientes para a desinsetização, como aplicações precisas de pulverização e micro pulverização. Aplicações da calda de inseticida em todos os pontos possíveis de infestação, agindo por uma ação imediata e criando uma barreira química residual do produto.

                Consiste na saturação do ar ambiente com micropartículas da calda de inseticida que serão distribuídos a todos os pontos da área passivamente, através da corrente de ar existente, utilizaremos termo nebulização, nebulização ou pulverizadores em todo o perímetro. Entre em contato e agende uma visita técnica para a desinsetização da sua casa e/ou sua empresa.`}
                </p>
                <img src={img_service} alt="Desinsetização com Gel" />
                <h3>Métodos</h3>
                <p>
                    {`Utilizamos técnicas altamente eficientes para a desinsetização, 
                    como aplicações precisas de pulverização e micro pulverização. 
                    Aplicações da calda de inseticida em todos os pontos possíveis 
                    de infestação, agindo por uma ação imediata e criando uma barreira
                    química residual do produto.
                    
                    `}

                    <strong>GEL: </strong>{`Aranhas, aedes aegypti (DENGUE), baratas,barbeiros, besouros, 
                    carunchos, escaravelhos, formigas, gorgulhos, moscas, mosquitos, 
                    percevejos, pulgas, piolhos, traças, vespas entre outros.
                    
                    `}

                    <strong>LÍQUIDO: </strong>{`Aranhas, aedes aegypti (DENGUE), baratas,barbeiros, besouros, carunchos,
                    escaravelhos, formigas, gorgulhos, moscas, mosquitos, percevejos, pulgas, piolhos,
                    traças, vespas entre outros.
                    `}
                </p>
            </div>
        </div>
        <div className="orcamento-ads">
            <div className="container-ads">
                <h1>Orçamento</h1>
                <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</p>
                <Link>Solicite Já</Link>
            </div>
        </div>
        </>
    );
}