"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay,Navigation } from "swiper/modules";
import CuisinesCard from "./CuisinesCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CuisinesSlider = ({cuisines=[]}) => {
  return (
    <div style={{ position: "relative" }}>
    <div className="swiper-button image-swiper-button-next">
      <IoIosArrowForward />
    </div>
    <div className="swiper-button image-swiper-button-prev">
      <IoIosArrowBack />
    </div>
    <Swiper
      spaceBetween={10}
      centeredSlides={true}
      pagination={{
        clickable: false,
      }}
      navigation={{
        nextEl: ".image-swiper-button-next",
        prevEl: ".image-swiper-button-prev",
        disabledClass: "swiper-button-disabled",
      }}
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
      modules={[ Autoplay,Navigation]}
      className="mySwiper"
    >

      {
        cuisines?.map((cuisine, index) => (
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
    </div>
  );
};

export default CuisinesSlider;
