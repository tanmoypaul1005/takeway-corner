import React from "react";
import RestaurantTypeListSlider from "./RestaurantTypeListSlider";

const RestaurantTypeList = ({ title = "",shop=[] }) => {
  return (
    <div className="">
      <div className="text-[32px] font-semibold leading-10 text-white mb-5">
        {title} 🔥
      </div>
     <RestaurantTypeListSlider shop={shop} />
    </div>
  );
};

export default RestaurantTypeList;
