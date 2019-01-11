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
    <br />
    <NavLink exact={true} to="/rockets">
      Rockets
    </NavLink>
    <br />
    <NavLink exact={true} to="/dragons">
      Dragons
    </NavLink>
    <br />
    <NavLink exact={true} to="/cores">
      Cores
    </NavLink>
    <br />
    <NavLink exact={true} to="/next-launch">
      Next Launch
    </NavLink>
    <br />
    <NavLink exact={true} to="/roadster">
      Roadster
    </NavLink>
  </div>
);

export default Header;
