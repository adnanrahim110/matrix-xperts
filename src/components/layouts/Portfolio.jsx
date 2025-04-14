import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { sprite } from "../../assets";
import { number, portfolioList } from "../../constant";
import Button from "../ui/Button";
import FilterNav from "../ui/FilterNav";
import SecHeader from "../ui/SecHeader";

const Portfolio = () => {
  const [selectedServiceId, setSelectedServiceId] = useState(1);
  const [filterType, setFilterType] = useState("categoryWise");
  const [selectedSubItemId, setSelectedSubItemId] = useState(null);
  const detailRef = useRef(null);

  const selectedService = portfolioList.find(
    (item) => item.id === selectedServiceId
  );
  const hasFilters =
    selectedService &&
    selectedService.categoryWise &&
    selectedService.industryWise;

  let subItems = [];
  if (selectedService) {
    if (hasFilters) {
      subItems = selectedService[filterType]?.subItems || [];
    } else if (selectedService.subItems) {
      subItems = selectedService.subItems;
    }
  }
  useEffect(() => {
    if (subItems && subItems.length > 0) {
      setSelectedSubItemId(subItems[0].id);
    } else {
      setSelectedSubItemId(null);
    }
  }, [selectedServiceId, filterType, subItems]);

  useEffect(() => {
    if (detailRef.current) {
      gsap.fromTo(
        detailRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [selectedServiceId]);

  let projectsToShow = [];
  if (selectedService) {
    if (selectedService.projects) {
      projectsToShow = selectedService.projects;
    } else if (subItems && subItems.length > 0) {
      const selectedSubItem = subItems.find(
        (sub) => sub.id === selectedSubItemId
      );
      projectsToShow = selectedSubItem ? selectedSubItem.projects : [];
    }
  }

  return (
    <section className="pt-24 relative overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap -mx-[15px]">
          <div className="w-full lg:grow-0 lg:shrink-0 lg:basis-full px-[15px]">
            <SecHeader
              subtitle="Goal and Client-Oriented Web Designs"
              title="Together With Focused Marketing Methods"
              text="We create brands with impeccable logo and design knowledge incorporated with terms that <br /> attract your target audience."
            />
          </div>
          <div className="w-full lg:grow-0 lg:shrink-0 lg:basis-full px-[15px]">
            <FilterNav
              selectedId={selectedServiceId}
              setSelectedId={(id) => {
                setSelectedServiceId(id);
                setSelectedSubItemId(null);
              }}
              items={portfolioList}
            />
          </div>
        </div>
      </div>
      <div className="px-[15px] relative mx-auto">
        <div className="max-w-full relative w-full grow-0 shrink-0 basis-full">
          {selectedService && hasFilters && (
            <div className="w-full text-center mb-[30px]">
              <div className="inline-flex items-center rounded-[40px] p-[15px] shadow-[0_5px_20px_10px_#dadadafc] bg-gradient-to-r from-fountain-blue to-matisse">
                <h2 className="py-[5px] px-[15px] text-base font-semibold text-white m-0">
                  Category Wise
                </h2>
                <button
                  className={`${
                    filterType === "categoryWise" ? "bg-primary" : "bg-gray-900"
                  } rounded-[34px] transition-all duration-[0.4s] w-11 relative h-2.5 top-[3px] mb-2`}
                  onClick={() =>
                    setFilterType(
                      filterType === "categoryWise"
                        ? "industryWise"
                        : "categoryWise"
                    )
                  }
                >
                  <span
                    className={`absolute h-[18px] w-[18px] left-0 ${
                      filterType === "categoryWise"
                        ? "translate-x-0"
                        : "translate-x-[26px]"
                    } -bottom-1 bg-white transition-all duration-[0.4s] rounded-full`}
                  ></span>
                </button>
                <h2 className="py-[5px] px-[15px] text-base font-semibold text-white m-0">
                  Industry Wise
                </h2>
              </div>
            </div>
          )}
          <div className="relative">
            {subItems && subItems.length > 0 && (
              <div className={`text-center mb-[22px] relative`}>
                <ul className="flex flex-wrap justify-center items-center gap-y-2 gap-x-4">
                  {subItems.map((item) => (
                    <li
                      className="px-5"
                      key={item.id}
                      onClick={() => {
                        setSelectedSubItemId(item.id);
                      }}
                    >
                      <button
                        className={`text-gray-900 text-sm relative py-1 before:absolute before:w-0 before:transition-all before:duration-500 before:ease-in-out ${
                          selectedSubItemId === item.id
                            ? "before:left-0 before:bottom-0 before:bg-primary before:h-0.5 before:w-full text-primary"
                            : "hover:before:w-full hover:before:left-0 hover:before:bottom-0 hover:before:bg-primary-700 hover:before:h-0.5 hover:text-primary-700"
                        }`}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div ref={detailRef} className="w-full relative">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 -mx-[15px] w-full gap-x-4">
                  {projectsToShow && projectsToShow.length > 0 ? (
                    projectsToShow.map((project, index) => (
                      <div key={index} className="w-full relative">
                        <div className="relative mb-6 overflow-hidden w-full">
                          <img src={project} alt="" />
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No projects to display.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 border-b border-gray-300">
        <div className="container">
          <div className="flex flex-wrap -mx-[15px]">
            <div className="w-full px-[15px]">
              <div className="text-center">
                <ul className="flex items-center justify-center gap-9">
                  <li className="relative">
                    <span
                      className={`absolute w-[21px] h-[59px] right-0 -top-1/5 bg-[0_0]`}
                      style={{ backgroundImage: `url(${sprite})` }}
                    ></span>
                    <a
                      href={number[1]}
                      className="pr-[30px] text-[22px] font-bold text-gray-900"
                    >
                      <span className="block text-sm text-right leading-[0.9] font-medium">
                        Call Us Now
                      </span>
                      {number[0]}
                    </a>
                  </li>
                  <li className="relative">
                    <Button btn2 children="Request a Quote" />
                  </li>
                  <li className="relative">
                    <span
                      className="absolute bg-[-33px_-7px] w-[66px] h-[52px]"
                      style={{ backgroundImage: `url(${sprite})` }}
                    ></span>
                    <button className="pl-[75px] text-[22px] font-bold text-gray-900">
                      <span className="block text-sm text-left leading-[0.9] font-medium">
                        24/7 Support
                      </span>
                      Live Chat
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
