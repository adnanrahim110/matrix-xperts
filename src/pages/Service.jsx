import { FaCaretRight } from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";
import {
  banners_item_wd,
  banners_wd,
  services_wd_1,
  services_wd_inner_brand_list,
} from "../assets";
import Cta2 from "../components/layouts/Cta2";
import HeroSec from "../components/layouts/HeroSec";
import Testimonials from "../components/layouts/Testimonials";

const Service = () => {
  return (
    <>
      <HeroSec
        hero2
        banner_Img={banners_wd}
        banner_item_img={banners_item_wd}
        subtitle="Customized"
        title="Web -Development-"
        text="Scalable, efficient, and customized web development solutions are just one tap away! Logo Aspire is one of the leading web development companies in San Jose. We offer customized web development solutions that are interactive, high-tech, and adaptive. Hire our team of experts today!"
      />
      <section className="text-center py-[26px] bg-[#ededed]">
        <div className="container">
          <div className="flex flex-wrap -mx-[15px]">
            <div className="w-full lg:max-w-full lg:grow-0 lg:shrink-0 lg:basis-full px-[15px]">
              <div>
                <img src={services_wd_inner_brand_list} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex flex-wrap items-center -mx-[15px]">
            <div className="w-full relative lg:max-w-1/2 lg:grow-0 lg:shrink-0 lg:basis-1/2 px-[15px]">
              <div>
                <img src={services_wd_1} alt="" />
              </div>
            </div>
            <div className="w-full relative lg:max-w-1/2 lg:grow-0 lg:shrink-0 lg:basis-1/2 px-[15px]">
              <div>
                <div className="mb-[30px]">
                  <h2 className="text-gray-900 text-[33px] font-bold mb-[25px]">
                    Customized Web Development{" "}
                    <span className="text-primary"> Services in USA </span>
                  </h2>
                  <p className="text-gray-900 text-[15px] m-0 leading-[1.8] font-open-sans">
                    Our dedicated teams of professional web designers and
                    developers augment an innovative & conversion-driven site on
                    WordPress. Aspire Logo holds the first spot when it comes to
                    web development companies in San Jose. We turn your
                    visionary idea into a scalable, adaptive, and highly
                    compatible website. Custom web development services and
                    engaging web design can be a game-changer for your business.
                    Therefore, reach out today and hire our team of experts. We
                    integrate high-tech methods to make your business shine and
                    help you achieve your goals in the most efficient way
                    possible.
                  </p>
                </div>
                <div>
                  <h2 className="text-base to-gray-900 font-semibold mb-6 font-open-sans">
                    Why do you need professional web development services?
                  </h2>
                  <p>We bring forward solutions that are:</p>
                  <ul className="flex flex-wrap mb-2 justify-between">
                    <li className="w-1/2 text-base text-gray-900 font-open-sans mb-3.5 relative pl-[30px] align-top">
                      <FaCaretRight className="text-primary absolute left-0 top-[5px] text-lg" />
                      Powerful and Versatile
                    </li>
                    <li className="w-1/2 text-base text-gray-900 font-open-sans mb-3.5 relative pl-[30px] align-top">
                      <FaCaretRight className="text-primary absolute left-0 top-[5px] text-lg" />
                      Powerful and Versatile
                    </li>
                    <li className="w-1/2 text-base text-gray-900 font-open-sans mb-3.5 relative pl-[30px] align-top">
                      <FaCaretRight className="text-primary absolute left-0 top-[5px] text-lg" />
                      Powerful and Versatile
                    </li>
                    <li className="w-1/2 text-base text-gray-900 font-open-sans mb-3.5 relative pl-[30px] align-top">
                      <FaCaretRight className="text-primary absolute left-0 top-[5px] text-lg" />
                      Powerful and Versatile
                    </li>
                    <li className="w-1/2 text-base text-gray-900 font-open-sans mb-3.5 relative pl-[30px] align-top">
                      <FaCaretRight className="text-primary absolute left-0 top-[5px] text-lg" />
                      Powerful and Versatile
                    </li>
                  </ul>
                  <ul className="mb-5 flex items-center gap-2">
                    <li>
                      <button className="font-open-sans border-2 border-[#cccccc] text-black text-base p-[13px_46px] shadow-[0px_11px_15px_1px_#e5e5e5] rounded-[35px]">
                        Register & Get{" "}
                        <span className="text-primary font-bold">
                          {" "}
                          Flat 70% Discount
                        </span>
                      </button>
                    </li>
                    <li>
                      <button className="text-base p-[13px_46px] rounded-[35px] shadow-[0px_11px_15px_1px_#e5e5e5] bg-matisse-950 text-white">
                        <IoLogoWechat className="mr-1.5 inline-block" />
                        Let's Chat
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta2 />
      <Testimonials />
    </>
  );
};

export default Service;
