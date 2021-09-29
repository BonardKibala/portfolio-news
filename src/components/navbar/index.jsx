import React from "react";
import {Nav,NavLink,Bars,NavMenu} from "./navbarElements";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";


const Navbar = () => {

  return (
    <div>
      <Nav>
        <NavLink to="/"> <Avatar sx={{ bgcolor: red[400] }} aria-label="recipe">
            BK
          </Avatar></NavLink>
        <Bars/>
        <NavMenu>
            <NavLink to="home" spy={true} smooth={true}>Accueil</NavLink>
            <NavLink to="about" spy={true} smooth={true}>A propos</NavLink>
            <NavLink to="skills" spy={true} smooth={true}>Compétences</NavLink>
            <NavLink to="project" spy={true} smooth={true}>Réalisations</NavLink>
            <NavLink to="contact" spy={true} smooth={true}>Contact</NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Navbar;
