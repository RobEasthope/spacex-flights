import React from "react";
import { NavLink } from "react-router-dom";

import Title from "../Title/Title";

const Header = () => (
  <div>
    <Title>SpaceX Flights</Title>{" "}
    <NavLink exact={true} to="/">
      Home
    </NavLink>
    <br />
    <NavLink exact={true} to="/launches">
      Launches
    </NavLink>
  </div>
);

export default Header;
