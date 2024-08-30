import { iBannerDoctor, iVector } from "@/util/imageImports";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
  <div className="flex flex-col items-center justify-between md:flex-row">
  <div className="mb-4 text-center md:text-left md:mb-0">
    Providing Quality Healthcare for a Brighter and Healthy Future
  </div>
  <div className="relative">
    <Image src={iVector} alt="Banner" className="w-[80%]" />
    <div className="absolute top-[-60px] w-full md:w-auto">
      <Image src={iBannerDoctor} alt="Banner" className="w-[80%] l" />
    </div>
  </div>
</div>
  );
};

export default Banner;
