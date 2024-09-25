const Footer = () => {
  return (
    <footer className="flex justify-between p-[30px] bg-[#111111] rounded-2xl	">
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
  );
};

export default Footer;
