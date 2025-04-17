import React from "react";
import { IoLogoWechat } from "react-icons/io5";
import Button from "../ui/Button";

const HeroSec = ({
  hero2 = false,
  banner_Img,
  banner_item_img,
  subtitle,
  title,
  text,
}) => {
  const processedTitle = title.replace(
    /-([\s\S]+?)-/g,
    '<span style="color: #f1c607;">$1</span>'
  );
  return (
    <section
      className="pt-20 min-h-[580px] flex items-center relative overflow-hidden bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${banner_Img})` }}
    >
      <div className="container">
        <div className="flex flex-wrap -mx-[15px]">
          <div className="w-full relative lg:max-w-7/12 lg:grow-0 lg:shrink-0 lg:basis-7/12 px-[15px]">
            <div className="relative z-[1]">
              <h6 className={hero2 ? "text-white" : "text-gray-900"}>
                {subtitle}
              </h6>
              <h2
                className={`text-[54px] font-bold relative mb-5 leading-[60px] ${
                  hero2
                    ? "text-white"
                    : "bg-gradient-to-r from-fountain-blue to-matisse text-transparent bg-clip-text"
                }`}
                dangerouslySetInnerHTML={{ __html: processedTitle }}
              ></h2>
              <p
                className={`${
                  hero2 ? "text-white" : "text-matisse-950"
                } text-lg mb-[30px] max-[1366px]:text-base`}
                dangerouslySetInnerHTML={{ __html: text }}
              />
              <ul className="flex items-center">
                <li className="inline-block text-white mr-2.5">
                  <Button
                    btn2={hero2 ? false : true}
                    children="avail flat 70% off"
                    className={` ${
                      hero2
                        ? "p-[11px_30px] border-2 bg-white uppercase"
                        : "p-[11px_95px_11px_30px]!"
                    }`}
                  />
                </li>
                <li className="inline-block text-white">
                  {hero2 ? (
                    <Button btn2 children="view pricing" className="btn_w2" />
                  ) : (
                    <button className="text-lg text-gray-900 font-semibold uppercase leading-[1.1]">
                      <span className="block text-[10px]">
                        Click here to{" "}
                        <IoLogoWechat className="text-primary ml-1.5 inline" />
                      </span>
                      Live chat
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {banner_item_img && (
        <img
          src={banner_item_img}
          className="absolute -right-[50px] max-[1600px]:max-w-[45%] max-[1600px]:right-0"
          alt=""
        />
      )}
    </section>
  );
};

export default HeroSec;
