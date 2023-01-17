import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
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
import axios from "axios";

export const BrandList = () => {
  const [arr, setArr] = useState(() => {
    (async () => {
      axios
        .get(`https://admin.rentinn.uz/api/v1/rest/brands/paginate`)
        .then((res) => setArr(res.data.data))
        .catch((err) => console.log(err));
    })();
  });
  console.log(arr);

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
        {arr &&
          arr.map((el, index) => (
            <SwiperSlide key={el.uuid}>
              <div className="skeletonBrandList">
                <img width={80} height={80} src={`https://admin.rentin.uz/public/storage/app`+ el.img} alt="" />

                <p>{el.title}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
