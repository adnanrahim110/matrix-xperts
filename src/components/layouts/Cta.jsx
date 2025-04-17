import { banners_cta, icon } from "../../assets";
import BtnsList from "../ui/BtnsList";
import SecHeader from "../ui/SecHeader";

const Cta = () => {
  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${banners_cta})` }}
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
              <BtnsList textDark={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
