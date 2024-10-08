import React from "react";
import Check from "../../assets/check-line.svg";
import useStore from "../../zustand/zustand";

const Active = () => {
  const { tickets, deleteTicket } = useStore();

  return (
    <div className="flex flex-col gap-[20px]  mb-[100px]">
      {tickets.length === 0 ? (
        <p>Sizda hech qanaqa bilet yoq</p>
      ) : (
        tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="flex flex-col gap-[20px] bg-[#1d1d1d] p-[10px] w-[580px] rounded-xl"
          >
            <div className="flex gap-[20px]">
              <div>
                <img
                  className="w-[260px] h-[260px] rounded-lg"
                  src={ticket.image}
                  alt="ticket"
                />
              </div>
              <div className="flex flex-col gap-[22px]">
                <div className="flex flex-col gap-[16px]">
                  <h2 className="text-2xl"> {ticket.title} </h2>
                  <p className="text-[#a1a1a1]">
                    2024 • RU • 6+ • 1ч 34м / 94 минут
                  </p>
                  <p>{ticket.description}</p>
                  <p>Зал №1</p>
                  <p>28 марта, 19:30</p>
                </div>
                <div>
                  <button className="flex gap-[6px] items-center bg-[#2d2d2d] px-[16px] py-[12px] rounded-xl">
                    <img src={Check} alt="" />
                    <p>Оплачено</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center p-[10px]">
              <p className="text-xl">Ваш билет готов</p>
              <button
                onClick={() => deleteTicket(ticket.id)}
                className="px-[78px] py-[16px] bg-red-700 rounded-xl"
              >
                Ochirish
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Active;
