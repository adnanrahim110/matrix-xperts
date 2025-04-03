import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { portfolioList } from "../../constant";
import FilterNav from "../ui/FilterNav";
import SecHeader from "../ui/SecHeader";

const Portfolio = () => {
  const [selectedServiceId, setSelectedServiceId] = useState(1);
  const [filterType, setFilterType] = useState("categoryWise"); // "categoryWise" or "industryWise"
  const [selectedSubItemId, setSelectedSubItemId] = useState(null);
  const detailRef = useRef(null);

  // Find the selected service from portfolioList
  const selectedService = portfolioList.find(
    (item) => item.id === selectedServiceId
  );

  // Determine if this service has both categoryWise and industryWise
  const hasFilters =
    selectedService &&
    selectedService.categoryWise &&
    selectedService.industryWise;

  // Determine subItems based on the available data.
  // If the service has category/industry filters, use the subItems of the current filterType.
  // Otherwise, check if it has a subItems property directly.
  let subItems = [];
  if (selectedService) {
    if (hasFilters) {
      subItems = selectedService[filterType]?.subItems || [];
    } else if (selectedService.subItems) {
      subItems = selectedService.subItems;
    }
  }

  // Auto-select the first sub-item if available and none is selected
  useEffect(() => {
    if (subItems && subItems.length > 0) {
      setSelectedSubItemId(subItems[0].id);
    } else {
      setSelectedSubItemId(null);
    }
  }, [selectedServiceId, filterType, subItems]);

  // Animate the projects area whenever the selected service changes
  useEffect(() => {
    if (detailRef.current) {
      gsap.fromTo(
        detailRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [selectedServiceId]);

  // Determine the projects to display:
  // - If the service has a direct projects array, use that.
  // - Otherwise, if subItems exist, find the selected sub-item and use its projects.
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
    </section>
  );
};

export default Portfolio;
