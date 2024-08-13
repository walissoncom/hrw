import React from "react";
import logo from "./logo.jpeg";

const Header = () => {
  return (
    <div className="container mx-auto mb-5">
      <img className="h-20" src={logo} />
    </div>
  );
};

export default Header;
