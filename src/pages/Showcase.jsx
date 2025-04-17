import { banners_item_portfolio, banners_portfolio } from "../assets";
import HeroSec from "../components/layouts/HeroSec";
import Portfolio from "../components/layouts/Portfolio";

const Showcase = () => {
  return (
    <>
      <HeroSec
        banner_Img={banners_portfolio}
        banner_item_img={banners_item_portfolio}
        subtitle="Serving Clients Worldwide"
        title="At Logo Aspire, <br /> Everything Is Possible"
        text="We are a team of creative thinkers and problem solvers dedicated <br/> to expanding the limits of what is possible by helping brands <br /> achieve their goals."
      />
      <Portfolio elements={true} />
    </>
  );
};

export default Showcase;
