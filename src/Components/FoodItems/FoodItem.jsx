import React from "react";
import "./FoodItem.css";
const FoodItem = (props) => {
  return (
    <div className="food-item">
      <img src={props.image} alt="" />
      <h3 className="food-name">{props.name}</h3>
      <h3 className="food-price">${props.price}</h3>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default FoodItem;
