import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";
import { number } from "../../constant";
import Button from "./Button";

const BtnsList = ({ textDark = true }) => {
  const textColor = textDark ? "text-gray-900" : "text-gray-500";

  return (
    <ul className="inline-flex gap-3.5 items-center">
      <li className="align-top relative">
        <Button btn2 children="get in touch" />
      </li>
      <li className="pl-9 border-l border-gray-300 align-top relative">
        <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 bottom-0 text-xl flex items-center rotate-45 text-primary" />
        <a
          href={number[1]}
          className={`font-semibold text-base ${textColor} uppercase`}
        >
          <span className="block text-[10px] font-semibold">Call us At</span>
          {number[0]}
        </a>
      </li>
      <li className="pl-5 border-l border-gray-300 align-top relative">
        <button className={`font-semibold text-base ${textColor} uppercase`}>
          <span className="block text-[10px] font-semibold">
            click here to <IoLogoWechat className="text-primary ml-1 inline" />
          </span>
          Live Chat
        </button>
      </li>
    </ul>
  );
};

export default BtnsList;
