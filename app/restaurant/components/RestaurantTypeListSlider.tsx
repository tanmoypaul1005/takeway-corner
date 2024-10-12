"use client"
import React from "react";
import ShopCard from "./ShopCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const RestaurantTypeListSlider = ({ title = "" }) => {
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
          slidesPerView: 3,
          spaceBetween: 40,
        },

        1440: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <ShopCard />
      </SwiperSlide>
      <SwiperSlide>
        <ShopCard />
      </SwiperSlide>
      <SwiperSlide>
        <ShopCard />
      </SwiperSlide>
      <SwiperSlide>
        <ShopCard />
      </SwiperSlide>
      <SwiperSlide>
        <ShopCard />
      </SwiperSlide>
      <SwiperSlide>
        <ShopCard />
      </SwiperSlide>
      <SwiperSlide>
        <ShopCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default RestaurantTypeListSlider;
