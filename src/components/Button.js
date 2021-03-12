import React, { useState}       from 'react';
import { Link }                 from 'react-router-dom';
import './Button.css';
import './Dropdown.css';


    function Button() {
        const [btn, setBtn] = useState(false);

        const navScroll = () => {
            if(window.scrollY >= 5) {
                setBtn(true);
        } else{
            setBtn(false);
        }
        };

        window.addEventListener('scroll', navScroll);

    return(
        <Link to='/area-do-cliente'>
            <button className={btn ? 'btn' : 'btn-scrolled'  }>
                Área do Cliente
            </button>
        </Link>
    )
}

export default Button;