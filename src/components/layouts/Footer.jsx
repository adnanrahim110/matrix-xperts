import React from "react";
import { FaCaretRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { banners_footer_bg, logo_w } from "../../assets";
import { footerNavigation, socialLinks } from "../../constant";
import FooterForm from "./FooterForm";

const Footer = () => {
  return (
    <>
      <FooterForm />
      <footer
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${banners_footer_bg})` }}
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
                        <li key={idx}>
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
                <div className="flex flex-wrap -mx-[15px]">
                  {footerNavigation.map((ftnav, idx) => (
                    <div
                      key={idx}
                      className="w-full relative lg:max-w-3/12 lg:grow-0 lg:shrink-0 lg:basis-3/12 px-[15px] last:p-0"
                    >
                      <div>
                        <h4 className="text-lg text-white mb-[25px]">
                          {ftnav.title}
                        </h4>
                        <ul>
                          {ftnav.children.map((child, idx) => {
                            const Wrapper = child.url ? Link : "span";

                            return (
                              <li
                                key={`child-${idx}`}
                                className="mr-2.5 mb-[5px]"
                              >
                                <Wrapper
                                  {...(child.url && { to: child.url })}
                                  className="text-gray-500 text-sm flex gap-[5px] justify-start "
                                >
                                  <span>
                                    <FaCaretRight className="text-primary mt-[3px] block w-3.5" />
                                  </span>
                                  <span>{child.title}</span>
                                </Wrapper>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-600 py-2.5 bg-[#212121]">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center -mx-[15px]">
              <div className="w-full relative lg:max-w-8/12 lg:grow-0 lg:shrink-0 lg:basis-8/12 px-[15px]">
                <div className="text-center">
                  <p className="m-0 text-sm text-gray-400 inline">
                    Copyright © {new Date().getFullYear()} Logo Aspire All
                    Rights Reserved.
                  </p>
                  <ul className="inline-flex gap-1.5 items-center ml-2.5">
                    {[
                      { title: "Privacy Policy", url: "/privacy-policy" },
                      {
                        title: "Terms & Conditions",
                        url: "/terms-and-conditions",
                      },
                      { title: "Cookies Policy", url: "/cookies-policy" },
                    ].map((link, idx) => (
                      <li key={idx} className="inline-block text-white">
                        <Link to={link.url} className="text-sm text-white">
                          {link.title}
                        </Link>
                        {idx < 2 && <span className="text-white"> | </span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-full relative lg:max-w-full lg:grow-0 lg:shrink-0 lg:basis-full px-[15px]">
                <p className="text-[13px] text-center text-gray-200 leading-5 mt-[15px] font-medium">
                  Disclaimer: <br />
                  Logo, portfolio, images and content are sole property of Logo
                  Aspire. All third party company names, brand names, trademarks
                  displayed on this website are the property of their respective
                  owners. Furthermore, Logo Aspire has no influence over the
                  third party material that is being displayed on the website.
                  Therefore, we are also not responsible for any resemblance
                  with any other material on the web. These portfolios and case
                  studies are actual but exemplary (for better understanding);
                  the actual names, designs, functionality, content and
                  stats/facts may differ from the actual projects. This is due
                  to the strict NDA policy that Logo Aspire adheres to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
