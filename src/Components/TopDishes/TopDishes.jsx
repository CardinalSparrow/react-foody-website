import React from "react";
import "./TopDishes.css";
import delivery_data from "../Assets/delivery_data";
import DeliveryType from "../DeliveryType/DeliveryType";
const TopDishes = () => {
  return (
    <div className="top-dishes">
      <div className="dish">
        {delivery_data.map((dish) => {
          return (
            <DeliveryType
              image={dish.image}
              name={dish.name}
              price={dish.price}
              button="Add To Cart"
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopDishes;
