import { useEffect } from "react";

const addToDb = (id) => {
  let shoppingCart = getShoppingCart();
  // add quantity
  const quantity = shoppingCart[id];
  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getShoppingCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const removeFromLocalStorage = (id) => {
  let shoppingCart = getShoppingCart()
  if(id in shoppingCart) {
    delete shoppingCart[id]
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart))
  }
}

export { addToDb, getShoppingCart, removeFromLocalStorage };