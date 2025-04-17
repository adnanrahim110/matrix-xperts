import { banners_item_wd, banners_wd } from "../assets";
import HeroSec from "../components/layouts/HeroSec";

const Service = () => {
  return (
    <>
      <HeroSec
        hero2
        banner_Img={banners_wd}
        banner_item_img={banners_item_wd}
        subtitle="Customized"
        title="Web -Development-"
        text="Scalable, efficient, and customized web development solutions are just one tap away! Logo Aspire is one of the leading web development companies in San Jose. We offer customized web development solutions that are interactive, high-tech, and adaptive. Hire our team of experts today!"
      />
    </>
  );
};

export default Service;
