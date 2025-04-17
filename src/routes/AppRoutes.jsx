import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import ComboPackages from "../pages/ComboPackages";
import Home from "../pages/Home";
import Packages from "../pages/Packages";
import Reviews from "../pages/Reviews";
import Service from "../pages/Service";
import Showcase from "../pages/Showcase";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/combo-packages" element={<ComboPackages />} />
      <Route path="/:serviceId" element={<Service />} />
      <Route path="/portfolio" element={<Showcase />} />
      <Route path="/reviews" element={<Reviews />} />
    </Routes>
  );
};

export default AppRoutes;
