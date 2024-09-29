import React from "react";

import Im1 from "../../assets/im.png";
import Im2 from "../../assets/im2.png";
import Product from "../products/product";

const About = () => {
  return (
    <div>
      <div className="mt-[50px] mb-[100px] w-[380px] flex flex-col gap-[40px] justify-center">
        <div className="flex justify-between">
          <img src={Im1} alt="" />
          <img src={Im2} alt="" />
        </div>
        <div className="flex flex-col gap-[24px]">
          <h2 className="text-2xl">Детали</h2>
          <div className="flex flex-col gap-[16px]">
            <div className="flex justify-between items-center">
              <p className="text-[#8d8d8d]">Продолжительность</p>
              <p className="text-[#8d8d8d]">1ч 34м / 94 минут</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#8d8d8d]">Премьера</p>
              <p className="text-[#8d8d8d]">07 марта 2024</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#8d8d8d]">Производство</p>
              <p className="text-[#8d8d8d]">США, Китай</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#8d8d8d]">Жанр</p>
              <p className="text-[#8d8d8d]">Фэнтези, Комедия</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#8d8d8d]">Режиссер </p>
              <p className="text-[#8d8d8d]">Майк Митчелл, Стефани Стайн</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#8d8d8d]">Возрастной рейтинг</p>
              <p className="text-[#8d8d8d]">6+</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-[24px]">
          <h2 className="text-2xl">В ролях</h2>
          <div className="flex flex-col gap-[16px]">
            <div className="flex justify-between items-center">
              <p className="text-[#8d8d8d]">Джек Блэк</p>
              <p className="text-[#8d8d8d]">Аквафина</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#8d8d8d]">Виола Дэвис</p>
              <p className="text-[#8d8d8d]">Дастин Хоффман</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#8d8d8d]">Джеймс Хун</p>
              <p className="text-[#8d8d8d]">Брайан Крэнстон</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#8d8d8d]">Иэн Макшейн</p>
              <p className="text-[#8d8d8d]">Ке Хюи Куан</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#8d8d8d]">Ронни Чиэн </p>
              <p className="text-[#8d8d8d]">Лори Тань Чинн</p>
            </div>
          </div>
        </div>
        <hr />

        <div className="flex flex-col gap-[24px]">
          <h2 className="text-2xl">Сюжет</h2>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[#8d8d8d]">
              Продолжение приключений легендарного Воина Дракона, его верных
              друзей и наставника (часть вторая)
            </p>
          </div>
          <button className="w-full bg-red-700 py-[16px] rounded-xl">
            Купить билет
          </button>
        </div>
      </div>
      {/* <Product></Product> */}
    </div>
  );
};

export default About;
