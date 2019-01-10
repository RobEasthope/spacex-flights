import * as React from "react";
import { NavLink } from "react-router-dom";

import Title from "../Title/Title";

interface HeaderProps {
  title: string;
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <div>
    <Title>{title}</Title>{" "}
    <NavLink exact={true} to="/">
      Home
    </NavLink>
    <br />
    <NavLink exact={true} to="/repos">
      Repos
    </NavLink>
  </div>
);

export default Header;
