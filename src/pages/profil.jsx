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
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Profil = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleDeleateAccount = () => {
    localStorage.removeItem("token");
    const token = localStorage.getItem("token");
    if (token == null) {
      toast.loading("Accountdan chiqilyapti");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };
  const [showModal, setShowModal] = React.useState(false);

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
      {/* Modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-[480px] my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#111] hite outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit your Name</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <input
                    type="text"
                    placeholder="Edit your Name"
                    value={name}
                    onChange={(evt) => setName(evt.target.value)}
                    className="w-full p-[10px] rounded-xl bg-transparent border-solid border-2 border-white"
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      console.log(name);
                      localStorage.setItem("Ism", name);
                      setShowModal(false);
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {/* modal */}
      <div className="mt-[48px] w-[380px] flex flex-col gap-[25px] justify-center mx-auto mb-[50px]">
        <button className="flex gap-4 items-center bg-[#111] p-[20px] rounded-xl">
          <img src={Pro} alt="" />
          <p>Мои данные</p>
        </button>
        <div className="flex flex-col gap-2" onClick={() => setShowModal(true)}>
          <p className="text-[#4d4d4d]">Имя пользователя</p>
          <button className="flex justify-between items-center bg-[#111] p-[20px] rounded-xl w-full">
            <p>{name == "" ? "Abdulaziz Abdujalilov" : name}</p>
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
            onClick={handleDeleateAccount}
            className="flex gap-3 items-center bg-[#111] p-[20px] rounded-xl w-full"
          >
            <img src={Log} alt="" />
            <p>Выйти из аккаунта</p>
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profil;
