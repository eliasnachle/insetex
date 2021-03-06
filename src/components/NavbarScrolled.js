import React, { useState}       from 'react';
import { Link }                 from 'react-router-dom';
import './Navbar.css';
import Dropdown                 from './Dropdown';
import { IoMdMenu, IoMdClose }  from 'react-icons/io';


function NavbarScrolled() {
    const [click, setClick]         = useState(false);
    const [dropdown, setDropdown]   = useState(false);
    
    const handleClick       = () => {
        document.body.classList.toggle('menu-opened');
        setClick(!click);
    };

    const closeMobileMenu   = () => setClick(false);
    
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
        } else {
          setDropdown(false);
        }
      };

    return (
        <>  
            <nav className="navbar scrolled" >
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo scrolled">
                        <i alt='logo' className="nav-logo" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <IoMdClose/> : <IoMdMenu/>}
                    </div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className="nav-links scrolled" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item" 
                    onClick={() => setDropdown(!dropdown)}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave} >
                        <li className="nav-links scrolled" >
                            Serviços <i className='fas fa-caret-down scrolled' />
                        </li>
                        {dropdown && <Dropdown closeMobileMenu={closeMobileMenu} />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/sobre-nos' className="nav-links scrolled" onClick={closeMobileMenu}>
                            Sobre nós
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contato' className="nav-links scrolled" onClick={closeMobileMenu}>
                            Contato
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/area-do-cliente' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Área do Cliente
                    </Link>
                    </li>
                </ul>
                    <button className="btn scrolled">
                        <Link to='/area-do-cliente' >Área do Cliente</Link>
                    </button>
            </nav>
        </>
    )
}

export default NavbarScrolled
