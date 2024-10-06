import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import Arrow from "../assets/Arrow.svg";
import Coupon from "../assets/coupon.svg";
import Logo from "../assets/logo.png";
import Russian from "../assets/russian.svg";
import Search from "../assets/search.svg";
import Close from "../assets/close.png";
import Tablet from "../assets/tablet-wh.svg";
import TV from "../assets/seanse-white.svg";
import Click from "../assets/Click.png";
import Payme from "../assets/payme.png";
import About from "../components/about.jsx/about";
import Footer from "../components/footer/footer";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import CampBileti from "../components/bileti/campBileti";
import Panda2 from "../assets/panda2.png";
import Check from "../assets/check-line.svg";

const OneSeansePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [tab, setTab] = useState(1);
  const [showModal, setShowModal] = React.useState(false);

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

      {/* modal */}

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg  flex flex-col w-[800px] mt-[200px] bg-[#111] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5  rounded-t">
                  <NavLink to="/seanse">
                    <button className="bg-[#1d1d1d] p-[24px] rounded-xl">
                      <IoIosArrowBack color="red" />
                    </button>
                  </NavLink>
                  <div className="flex flex-col gap-[5px] items-center">
                    <h3 className="text-2xl font-semibold">Оплата</h3>
                    <p>Выберите вид оплаты</p>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-[#1d1d1d] p-[24px] rounded-xl"
                  >
                    <IoMdClose color="red" />
                  </button>
                </div>
                {/*body*/}
                <div className="flex flex-col gap-[48px] items-center justify-center mb-[48px]">
                  <div className="flex flex-col gap-[20px] bg-[#1d1d1d] p-[10px] w-[580px] rounded-xl">
                    <div className="flex gap-[20px] ">
                      <div>
                        <img
                          className="w-[260px] h-full"
                          src={product.image}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-[22px]">
                        <div className="flex flex-col gap-[16px]">
                          <h2 className="text-2xl">{product.title}</h2>
                          <p className="text-[#a1a1a1]">
                            2024 • RU • 6+ • 1ч 34м / 94 минут
                          </p>
                          <p>{product.description}</p>
                          <p>Зал №1</p>
                          {/* <p>28 марта, 19:30</p> */}
                        </div>
                        <div className="">
                          <button className="flex gap-[6px] items-center bg-[#2d2d2d] px-[16px] py-[12px] rounded-xl">
                            {/* <img src={Check} alt="" /> */}
                            <p>28 марта, 19:30</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <div className="w-[370px] p-[20px] rounded-xl bg-[#1d1d1d] flex justify-between">
                      <p>Комиссия сервиса</p>
                      <p>5 000 сум</p>
                    </div>
                    <div className="w-[370px] p-[20px] rounded-xl bg-[#1d1d1d] flex justify-between">
                      <p>Общая сумма</p>
                      <p>
                        <span className="rang">135 000</span> сум
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[20px] items-center">
                    <div className="">
                      <p className="text-[#1d1d1d]">Выберите способ оплаты</p>
                    </div>
                    <div className="flex gap-[20px]">
                      <button className=" w-[280px] rounded-xl bg-[#1d1d1d] py-[25px] px-[95px]">
                        <img src={Click} alt="" />
                      </button>
                      <button className=" w-[280px] rounded-xl bg-[#1d1d1d] py-[25px] px-[95px]">
                        <img src={Payme} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6 border-t border-solid border-[#1d1d1d] rounded-b">
                  <div className="flex gap-[20px]">
                    <div className="w-[160px] p-[10px] rounded-xl bg-[#1d1d1d] flex flex-col gap-[10px]">
                      <div className="flex justify-between">
                        <p className="text-[#a1a1a1]">65 000 сум</p>
                        <img src={Close} alt="" />
                      </div>
                      <div>
                        <p>Ряд 7, Место 11</p>
                      </div>
                    </div>
                    <div className="w-[160px] p-[10px] rounded-xl bg-[#1d1d1d] flex flex-col gap-[10px]">
                      <div className="flex justify-between">
                        <p className="text-[#a1a1a1]">65 000 сум</p>
                        <img src={Close} alt="" />
                      </div>
                      <div>
                        <p>Ряд 7, Место 11</p>
                      </div>
                    </div>
                  </div>
                  <button
                    className=" px-[80px] py-[24px] bg-red-700 text-white rounded-lg"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Оплатить
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {/* modal */}

      <div className="relative">
        <img
          className="w-[1360px] h-[640px] rounded-xl "
          src={product.image}
          alt={product.name}
        />
        <div className="absolute bottom-[50px] left-[480px] flex flex-col gap-[20px] items-center">
          <h1 className="text-3xl">{product.title}</h1>
          <p className="">2024 • {product.description} • 1ч 34м • EN • 6+ </p>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-5 px-[130px] py-[16px] bg-red-700 text-white rounded-lg"
          >
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
