"use client";
import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Offers = () => {
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
      <SwiperSlide>
        <Image
          width={500}
          height={500}
          alt=""
          src="https://images.deliveryhero.io/image/fd-bd/campaign-assets/04c60cb6-fc89-11ee-8291-b694295486bc/desktop_tile_EndXYy.png?height=240&quality=95&width=560&"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={500}
          height={500}
          alt=""
          src="https://images.deliveryhero.io/image/fd-bd/campaign-assets/d7d4ec4f-c066-11ee-a8ac-f26afdcc1f7e/desktop_tile_EntKtP.png?height=240&quality=95&width=560&"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={500}
          height={500}
          alt=""
          src="https://images.deliveryhero.io/image/fd-bd/campaign-assets/8cbc73d6-c067-11ee-a8ac-f26afdcc1f7e/desktop_tile_EnDQrA.png?height=240&quality=95&width=560&"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={500}
          height={500}
          alt=""
          src="https://images.deliveryhero.io/image/fd-bd/campaign-assets/c54631da-3223-11ef-ba14-aa44062a9c0c/desktop_tile_EnZiFz.png?height=240&quality=95&width=560&"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Offers;
