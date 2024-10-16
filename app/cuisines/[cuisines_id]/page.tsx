import ShopCard from "@app/restaurant/components/ShopCard";
import { iFilter } from "@util/imageImports";
import Image from "next/image";
import React from "react";

const CuisinesDetails = () => {
  return (
    <div className="my-10">
      <div className="border-[1px] flex justify-between rounded-xl p-5">
        <div className="flex p-2 gap-x-3">
          <div className="relative "><Image src={iFilter} alt="" />
          <div className="absolute flex justify-center items-center right-[-6px] bottom-[-4px] bg-[#e21b70] p-1 rounded-full text-[10px] w-[16px] h-[16px]">1</div>
          </div>
          <div>Filter:Pizza</div>
        </div>

        <div className="p-2 rounded-md cursor-pointer hover:bg-gray-500">
            Clear all
        </div>
      </div>

      <div className="mt-10 ">
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
    </div>
  );
};

export default CuisinesDetails;
