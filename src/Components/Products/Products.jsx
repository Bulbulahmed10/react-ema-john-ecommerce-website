import React, { useEffect, useState } from "react";
import CartModal from "../CartModal/CartModal";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  
  const handleAddToCart = (product) => {
    const newCart = [...singleProduct, product];
    setSingleProduct(newCart)

    
  }

  

  useEffect(() => {
    const URL =
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="my-4">
        <h1 className="text-center text-3xl font-bold underline mb-4">
          Products
        </h1>
        <div className="grid grid-cols-4 gap-3 px-16">
          {products.map((product) => (
            <Product key={product.id} {...product} handleAddToCart={handleAddToCart}  />
          ))}
        </div>
      </div>

      <CartModal singleProduct={singleProduct} />
    </>
  );
};

export default Products;
