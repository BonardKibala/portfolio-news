import React from "react";
import {Nav,NavLink,Bars,Navbtn,NavMenu,NavBtnLink} from "./navbarElements"

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/"><h1>Logo</h1></NavLink>
        <Bars/>
        <NavMenu>
            <NavLink to="/home" activeStyle>Accueil</NavLink>
            <NavLink to="/services" activeStyle>A propos</NavLink>
            <NavLink to="/skills" activeStyle>Compétences</NavLink>
            <NavLink to="/productions" activeStyle>Réalisations</NavLink>
            <NavLink to="/contact" activeStyle>Contact</NavLink>
            <Navbtn>
            <NavBtnLink to="/signin">Sign in</NavBtnLink>
           </Navbtn>
        </NavMenu>
        
      </Nav>
    </div>
  );
};

export default Navbar;
