import React from 'react';
import CssHeader from './header.css'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


const Header = () => {
    return(
    <div>
                <div className="contenedornav">
                <Link to="/" className="logo"><img src="imagenes/logo.jpg" alt="" /></Link>
            <input type="checkbox" id="menu-button" />
            <label for="menu-button" className="menu-logo"><img src="imagenes/menu-logo.jpg"/></label>
            <nav className="navegador">
            <ul className="show">
                <li><Link to="/foro">Foro</Link></li>
                <li><Link to="/guias">Guias</Link></li>
                <li><Link to="/login">Iniciar Sesion</Link></li>
                <li><Link to="/singup">Crear Cuenta</Link></li>
            </ul>
        </nav>
            </div>
    </div>

)
}

export default Header;