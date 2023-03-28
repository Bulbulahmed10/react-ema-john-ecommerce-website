import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import minus from "../.././assets/minus.png";
import plus from "../.././assets/add.png";
const CartModal = ({ singleProduct }) => {
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-7xl relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <div className="flex items-center justify-between w-[60%] font-bold">
            <p className="ml-32">Name</p>
            <p className="ml-[94px]">Stock</p>
            <p>Quantity</p>
            <p className="pl-8">Price</p>
            <p>Total Price</p>
          </div>
          <section className="flex justify-between py-2">
            <div className="w-[80%] flex flex-col gap-y-[12px]">
              {singleProduct.map((singleCartProduct) => (
                <div
                  key={singleCartProduct.id}
                  className="flex items-center justify-between shadow-md py-1 px-2 rounded-md border-2 bg-slate-200">
                  <img
                    className="w-16 h-16"
                    src={singleCartProduct.img}
                    alt=""
                  />
                  <h2
                    className="-ml-12 text-sm font-medium w-44"
                    title={
                      singleCartProduct.name.length > 20
                        ? singleCartProduct.name
                        : ""
                    }>
                    {" "}
                    {singleCartProduct.name.length > 20
                      ? singleCartProduct.name.slice(0, 20) + "..."
                      : singleCartProduct.name}
                  </h2>
                  <h4> {singleCartProduct.stock} </h4>
                  <div className="flex items-center">
                    <img className="w-5 cursor-pointer" src={minus} alt="" />

                    <input
                      className="w-14 mx-2 rounded-sm outline-none px-1"
                      type="number"
                    />
                    <img className="w-5 cursor-pointer" src={plus} alt="" />
                  </div>
                  <h4>${singleCartProduct.price}</h4>
                  <h4>$5545</h4>
                  <p className="bg-red-200 px-3 py-2 cursor-pointer rounded-full -ml-8">
                    <FontAwesomeIcon icon={faTrash} className="text-red-600" />
                  </p>
                </div>
              ))}
            </div>
            <div className="w-[45%] ml-4 p-4 rounded-md">
              <div className="flex justify-between text-lg bg-red-200 p-2 rounded-md mb-2">
                <p className="font-medium">Total price: </p>
                <p className="font-bold">$454454</p>
              </div>
              <div className="flex justify-between text-lg bg-red-200 p-2 rounded-md mb-2">
                <p className="font-medium">Total Shipping Charge:</p>
                <p className="font-bold">$451</p>
              </div>
              <div className="flex justify-between text-lg bg-red-200 p-2 rounded-md mb-2">
                <p className="font-medium">Tax: </p>
                <p className="font-bold">$784</p>
              </div>
              <div className="flex justify-between text-lg bg-red-200 p-2 rounded-md mb-2">
                <p className="font-medium">Grand Total: </p>
                <p className="font-bold">$5452</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CartModal;
