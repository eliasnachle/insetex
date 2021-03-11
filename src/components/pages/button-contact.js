import React, { useState}       from 'react';
import './button-contact.css';
import { Link } from 'react-router-dom';

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