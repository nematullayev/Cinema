import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Arrow from "../assets/Arrow.svg";
import Coupon from "../assets/coupon.svg";
import Logo from "../assets/logo.png";
import Russian from "../assets/russian.svg";
import Search2 from "../assets/search-red.svg";
import Search3 from "../assets/search-red2.svg";
import Tablet from "../assets/tablet.svg";
import TV from "../assets/seanse-white.svg";
import useGetQuery from "../hooks/useGetQuery";

const Search = () => {
  const selector = useSelector((prev) => prev.auth);
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const Loader = () => (
    <div
      className="w-100 flex justify-center items-center min-h-[100vh]"
      role="status"
    >
      <svg
        aria-hidden="true"
        className="w-[100px] h-[100px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );

  const { query, isLoading, isError, isFetching } = useGetQuery({
    url: `https://66cc9ebfa4dd3c8a71b84178.mockapi.io/api/products`,
    key: ["movies"],
  });

  const handleSearchFilm = useCallback(
    (value) => {
      console.log("handleSearchFilm ishga tushdi");
      const filteredData = query.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filteredData);
    },
    [query]
  );

  if (isLoading) return <Loader />;

  return (
    <div>
      <header className="px-[100px] flex justify-between movies-center mb-[22px]">
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
          <NavLink to="/bileti">
            <div className="cursor-pointer flex flex-col gap-[10px] items-center">
              <img src={Coupon} alt="Coupon" />
              <p>Билеты</p>
            </div>
          </NavLink>
          <NavLink to="/search">
            <div className="cursor-pointer flex flex-col gap-[10px] items-center">
              <img src={Search2} alt="Search" />
              <p className="rang">Поиск</p>
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
      <div className="flex flex-col gap-[48px] items-center mt-[48px]">
        <div className=" relative flex">
          <input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              handleSearchFilm(e.target.value); // Use useCallback function
            }}
            type="text"
            placeholder="Названия фильма"
            className="py-[22px] px-[10px] pl-[60px] w-[338px] bg-[#111111] rounded-xl"
          />
          <img
            className=" absolute top-[20px] left-[20px]"
            src={Search3}
            alt="search"
          />
        </div>
      </div>
      <div className="flex justify-center gap-[20px] flex-wrap mt-[100px]">
        {filteredData.map((product) => (
          <div key={product.id} className="flex flex-col gap-[10px]">
            <NavLink to={`/seanse/${product.id}`}>
              <img
                className="w-[280px] h-[400px] bg-[#1d1d1d] rounded-xl"
                src={product.image}
                alt={product.name}
              />
            </NavLink>
            <h1 className="text-2xl">{product.title}</h1>
            <p className="text-xs">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
