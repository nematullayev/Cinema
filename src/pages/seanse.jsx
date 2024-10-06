import React, { useEffect, useState } from "react";

import Arrow from "../assets/Arrow.svg";
import Coupon from "../assets/coupon.svg";
import Logo from "../assets/logo.png";
import Russian from "../assets/russian.svg";
import Search from "../assets/search.svg";
import Tablet from "../assets/tablet-wh.svg";
import TV from "../assets/seanse-white.svg";

import Infin1 from "../assets/infin1.svg";
import Infin2 from "../assets/infin2.svg";
import Infin3 from "../assets/infin3.svg";
import Infin4 from "../assets/infin4.svg";
import Infin5 from "../assets/infin5.svg";
import Infin6 from "../assets/infin6.svg";
import Infin7 from "../assets/infin7.svg";

import { NavLink } from "react-router-dom";
import Product from "../components/products/product";
import Footer from "../components/footer/footer";
import Dates from "../components/dates/dates";

const Seanse = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <div>
      <header className="px-[30px] flex justify-between items-center mb-[22px]">
        <div>
          <NavLink to="/">
            <img className="w-[112px]" src={Logo} alt="Logo" />{" "}
          </NavLink>
        </div>
        <div className="flex gap-[25px]">
          <NavLink to="/">
            <div className="cursor-pointer flex flex-col gap-[10px] items-center">
              <img src={TV} alt="TV" />
              <p className="">Афиша</p>
            </div>
          </NavLink>
          <NavLink to="/seanse">
            <div className="cursor-pointer flex flex-col gap-[10px] items-center">
              <img src={Tablet} alt="Tablet" />
              <p className="rang">Сеансы</p>
            </div>
          </NavLink>
          <NavLink to="/bileti">
            <div className="cursor-pointer flex flex-col gap-[10px] items-center">
              <img src={Coupon} alt="Coupon" />
              <p>Билеты</p>
            </div>
          </NavLink>
          <NavLink to="/search">
            <div className="cursor-pointer flex flex-col gap-[10px] items-center">
              <img src={Search} alt="Search" />
              <p>Поиск</p>
            </div>
          </NavLink>
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
      <div className="flex justify-between px-[30px] mt-[48px] mb-[48px]">
        <div className="flex gap-[8px]">
          <button className="flex gap-[10px] px-[40px] py-[15px] bg-red-700 rounded-xl">
            <img src={Infin1} alt="" />
            <span>Все</span>
          </button>
          <button className="flex gap-[10px] px-[40px] py-[15px] bg-[#111] rounded-xl">
            <img src={Infin2} alt="" />
            <span>Кино</span>
          </button>
          <button className="flex gap-[10px] px-[40px] py-[15px] bg-[#111] rounded-xl">
            <img src={Infin3} alt="" />
            <span>Театр</span>
          </button>
          <button className="flex gap-[10px] px-[40px] py-[15px] bg-[#111] rounded-xl">
            <img src={Infin4} alt="" />
            <span>Концерты</span>
          </button>
          <button className="flex gap-[10px] px-[40px] py-[15px] bg-[#111] rounded-xl">
            <img src={Infin5} alt="" />
            <span>Спорт</span>
          </button>
          <button className="flex gap-[10px] px-[40px] py-[15px] bg-[#111] rounded-xl">
            <img src={Infin6} alt="" />
            <span>Другие</span>
          </button>
        </div>
        <div>
          <button className="flex gap-[10px] px-[40px] py-[15px] bg-[#111] rounded-xl">
            <img src={Infin7} alt="" />
            <span>Залы</span>
          </button>
        </div>
      </div>
      <Product></Product>
      <Dates></Dates>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Footer></Footer>
    </div>
  );
};

export default Seanse;
