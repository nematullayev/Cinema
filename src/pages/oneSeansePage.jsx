import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import Arrow from "../assets/Arrow.svg";
import Coupon from "../assets/coupon.svg";
import Logo from "../assets/logo.png";
import Russian from "../assets/russian.svg";
import Search from "../assets/search.svg";
import Tablet from "../assets/tablet-wh.svg";
import TV from "../assets/seanse-white.svg";
import About from "../components/about.jsx/about";
import Footer from "../components/footer/footer";
import { IoIosArrowBack } from "react-icons/io";
import CampBileti from "../components/bileti/campBileti";

const OneSeansePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [tab, setTab] = useState(1);

  useEffect(() => {
    fetch(`https://66cc9ebfa4dd3c8a71b84178.mockapi.io/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  if (!product) {
    return (
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
  }

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
      <div className="relative">
        <img
          className="w-[1360px] h-[640px] rounded-xl "
          src={product.image}
          alt={product.name}
        />
        <div className="absolute bottom-[50px] left-[480px] flex flex-col gap-[20px] items-center">
          <h1 className="text-3xl">{product.title}</h1>
          <p className="">2024 • {product.description} • 1ч 34м • EN • 6+ </p>
          <button className="flex items-center gap-5 px-[130px] py-[16px] bg-red-700 text-white rounded-lg">
            <p className="">Купить билет</p>
          </button>
        </div>
        <button className=" absolute top-[20px] left-[20px]">
          <NavLink to="/">
            <button className="bg-[#111] p-[24px] rounded-xl">
              <IoIosArrowBack color="red" />
            </button>
          </NavLink>
        </button>
      </div>
      <div className=" mt-[100px] flex justify-between items-center flex-col">
        <button className=" w-[380px] bg-[#111] rounded-xl ">
          <button
            onClick={() => setTab(1)}
            className={`py-4 w-[188px] rounded-xl ${
              tab == 1 ? "bg-[#1D1D1D] text-[#C61F1F]" : "bg-[#111111]"
            }`}
          >
            Билеты
          </button>
          <button
            onClick={() => setTab(2)}
            className={`py-4 w-[188px] rounded-xl ${
              tab == 2 ? "bg-[#1D1D1D] text-[#C61F1F]" : "bg-[#111111]"
            }`}
          >
            О фильме
          </button>
        </button>
        {tab == 1 ? <CampBileti /> : <About />}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default OneSeansePage;
