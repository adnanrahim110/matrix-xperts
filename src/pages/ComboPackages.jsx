import React from "react";
import {
  banners_item_packages,
  banners_packages,
  elements_11,
  elements_14,
  elements_5,
  elements_6,
  elements_7,
  elements_8,
} from "../assets";
import HeroSec from "../components/layouts/HeroSec";
import Elements from "../components/ui/Elements";
import PricingCard from "../components/ui/PricingCard";
import SecHeader from "../components/ui/SecHeader";
import { comboPackages } from "../constant";

const ComboPackages = () => {
  return (
    <>
      <HeroSec
        banner_Img={banners_packages}
        banner_item_img={banners_item_packages}
        subtitle="We are Loved & Supported by our"
        title="Customer Base because <br /> of our High-End Work"
        text="We highly regard our customers' reviews as it helps us to do better in <br/> the future and apply any changes in our work processes if required"
      />

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
          <div className="flex flex-wrap -mx-[15px]">
            {comboPackages.map((pkg, idx) => (
              <div
                className="w-full lg:max-w-4/12 lg:grow-0 lg:shrink-0 lg:basis-4/12 px-[15px] relative"
                key={idx}
              >
                <PricingCard pkg={pkg} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ComboPackages;
