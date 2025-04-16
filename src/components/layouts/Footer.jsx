import React from "react";
import { footer_bg, logo_w } from "../../assets";
import { socialLinks } from "../../constant";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footer_bg})` }}
    >
      <div className="pb-10 pt-[60px]">
        <div className="container">
          <div className="flex flex-wrap -mx-[15px]">
            <div className="w-full relative lg:max-w-3/12 lg:grow-0 lg:shrink-0 lg:basis-3/12 px-[15px]">
              <div>
                <img src={logo_w} className="max-w-[60%]" alt="Logo Aspire" />
                <p className="text-sm text-gray-500 mt-[30px] mb-5">
                  Full-stack Web, Mobile Design and Development Company.
                </p>
                <ul className="flex gap-x-2.5 gap-y-[5px]">
                  {socialLinks.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <li>
                        <a
                          href={social.url}
                          className="text-gray-500 text-sm border border-white w-[37px] h-[37px] rounded-full flex items-center justify-center hover:bg-white"
                        >
                          <Icon className="text-primary" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="w-full relative lg:max-w-9/12 lg:grow-0 lg:shrink-0 lg:basis-9/12 px-[15px]">
              <div className="flex flex-wrap -mx-[15px]"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
