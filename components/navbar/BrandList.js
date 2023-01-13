import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/mousewheel";

// import required modules
import { FreeMode, Navigation, Mousewheel } from "swiper";

export const BrandList = () => {
  const myDiv = (
    <div className="skeletonBrandList">
      <div className="skeletonBrand"></div>
      <p>Brand Name</p>
    </div>
  );

  return (
    <>
      <Swiper
        mousewheel={true}
        slidesPerView={10}
        spaceBetween={1}
        freeMode={false}
        navigation={true}
        modules={[Mousewheel, FreeMode, Navigation]}
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
