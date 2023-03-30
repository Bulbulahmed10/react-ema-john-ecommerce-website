import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/localStorageDB";
import CartModal from "../CartModal/CartModal";
import Product from "../Product/Product";

const Products = ({ setCartLength }) => {
  const [products, setProducts] = useState([]);
  const [singleCartProductArr, setSingleCartProductArr] = useState([]);
  const handleAddToCart = (product) => {
    const newCart = [...singleCartProductArr, product];
    setSingleCartProductArr(newCart);
    addToDb(product.id);
  };

  useEffect(() => {
    const URL =
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json";

    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const savedCart = [];
    const storedCart = getShoppingCart();
    for (const id in storedCart) {
      const addedProduct = products.find((pd) => pd.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }

    setSingleCartProductArr(savedCart);
  }, [products]);

  useEffect(() => {
    setCartLength(singleCartProductArr.length);
  }, [handleAddToCart]);

  return (
    <>
      <div className="my-4">
        <h1 className="text-center text-3xl font-bold underline mb-4">
          Products
        </h1>
        <div className="grid grid-cols-4 gap-3 px-16">
          {products.map((product) => (
            <Product
              key={product.id}
              {...product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>

      <CartModal
        singleCartProductArr={singleCartProductArr}
        setSingleCartProductArr={setSingleCartProductArr}
      />
    </>
  );
};

export default Products;
