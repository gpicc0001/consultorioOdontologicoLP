import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import cuidado_dental from '../img/cuidado_dental.png'
import { useEffect,useState } from "react";
import NavBarPhone from "./NavBarPhone";
import {menuClickHandler} from "../functions.js"



const Header = ({mensaje}) => {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [visible, setVisible] = useState(false)


    useEffect(() => {
        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    const menuClickHandler = () =>{
        console.log(`click`);
        setVisible(!visible)
    }

    return (
         <>
            <div className="header">
                <NavBar />
                <div className="header__menuContainer"> 
                    {width < 426 ? <img onClick={menuClickHandler} className="header__menuContainer__imagenMenu" src={cuidado_dental}></img> : console.log('la pantalla es mayor a 425px')}
                    {visible ? <NavBarPhone /> : ''}
                </div>
                <h1 className="header__title">{mensaje}</h1>
            </div>
            {console.log({height})};
            {console.log({width})};

         </>
    )
}


export default Header;