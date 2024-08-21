import React from "react";
// import logo from "./logo.jpeg";
import logo from "../assets/images/hrwlogo.png";

const Header = () => {
  return (
    <div className="container mx-auto">
      <img className="w-32 mt-5 mb-5 ml-5" src={logo} alt="Logo" />
    </div>
  );
};

export default Header;
