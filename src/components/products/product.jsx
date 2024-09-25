import React from "react";
import Arrow from "../../assets/Arrow2.svg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

const Product = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="flex flex-col gap-[20px] px-[30px] mb-[120px] flex-grow">
      <div className="flex justify-between">
        <p className="text-2xl">На неделе</p>
        <p className="text-red-600 flex items-center gap-3">
          <span>Показать все</span> <img src={Arrow} alt="" />
        </p>
      </div>
      <div className="">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="p-[30px]">
            <SwiperSlide>
              <div className=" flex flex-col gap-[10px]">
                <img
                  className="w-[280px] h-[400px] bg-[#1d1d1d] "
                  src=""
                  alt=""
                />
                <h1 className="text-2xl">Kung Fu Panda 4 ENGLISH</h1>
                <p className="text-xs">Комедия, Фэнтези</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex flex-col gap-[10px]">
                <img
                  className="w-[280px] h-[400px] bg-[#1d1d1d]"
                  src=""
                  alt=""
                />
                <h1 className="text-2xl">Kung Fu Panda 4 ENGLISH</h1>
                <p className="text-xs">Комедия, Фэнтези</p>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className=" flex flex-col gap-[10px]">
                <img
                  className="w-[280px] h-[400px] bg-[#1d1d1d]"
                  src=""
                  alt=""
                />
                <h1 className="text-2xl">Kung Fu Panda 4 ENGLISH</h1>
                <p className="text-xs">Комедия, Фэнтези</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className=" flex flex-col gap-[10px]">
                <img
                  className="w-[280px] h-[400px] bg-[#1d1d1d]"
                  src=""
                  alt=""
                />
                <h1 className="text-2xl">Kung Fu Panda 4 ENGLISH</h1>
                <p className="text-xs">Комедия, Фэнтези</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex flex-col gap-[10px]">
                <img
                  className="w-[280px] h-[400px] bg-[#1d1d1d]"
                  src=""
                  alt=""
                />
                <h1 className="text-2xl">Kung Fu Panda 4 ENGLISH</h1>
                <p className="text-xs">Комедия, Фэнтези</p>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
