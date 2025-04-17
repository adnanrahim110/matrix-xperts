import React from "react";

const Elements = ({ className, img, animate = true, ...props }) => {
  return (
    <div
      className={`absolute ${animate ? "animate-rotate" : ""} ${
        className || ""
      }`}
      {...props}
    >
      <img src={img} alt="" />
    </div>
  );
};

export default Elements;
