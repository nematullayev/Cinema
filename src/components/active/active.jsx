import React from "react";
import Panda2 from "../../assets/panda2.png";
import Check from "../../assets/check-line.svg";

const Active = () => {
  return (
    <div className="flex flex-col gap-[20px]  mb-[100px]">
      <div className="flex flex-col gap-[20px] bg-[#1d1d1d] p-[10px] w-[580px] rounded-xl">
        <div className="flex gap-[20px] ">
          <div>
            <img src={Panda2} alt="" />
          </div>
          <div className="flex flex-col gap-[22px]">
            <div className="flex flex-col gap-[16px]">
              <h2 className="text-2xl">Кунг Фу Панда 4</h2>
              <p className="text-[#a1a1a1]">
                2024 • RU • 6+ • 1ч 34м / 94 минут
              </p>
              <p>Magic Cinema</p>
              <p>Зал №1</p>
              <p>28 марта, 19:30</p>
            </div>
            <div className="">
              <button className="flex gap-[6px] items-center bg-[#2d2d2d] px-[16px] py-[12px] rounded-xl">
                <img src={Check} alt="" />
                <p>Оплачено</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-[10px]">
          <p className="text-xl">Ваш билет готов</p>
          <button className="px-[78px] py-[16px] bg-red-700 rounded-xl">
            Получить билет
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] bg-[#1d1d1d] p-[10px] w-[580px] rounded-xl">
        <div className="flex gap-[20px] ">
          <div>
            <img src={Panda2} alt="" />
          </div>
          <div className="flex flex-col gap-[22px]">
            <div className="flex flex-col gap-[16px]">
              <h2 className="text-2xl">Кунг Фу Панда 4</h2>
              <p className="text-[#a1a1a1]">
                2024 • RU • 6+ • 1ч 34м / 94 минут
              </p>
              <p>Magic Cinema</p>
              <p>Зал №1</p>
              <p>28 марта, 19:30</p>
            </div>
            <div className="">
              <button className="flex gap-[6px] items-center bg-[#2d2d2d] px-[16px] py-[12px] rounded-xl">
                <img src={Check} alt="" />
                <p>Оплачено</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-[10px]">
          <p className="text-xl">Ваш билет готов</p>
          <button className="px-[78px] py-[16px] bg-red-700 rounded-xl">
            Получить билет
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] bg-[#1d1d1d] p-[10px] w-[580px] rounded-xl">
        <div className="flex gap-[20px] ">
          <div>
            <img src={Panda2} alt="" />
          </div>
          <div className="flex flex-col gap-[22px]">
            <div className="flex flex-col gap-[16px]">
              <h2 className="text-2xl">Кунг Фу Панда 4</h2>
              <p className="text-[#a1a1a1]">
                2024 • RU • 6+ • 1ч 34м / 94 минут
              </p>
              <p>Magic Cinema</p>
              <p>Зал №1</p>
              <p>28 марта, 19:30</p>
            </div>
            <div className="">
              <button className="flex gap-[6px] items-center bg-[#2d2d2d] px-[16px] py-[12px] rounded-xl">
                <img src={Check} alt="" />
                <p>Оплачено</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-[10px]">
          <p className="text-xl">Ваш билет готов</p>
          <button className="px-[78px] py-[16px] bg-red-700 rounded-xl">
            Получить билет
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] bg-[#1d1d1d] p-[10px] w-[580px] rounded-xl">
        <div className="flex gap-[20px] ">
          <div>
            <img src={Panda2} alt="" />
          </div>
          <div className="flex flex-col gap-[22px]">
            <div className="flex flex-col gap-[16px]">
              <h2 className="text-2xl">Кунг Фу Панда 4</h2>
              <p className="text-[#a1a1a1]">
                2024 • RU • 6+ • 1ч 34м / 94 минут
              </p>
              <p>Magic Cinema</p>
              <p>Зал №1</p>
              <p>28 марта, 19:30</p>
            </div>
            <div className="">
              <button className="flex gap-[6px] items-center bg-[#2d2d2d] px-[16px] py-[12px] rounded-xl">
                <img src={Check} alt="" />
                <p>Хочу посмотреть</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Active;
