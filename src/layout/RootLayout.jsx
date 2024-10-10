import React, { useEffect, useMemo, useState } from "react";
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
import useGetQuery from "../hooks/useGetQuery";
import { useSelector } from "react-redux";

const RootLayout = () => {
  const selector = useSelector((prev) => prev.auth);

  const { query, isLoading, isError, isFetching } = useGetQuery({
    url: `https://66cc9ebfa4dd3c8a71b84178.mockapi.io/api/products`,
    key: ["movies"],
  });

  let [pageNumber, setPageNumber] = useState(1);

  const generatePaginationData = () => {
    return query?.slice((pageNumber - 1) * 4, pageNumber * 4);
  };

  let filteredData = useMemo(
    () => generatePaginationData(),
    [query, pageNumber]
  );

  let pages = query?.length / 4;

  let pageNumbers = [];

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);

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
          <NavLink to="/seanse">
            <div className="cursor-pointer flex flex-col gap-[10px] items-center">
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
      <Main />

      {/* Render products section */}
      <div className="flex justify-between mb-[20px] px-[75px]">
        <p className="text-2xl">На неделе</p>
        <p className="text-red-600 flex items-center gap-3">
          <span>Показать все</span> <img src={Arrow} alt="" />
        </p>
      </div>
      <div className="flex gap-[20px] flex-wrap justify-center">
        {!isLoading && query && query.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="flex flex-col gap-[10px]">
              <NavLink to={`/seanse/${item.id}`}>
                <img
                  className="w-[280px] h-[400px] bg-[#1d1d1d] rounded-xl"
                  src={item.image}
                  alt={item.name}
                />
              </NavLink>
              <h1 className="text-2xl">{item.title}</h1>
              <p className="text-xs">{item.description}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <nav
        className="text-center mt-[48px] mb-[48px]"
        aria-label="Page navigation example"
      >
        <ul className="inline-flex  ">
          {pageNumbers.map((i) => {
            return (
              <li
                onClick={(e) => {
                  e.preventDefault();
                  setPageNumber(i);
                }}
                key={i}
              >
                <a
                  href="#"
                  className={`flex items-center justify-center px-6 h-14 leading-tight text-gray-500 bg-[#111] border border-gray-500 hover:[1e1e1e]-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                    i === pageNumber && "!bg-red-700 text-white"
                  }`}
                >
                  {i}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

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
