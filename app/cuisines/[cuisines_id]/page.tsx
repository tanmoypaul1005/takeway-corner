import { fetchCuisinesDetails, fetchCuisinesFood } from "@app/action/cuisines";
import FoodCard from "@app/restaurant/[restaurant_id]/components/FoodCard";
import { iFilter } from "@util/imageImports";
import Image from "next/image";
import React from "react";
import ClearAllButton from "./components/ClearAllButton";

const CuisinesDetails = async({params}) => {

  const foodItems= await fetchCuisinesFood(params?.cuisines_id);

  const cuisinesDetails= await fetchCuisinesDetails(params?.cuisines_id);
  
  return (
    <div className="my-10">
      <div className="border-[1px] flex justify-between rounded-xl p-5">
        <div className="flex p-2 gap-x-3">
          <div className="relative "><Image src={iFilter} alt="" />
          <div className="absolute flex justify-center items-center right-[-6px] bottom-[-4px] bg-[#e21b70] p-1 rounded-full text-[10px] w-[16px] h-[16px]">1</div>
          </div>
          <div>Filter:{cuisinesDetails?.title}</div>
        </div>

        <ClearAllButton/>
      </div>

      <div className="mt-10 ">
        <div className="text-[32px] font-semibold leading-10 text-white mb-5">
          Sweet tooth 🔥
        </div>
        <div className="flex flex-col gap-y-5">
          {
            foodItems?.map((item,index) => (
              <FoodCard key={index} item={item} />
            ))  
          }
        </div>
      </div>
    </div>
  );
};

export default CuisinesDetails;
