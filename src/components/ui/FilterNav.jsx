import React from "react";

const FilterNav = ({ selectedId, setSelectedId, items, className }) => {
  return (
    <div className={`text-center mb-[30px] ${className || ""}`}>
      <ul className="flex flex-wrap justify-center items-center gap-y-2 gap-x-6">
        {items.map((item) => (
          <li
            className="px-5"
            key={item.id}
            onClick={() => {
              setSelectedId(item.id);
            }}
          >
            <button
              className={`text-gray-900 text-sm relative py-1 before:absolute before:w-0 before:transition-all before:duration-500 before:ease-in-out ${
                selectedId === item.id
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
  );
};

export default FilterNav;
