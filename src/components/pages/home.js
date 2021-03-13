import React from 'react';
import { makeStyles }   from "@material-ui/core/styles";
import { ServiceItems } from './ServicesItems';
import { Link }         from 'react-router-dom';
import { Logo }         from './logo';
import Cbutton          from './button-contact';
import '../../App.css';
import './home.css';
import Whatsapp       from '../whatsapp';
import homee          from '../../imgs/home.svg';

const ColorPrimary = "rgba(0,156,255.57)";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#30aded",
    fill: "#fff",
    transition: "1s all",
    padding: "30px",
    display: "inline-flex",
    borderRadius: "10em",
    cursor: "pointer",
    "&:hover": {
      boxShadow: `0px 0px 14px -2.8px ${ColorPrimary}`,
      background: "#fff",
      fill: "#009cff",
      transition: "0.7s all",
    }
  }
}));

export default function Home() {
    const classes = useStyles();
    document.title = 'Insetex - Home'
    return(
        <>  
            <Whatsapp />
            <div className='home'>
                <div className='container-home'>
                    <div className="content-home">
                        <h1>{`Insetex Controle 
                        Tecnológico de Insetos`}</h1>
                        <p>{`Talk To Our Experts and Get Your Dream Home Done.If you dream of designing a 
                        new home that takes full advantage of the unique geography and views of land 
                        that you love`}</p>
                        <button className='btn-home'>SAIBA MAIS</button>
                    </div>
                    <img src={homee} alt="Imagem"/>
                </div>
             </div>
            <div className='test'>  
                <div className="container-services">
                    <h3>Nossos Serviços</h3>
                    <p>
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut
                    labore et dolore magna`}
                    </p>
                    <div className="content-services">
                        {ServiceItems.map((item) =>{
                            return(
                                <div className="icon-service">
                                    <Link to={item.link}>
                                        <i className={classes.root}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox={item.viewBox} width="65" height="65">
                                            <path d={item.svgPath}                                            
                                            transform={item.svgTransform}/>
                                            <path d={item.svgPath2}                                            
                                            transform={item.svgTransform2}/>
                                            </svg>
                                        </i>
                                    </Link>
                                    <Link to={item.link}>
                                        <h2>{item.title}</h2>
                                    </Link>                   
                                    <p>{item.description}</p>
                                </div>
                            )
                        }
                        )}      
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="about-container">
                        <div className="about-content">                                
                            <Link to="/">
                                <Logo />
                            </Link>
                            <p>
                            {`Há duas décadas no mercado de Controle de Pragas e Desentupimento 
                            a INSETEX,  vem prestando serviços com qualidade, segurança e eficiência 
                            altamente especializada, seguindo padrões e normas de segurança e qualidade. 
                            Fundada há quase três decadas, a INSETEX começou a comercializar seus serviços 
                            apenas na Grande São Paulo com o objetivo inicial de suprir as
                            necessidades locais. buscando constante aprimoramento.`}
                            </p>
                        </div>
                </div>             
            </div>
        <div className="contact">
            <div className="contact-container">
                <h1>Solução?</h1>
                <p>Entre em contato e solicite seu orçamento!</p>
                <Cbutton />
            </div>
        </div>
        </>
    );
}