import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/mousewheel";

// import required modules
import { FreeMode, Navigation, Mousewheel } from "swiper";
import { useRouter } from "next/router";
import { MainContext } from "../../utils/contexts/MainContext";
import Image from "next/image";

const brandsArr = [
  {
    pic: "https://flomaster.club/uploads/posts/2022-07/1657876113_69-flomaster-club-p-malenkie-risunki-v-kvadrate-krasivo-79.png",
    title: "First brand",
  },
  {
    pic: "https://flomaster.club/uploads/posts/2022-07/1657876113_69-flomaster-club-p-malenkie-risunki-v-kvadrate-krasivo-79.png",
    title: "First brand",
  },
  {
    pic: "https://flomaster.club/uploads/posts/2022-07/1657876113_69-flomaster-club-p-malenkie-risunki-v-kvadrate-krasivo-79.png",
    title: "First brand",
  },
  {
    pic: "https://flomaster.club/uploads/posts/2022-07/1657876113_69-flomaster-club-p-malenkie-risunki-v-kvadrate-krasivo-79.png",
    title: "First brand",
  },
  {
    pic: "https://flomaster.club/uploads/posts/2022-07/1657876113_69-flomaster-club-p-malenkie-risunki-v-kvadrate-krasivo-79.png",
    title: "First brand",
  },
  {
    pic: "https://flomaster.club/uploads/posts/2022-07/1657876113_69-flomaster-club-p-malenkie-risunki-v-kvadrate-krasivo-79.png",
    title: "First brand",
  },
  {
    pic: "https://flomaster.club/uploads/posts/2022-07/1657876113_69-flomaster-club-p-malenkie-risunki-v-kvadrate-krasivo-79.png",
    title: "First brand",
  },
  {
    pic: "https://flomaster.club/uploads/posts/2022-07/1657876113_69-flomaster-club-p-malenkie-risunki-v-kvadrate-krasivo-79.png",
    title: "First brand",
  },
  {
    pic: "https://flomaster.club/uploads/posts/2022-07/1657876113_69-flomaster-club-p-malenkie-risunki-v-kvadrate-krasivo-79.png",
    title: "First brand",
  },
  {
    pic: "https://flomaster.club/uploads/posts/2022-07/1657876113_69-flomaster-club-p-malenkie-risunki-v-kvadrate-krasivo-79.png",
    title: "First brand",
  },
  {
    pic: "https://flomaster.club/uploads/posts/2022-07/1657876113_69-flomaster-club-p-malenkie-risunki-v-kvadrate-krasivo-79.png",
    title: "First brand",
  },
  {
    pic: "https://flomaster.club/uploads/posts/2022-07/1657876113_69-flomaster-club-p-malenkie-risunki-v-kvadrate-krasivo-79.png",
    title: "First brand",
  },
  {
    pic: "https://flomaster.club/uploads/posts/2022-07/1657876113_69-flomaster-club-p-malenkie-risunki-v-kvadrate-krasivo-79.png",
    title: "First brand",
  },
  {
    pic: "https://flomaster.club/uploads/posts/2022-07/1657876113_69-flomaster-club-p-malenkie-risunki-v-kvadrate-krasivo-79.png",
    title: "First brand",
  },
  {
    pic: "https://flomaster.club/uploads/posts/2022-07/1657876113_69-flomaster-club-p-malenkie-risunki-v-kvadrate-krasivo-79.png",
    title: "First brand",
  },
  {
    pic: "https://flomaster.club/uploads/posts/2022-07/1657876113_69-flomaster-club-p-malenkie-risunki-v-kvadrate-krasivo-79.png",
    title: "First brand",
  },
  {
    pic: "https://flomaster.club/uploads/posts/2022-07/1657876113_69-flomaster-club-p-malenkie-risunki-v-kvadrate-krasivo-79.png",
    title: "First brand",
  },
  {
    pic: "https://flomaster.club/uploads/posts/2022-07/1657876113_69-flomaster-club-p-malenkie-risunki-v-kvadrate-krasivo-79.png",
    title: "First brand",
  },
];

export const BrandList = () => {

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
        {brandsArr.map((el, index) => (
          <SwiperSlide>
            <div className="skeletonBrandList">
              <img width={80} height={80} src={el.pic} alt="" />

              <p>{el.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
