import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Arrow from "../../assets/Arrow.svg";
import Coupon from "../../assets/coupon.svg";
import Logo from "../../assets/logo.png";
import Russian from "../../assets/russian.svg";
import Search from "../../assets/search.svg";
import Tablet from "../../assets/tablet.svg";
import TV from "../../assets/tv.svg";
import { useSelector } from "react-redux";

const Header = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);
  const selector = useSelector((prev) => prev.auth);
  return (
    <header className="px-[100px] flex justify-between items-center mb-[22px] ">
      <div>
        <NavLink to="/">
          <img className="w-[112px]" src={Logo} alt="Logo" />{" "}
        </NavLink>
      </div>
      <div className="flex gap-[25px] ">
        <NavLink to="/">
          <div className=" act cursor-pointer flex flex-col gap-[10px] items-center">
            <img src={TV} alt="TV" />
            <p className="rang">Афиша</p>
          </div>
        </NavLink>
        <NavLink to="/seanse">
          <div className=" act cursor-pointer flex flex-col gap-[10px] items-center">
            <img src={Tablet} alt="Tablet" />
            <p>Сеансы</p>
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
          {selector.token ? (
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
  );
};

export default Header;
