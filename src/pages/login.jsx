import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../components/header/header";
import Uz from "../assets/UZ.svg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { InputMask } from "@react-input/mask";

const Login = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  let handleAdd = () => {
    console.log(input);
    if (input === "") {
      toast.error("Telefon raqamni kiriting");
    } else {
      fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "mor_2314",
          password: "83r5^_",
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          if (json.token) {
            localStorage.setItem("token", json.token);
            navigate("/sms");
            dispatch({
              type: "login",
              payload: json.token,
            });
          } else {
            alert("Invalid login");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Something went wrong");
        });
    }
  };

  return (
    <>
      <Header />
      <NavLink to="/">
        <button className="bg-[#111] p-[24px] rounded-xl">
          <IoIosArrowBack color="red" />
        </button>
      </NavLink>
      <div className="flex flex-col gap-[20px] justify-center items-center mt-[50px]">
        <h1 className="text-2xl">Регистрация</h1>
        <p className="w-[300px] text-gray-500 text-center">
          Введите номер телефона для того чтобы войти или пройти регистрацию
        </p>
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
          }}
          className="flex flex-col gap-[20px]"
          action=""
        >
          <div className="text-white bg-[#111111] w-[330px] h-[50px] rounded-xl p-[15px] flex gap-[10px] items-center">
            <img src={Uz} alt="" />
            <div className="flex items-center gap-[8px]">
              <h2>+998</h2>
              <InputMask
                value={input}
                onChange={(evt) => setInput(evt.target.value)}
                className="text-white bg-transparent outline-none"
                mask=" (__) ___-__-__"
                replacement={{ _: /\d/ }}
              />
            </div>
          </div>
          <button
            className="py-[16px] bg-red-700 rounded-xl"
            onClick={handleAdd}
          >
            Регистрация
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
