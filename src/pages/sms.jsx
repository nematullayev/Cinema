import React, { useState } from "react";
import Header from "../components/header/header";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OtpInput from "react-otp-input";

const Sms = () => {
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="flex gap-[310px] px-[100px] mt-[58px]">
        {/* Orqaga qaytish tugmasi */}
        <div>
          <NavLink to="/">
            <button className="bg-[#111] p-[24px] rounded-xl">
              <IoIosArrowBack color="red" />
            </button>
          </NavLink>
        </div>

        {/* SMS kiriting formasi */}
        <div className="flex flex-col gap-[20px] items-center justify-center">
          <h2 className="text-3xl">Введите СМС-код</h2>
          <p className="w-[330px] text-center">
            Введите СМС-код, который мы отправили на номер{" "}
            <span className="text-red-700">+998 88 800 90 00</span>
          </p>

          {/* OTP kiritish inputlari */}
          <OtpInput
            value={otp}
            onChange={(value) => {
              setOtp(value);
              if (value.length === 4) {
                navigate("/");
              }
            }}
            numInputs={4}
            renderSeparator={<span>&nbsp;&nbsp;</span>}
            inputStyle={{
              width: "70px",
              paddingTop: "20px",
              paddingBottom: "20px",
              fontSize: "18px",
              borderRadius: "8px",
              background: "#111111",
              margin: "5px",
              textAlign: "center",
              outline: "none",
            }}
            renderInput={(props) => <input {...props} />}
          />
          <div className="flex gap-[20px]"></div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Sms;
