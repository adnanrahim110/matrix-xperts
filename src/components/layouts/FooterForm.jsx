import IntlTelInput from "intl-tel-input/reactWithUtils";
import "intl-tel-input/styles";
import { Link } from "react-router-dom";
import { footer_form_after, footer_form_before } from "../../assets";
import { email, number } from "../../constant";
import Button from "../ui/Button";

const FooterForm = () => {
  return (
    <section className="py-[92px] relative before:absolute before:h-[198px] before:top-0 before:w-full before:bg-gray-100">
      <span className="flex relative">
        <span
          className="absolute bg-contain w-[353px] h-[457px] bg-no-repeat -left-10"
          style={{ backgroundImage: `url(${footer_form_before})` }}
        ></span>
        <span
          className="absolute bg-contain w-[589px] h-[542px] bg-no-repeat -right-[110px] min-xl:-right-[250px]"
          style={{ backgroundImage: `url(${footer_form_after})` }}
        ></span>
      </span>
      <div className="container">
        <div className="flex flex-wrap -mx-[15px]">
          <div className="w-full relative md:max-w-6/12 md:basis-6/12 lg:max-w-5/12 md:grow-0 md:shrink-0 lg:basis-5/12 px-[15px]">
            <div className="bg-gradient-to-t from-[#111111] from-0% to-[#0b0b0b] to-100% h-[410px] p-[85px_60px_60px_40px] mt-3">
              <div className="absolute bg-white text-gray-900 max-w-[280px] p-[25px] bottom-[calc(100%_-_30px)] shadow-[-2.232px_31.922px_43px_0_rgba(0,0,0,0.14)] after:absolute after:top-full after:right-0 after:w-0 after:h-0 after:border-t-[25px] after:border-t-white after:border-l-[25px] after:border-l-transparent">
                <p className="text-gray-900 text-[32px] m-0 font-bold leading-10">
                  Let creativity take over
                </p>
              </div>
              <p className="text-lg font-semibold mb-[30px] text-[#ffffff7d]">
                Ask us anything, we have the friendliest customer service folks
              </p>
              <a
                href={number[1]}
                className="block mb-2.5 text-2xl font-semibold text-white"
              >
                {number[0]}
              </a>
              <a
                href={email[1]}
                className="block mb-2.5 text-2xl font-semibold text-white"
              >
                {email[0]}
              </a>
              <button className="font-semibold mt-2.5 py-3 px-6 bg-white rounded-sm text-gray-900 font-open-sans">
                <strong className="text-primary font-semibold mr-1">
                  Chat now
                </strong>
                to avail this offer
              </button>
            </div>
          </div>
          <div className="w-full md:max-w-6/12 md:basis-6/12 lg:max-w-5/12 md:grow-0 md:shrink-0 lg:basis-5/12 px-[15px]">
            <div>
              <h3 className="font-bold text-[50px] text-primary-700  mb-2">
                Let's get started!
              </h3>
              <p className="text-[15px] font-normal text-gray-500">
                Contact us by using the form below or send us an email.
              </p>
              <div className="mt-[50px]">
                <form className="footer_form">
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      minLength={2}
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      minLength={2}
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="mb-4">
                    <IntlTelInput
                      containerClassName="intl-tel-input ff_int"
                      inputClassName="pl-[84px] w-full"
                      fieldId="phone"
                      initOptions={{
                        initialCountry: "us",
                      }}
                      separateDialCode={true}
                    />
                  </div>
                  <div>
                    <p className="mt-5 text-[10px] text-black font-normal">
                      By clicking "Submit," you confirm that you agree to Logo
                      Aspire <Link className="text-black">Privacy Policy</Link>
                    </p>
                  </div>
                  <div className="mb-4">
                    <Button btn2 children="send now" type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterForm;
