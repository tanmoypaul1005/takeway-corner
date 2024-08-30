import { iBannerDoctor, iVector } from "@/util/imageImports";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="flex flex-col justify-center text-center md:text-left">
        <h1 className="text-lg font-semibold">
          Providing Quality Healthcare for a Brighter and Healthy Future
        </h1>
        <p className="mt-2">
          At our hospital, we are dedicated to providing exceptional medical
          care to our patients and their families. Our experienced team of
          medical professionals, cutting-edge technology, and compassionate
          approach make us a leader in the healthcare industry.
        </p>
      </div>

      <div className="relative flex items-center justify-center md:items-end md:justify-end">
        <Image src={iVector} alt="Background Vector" className="w-[60%]" />
        <div className="absolute top-[-50px] md:right-[40px] w-[50%]">
          <Image src={iBannerDoctor} alt="Doctor" />
        </div>
      </div>
    </div>
  );
};

export default Banner;



{/* <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
  <div className="text-center md:text-left">
    <h2 className="mb-4">
      Providing Quality Healthcare for a Brighter and Healthy Future
    </h2>
    <p>
      At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry.
    </p>
  </div>
  <div className="relative flex justify-center md:justify-end">
    <Image src={iVector} alt="Banner" className="w-3/4 md:w-1/2 lg:w-1/3" />
    <div className="absolute top-[-60px] w-3/4 md:w-1/2 lg:w-1/3">
      <Image src={iBannerDoctor} alt="Banner" className="w-full" />
    </div>
  </div>
</div> */}