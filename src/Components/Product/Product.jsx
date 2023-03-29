import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import noImage from "../../assets/no-image.png";
const Product = ({
  id,
  name,
  seller,
  price,
  ratings,
  img,
  stock,
  shipping,
  handleAddToCart,
}) => {
  const starRating = (ratings) => {
    const stars = [];
    for (let i = 0; i < ratings; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
    }

    return <div className="text-yellow-600"> {stars} </div>;
  };

  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={img ? img : noImage} alt="Shoes" />
        </figure>
        <div className="p-4">
          <h2 className="card-title my-2" title={name.length > 24 ? name : ""}>
            {name.length > 24 ? name.slice(0, 24) + "..." : name}
          </h2>
          <p className="font-medium text-slate-600">
            Price:{" "}
            <span className="text-lg font-semibold text-black"> ${price}</span>
          </p>
          <p className="font-medium text-slate-600">
            Manufacturer:{" "}
            <span className="text-lg font-semibold text-black">{seller} </span>{" "}
          </p>
          <div>{starRating(ratings)}</div>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddToCart({ id, name, price, img, stock, shipping })}
              className="btn btn-primary my-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
