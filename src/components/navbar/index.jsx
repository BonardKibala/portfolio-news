import React from "react";
import {Nav,NavLink,Bars,NavMenu} from "./navbarElements";
import Avatar from "@mui/material/Avatar";
import { indigo } from "@mui/material/colors";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/"> <Avatar sx={{ bgcolor: indigo[500] }} aria-label="recipe">
            BK
          </Avatar></NavLink>
        <Bars/>
        <NavMenu>
            <NavLink activeClass="active" to="home" spy={true} smooth={true}>Accueil</NavLink>
            <NavLink to="about" spy={true} smooth={true}>A propos</NavLink>
            <NavLink to="skills" activeStyle>Compétences</NavLink>
            <NavLink to="project" activeStyle>Réalisations</NavLink>
            <NavLink to="" activeStyle>Contact</NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Navbar;
