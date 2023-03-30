import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import minus from "../.././assets/minus.png";
import plus from "../.././assets/add.png";
import { getShoppingCart } from "../../utilities/localStorageDB";
import "./CartModal.css";

const CartModal = ({ singleCartProductArr, setSingleCartProductArr }) => {
  const [isEmptyCart, setIsEmptyCart] = useState(false);

  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of singleCartProductArr) {
    totalPrice += product.price;
    totalShipping += product.shipping;
  }
  const totalTax = (totalPrice * 8) / 100;
  const grandTotal = totalPrice + totalShipping + totalTax;

  const removeFromLocalStorage = (id) => {
    let shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
    const remainingCartProduct = singleCartProductArr.filter(
      (pd) => pd.id !== id
    );
    setSingleCartProductArr(remainingCartProduct);
  };

  const removeAllCartProductFromLocalStorage = () => {
    localStorage.removeItem("shopping-cart");
    setIsEmptyCart(true);
    setSingleCartProductArr([]);
  };

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
          {singleCartProductArr.length > 0 && isEmptyCart === false ? (
            <div>
              <div className="flex items-center justify-between w-[60%] font-bold">
                <p className="ml-32">Name</p>
                <p className="ml-[94px]">Stock</p>
                <p>Quantity</p>
                <p className="pl-8">Price</p>
                <p>Total Price</p>
              </div>
              <section className="flex justify-between py-2">
                <div className="w-[80%] h-[340px] overflow-y-scroll flex flex-col gap-y-[12px]">
                  {singleCartProductArr.map((singleCartProduct) => (
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
                        <img
                          className="w-5 cursor-pointer"
                          src={minus}
                          alt=""
                        />

                        <input
                          className="w-10 mx-2 rounded-sm outline-none px-1"
                          type="number"
                        />
                        <img className="w-5 cursor-pointer" src={plus} alt="" />
                      </div>
                      <h4>${singleCartProduct.price}</h4>
                      <h4>${singleCartProduct.price}</h4>
                      <p
                        onClick={() =>
                          removeFromLocalStorage(singleCartProduct.id)
                        }
                        className="bg-red-200 px-3 py-2 cursor-pointer rounded-full -ml-8">
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="text-red-600"
                        />
                      </p>
                    </div>
                  ))}
                </div>
                <div className="w-[45%] ml-4 p-4 pt-0 rounded-md">
                  <div className="flex justify-between text-lg bg-red-200 p-2 rounded-md mb-2">
                    <p className="font-medium">Total price: </p>
                    <p className="font-bold">${totalPrice}</p>
                  </div>
                  <div className="flex justify-between text-lg bg-red-200 p-2 rounded-md mb-2">
                    <p className="font-medium">Total Shipping Charge:</p>
                    <p className="font-bold">${totalShipping}</p>
                  </div>
                  <div className="flex justify-between text-lg bg-red-200 p-2 rounded-md mb-2">
                    <p className="font-medium">Tax: </p>
                    <p className="font-bold">${totalTax.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between text-lg bg-red-200 p-2 rounded-md mb-2">
                    <p className="font-medium">Grand Total: </p>
                    <p className="font-bold">${grandTotal.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={removeAllCartProductFromLocalStorage}
                      className="btn btn-warning">
                      Clear cart
                    </button>
                    <button className="btn btn-success">
                      Proceed to checkout
                    </button>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            <h1 className="text-center text-2xl font-bold text-sky-600">
              Cart is empty
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default CartModal;
