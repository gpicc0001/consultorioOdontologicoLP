import React, { useState } from "react";
import {Link, NavLink} from 'react-router-dom'



const NavBarPhone = () => {

const [visible, setVisible] = useState(true)

const menuClickHandler = () =>{
    console.log(`click`);
    setVisible(false)
}

    return(

        <>
            <div className="header__menuContainer__navBarPhone">
                <NavLink onClick={menuClickHandler} className= "header__menuContainer__navBarPhone__btn" to='/nosotros' > Nosotros </NavLink>        
                <NavLink onClick={menuClickHandler} className= "header__menuContainer__navBarPhone__btn" to='/areas'> Areas</NavLink>        
                <NavLink onClick={menuClickHandler} className= "header__menuContainer__navBarPhone__btn" to='/contacto'> Contacto</NavLink>
               

            </div>

        
        
        
        </>
    )

}

export default NavBarPhone 