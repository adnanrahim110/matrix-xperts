import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
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
} from "../../assets";
import { pricingData } from "../../constant";
import Elements from "../ui/Elements";
import FilterNav from "../ui/FilterNav";
import PricingCard from "../ui/PricingCard";
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
                      <PricingCard pkg={pkg} />
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
