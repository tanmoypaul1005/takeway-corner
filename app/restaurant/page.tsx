import React from "react";
import ShopCard from "./components/ShopCard";

const Restaurant = () => {
  return (
    <>
      <div className="">
        <div className="text-[32px] font-semibold leading-10 text-white mb-5">
          Sweet tooth 🔥
        </div>
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
      </div>

      <div className="">
        <div className="text-[32px] font-semibold leading-10 text-white mb-5">
          Gorom gorom biryani 🔥
        </div>
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
      </div>

      <div className="">
        <div className="text-[32px] font-semibold leading-10 text-white mb-5">
          Homechefs 🔥
        </div>
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
      </div>
    </>
  );
};

export default Restaurant;
