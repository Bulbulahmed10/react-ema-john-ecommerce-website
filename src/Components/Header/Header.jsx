import React from "react";
import logo from "../.././assets/Logo.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-[#1C2B35] px-20 py-3">
      <img src={logo} alt="" />
      <nav className="text-white flex gap-10">
        <a className="hover:text-blue-400" href="/order">
          Order
        </a>
        <a className="hover:text-blue-400" href="/Order-review">
          Order Review
        </a>
        <a className="hover:text-blue-400" href="/manage-inventory">
          Manage Inventory
        </a>
        <a className="hover:text-blue-400" href="/login">
          Login
        </a>
      </nav>
    </header>
  );
};

export default Header;
