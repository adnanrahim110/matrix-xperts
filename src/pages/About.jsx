import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  banners_about,
  banners_item_about,
  elements_11,
  elements_12,
  elements_14,
  elements_15,
  elements_16,
  elements_5,
  ms_1,
  ms_2,
  ms_3,
  ms_4,
  ms_5,
  ms_6,
  ms_7,
  ms_8,
} from "../assets";
import Brands from "../components/layouts/Brands";
import HeroSec from "../components/layouts/HeroSec";
import Testimonials from "../components/layouts/Testimonials";
import WorkWithUs from "../components/layouts/WorkWithUs";
import BtnsList from "../components/ui/BtnsList";
import Button from "../components/ui/Button";
import Elements from "../components/ui/Elements";
import SecHeader from "../components/ui/SecHeader";

const About = () => {
  return (
    <>
      <HeroSec
        banner_Img={banners_about}
        banner_item_img={banners_item_about}
        subtitle="A true unified"
        title="Digital marketing and <br /> Design agency"
        text="We believe that within each impossible, it is possible to try to get out. We are a team of creative thinkers and problem solvers dedicated to pushing the limits of what is possible by helping brands achieve their goals."
      />
      <section className="relative border-b border-gray-[#cccccc] overflow-hidden py-20">
        <div className="container">
          <div className="flex flex-wrap -mx-[15px]">
            <div className="w-full relative lg:max-w-full lg:grow-0 lg:shrink-0 lg:basis-full px-[15px]">
              <SecHeader
                subtitle="We have a niche for"
                title="Creativity and determination guiding you <br/> to the ultimate digital success"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-[15px] items-center">
            <div className="w-full relative lg:max-w-4/12 lg:grow-0 lg:shrink-0 lg:basis-4/12 px-[15px]">
              <div className="bg-white py-[30px] px-[25px] border-2 border-[#eeeeee] shadow-[0_0_20px_5px_#eeeeee] relative">
                <p className="m-0 text-lg text-gray-900 font-open-sans">
                  The digital services we offer are extensive, but at each stage
                  our work is driven by one main objective: To drive significant
                  amount of traffic to your Brand.
                </p>
              </div>
            </div>
            <div className="w-full relative lg:max-w-8/12 lg:grow-0 lg:shrink-0 lg:basis-8/12 px-[15px]">
              <div>
                <p className="text-base font-open-sans m-0 leading-[1.8] text-gray-500">
                  We provide comprehensive and thoughtful digital solutions for
                  individuals and businesses that have proven effective for
                  them. With an experienced team of professionals at your
                  service and a high-level marketing plan, success will be
                  knocking your door!
                </p>
                <ul className="mb-5">
                  <li className="align-top inline-block text-white mr-[5px]">
                    <button className="font-open-sans border-2 border-[#cccccc] text-black text-base py-[13px] px-[46px] rounded-[35px] shadow-[0_11px_15px_1px_#e5e5e5] hover:shadow-[0_-10px_15px_1px_#e5e5e5]">
                      Sign up now to{" "}
                      <span className="text-primary font-bold">
                        Avail 70% Discount
                      </span>
                    </button>
                  </li>
                  <li className="inline-block text-white align-top">
                    <Button children="Chat Now" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {[
          { cls: "top-0 right-0 -z-[1]", img: elements_16 },
          { cls: "top-5 left-[90px] min-xl:-left-10", img: elements_14 },
          { cls: "max-w-[14%] left-10 bottom-[50px]", img: elements_11 },
          { cls: "bottom-0 -left-10 -z-[1]", img: elements_15 },
          { cls: "bottom-16 right-8 -z-[1]", img: elements_5 },
        ].map((el, idx) => (
          <Elements
            key={idx}
            className={el.cls}
            img={el.img}
            animate={idx !== 4 ? false : true}
          />
        ))}
      </section>
      <section className="relative py-[100px_70px] overflow-hidden">
        <div className="absolute top-0 -left-[60px] -z-[1] min-xl:-left-[200px]">
          <img src={elements_12} alt="" />
        </div>
        <div className="container">
          <div className="flex flex-wrap -mx-[15px]">
            <div className="w-full relative lg:max-w-5/12 lg:grow-0 lg:shrink-0 lg:basis-5/12 px-[15px]"></div>
            <div className="w-full relative lg:max-w-7/12 lg:grow-0 lg:shrink-0 lg:basis-7/12 px-[15px]">
              <div>
                <div className="absolute text-[280px] leading-[180px] font-black -top-2.5 -left-[30px] text-[#c7c7c7] opacity-20 uppercase -z-[1]">
                  facts
                </div>
                <h5 className="text-[30px] font-bold text-gray-900">
                  Satisfying Our Clients
                </h5>
                <p className="text-lg mb-[50px] text-gray-500 font-open-sans">
                  We work with the conviction that our clients define us, which
                  is why we ensure that what our clients get helps them realize
                  their potential and reach milestones as they grow as a
                  business.
                </p>
                <ul className="mb-[50px] flex items-center gap-10">
                  {[
                    { color: "#f30f95", count: "4000+", title: "Project Done" },
                    {
                      color: "#ffb400",
                      count: "3800+",
                      title: "Happy Clients",
                    },
                    { color: "#13aee1", count: "94.3%", title: "Success Rate" },
                  ].map((el, idx) => (
                    <li key={idx} className="relative pl-10 text-white">
                      <span
                        className="absolute left-0 top-[5px] rounded-full w-[30px] h-[30px]"
                        style={{ backgroundColor: el.color }}
                      ></span>
                      <h6 className="text-[42px] text-black font-black m-0">
                        {el.count}
                      </h6>
                      <p className="m-0 text-lg text-gray-500 font-open-sans">
                        {el.title}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="border-b border-[#cccccc] mb-[100px] pb-[100px]">
                  <BtnsList />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-[15px] justify-center">
            <div className="w-full relative lg:max-w-5/12 lg:grow-0 lg:shrink-0 lg:basis-5/12 px-[15px]">
              <div>
                <h5 className="text-[30px] font-bold text-gray-900 pl-10 mb-5 relative uppercase">
                  <span className="absolute w-[30px] h-[30px] rounded-full left-0 top-0.5 bg-primary"></span>
                  Our mission
                </h5>
                <p className="text-base text-gray-500 font-open-sans m-0">
                  We work with the mission of delivering breakthrough digital
                  solutions to businesses around the world, while paving the way
                  for socially responsible businesses.
                </p>
              </div>
            </div>
            <div className="w-full relative lg:max-w-6/12 lg:grow-0 lg:shrink-0 lg:basis-6/12 px-[15px]">
              <div>
                <h5 className="text-[30px] font-bold text-gray-900 pl-10 mb-5 relative uppercase">
                  <span className="absolute w-[30px] h-[30px] rounded-full left-0 top-0.5 bg-primary"></span>
                  Our vision
                </h5>
                <p className="text-base text-gray-500 font-open-sans m-0">
                  Diversify the world of tech and become a leader in the digital
                  community, while creating the best product and using
                  businesses to inspire entrepreneurs with the power of
                  technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[60px]">
        <div className="container">
          <div className="flex flex-wrap -mx-[15px]">
            <div className="w-full relative lg:max-w-full lg:grow-0 lg:shrink-0 lg:basis-full px-[15px]">
              <SecHeader
                subtitle="Logo Aspire Services"
                title="A wide variety of premium services we offer"
                text="We are one of the leading digital design firms concerned with meeting the needs of their clients. Our work is impeccable and <br/> incomparable. We enhance your business efficiency and results through our innovative and fantastic work ethic"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-[15px]">
            <div className="w-full lg:max-w-full lg:grow-0 lg:shrink-0 lg:basis-full px-[15px]">
              <Swiper
                modules={[Pagination, Autoplay]}
                loop
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={4}
                className="servSlider"
              >
                {[
                  { title: "brand strategy", img: ms_1 },
                  { title: "digital development", img: ms_2 },
                  { title: "technology consulting", img: ms_3 },
                  { title: "identity design", img: ms_4 },
                  { title: "content management", img: ms_5 },
                  { title: "interface design", img: ms_6 },
                  { title: "digital strategy", img: ms_7 },
                  { title: "web & mobile applications", img: ms_8 },
                ].map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <figure className="relative m-0">
                      <img src={item.img} alt={item.title} />
                      <figcaption className="absolute bottom-[50px] left-5 block">
                        <h4 className="text-white text-xl m-0 uppercase font-semibold">
                          {item.title.split(" ").map((word, i, arr) => (
                            <React.Fragment key={i}>
                              {word}
                              {i < arr.length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </h4>
                      </figcaption>
                    </figure>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <Brands />
      <WorkWithUs />
      <Testimonials />
    </>
  );
};

export default About;
