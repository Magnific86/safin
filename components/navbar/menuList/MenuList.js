import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FlashlightFillIcon from "remixicon-react/FlashlightFillIcon";
import { ArrowRigthIcon, CheeseLineIcon } from "../../../constants/images";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

export const MenuList = () => {
  const { t: tl } = useTranslation();
  const [changeScroll, ssetChangeScroll] = useState("none");
  const [display, setDisplay] = useState("none");
  const [num, setNum] = useState(0);
  useEffect(() => {
    const swiperPrev = document.querySelector("swiper-button-next");

    console.log(swiperPrev);
    /* swiperPrev.addEventListener("onclick", () => {
        alert("sdfdg");
      }); */
  }, []);


  const someArr = new Array(10)
    .fill("Lorem ips")
    .map((el, index) => <p key={index}>{el}</p>);

  const allArr = new Array(6).fill(someArr).map((el) => (
    <div className="eachColHover">
      <h1 >Lorem</h1>
      {el}
    </div>
  ));

  return (
    <>
      <div className="menuListContainer">
        <div className="categoriesList">
          <Swiper
            slidesPerView={10}
            spaceBetween={30}
            freeMode={true}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="swiperCategoriesList"
          >
            {new Array(12).fill("Lorem").map((item, index) => (
              <SwiperSlide
                key={index}
                className ="eachList"
                onMouseLeave={() => setDisplay("none")}
                onMouseOver={() => setDisplay("grid")}
                onClick={() => setNum(index)}
              >
                {item}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sideBtns">
            <Link href="/stores/often-buy">
              <div className="btn sideBtn link">
                <div className="label">
                  <FlashlightFillIcon size={32} color="#61DC00" />
                  {tl("Often buy")}
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
      </div>
      <div className="menuHover" style={{ display: `${display}` }}>
        {allArr}
      </div>
      <style jsx>
        {`
          .eachList{
            background: black !important;
          }
        `}
      </style>
    </>
  );
};
