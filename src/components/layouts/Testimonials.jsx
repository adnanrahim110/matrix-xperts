import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../../constant";
import SecHeader2 from "../ui/SecHeader2";
const Testimonials = () => {
  return (
    <>
      <section className="py-[60px] bg-gray-950">
        <div className="container">
          <div className="flex flex-wrap -mx-[15px]">
            <div className="w-full lg:w-1/2 lg:grow-0 lg:shrink-0 lg:basis-1/2 px-[15px]">
              <SecHeader2
                subtitle="Our clients simply"
                title="Love Our Work"
                text="To provide your business with customized and unique website development services at reasonable prices."
              />
            </div>
            <div className="w-full lg:w-1/2 lg:grow-0 lg:shrink-0 lg:basis-1/2 px-[15px]"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex flex-wrap">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500 }}
              loop={true}
              slidesPerView={2}
              spaceBetween={30}
              className="-mt-[50px]"
            >
              {testimonials.map((testi, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative border bg-white border-gray-300 py-[30px] pl-20 pr-5 rounded-sm shadow-[0_5px_5px_1px_#ececec] mb-[30px]">
                    <FaQuoteLeft className="absolute left-4 top-[30px] text-gray-900 text-5xl" />
                    <div className="mb-[30px]">
                      <p className="m-0 font-open-sans text-lg text-gray-500">
                        {testi.comment}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <img src={testi.img} alt={testi.name} className="block" />
                      <div className="ml-2.5">
                        <h6 className="text-base mb-[5px]">{testi.name}</h6>
                        {[...Array(testi.stars)].map((_, idx) => (
                          <FaStar
                            key={idx}
                            className="text-[#f8b820] inline-block"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
