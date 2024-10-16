import React from "react";
import CuisinesSlider from "./components/CuisinesSlider";
import { fetchCuisines } from "@app/action/cuisines";

const Cuisines = async() => {

  const cuisines = await fetchCuisines();

  return (
    <div>
      <div className="text-[32px] font-semibold leading-10 text-white mb-5">
        Your favourite cuisines 🔥
      </div>

      <CuisinesSlider cuisines={cuisines}/>
    </div>
  );
};

export default Cuisines;
