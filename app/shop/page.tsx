
import React from "react";
import ShopCard from "./components/ShopCard";

const Shop = () => {
  return (
    <div className="container py-5 mx-auto">
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>
    </div>
  );
};

export default Shop;