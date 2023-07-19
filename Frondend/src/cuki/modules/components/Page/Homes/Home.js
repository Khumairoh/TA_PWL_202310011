import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import "./Home.css";

import image1 from "../../../../assets/media/gmbr/image 1gs.png";

import MenuResep from "../MenuResep/MenuResep";
import About from "../About/About";

export default class Home extends Component {
  render() {
    return (
      <div className="Fcontainer pukus">
        <img src={image1} className="bgHome" alt="bg-1" />
        <h1 className="mau">Mau Masak Apa?</h1>

      <div className="MenuResep" style={{marginTop: "43%"}}>
      <box >
        <MenuResep />
      </box>

      <div className="aboutus">
        <Box>
          <About />
        </Box>
      </div>
      
      </div>
      </div>
    );
  }
}
