import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import Arrow from "../assets/Arrow.svg";
import Coupon from "../assets/coupon.svg";
import Logo from "../assets/logo.png";
import Russian from "../assets/russian.svg";
import Search from "../assets/search.svg";
import Tablet from "../assets/tablet.svg";
import TV from "../assets/seanse-white.svg";
import Pro from "../assets/profil.png";
import Pencil from "../assets/pencil.png";
import Doc from "../assets/doc.png";
import Log from "../assets/logout.png";
import { NavLink } from "react-router-dom";

const Profil = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <div>
      <header className="px-[100px] flex justify-between items-center mb-[22px]">
        <div>
          <NavLink to="/">
            <img className="w-[112px]" src={Logo} alt="Logo" />{" "}
          </NavLink>
        </div>
        <div className="flex gap-[25px]">
          <NavLink to="/">
            <div className=" act cursor-pointer flex flex-col gap-[10px] items-center">
              <img src={TV} alt="TV" />
              <p className="">Афиша</p>
            </div>
          </NavLink>
          <NavLink to="/seanse">
            <div className=" act cursor-pointer flex flex-col gap-[10px] items-center">
              <img src={Tablet} alt="Tablet" />
              <p>Сеансы</p>
            </div>
          </NavLink>
          <div className="cursor-pointer flex flex-col gap-[10px] items-center">
            <img src={Coupon} alt="Coupon" />
            <p>Билеты</p>
          </div>
          <div className="cursor-pointer flex flex-col gap-[10px] items-center">
            <img src={Search} alt="Search" />
            <p>Поиск</p>
          </div>
        </div>
        <div className="flex gap-[20px] items-center">
          <div>
            <button className="nma flex items-center gap-2">
              <img src={Russian} alt="Language" />
              <p>Ру</p>
              <img src={Arrow} alt="Arrow" />
            </button>
          </div>
          <div>
            {isLoggedIn ? (
              <NavLink to="/profil">
                <button className="nma2 px-[66px] py-[18px]">Профиль</button>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <button className="nma2 px-[66px] py-[18px]">Войти</button>
              </NavLink>
            )}
          </div>
        </div>
      </header>
      <div className="mt-[48px] w-[380px] flex flex-col gap-[25px] justify-center mx-auto mb-[50px]">
        <button className="flex gap-4 items-center bg-[#111] p-[20px] rounded-xl">
          <img src={Pro} alt="" />
          <p>Мои данные</p>
        </button>
        <div className="flex flex-col gap-2">
          <p className="text-[#4d4d4d]">Имя пользователя</p>
          <button className="flex justify-between items-center bg-[#111] p-[20px] rounded-xl w-full">
            <p>Abdulaziz Abdujalilov</p>
            <img src={Pencil} alt="" />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#4d4d4d]">Номер телефона</p>
          <button className="flex justify-between items-center bg-[#111] p-[20px] rounded-xl w-full">
            <p>+998 (88) 800-90-00</p>
            <img src={Pencil} alt="" />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#4d4d4d]">Адрес электронной почты</p>
          <button className="flex justify-between items-center bg-[#111] p-[20px] rounded-xl w-full">
            <p>abdulaziz@tickets.uz</p>
            <img src={Pencil} alt="" />
          </button>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <p className="text-[#4d4d4d]">Документы</p>
          <button className="flex justify-between items-center bg-[#111] p-[20px] rounded-xl w-full">
            <img src={Doc} alt="" />
            <p>Публичная оферта</p>
            <MdOutlineKeyboardArrowRight size={23} color="red" />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <button
            // onClick={localStorage.removeItem("token")}
            className="flex gap-3 items-center bg-[#111] p-[20px] rounded-xl w-full"
          >
            <img src={Log} alt="" />
            <p>Выйти из аккаунта</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profil;
