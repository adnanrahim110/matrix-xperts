import { banners_item_packages, banners_packages } from "../assets";
import HeroSec from "../components/layouts/HeroSec";
import Pricing from "../components/layouts/Pricing";

const Packages = () => {
  return (
    <>
      <HeroSec
        banner_Img={banners_packages}
        banner_item_img={banners_item_packages}
        subtitle="We are Loved & Supported by our"
        title="Customer Base because <br /> of our High-End Work"
        text="We highly regard our customers' reviews as it helps us to do better in <br/> the future and apply any changes in our work processes if required"
      />
      <Pricing />
    </>
  );
};

export default Packages;
