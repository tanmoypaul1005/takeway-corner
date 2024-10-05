
import React from "react";
import FoodCard from "./components/FoodCard";

const Food = () => {
  return (
    <div className="container py-5 mx-auto">
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
};

export default Food;