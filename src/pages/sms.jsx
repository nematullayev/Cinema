import React, { useState } from "react";
import Header from "../components/header/header";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sms = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate(); // Initialize the useNavigate hook for redirection

  const handleChange = (e) => {
    const value = e.target.value;

    // Allow only numbers and limit to 4 digits
    if (/^\d{0,4}$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleSend = () => {
    console.log(inputValue);
    if (inputValue > 999) {
      navigate("/");
    } else {
      toast.error("4 ta raqam kiriting");
    }
  };
  return (
    <div>
      <Header />
      <div className="flex gap-[336px] px-[100px] mt-[48px]">
        <div className="">
          <NavLink to="/">
            <button className="bg-[#111] p-[24px] rounded-xl">
              <IoIosArrowBack color="red" />
            </button>
          </NavLink>
        </div>
        <div className="flex flex-col gap-[20px] items-center justify-center">
          <h2 className="text-3xl">Введите СМС-код</h2>
          <p className="w-[330px] text-center ">
            Введите СМС-код, который мы отправили на номер{" "}
            <span className="text-red-700">+998 88 800 90 00</span>
          </p>
          <div className="flex gap-[20px]">
            <input
              value={inputValue}
              onChange={handleChange}
              placeholder="Enter 4 digits"
              maxLength="4"
              className="text-white p-[10px] rounded-xl bg-[#111] border-none"
              type="number"
            />
            <button
              onClick={handleSend}
              className="bg-red-700 px-[40px] py-[10px] rounded-xl"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Sms;
