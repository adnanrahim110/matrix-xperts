import React from "react";

const SecHeader2 = ({ subtitle, title, text }) => {
  return (
    <div className="mb-[30px]">
      <h6 className="text-primary text-2xl m-0 font-medium">{subtitle}</h6>
      <h3 className="text-white font-semibold text-[50px]">{title}</h3>
      <p className="text-lg text-white m-0">{text}</p>
    </div>
  );
};

export default SecHeader2;
