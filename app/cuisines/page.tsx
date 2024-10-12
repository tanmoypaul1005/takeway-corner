import React from "react";
import CuisinesCard from "./components/CuisinesCard";
import CuisinesSlider from "./components/CuisinesSlider";

const Cuisines = () => {
  return (
    <div>
      <div className="text-[32px] font-semibold leading-10 text-white mb-5">
        Your favourite cuisines 🔥
      </div>

      <CuisinesSlider />
    </div>
  );
};

export default Cuisines;
