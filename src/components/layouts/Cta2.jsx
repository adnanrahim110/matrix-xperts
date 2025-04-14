import React from "react";
import { IoLogoWechat } from "react-icons/io5";
import { cta_2_speaker, elements_cta_1, elements_cta_2 } from "../../assets";
import Button from "../ui/Button";
import Elements from "../ui/Elements";

const Cta2 = () => {
  return (
    <section className="bg-primary relative">
      {[
        {
          cls: "-left-[91px] -top-6 bottom-0 m-auto flex items-center max-w-full xl:hidden",
          img: elements_cta_1,
        },
        {
          cls: "right-0 -top-[15px] max-w-[14%]",
          img: elements_cta_2,
        },
      ].map((el, idx) => (
        <Elements key={idx} className={el.cls} img={el.img} animate={false} />
      ))}
      <div className="container">
        <div className="flex items-center flex-wrap -ml-[15px] -mr-[15px]">
          <div className="w-full lg:max-w-[25%] lg:grow-0 lg:shrink-0 lg:basis-[25%] px-[15px]">
            <div>
              <h4 className="text-[23px] text-white font-bold uppercase m-0 leading-[1.3]">
                we are widely{" "}
                <span className="font-light block text-gray-100 relative text-lg before:absolute before:top-0 before:right-0 before:bottom-0 before:m-auto before:w-[73px] before:h-px before:bg-white after:absolute after:right-[70px] after:w-2 after:h-2 after:bg-black after:rounded-full after:top-0 after:bottom-0 after:m-auto">
                  Recognized on
                </span>
              </h4>
            </div>
          </div>
          <div className="w-full lg:max-w-[41.666667%] lg:grow-0 lg:shrink-0 lg:basis-[41.666667%] px-[15px]">
            <div className="flex items-center">
              <img src={cta_2_speaker} alt="" />
            </div>
          </div>
          <div className="w-full lg:max-w-[33.333333%] lg:grow-0 lg:shrink-0 lg:basis-[33.333333%] px-[15px]">
            <div>
              <h6 className="text-gray-200 text-base font-normal">
                <span className="text-white font-bold">Get in Touch</span> with
                Our Support Agent or
              </h6>
              <ul>
                <li className="inline-block mr-2.5 align-middle text-white">
                  <Button btn2 className="btn_white" children="order now" />
                </li>
                <li className="inline-block align-middle mt-2.5">
                  <button className="text-white uppercase font-bold">
                    <span className="block text-[10px] font-medium relative">
                      Click here to{" "}
                      <IoLogoWechat className="text-white ml-[5px] inline" />
                    </span>
                    Live Chat
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta2;
