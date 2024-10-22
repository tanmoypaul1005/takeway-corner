"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const OfferSlider = ({offerList=[]}) => {
  return (
    <Swiper 
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    }}
    
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >

      {
        offerList?.map((item,index)=>(
          <SwiperSlide key={index}>
          <Image
            width={500}
            height={500}
            alt=""
            src={item?.banner}
          />
        </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

export default OfferSlider;
