"use client";
import Image from "next/image";
import React from "react";
import {
  iBanner,
  iBannerDoctor,
  iProfessionals,
  iVector,
} from "../../../util/imageImports";
import { Player } from "@lottiefiles/react-lottie-player";
import AppointmentButton from "../../appointment/AppointmentButton";
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
        <div className="flex items-start justify-start p-0 mb-5">
          {/* <Player
            autoplay
            loop
            src={iBanner}
            style={{ marginTop: "-1px",  marginLeft:"-50px", minWidth: "80%",maxWidth:"80%", maxHeight: "30%",minHeight:"30%" }}
          /> */}
        </div>

        <div className="flex items-end justify-center h-full mt-3 md:mt-0 md:justify-start">
          <AppointmentButton />
        </div>
      </div>

      <div className="relative flex items-center justify-center mt-20 md:mt-10 md:items-end md:justify-end">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-[60%]"
        >
          <Image src={iVector} alt="Background Vector" />
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-[-0px] md:right-[-20px] w-[70%]"
        >
          {/* <Image src={iBannerDoctor} alt="Doctor" /> */}
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
          className="absolute bottom-16 right-44 w-[50%]"
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
          className="absolute flex px-3 py-2 space-x-1 bg-white rounded-md top-8 right-10"
        >
          <div className="text-[#007E85] text-base font-bold">24/7</div>
          <div className="text-black">service</div>
        </motion.div>
      </div>
    </div>
  );
};
export default Banner;
