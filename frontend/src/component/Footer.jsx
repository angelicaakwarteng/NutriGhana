import React from "react";
import MyLogo from "../assets/logo/nutrighanaLogo.svg";

const Footer = () => {
  return (
    <div>
      {" "}
      {/* Logo */}
      <div className="absolute bottom-10 right-2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md">
        <img src={MyLogo} alt="Nutri Ghana logo" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default Footer;
