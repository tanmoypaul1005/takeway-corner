"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import CuisinesCard from "./CuisinesCard";

const CuisinesSlider = () => {
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
          spaceBetween: 40,
        },

        1440: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
      }}
      modules={[ Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <CuisinesCard
          title="Biryani"
          img="https://images.deliveryhero.io/image/foodpanda/cuisine-images/BD/193.png?height=192"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <CuisinesCard
          title="Pizza"
          img="https://images.deliveryhero.io/image/foodpanda/cuisine-images/BD/73.png?height=192"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <CuisinesCard
          title="Burgers"
          img="https://images.deliveryhero.io/image/foodpanda/cuisine-images/BD/85.png?height=192"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <CuisinesCard
          title="Cakes"
          img="https://images.deliveryhero.io/image/foodpanda/cuisine-images/BD/77.png?height=192"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <CuisinesCard
          title="Breakfast"
          img="https://images.deliveryhero.io/image/foodpanda/cuisine-images/BD/193.png?height=192"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <CuisinesCard
          title="Pasta"
          img="https://images.deliveryhero.io/image/foodpanda/cuisine-images/BD/73.png?height=192"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <CuisinesCard
          title="Khichuri"
          img="https://images.deliveryhero.io/image/foodpanda/cuisine-images/BD/85.png?height=192"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <CuisinesCard
          title="Cafe"
          img="https://images.deliveryhero.io/image/foodpanda/cuisine-images/BD/77.png?height=192"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default CuisinesSlider;
