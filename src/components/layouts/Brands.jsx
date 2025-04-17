import React from "react";
import { banners_brands, industrie_icons, plus } from "../../assets";
import SecHeader from "../ui/SecHeader";
import "./brands.css";

const Brands = () => {
  return (
    <section
      className="py-[60px] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${banners_brands})` }}
    >
      <div className="container">
        <div className="flex flex-wrap -mx-[15px]">
          <div className="w-full lg:max-w-full lg:grow-0 lg:shrink-0 lg:basis-full px-[15px]">
            <SecHeader
              subtitle="Logos, Web Designs & Development Solutions for"
              title="Fortune 500 Companies From 40+ Industries"
              text="We take pride in delivering crystal clear and spotless work to our clients. Ensuring every step is according to your needs, Logo Aspire delivers what <br/> it promises. Keeping you in mind, we offer all types of website and logo designs, video animations, and mobile applications."
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-[15px] justify-center">
          {[
            { title: "Projects Ordered", count: "400+" },
            { title: "Happy Clients", count: "1000+" },
            { title: "Projects Completed", count: "900+" },
            { title: "Comments", count: "300+" },
          ].map((item, idx) => (
            <div
              className="w-full max-w-1/2 grow-0 shrink-0 basis-1/2 sm:max-w-3/12 sm:basis-3/12 lg:max-w-3/12 lg:basis-3/12 px-[15px]"
              key={idx}
            >
              <div className="text-center pt-[30px] relative">
                <span
                  className="absolute -bottom-[25px] -right-10 w-[41px] h-[38px] bg-[-133px_-5px]"
                  style={{ backgroundImage: `url(${plus})` }}
                ></span>
                <h3 className="font-semibold text-primary text-[35px]">
                  {item.count}
                </h3>
                <p className="text-base text-gray-900 font-normal">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-10">
          <div className="flex flex-wrap -mx-[15px]">
            {[
              {
                list: [
                  { title: "engineering", icon: "sprt-5" },
                  { title: "construction", icon: "sprt-4" },
                  { title: "technology", icon: "sprt-3" },
                  { title: "automotive", icon: "sprt-2" },
                  { title: " Catalogues", icon: "sprt-1" },
                ],
              },
              {
                list: [
                  { title: "Religion", icon: "sprt-6" },
                  { title: "Social", icon: "sprt-7" },
                  { title: "Education", icon: "sprt-8" },
                  { title: "Resource", icon: "sprt-9" },
                  { title: "sports", icon: "sprt-10" },
                ],
              },
              {
                list: [
                  { title: "financial", icon: "sprt-11" },
                  { title: "insurance", icon: "sprt-12" },
                  { title: "consultation", icon: "sprt-13" },
                  { title: "architectural", icon: "sprt-14" },
                  { title: "Food", icon: "sprt-15" },
                ],
              },
              {
                list: [
                  { title: "medical", icon: "sprt-16" },
                  { title: "health", icon: "sprt-17" },
                  { title: "travel", icon: "sprt-18" },
                  { title: " Matrimony", icon: "sprt-19" },
                  { title: "art", icon: "sprt-20" },
                ],
              },
              {
                list: [
                  { title: "communication", icon: "sprt-21" },
                  { title: "entertainment", icon: "sprt-22" },
                  { title: "environmental", icon: "sprt-23" },
                  { title: "fashion", icon: "sprt-24" },
                  { title: "spa", icon: "sprt-25" },
                ],
              },
              {
                list: [
                  { title: "children", icon: "sprt-26" },
                  { title: "craft", icon: "sprt-27" },
                  { title: "music", icon: "sprt-28" },
                  { title: "navigation", icon: "sprt-29" },
                  { title: "news", icon: "sprt-30" },
                ],
              },
            ].map((item, idx) => (
              <div
                className="w-full sm:max-w-4/12 sm:basis-4/12 lg:max-w-2/12 lg:basis-2/12 px-[15px] grow-0 shrink-0"
                key={idx}
              >
                <div>
                  <ul>
                    {item.list.map((lst, idx) => (
                      <li
                        className="flex items-center leading-[70px] text-gray-900 text-base font-semibold font-open-sans"
                        key={`lst-${idx}`}
                      >
                        <i
                          className={`bg-no-repeat block mix-blend-multiply mr-[15px] ${lst.icon}`}
                          style={{ backgroundImage: `url(${industrie_icons})` }}
                        ></i>
                        {lst.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
