import React from "react";

const Elements = ({ className, img }) => {
  return (
    <div className={`absolute animate-rotate ${className || ""}`}>
      <img src={img} alt="" />
    </div>
  );
};

export default Elements;
