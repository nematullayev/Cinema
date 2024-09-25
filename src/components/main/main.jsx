import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Kung from "../../assets/kung-fu.png";
import Play from "../../assets/play.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

import React from "react";

function Slider() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper); // Swiper instance'ni saqlash
        }}
      >
        <SwiperSlide>
          <img className="relative" src={Kung} alt="" />
          <div className="absolute bottom-[50px] left-[510px] flex flex-col gap-[20px] items-center">
            <h1 className="text-3xl">Kung Fu Panda 4</h1>
            <p className="">2024 • Комедия • 1ч 34м • EN • 6+ </p>
            <button className="flex items-center gap-5 px-[100px] py-[16px] bg-white text-red-600 rounded-lg">
              <img className="" src={Play} alt="" />
              <p className="">Смотреть</p>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={Kung} alt="" />
          <div className="absolute bottom-[50px] left-[510px] flex flex-col gap-[20px] items-center">
            <h1 className="text-3xl">Kung Fu Panda 4</h1>
            <p className="">2024 • Комедия • 1ч 34м • EN • 6+ </p>
            <button className="flex items-center gap-5 px-[100px] py-[16px] bg-white text-red-600 rounded-lg">
              <img className="" src={Play} alt="" />
              <p className="">Смотреть</p>
            </button>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img className="relative" src={Kung} alt="" />
          <div className="absolute bottom-[50px] left-[510px] flex flex-col gap-[20px] items-center">
            <h1 className="text-3xl">Kung Fu Panda 4</h1>
            <p className="">2024 • Комедия • 1ч 34м • EN • 6+ </p>
            <button className="flex items-center gap-5 px-[100px] py-[16px] bg-white text-red-600 rounded-lg">
              <img className="" src={Play} alt="" />
              <p className="">Смотреть</p>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-center gap-5 my-[10px] mb-[80px] mt-[20px]">
        <button
          className="text-[#C61F1F] w-[48px] h-[48px] rounded-[50%] bg-[#1D1D1D]"
          onClick={() => swiperInstance?.slidePrev()}
        >
          {" "}
          {" < "}{" "}
        </button>

        <button
          className="text-[#C61F1F] w-[48px] h-[48px] rounded-[50%] bg-[#1D1D1D]"
          onClick={() => swiperInstance?.slideNext()}
        >
          {" "}
          {" > "}{" "}
        </button>
      </div>
    </div>
  );
}

export default Slider;
