import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { banners_pricing_bg } from "../../assets";
import { number } from "../../constant";

const PricingCard = ({ pkg }) => {
  return (
    <div
      className="relative border-2 border-primary hover:border-transparent rounded-[10px] py-8 px-[25px] bg-center bg-cover bg-no-repeat mb-5 z-[1] cursor-pointer bg-white before:absolute before:inset-0 before:w-full before:h-full before:-z-[1] before:rounded-[7px] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 before:ease-in-out before:bg-gradient-to-br before:from-matisse before:to-fountain-blue *:transition-all *:duration-200 *:ease-in-out group"
      style={{ backgroundImage: `url(${banners_pricing_bg})` }}
    >
      <div className="mb-[15px]">
        <h5 className="text-lg text-gray-900 group-hover:text-white font-medium capitalize">
          {pkg.title}
        </h5>
        <h6 className="font-medium text-lg text-gray-400 group-hover:text-black uppercase">
          <span
            className={`inline-block mr-1 ${
              pkg.discounted_Price
                ? "line-through decoration-primary group-hover:decoration-white transition-none"
                : ""
            }`}
          >
            ${Number(pkg.price).toFixed(2)}
          </span>
          only
        </h6>
        {pkg.discounted_Price && (
          <h3 className="text-[42px] font-bold text-primary group-hover:text-white">
            ${Number(pkg.discounted_Price).toFixed(2)}
          </h3>
        )}
        <p className="text-xs m-0 text-black group-hover:text-gray-100 font-medium">
          {pkg.text}
        </p>
      </div>
      <div className="mb-5 rounded-md overflow-hidden h-full max-h-40">
        <ul className="h-40 overflow-y-auto mb-[15px] features border border-gray-100 group-hover:border-gray-300 rounded-lg py-1.5">
          {pkg.features.map((feature, idx) => (
            <li
              key={`feature-${idx}`}
              className="text-xs mb-[5px] font-medium group-hover:text-white flex items-center px-1.5"
            >
              <span>
                {" "}
                <FaRegCircleCheck className="text-sm text-primary group-hover:text-black font-normal mr-[15px]" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
          {pkg.more_features && (
            <li className="text-xs mb-[5px] my-2 pl-7 bg-black text-white font-medium uppercase group-hover:text-white">
              more features
            </li>
          )}
          {pkg.more_features &&
            pkg.more_features.map((mFeature, idx) => (
              <li
                key={`more_feature-${idx}`}
                className="text-xs mb-[5px] px-1.5 font-medium group-hover:text-white flex items-center"
              >
                <span>
                  <FaRegCircleCheck className="text-sm text-primary group-hover:text-black font-normal mr-[15px]" />
                </span>
                <span>{mFeature}</span>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <div className="text-center">
          <button className="text-[15px] font-semibold text-gray-900 group-hover:to-primary border-2 border-primary group-hover:border-white group-hover:bg-white py-3.5 px-14 rounded-[30px] uppercase inline-block mb-5">
            order now
          </button>
        </div>
        <ul className="flex items-center justify-between">
          <li>
            <a
              href={number[1]}
              className="text-base text-gray-900 group-hover:text-white font-bold"
            >
              <span className="block font-medium text-xs text-gray-500 group-hover:text-white">
                Share your idea?
              </span>
              {number[0]}
            </a>
          </li>
          <li>
            <button className="text-base text-gray-900 group-hover:text-white font-bold">
              <span className="block font-medium text-xs text-gray-500 group-hover:text-white">
                want to discuss?
              </span>
              Live Chat Now
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
