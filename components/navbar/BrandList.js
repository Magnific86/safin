import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper";

export const BrandList = () => {
  const myDiv = (
    <div className="skeletonBrandList">
      <div className="skeletonBrand"></div>
      <p>Brand</p>
    </div>
  );

  return (
    <>
      <Swiper
        slidesPerView={10}
        spaceBetween={1}
        freeMode={false}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="swiperBrands"
      >

        <SwiperSlide>{myDiv}</SwiperSlide>
        <SwiperSlide>{myDiv}</SwiperSlide>
        <SwiperSlide>{myDiv}</SwiperSlide>
        <SwiperSlide>{myDiv}</SwiperSlide>
        <SwiperSlide>{myDiv}</SwiperSlide>
        <SwiperSlide>{myDiv}</SwiperSlide>
        <SwiperSlide>{myDiv}</SwiperSlide>
        <SwiperSlide>{myDiv}</SwiperSlide>
        <SwiperSlide>{myDiv}</SwiperSlide>
        <SwiperSlide>{myDiv}</SwiperSlide>
        <SwiperSlide>{myDiv}</SwiperSlide>
        <SwiperSlide>{myDiv}</SwiperSlide>
        <SwiperSlide>{myDiv}</SwiperSlide>
        <SwiperSlide>{myDiv}</SwiperSlide>
      </Swiper>
    </>
  );
};
