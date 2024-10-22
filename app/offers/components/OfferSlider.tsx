"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

const OfferSlider = ({ offerList = [] }) => {
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
      <div>
      {offerList?.map((item, index) => (
          <SwiperSlide key={index}>
            <Link href={`/offers/${item?._id}`}>
              <Image
                className="transition-transform duration-300 transform rounded-lg hover:scale-105"
                width={500}
                height={500}
                alt=""
                src={item?.banner}
              />
            </Link>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default OfferSlider;
