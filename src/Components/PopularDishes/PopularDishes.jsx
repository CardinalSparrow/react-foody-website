import React from "react";
import "./PopularDishes.css";
import data_food from "../Assets/data";
import FoodItem from "../FoodItems/FoodItem";
const PopularDishes = () => {
  return (
    <div className="popular-dishes">
      <h1>Popular Dishes</h1>
      <div className="popular-dish">
        {data_food.map((item) => {
          return (
            <FoodItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
      <button className="all-button">All dishes</button>
    </div>
  );
};

console.log(data_food);

export default PopularDishes;
