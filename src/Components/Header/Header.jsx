import React from "react";
import logo from "../.././assets/Logo.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-[#1C2B35] px-20 py-3 sticky top-0 z-50">
      <img src={logo} alt="" />
      <nav className="text-white flex gap-10">
        <a className="hover:text-blue-400 relative" href="/order">
          Cart
        </a>
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
        <p className="absolute ml-6 -mt-2 bg-red-400 px-[6px] rounded-full text-sm">
          0
        </p>
      </nav>
    </header>
  );
};

export default Header;
