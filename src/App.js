import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import PopularDishes from "./Components/PopularDishes/PopularDishes";
import BestFood from "./Components/BestFood/BestFood";
import FoodDelivery from "./Components/FoodDelivery/FoodDelivery";
import DoYouPrefer from "./Components/DoYouPrefer/DoYouPrefer";
import TopDishes from "./Components/TopDishes/TopDishes";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <PopularDishes />
      <BestFood />
      <FoodDelivery />
      <DoYouPrefer />
      <TopDishes />
    </div>
  );
};

export default App;
