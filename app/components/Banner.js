import { iBannerDoctor, iVector } from "@/util/imageImports";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="flex flex-col justify-center text-center md:text-left">
        <div className="space-x-1.5 uppercase text-lg font-semibold">
        <span className="text-xl font-bold text-white">
          Providing Quality
        </span>
        <span className="text-[#6EAB36]">
          Healthcare
        </span>
        <span className="">
          for a
        </span>
        <span className="text-[#6EAB36]">
          Brighter
        </span>
        <span className="">
          and
        </span>
        <span className="text-[#6EAB36]">
          Healthy Future
        </span>
        </div>
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
