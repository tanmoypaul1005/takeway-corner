import React from "react";
import RestaurantTypeListSlider from "./RestaurantTypeListSlider";

const RestaurantTypeList = ({ title = "" }) => {
  return (
    <div className="">
      <div className="text-[32px] font-semibold leading-10 text-white mb-5">
        {title} 🔥
      </div>
     <RestaurantTypeListSlider />
    </div>
  );
};

export default RestaurantTypeList;
