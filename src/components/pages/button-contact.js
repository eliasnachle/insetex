import React        from 'react';
import { Link }     from 'react-router-dom';
import './button-contact.css';


function Cbutton() {
    return(
        <Link to='/contact'>
            <button className="btn-contact">
                Contate
            </button>
        </Link>
    )
}

export default Cbutton;