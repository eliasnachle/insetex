import React                    from 'react';
import { MenuItems }            from './MenuItems';
import { Link }                 from 'react-router-dom';
import { LogoDark }             from './pages/logo';
import                               './Footer.css';


function Footer() {
    return(
        <footer className="footer-content">
            <div className="footer">
                <div className="footer-logo">
                <Link to="/" className="footer-logo-svg">
                    <LogoDark />
                </Link>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna 
                    aliqua. Quis ipsum suspendisse ultrices
                    gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis. 
                    </p>          
                </div>
                <ul>
                <li className="footer-title" >Serviços</li>
                    {MenuItems.map((item, index) => {
                        return( 
                            <li>
                                <Link to={item.path} >
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <ul>
                    <li className="footer-title" >Contato</li>
                    <li><a href="mailto:contato@insetex.com.br?">contato@insetex.com.br</a></li>
                    <li><a href="tel:11-2359-1308">(11) 2359-1308</a></li>
                    <li><a href="tel:11-2359-1308">(11) 98286-6204</a></li>
                </ul>
                <ul>
                    <li className="footer-title" >Sobre</li>
                    <li><Link to="/about">Sobre nós</Link></li>
                </ul>
            </div>
            <div className="copyright">
                <p>© 2021 Insetex Controle de Pragas</p>
            </div>
        </footer>
    )
}

export default Footer;