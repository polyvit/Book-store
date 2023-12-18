import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Panel from "./Panel/Panel";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Menu />
      <Panel />
    </div>
  );
};

export default Header;
