import OpenAtTop from "./components/common/OpenAtTop";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";
import AppRoutes from "./routes/AppRoutes";

const AppContent = () => {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main>
        <AppRoutes />
      </main>

      <OpenAtTop />
      <Footer />
    </>
  );
};

export default AppContent;
