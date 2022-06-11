import React from "react";
import "./Navbar.scss";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import polygon from "../../../Images/Polygon.png";
import click from "../../../Images/click.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";

import logo from "../../../Images/Logo.png";
const Navbar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      className="menu_mui_box"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <div className="hoome_burger_menu">
        <div className="burger_nedd">
          <div className="close">
            <img src={logo} />
            <CloseIcon
              className="close_icon"
              onClick={toggleDrawer(anchor, false)}
            />
          </div>

          <div className="nav_text">Work</div>
          <div className="nav_text">Process</div>
          <div className="nav_text">About</div>
          <div className="nav_text">Contact</div>

          <div className="mail">hello@hoome.co.uk</div>
        </div>
      </div>
    </Box>
  );
  return (
    <>
      <div className="main_hoome_menu_nav">
        <div className="nav_main__right">
          <div className="ham_burger">
            {["top"].map((anchor) => (
              <React.Fragment key={anchor}>
                <div
                  className="unvispoly_main"
                  onClick={toggleDrawer(anchor, true)}
                >
                  <img src={polygon} className="unvispoly" />
                  <div className="click">
                    <img src={click} className="click" />
                  </div>
                </div>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
