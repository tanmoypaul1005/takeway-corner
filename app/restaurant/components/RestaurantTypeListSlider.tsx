"use client";
import React from "react";
import ShopCard from "./ShopCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const RestaurantTypeListSlider = ({ shop = [] }) => {
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
          clickable: true,
        }}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[ Autoplay, Navigation]}
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
            slidesPerView: 3,
            spaceBetween: 40,
          },

          1440: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {shop?.map((item, index) => (
          <SwiperSlide>
            <ShopCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RestaurantTypeListSlider;
