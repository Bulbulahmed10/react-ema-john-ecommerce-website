import React from "react";
import logo from "../.././assets/Logo.svg";

const Header = ({ totalCart }) => {
  return (
    <header className="flex items-center justify-between bg-[#1C2B35] px-20 py-3 sticky top-0 z-50">
      <img src={logo} alt="" />
      <nav className="text-white flex gap-10">
        <label
          htmlFor="my-modal-3"
          className="hover:text-blue-400 cursor-pointer relative">
          Cart
        </label>

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
        {totalCart > 0 && (
          <p className="absolute ml-6 -mt-2 bg-red-500 px-[6px] rounded-full text-sm ">
            {totalCart < 10 ? "0" + totalCart : totalCart}
          </p>
        )}
      </nav>
    </header>
  );
};

export default Header;
