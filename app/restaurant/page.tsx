import React from "react";
import RestaurantTypeList from "./components/RestaurantTypeList";

const Restaurant = () => {
  return (
    <>
      <RestaurantTypeList title="Sweet tooth"/>
      <RestaurantTypeList title="Gorom gorom biryani"/>
      <RestaurantTypeList title="Homechefs "/>
    </>
  );
};

export default Restaurant;
