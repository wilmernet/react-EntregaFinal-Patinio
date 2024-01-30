import React from 'react';
import "./NavBar.css";
import {Link} from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import CategoryButton from '../CategoryButton/CategoryButton';
import ViewItems from '../ViewItems/ViewItems';

const NavBar = ({comp}) => {  
  return (
    <nav className="NavBar">
        <ul>
            <Link to={"/"} className="button">Home</Link>
            <Link to={"/about"} className="button">Contacto</Link>
            <Link to={"/"} ><CategoryButton /></Link>                 
            <Link to={"/"} ><ViewItems onCambio={comp}/></Link>                 
        </ul>
        
        <div id="cartWidget">
           <CartWidget/>
           {/* {comp} */}
        </div>
    </nav>
  )
}

export default NavBar