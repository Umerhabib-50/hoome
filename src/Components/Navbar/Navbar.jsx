import React from "react";
import "./Navbar.scss";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import MenuIcon from "@mui/icons-material/Menu";

import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";

import logo from "../../../Assets/Logo.png";
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
      className="mui_box"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <div className="burger_menu">
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
      <div className="main_nav">
        <div className="nav_main_left ">
          <img src={logo} />
        </div>

        <div className="nav_main__right">
          <div className="ham_burger">
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <MenuIcon
                  style={{ color: "white" }}
                  onClick={toggleDrawer(anchor, true)}
                />
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
