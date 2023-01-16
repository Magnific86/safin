import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FlashlightFillIcon from "remixicon-react/FlashlightFillIcon";
import { ArrowRigthIcon, CheeseLineIcon } from "../../constants/images";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation, Mousewheel } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import { MainContext } from "../../utils/contexts/MainContext";
import { imgBaseUrl } from "../../constants";

export const MenuList = () => {
  const { t: tl } = useTranslation();
  const [changeScroll, ssetChangeScroll] = useState("none");
  const [display, setDisplay] = useState("none");
  const [num, setNum] = useState(0);

  const someArr = new Array(10)
    .fill("Lorem ipsum")
    .map((el, index) => <p key={index}>{el}</p>);

  const allArr = new Array(6).fill(someArr).map((el) => (
    <div className="eachColHover">
      <h1>Lorem</h1>
      {el}
    </div>
  ));

  

  const { ref, inView } = useInView();
  useEffect(() => {
    const prev = document.getElementsByClassName("swiper-button-prev")[0];
    inView ? (prev.style = "opacity:0") : (prev.style = "opacity:1");
  }, [inView]);

  return (
    <div className="menuListWrapper">
      <div className="menuListContainer">
        <div className="categoriesList">
          <Swiper
            mousewheel={true}
            scrollbar={true}
            slidesPerView={12}
            spaceBetween={10}
            freeMode={true}
            navigation={true}
            modules={[Mousewheel, FreeMode, Navigation]}
            className="swiperCategoriesList"
          >
            {new Array(30).fill("Lorem").map((item, index) => (
              <SwiperSlide
                key={index}
                onMouseLeave={() => setDisplay("none")}
                onMouseOver={() => setDisplay("grid")}
                onClick={() => setNum(index)}
              >
                <p className="after" ref={index === 0 ? ref : null}>
                  {item}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="sideBtns">
          <Link href="/stores/often-buy">
            <div className="btn sideBtn link">
              <div className="label">
                <FlashlightFillIcon size={32} color="#61DC00" />
                <p>{tl("Often buy")}</p>
              </div>
            </div>
          </Link>
          <Link href="/stores/profitable">
            <div className="btn sideBtn link">
              <div className="label">
                <CheeseLineIcon />
                {tl("Advantageous")}
              </div>
              {/* <div className="suffix">
                <ArrowRigthIcon />
              </div> */}
            </div>
          </Link>
        </div>
      </div>
      <div  onMouseOver={() => setDisplay("grid")}
        onMouseLeave={() => setDisplay("none")} className="skeletonBetween"></div>
      <div
        onMouseOver={() => setDisplay("grid")}
        onMouseLeave={() => setDisplay("none")}
        className="menuHover"
        style={{ display: `${display}` }}
      >
        {allArr}
      </div>
    </div>
  );
};

