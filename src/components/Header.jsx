import React from "react";
// import logo from "./logo.jpeg";
import logo from "../assets/images/hrwlogo.png";

const Header = () => {
  return (
    <div className="container mx-auto mt-5 mb-5">
      <img className="w-32" src={logo} alt="Logo" />
    </div>
  );
};

export default Header;
