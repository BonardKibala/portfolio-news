import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Bars, DrawerBloc, NavLinkDrawer } from "./navbarElements";

const Drawer = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 250,
        backgroundColor: "black",
        color: "white",
        alignItems: "center",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <DrawerBloc>
        <NavLinkDrawer
          to="home"
          spy={true}
          smooth={true}
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          {" "}
          Accueil
        </NavLinkDrawer>
        <NavLinkDrawer
          to="about"
          spy={true}
          smooth={true}
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          A propos
        </NavLinkDrawer>
        <NavLinkDrawer
          to="skills"
          spy={true}
          smooth={true}
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          Compétences
        </NavLinkDrawer>
        <NavLinkDrawer
          to="project"
          spy={true}
          smooth={true}
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          Réalisations
        </NavLinkDrawer>
        <NavLinkDrawer
          to="contact"
          spy={true}
          smooth={true}
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          Contact
        </NavLinkDrawer>
      </DrawerBloc>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Bars onClick={toggleDrawer(anchor, true)} />
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Drawer;
