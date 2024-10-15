import React from "react";
import RestaurantTypeList from "./components/RestaurantTypeList";
import {fetchShop} from "../action/shop/index"
const Restaurant = async() => {

  const shop =await fetchShop();

  console.log("shop",shop)

  return (
    <>
      <RestaurantTypeList shop={shop} title="Sweet tooth"/>
      <RestaurantTypeList shop={shop}  title="Gorom gorom biryani"/>
      <RestaurantTypeList shop={shop}  title="Homechefs "/>
    </>
  );
};

export default Restaurant;
