import React, { useState, useEffect } from "react";
import "../App.css";
const Product = ({ productList }) => {
  const [products, updateProducts] = useState(productList);
  // const [mounted, getMounted] = useState(true);
  const RemoveItem = (e) => {
    // get the target
    const nameOfItem = e.target.getAttribute("title");
    updateProducts(products.filter((item) => item.title !== nameOfItem));
  };
  const renderItem = products.map((product, index) => {
    return (
      <div className="box">
        Item: {product.title}
        <br />
        Brand: {product.brand}
        <br />
        Units: {product.units}
        <br />
        Quantity: {product.quantity}
        <br />
        {product.isPurchased}
        <br />
        <button className="delete" title={product.title} onClick={RemoveItem}>
          remove
        </button>
      </div>
    );
  });

  return (
    <div>
      <h1>React-groceries</h1>
      <div className="flex">{renderItem}</div>
    </div>
  );
};

export default Product;