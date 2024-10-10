import Image from "next/image";
import React from "react";
import CuisinesCard from "./components/CuisinesCard";

const Cuisines = () => {
  return (
    <div>
      <div className="text-[32px] font-semibold leading-10 text-white mb-5">
        Your favourite cuisines
      </div>

      <div>
<CuisinesCard/>
<CuisinesCard/>
<CuisinesCard/>
<CuisinesCard/>
      </div>
    </div>
  );
};

export default Cuisines;
