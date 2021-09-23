import React from "react";
import {Nav,NavLink,Bars,Navbtn,NavMenu} from "./navbarElements"

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/"><h1>Logo</h1></NavLink>
        <Bars/>
        <NavMenu>
            <NavLink activeClass="active" to="home" spy={true} smooth={true}>Accueil</NavLink>
            <NavLink to="about" spy={true} smooth={true}>A propos</NavLink>
            <NavLink to="skills" activeStyle>Compétences</NavLink>
            <NavLink to="" activeStyle>Réalisations</NavLink>
            <NavLink to="" activeStyle>Contact</NavLink>
            <Navbtn>
            {/* <NavBtnLink to="/signin">Sign in</NavBtnLink> */}
           </Navbtn>
        </NavMenu>
        
      </Nav>
    </div>
  );
};

export default Navbar;
