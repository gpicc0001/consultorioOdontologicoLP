import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import cuidado_dental from '../img/cuidado_dental.png'
import { useEffect,useState } from "react";



const Header = ({mensaje}) => {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)


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


    return (
         <>
            <div className="header">
                <NavBar />
                <div> {width < 425 ? <img className="header__imagenMenu" src={cuidado_dental}></img> : console.log('la pantalla es mayor a 425px')}</div>
                <h1 className="header__title">{mensaje}</h1>
            </div>
            {console.log({height})};
            {console.log({width})};

         </>
    )
}


export default Header;