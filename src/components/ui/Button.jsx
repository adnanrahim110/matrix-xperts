import React from "react";

const Button = ({ className, href, onClick, children, type, btn2, btn3 }) => {
  let activeClass = "btn_1";
  if (btn2) {
    activeClass = "btn_2";
  } else if (btn3) {
    activeClass = "btn_3";
  }

  const combinedClassName = className
    ? `${className} ${activeClass}`
    : activeClass;

  const renderButton = () => (
    <button onClick={onClick} type={type} className={combinedClassName}>
      {btn2 && <span className="moving-circle"></span>}
      {children}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={combinedClassName}>
      {btn2 && <span className="moving-circle"></span>}
      {children}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
