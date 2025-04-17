import { FaStar } from "react-icons/fa6";
import {
  banners_reviews,
  elements_11,
  elements_14,
  elements_15,
  elements_16,
  elements_5,
} from "../assets";
import HeroSec from "../components/layouts/HeroSec";
import Elements from "../components/ui/Elements";
import SecHeader from "../components/ui/SecHeader";
import { detailedTestimonials } from "../constant";

const Reviews = () => {
  return (
    <>
      <HeroSec
        banner_Img={banners_reviews}
        subtitle="Clients Love Us"
        title="We listen to our <br /> client’s feedback & improvise."
        text="We are a team of creative thinkers and problem solvers dedicated to pushing the limits of what is possible by helping brands achieve their goals."
      />
      <section className="relative overflow-hidden py-[60px]">
        <div className="container">
          <div className="flex flex-wrap -mx-[15px]">
            <div className="w-full relative lg:max-w-full lg:grow-0 lg:shrink-0 lg:basis-full px-[15px]">
              <SecHeader
                subtitle="This Is What Industry’s"
                title="Top Clientele Sounds Like"
                text="On one hand, we strive to outperform excellence in our processes and business behaviors for unceasing success, while on the other <br /> hand, we place customer satisfaction as the utmost priority. our main aim is to foster a culture that not only focuses on providing <br /> innovative solutions to present technology ecosystem but also reinvent the future."
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-[15px]">
            {detailedTestimonials.map((testi, idx) => (
              <div
                key={idx}
                className="w-full relative lg:max-w-4/12 lg:grow-0 lg:shrink-0 lg:basis-4/12 px-[15px]"
              >
                <div className="bg-white border-2 border-gray-200 rounded-lg py-[25px] px-5 mb-8 relative z-[1] ease-in-out transition-all duration-[400ms]">
                  <div className="mb-2.5 pb-5 border-b border-[#cccccc]">
                    <img src={testi.img} className="block" alt={testi.name} />
                    <h5 className="text-2xl text-gray-900 font-semibold mt-5 mb-[5px]">
                      {testi.heading}
                    </h5>
                    <p className="text-base font-open-sans text-gray-500 m-0">
                      {testi.text}
                    </p>
                  </div>
                  <div className="mb-5 pb-[30px] border-b border-[#cccccc]">
                    <p className="font-open-sans m-0 text-gray-500 text-base min-h-32">
                      {testi.comment}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-medium text-[#282828] mb-[5px]">
                      {testi.name}
                    </h4>
                    <ul className="flex items-center gap-4">
                      <li className="text-base text-gray-900">{testi.title}</li>
                      <li className="inline-flex items-center gap-0.5">
                        {[...Array(testi.stars)].map((_, idx) => (
                          <FaStar key={idx} className="text-[#f38010]" />
                        ))}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {[
          { cls: "top-0 right-0 -z-[1]", img: elements_16 },
          { cls: "top-5 left-[90px] min-xl:-left-10", img: elements_14 },
          { cls: "left-10 bottom-[50px] max-w-[14%]", img: elements_11 },
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
    </>
  );
};

export default Reviews;
