import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

import Arrow from "../assets/Arrow.svg";
import Coupon from "../assets/coupon.svg";
import Logo from "../assets/logo.png";
import Russian from "../assets/russian.svg";
import Search from "../assets/search.svg";
import Tablet from "../assets/tablet.svg";
import TV from "../assets/tv.svg";

import Foter1 from "../assets/foter1.png";
import Foter2 from "../assets/foter2.png";
import Foter3 from "../assets/foter3.png";
import Foter4 from "../assets/foter4.png";
import Foter5 from "../assets/foter5.png";
import Foter6 from "../assets/foter6.png";
import Foter7 from "../assets/foter7.png";
import Foter8 from "../assets/foter8.png";
import Foter9 from "../assets/foter9.png";
import Foter10 from "../assets/foter10.png";
import Foter11 from "../assets/foter11.png";
import Foter12 from "../assets/foter12.png";
import Foter13 from "../assets/foter13.png";
import Foter14 from "../assets/foter14.png";

import Main from "../components/main/main";
import Product from "../components/products/product";

const RootLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <header className="px-[100px] flex justify-between items-center mb-[22px]">
        <div>
          <NavLink to="/">
            <img className="w-[112px]" src={Logo} alt="Logo" />{" "}
          </NavLink>
        </div>
        <div className="flex gap-[25px]">
          <div className="cursor-pointer flex flex-col gap-[10px] items-center">
            <img src={TV} alt="TV" />
            <p className="rang">Афиша</p>
          </div>
          <div className="cursor-pointer flex flex-col gap-[10px] items-center">
            <img src={Tablet} alt="Tablet" />
            <p>Сеансы</p>
          </div>
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
              <NavLink to="/">
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
      <Main></Main>
      <Product />
      {/* <main>
        <Outlet />
      </main>{" "} */}
      <footer className="flex justify-between p-[30px] bg-[#111111] rounded-2xl  mt-[100px]	">
        <div className="flex flex-col gap-[48px] justify-between">
          <div>
            <img className="" src={Foter1} alt="" />
          </div>
          <div className="flex flex-col gap-[10px]">
            <img src={Foter2} alt="" />
            <img src={Foter3} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <p>О нас</p>
          <div className="flex gap-[8px]">
            <img src={Foter4} alt="" />
            <p className="">Публичная оферта</p>
          </div>
          <div className="flex gap-[8px]">
            <img src={Foter5} alt="" />
            <p className="text-red-600 underline">Реклама</p>
          </div>
          <div className="flex gap-[8px]">
            <img src={Foter6} alt="" />
            <p className="">F.A.Q</p>
          </div>

          <div className="flex gap-[8px]">
            <img src={Foter7} alt="" />
            <p className="">Контакты</p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <p>Категории</p>
          <div className="flex gap-[8px]">
            <img src={Foter8} alt="" />
            <p className="">Кино</p>
          </div>
          <div className="flex gap-[8px]">
            <img src={Foter9} alt="" />
            <p className="">Театр</p>
          </div>
          <div className="flex gap-[8px]">
            <img src={Foter10} alt="" />
            <p className="">Концерты</p>
          </div>

          <div className="flex gap-[8px]">
            <img src={Foter11} alt="" />
            <p className="">Спорт</p>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] justify-between">
          <p>Связаться с нами</p>
          <p className="text-red-600 text-xl"> +998 (95) 897-33-38</p>
          <p>Социальные сети</p>
          <div className="flex gap-[10px] items-center">
            <img src={Foter12} alt="" />
            <img src={Foter13} alt="" />
            <img src={Foter14} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default RootLayout;
