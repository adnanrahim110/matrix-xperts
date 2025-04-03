import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { elements_3, elements_4, elements_5 } from "../../assets";
import { categories } from "../../constant";
import Elements from "../ui/Elements";
import FilterNav from "../ui/FilterNav";
import SecHeader from "../ui/SecHeader";

const ServiceCards = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [active, setActive] = useState(0);
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
    <section className="relative py-[60px]">
      {[
        { cls: "left-4 top-14 xl:-left-[30px]", img: elements_3 },
        { cls: "right-8 top-14", img: elements_4 },
        { cls: "bottom-16 left-8", img: elements_4 },
        { cls: "bottom-16 right-8 -z-[1]", img: elements_5 },
      ].map((el, idx) => (
        <Elements key={idx} className={el.cls} img={el.img} />
      ))}
      <div className="container">
        <div className="flex flex-wrap -mx-[15px]">
          <div className="w-full lg:basis-full px-[15px]">
            <SecHeader
              subtitle="Our unparalleled websites"
              title="To Build Concrete Digital Existence."
              text="Our thorough website development process starts by comprehending your business aims and the targeted audience so that we can design"
            />
          </div>
          <div className="w-full lg:basis-full px-[15px]">
            <FilterNav
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              items={categories}
            />
          </div>
          <div className="w-full lg:basis-full px-[15px]">
            <div>
              <ul
                className="text-center flex flex-wrap justify-center gap-3.5 px-3 mb-5"
                ref={detailRef}
              >
                {categories
                  .find((cat) => cat.id === selectedId)
                  .detail.map((dl, idx) => (
                    <li
                      key={idx}
                      className={`align-middle w-[23.5%]`}
                      onMouseEnter={() => setActive(idx)}
                      onMouseLeave={() => setActive(0)}
                    >
                      <Link className="block">
                        <div
                          className={`flex justify-center flex-col items-center bg-white h-[221px] border border-gray-300 transition-all duration-700 ease-in-out cursor-pointer ${
                            active === idx
                              ? "shadow-[0px_29px_62px_rgba(0,0,0,0.19)]"
                              : ""
                          } *:transition-all *:duration-[0.4] *:ease-in-out`}
                        >
                          <img src={dl.img} alt={dl.title} />
                          <h4 className="text-lg font-medium m-0 text-center pt-7">
                            {dl.title}
                          </h4>
                        </div>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
