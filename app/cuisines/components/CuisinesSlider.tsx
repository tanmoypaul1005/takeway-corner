"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import CuisinesCard from "./CuisinesCard";

const CuisinesSlider = ({cuisines=[]}) => {
  return (
    <Swiper
      spaceBetween={10}
      centeredSlides={true}
      pagination={{
        clickable: false,
      }}
      navigation={false}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },

        1440: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
      }}
      modules={[ Autoplay]}
      className="mySwiper"
    >

      {
        cuisines.map((cuisine, index) => (
          <SwiperSlide key={index}>
            <CuisinesCard
              title={cuisine?.title}
              img={cuisine?.image}
              id={cuisine?._id}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

export default CuisinesSlider;
