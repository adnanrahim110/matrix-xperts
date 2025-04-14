import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import {
  elements_10,
  elements_11,
  elements_3,
  elements_5,
  elements_9,
} from "../../assets";
import { allInOnePkg, number } from "../../constant";
import Button from "../ui/Button";
import Elements from "../ui/Elements";

const ComboPkgs = () => {
  return (
    <section className="relative bg-gray-100 py-[60px]">
      <div className="container">
        <div className="flex flex-wrap -mx-[15px]">
          <div className="w-full lg:max-w-7/12 lg:grow-0 lg:shrink-0 lg:basis-7/12 px-[15px]">
            <div>
              <h5 className="text-primary text-5xl font-black mb-2.5">
                {allInOnePkg.subtitle}
              </h5>
              <h3 className="text-[133px] font-black leading-[.75] bg-gradient-to-r from-fountain-blue to-matisse bg-clip-text text-transparent uppercase">
                {allInOnePkg.title}
              </h3>
              <p className="text-2xl text-gray-900 font-medium mb-[30px]">
                {allInOnePkg.text}
              </p>
              <div className="flex flex-wrap -mx-[15px]">
                <div className="w-full lg:w-1/2 lg:grow-0 lg:shrink-0 lg:basis-1/2 px-[15px]">
                  <div className="mb-5">
                    <ul>
                      {allInOnePkg.features.map((ftr, idx) => (
                        <li
                          key={idx}
                          className="text-gray-900 text-sm mb-[3px]"
                        >
                          <FaAngleRight className="text-primary font-semibold mr-1 inline" />
                          {ftr}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:grow-0 lg:shrink-0 lg:basis-1/2 px-[15px]">
                  <div className="mb-5">
                    <ul>
                      <li className="text-gray-900 text-sm mb-[3px]">
                        <FaRegCheckCircle className="text-primary font-semibold mr-1 inline" />
                        <strong>MORE FEATURES</strong>
                      </li>
                      {allInOnePkg.more_features.map((more_ftr, idx) => (
                        <li
                          key={idx}
                          className="text-gray-900 text-sm mb-[3px]"
                        >
                          <FaRegCheckCircle className="text-primary font-semibold mr-1 inline" />
                          {more_ftr}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:max-w-5/12 lg:grow-0 lg:shrink-0 lg:basis-5/12 px-[15px]">
            <div className="relative rounded-[10px] shadow-[0px_0px_20px_3px_#cccccc] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-br before:from-matisse before:to-fountain-blue before:rounded-[7px] before:transition-all before:duration-300 before:ease-in-out *:relative">
              <div className={`px-5 py-[35px] text-center`}>
                <span
                  className="absolute -left-[30px] -top-[30px] w-[60px] h-[59px] animate-rotate bg-no-repeat"
                  style={{ backgroundImage: `url(${elements_10})` }}
                ></span>
                <div className="mb-5">
                  <h3 className="font-bold m-0 text-[42px] text-white">
                    Combo Packages
                  </h3>
                  <p className="m-0 text-gray-100 text-xl">
                    Complete Branding Solution
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div>
                    <h3 className="text-white text-[110px] font-bold m-0">
                      {allInOnePkg.discounted_Price}
                    </h3>
                  </div>
                  <div>
                    <h6 className="m-0 text-2xl text-gray-100 ml-5">
                      <span className="block line-through decoration-primary-200">
                        {allInOnePkg.price}
                      </span>{" "}
                      Only
                    </h6>
                  </div>
                </div>
              </div>
              <div className="bg-primary text-center py-2.5">
                <h6 className="m-0 text-3xl font-bold text-white">
                  <span className="text-matisse-950">
                    {allInOnePkg.discount_waiver} OFF
                  </span>
                  Next Order
                </h6>
              </div>
              <div className="px-5 py-[35px]">
                <span
                  className="absolute -bottom-[30px] -right-[30px] w-[60px] h-[59px] overflow-hidden animate-rotate bg-no-repeat"
                  style={{ backgroundImage: `url(${elements_11})` }}
                ></span>
                <ul className="flex items-center justify-center mb-[30px]">
                  <li className="text-right text-white relative">
                    <a
                      href={number[1]}
                      className="text-base font-semibold text-white"
                    >
                      <span className="block text-sm font-normal">
                        Speak with us
                      </span>
                      {number[0]}
                    </a>
                  </li>
                  <li className="text-left pl-[50px] text-white relative before:absolute before:left-[25px] before:h-full before:w-0.5 before:bg-white">
                    <button className="text-base font-semibold text-white">
                      <span className="block text-sm font-normal">
                        want to discuss?
                      </span>
                      Live Chat Now
                    </button>
                  </li>
                </ul>
                <div className="text-center">
                  <Button btn2 children="Start project" className="btn_black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {[
        { cls: "xl:-left-[30px] left-4 top-16", img: elements_3 },
        { cls: "bottom-12 left-8 xl:-left-5", img: elements_9 },
        { cls: "bottom-16 right-8 -z-[1]", img: elements_5 },
      ].map((el, idx) => (
        <Elements key={idx} className={el.cls} img={el.img} />
      ))}
    </section>
  );
};

export default ComboPkgs;
