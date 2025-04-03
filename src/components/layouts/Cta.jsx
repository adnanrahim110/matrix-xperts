import { FaPhone } from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";
import { bg_cta, icon } from "../../assets";
import { number } from "../../constant";
import Button from "../ui/Button";
import SecHeader from "../ui/SecHeader";

const Cta = () => {
  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg_cta})` }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 -mx-[15px] items-center">
          <div className="px-5" style={{ position: "unset" }}>
            <img src={icon} alt="" className="relative z-[4] scale-[1.2]" />
          </div>
          <div className="px-5">
            <SecHeader
              className="w-full"
              subtitle="Endorse Your Business"
              title="With Influential Client Experience-Driven Websites."
              text=" The creative team at Logo Aspire knows how crucial a website presence in the digital world is. We believe in providing our customers with premium website solutions, therefore, we work closely with our clients to understand their requirements, deliver timely results, and boost up your business proficiency."
            />
            <div>
              <ul className="inline-flex gap-3.5 items-center">
                <li className="align-top relative">
                  <Button btn2 children="get in touch" />
                </li>
                <li className="pl-9 border-l border-gray-300 align-top relative">
                  <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 bottom-0 text-xl flex items-center rotate-45 text-primary" />
                  <a
                    href={number[1]}
                    className="font-semibold text-base text-gray-500 uppercase"
                  >
                    <span className="block text-[10px] font-semibold">
                      Call us At
                    </span>
                    {number[0]}
                  </a>
                </li>
                <li className="pl-5 border-l border-gray-300 align-top relative">
                  <button className="font-semibold text-base text-gray-500 uppercase">
                    <span className="block text-[10px] font-semibold">
                      click here to{" "}
                      <IoLogoWechat className="text-primary ml-1 inline" />
                    </span>
                    Live Chat
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
