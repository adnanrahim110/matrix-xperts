import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  elements_11,
  elements_14,
  elements_5,
  elements_6,
  elements_7,
  elements_8,
  pricing_bg,
} from "../../assets";
import { number, pricingData } from "../../constant";
import Elements from "../ui/Elements";
import FilterNav from "../ui/FilterNav";
import SecHeader from "../ui/SecHeader";

const Pricing = () => {
  const [selectedId, setSelectedId] = useState(1);
  const detailRef = useRef(null);

  useEffect(() => {
    if (detailRef.current) {
      gsap.fromTo(
        detailRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [selectedId]);

  return (
    <section className="relative overflow-hidden py-[60px]">
      {[
        { cls: "left-12 top-24 z-0", img: elements_11, animate: true },
        { cls: "top-24 right-12 z-0", img: elements_11, animate: true },
        {
          cls: "min-xl:hidden bottom-0 left-8 z-0",
          img: elements_14,
          animate: true,
        },
        { cls: "bottom-16 right-8 z-0", img: elements_5, animate: true },
        { cls: "top-20px left-0", img: elements_6, animate: false },
        {
          cls: "top-[-300px] right-0 z-[-1]",
          img: elements_7,
          animate: false,
        },
        { cls: "left-0 -bottom-[250px]", img: elements_8, animate: false },
      ].map((el, idx) => (
        <Elements
          key={idx}
          className={el.cls}
          img={el.img}
          animate={el.animate}
        />
      ))}
      <div className="container">
        <div className="-mx-[15px] flex flex-wrap">
          <div className="relative w-full min-h-px px-[15px] lg:max-w-full lg:grow-0 lg:shrink-0 lg:basis-full">
            <SecHeader
              subtitle="Our Price Model"
              title="That suits everyone!"
              text="To provide your business with customized and unique website development services at reasonable prices"
            />
          </div>
        </div>
        <div>
          <FilterNav
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            items={pricingData}
          />
          <div className="px-[15px]">
            <div ref={detailRef}>
              <Swiper
                modules={[Pagination]}
                slidesPerView={3}
                spaceBetween={20}
                pagination={{ clickable: true }}
              >
                {pricingData
                  .find((item) => item.id === selectedId)
                  .packages.map((pkg, idx) => (
                    <SwiperSlide key={idx}>
                      <div
                        className="relative border-2 border-primary hover:border-transparent rounded-[10px] py-8 px-[25px] bg-center bg-cover bg-no-repeat mb-5 z-[1] cursor-pointer bg-white before:absolute before:inset-0 before:w-full before:h-full before:-z-[1] before:rounded-[7px] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 before:ease-in-out before:bg-gradient-to-br before:from-matisse before:to-fountain-blue *:transition-all *:duration-300 *:ease-in-out"
                        style={{ backgroundImage: `url(${pricing_bg})` }}
                      >
                        <div className="mb-[15px]">
                          <h5 className="text-lg text-gray-900 font-medium capitalize">
                            {pkg.title}
                          </h5>
                          <h6 className="font-medium text-lg text-gray-400 uppercase">
                            <span
                              className={`inline-block ${
                                pkg.discounted_Price
                                  ? "line-through decoration-primary transition-none"
                                  : ""
                              }`}
                            >
                              ${pkg.price}
                            </span>
                            only
                          </h6>
                          {pkg.discounted_Price && (
                            <h3 className="text-[42px] font-bold text-primary">
                              ${pkg.discounted_Price}
                            </h3>
                          )}
                          <p className="text-xs m-0 text-black font-medium">
                            {pkg.text}
                          </p>
                        </div>
                        <div className="mb-5">
                          <ul className="h-40 overflow-y-auto mb-[15px] features">
                            {pkg.features.map((feature, idx) => (
                              <li
                                key={`feature-${idx}`}
                                className="text-xs mb-[5px] font-medium"
                              >
                                <FaRegCircleCheck className="text-sm text-primary font-normal mr-[15px]" />
                                {feature}
                              </li>
                            ))}
                            {pkg.more_features && (
                              <li className="text-xs mb-[5px] font-medium uppercase">
                                more features
                              </li>
                            )}
                            {pkg.more_features &&
                              pkg.more_features.map((mFeature, idx) => (
                                <li
                                  key={`more_feature-${idx}`}
                                  className="text-xs mb-[5px] font-medium"
                                >
                                  <FaRegCircleCheck className="text-sm text-primary font-normal mr-[15px]" />
                                  {mFeature}
                                </li>
                              ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-center">
                            <button className="text-[15px] font-semibold text-gray-900 border-2 border-primary py-3.5 px-14 rounded-[30px] uppercase inline-block mb-5">
                              order now
                            </button>
                          </div>
                          <ul className="flex items-center justify-between">
                            <li>
                              <a
                                href={number[1]}
                                className="text-base text-gray-900 font-bold"
                              >
                                <span className="block font-medium text-xs text-gray-500">
                                  Share your idea?
                                </span>
                                {number[0]}
                              </a>
                            </li>
                            <li>
                              <button className="text-base text-gray-900 font-bold">
                                <span className="block font-medium text-xs text-gray-500">
                                  want to discuss?
                                </span>
                                Live Chat Now
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
