import React from "react";
import {
  chat_icon,
  elements_24,
  elements_25,
  elements_9,
  tele_icon,
  y_bg,
} from "../../assets";
import { number } from "../../constant";
import Elements from "../ui/Elements";

const WorkWithUs = () => {
  return (
    <section className="pt-[149px] pb-[77px] border-t border-gray-300 overflow-hidden bg-cover relative">
      <div className="container">
        <div className="flex flex-wrap justify-center -mx-[15px]">
          <div className="w-full p-0 lg:w-3/12 lg:basis-3/12 grow-0 shrink-0 xl:w-4/12 xl:basis-4/12">
            <div>
              <h1 className="font-bold text-[54px]">
                READ
                <span className="relative text-white -right-[11px] z-[1]">
                  <span
                    className="absolute w-[62px] h-[217px] bg-cover -top-[145px] -left-3.5 -z-[1]"
                    style={{ backgroundImage: `url(${y_bg})` }}
                  ></span>
                  Y
                </span>
              </h1>
            </div>
          </div>
          <div className="w-full xl:max-w-full xl:grow-0 xl:shrink-0 xl:basis-full px-[15px]">
            <div className="text-center">
              <h2 className="text-2xl font-bold pt-6">TO WORK WITH US?</h2>
              <p className="text-base font-normal text-gray-400">
                Contact us to discuss your logo design or general inquiries
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center -mx-[15px]">
          <div className="flex justify-between pt-[65px] w-full xl:max-w-8/12 xl:grow-0 xl:shrink-0 xl:basis-8/12 px-[15px]">
            <div className="flex items-center">
              <div className="border-2 py-5 px-6 mr-[19px]">
                <img src={tele_icon} alt="" />
              </div>
              <div className="relative -left-[30px] bg-white py-[9px]">
                <p className="text-sm font-normal mb-[5px] capitalize">
                  call us anytime
                </p>
                <h5>
                  <a
                    href={number[1]}
                    className="text-2xl text-black font-semibold"
                  >
                    {number[0]}
                  </a>
                </h5>
              </div>
            </div>
            <div className="flex items-center">
              <div className="border-2 py-5 px-6 mr-[19px]">
                <img src={chat_icon} alt="" />
              </div>
              <div className="relative -left-[30px] bg-white py-[9px]">
                <p className="text-sm font-normal mb-[5px] capitalize">
                  talk to us to know to
                </p>
                <h5>
                  <button className="text-2xl text-black font-semibold">
                    Discuss Your Project
                  </button>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {[
        { cls: "top-12 left-16 animate-rotate", img: elements_24 },
        { cls: "left-0 bottom-20", img: elements_25 },
        {
          cls: "right-0 top-0 bottom-0 m-auto",
          img: elements_25,
        },
        { cls: "right-[35rem] -top-[20px] animate-rotate", img: elements_9 },
        { cls: "right-40 bottom-4 animate-rotate", img: elements_9 },
      ].map((el, idx) => (
        <img key={idx} className={`absolute ${el.cls}`} src={el.img} alt="" />
      ))}
    </section>
  );
};

export default WorkWithUs;
