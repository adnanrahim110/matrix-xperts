import { banner_element_1, banner_home, logobar1 } from "../assets";
import Brands from "../components/layouts/Brands";
import Brands_2 from "../components/layouts/Brands_2";
import ComboPkgs from "../components/layouts/ComboPkgs";
import Cta from "../components/layouts/Cta";
import Cta2 from "../components/layouts/Cta2";
import FooterForm from "../components/layouts/FooterForm";
import Portfolio from "../components/layouts/Portfolio";
import Pricing from "../components/layouts/Pricing";
import ServiceCards from "../components/layouts/ServiceCards";
import Testimonials from "../components/layouts/Testimonials";
import WorkWithUs from "../components/layouts/WorkWithUs";
import Button from "../components/ui/Button";

const Home = () => {
  return (
    <>
      <section
        className={`max-2xl:pb-24 h-screen flex items-center relative bg-center bg-cover bg-no-repeat pt-16`}
        style={{ backgroundImage: `url(${banner_home})` }}
      >
        <div className="container">
          <div className="flex flex-wrap -mx-[15px]">
            <div className="lg:w-7/12 lg:grow-0 lg:shrink-0 lg:basis-7/12 px-[15px]">
              <div className="xl:mt-24">
                <h6 className="uppercase text-[22px] font-semibold text-gray-900 mb-0">
                  proficient design agency.
                </h6>
                <h1 className="text-[50px] mb-3.5 leading-[60px] relative font-extrabold 2xl:text-[68px] 2xl:leading-[84px] bg-gradient-to-r from-fountain-blue to-matisse text-transparent bg-clip-text">
                  Surpassing with <br /> the Modernization <br /> & Originality.
                </h1>
                <p className="text-2xl text-gray-800 mb-[50px] leading-[26px] max-2xl:text-[21px] max-2xl:mb-[30px] max-2xl:leading-[25px]">
                  Helping brands to digitally transform with a spice of
                  innovation and technical expertise.
                </p>
                <div className="flex items-center">
                  <Button className="mr-5" children="get started" btn2 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={banner_element_1}
          className="absolute right-0 z-[1] w-1/2 "
          alt=""
        />
      </section>
      <section className="py-3.5 border-y border-gray-200">
        <div className="container">
          <div className="flex items-center -mx-[15px] flex-wrap">
            <div className="w-full grow-0 shrink-0 basis-full">
              <div className="text-center flex items-center justify-center">
                <img src={logobar1} className="grayscale-100 w-full" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceCards />
      <Cta />
      <Portfolio />
      <Pricing />
      <Cta2 />
      <ComboPkgs />
      <Brands />
      <WorkWithUs />
      <Testimonials />
      <Brands_2 />
      <FooterForm />
    </>
  );
};

export default Home;
