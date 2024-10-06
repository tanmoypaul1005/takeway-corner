"use client";
import Image from "next/image";
import React from "react";
import {
  iBanner,
  iMainBanner,
  iProfessionals,
  iVector,
} from "../../../util/imageImports";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

const Banner: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="flex flex-col justify-center text-center md:text-left">
        <div className="space-x-1.5 uppercase text-lg font-semibold">
          <span className="text-xl font-bold text-white">
            Providing Quality
          </span>
          <span className="text-[#6EAB36]">Healthcare</span>
          <span className="">for a</span>
          <span className="text-[#6EAB36]">Brighter</span>
          <span className="">and</span>
          <span className="text-[#6EAB36]">Healthy Future</span>
        </div>

        <p className="mt-2">
          At our hospital, we are dedicated to providing exceptional medical
          care to our patients and their families. Our experienced team of
          medical professionals, cutting-edge technology, and compassionate
          approach make us a leader in the healthcare industry.
        </p>
        {/* Lottie Animation */}
        <div className="">
          <Player
            autoplay
            loop
            src={iMainBanner}
            style={{
              marginTop: "-20px",
              marginLeft: "-30px",
              minWidth: "60%",
              maxWidth: "60%",
              maxHeight: "30%",
              minHeight: "30%",
            }}
          />
        </div>
      </div>

      <div className="flex items-end justify-center md:justify-end">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-[80%] md:w-[60%]"
        >
          <div className="relative">
            <Image src={iVector} alt="Background Vector" />
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 flex items-center justify-center w-[100%]"
            >
              <Player
                autoplay
                loop
                src={iBanner}
                // style={{ minWidth: "80%",maxWidth:"80%", maxHeight: "50%",minHeight:"50%" }}
              />
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.1, 1] }} // Slight pulsating effect
              transition={{
                duration: 1,
                repeat: Infinity, // Repeats endlessly
                repeatType: "mirror", // Mirror scale animation
              }}
              className="absolute hidden md:flex bottom-16 right-72 w-[50%]"
            >
              <Image src={iProfessionals} alt="Doctor" />
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.1, 1] }} // Slight pulsating effect
              transition={{
                duration: 1,
                repeat: Infinity, // Repeats endlessly
                repeatType: "mirror", // Mirror scale animation
              }}
              className="absolute right-[-20px] flex px-2 py-2 space-x-1 bg-white rounded-md md:px-3 top-6 md:right-3"
            >
              <div className="text-[#007E85] text-base font-bold">24/7</div>
              <div className="text-black">service</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Banner;
