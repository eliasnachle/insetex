import React, { useState}       from 'react';
import Button                   from './Button';
import { Link }                 from 'react-router-dom';
import './Navbar.css';
import Dropdown                 from './Dropdown';
import { IoMdMenu, IoMdClose }  from 'react-icons/io';


function Navbar() {
    const [click, setClick]         = useState(false);
    const [dropdown, setDropdown]   = useState(false);
    const [navbar, setNavbar]       = useState(false);
    
    const handleClick       = () => {
        document.body.classList.toggle('menu-opened');
        setClick(!click);
    };

    const closeMobileMenu   = () => setClick(false);

    const navScroll = () => {
        if(window.scrollY >= 5) {
            setNavbar(true);
        } else{
            setNavbar(false);
        }
    };
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

    window.addEventListener('scroll', navScroll);

    return (
        <>  
            <nav className={navbar ? 'navbar scrolled' : 'navbar'} >
                <div className="navbar-container container">
                    <Link to='/' className={navbar ? 'navbar-logo scrolled' : 'navbar-logo' }>
                        <a alt='logo' className="nav-logo" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <IoMdClose/> : <IoMdMenu/>}
                    </div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className={navbar ? 'nav-links scrolled' : 'nav-links' } onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item' 
                    onClick={() => setDropdown(!dropdown)}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    >
                        <Link className={navbar ? 'nav-links scrolled' : 'nav-links' } >
                            Serviços <i className={navbar ? 'fas fa-caret-down scrolled': 'fas fa-caret-down'} />
                        </Link>
                        {dropdown && <Dropdown closeMobileMenu={closeMobileMenu} />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/sobre-nos' className={navbar ? 'nav-links scrolled' : 'nav-links' } onClick={closeMobileMenu}>
                            Sobre nós
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contato' className={navbar ? 'nav-links scrolled' : 'nav-links' } onClick={closeMobileMenu}>
                            Contato
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/area-do-cliente' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Área do Cliente
                    </Link>
                    </li>
                </ul>
                    <Button className={navbar ? 'btn scrolled' : 'btn' }/> 
            </nav>
        </>
    )
}

export default Navbar
