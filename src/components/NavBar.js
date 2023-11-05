import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import logoConsultorioLP_figma from '../img/logoConsultorioLP_figma.png'
import elipse_header from '../img/elipse_header.png'




const NavBar = () => {


    return (

        <>
        
        <nav className='navBar'>
            <Link to='/'> 
                <img className="navBar__logoConsultorio" src={logoConsultorioLP_figma} alt="logoConsultorio" ></img> 
            </Link>
            <NavLink className= "navBar__btn" to='/nosotros' > Nosotros </NavLink>        
            <NavLink className= "navBar__btn" to='/areas'> Areas</NavLink>        
            <NavLink className= "navBar__btn" to='/contacto'> Contacto</NavLink>           
            <img className="navBar__elipse" src={elipse_header} alt="elipse" ></img> 
        </nav>

        
        </>
    )
}

export default NavBar;