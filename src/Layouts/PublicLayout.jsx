import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import PrimaryNavbar from "../Pages/Shared/PrimaryNavbar/PrimaryNavbar";
import SecondaryNavbar from "../Pages/Shared/SecondaryNavbar/SecondaryNavbar";

const PublicLayout = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [primaryVisible, setPrimaryVisible] = useState(true);
  const [secondaryTop, setSecondaryTop] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setPrimaryVisible(
        prevScrollPos > currentScrollPos || currentScrollPos < 10
      );

      if (prevScrollPos < currentScrollPos) {
        // Scrolling down: move SecondaryNavbar to top of the page
        setSecondaryTop(0);
      } else {
        // Scrolling up: move SecondaryNavbar back to its original position
        setSecondaryTop(100);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div className="relative min-h-screen bg-white">
      <div
        className={`fixed top-0 left-0 lg:w-full lg:ml-5 z-50 bg-white  transition-transform duration-300 transform ${
          primaryVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <PrimaryNavbar />
      </div>
      <div
        className="fixed top-28 left-0 lg:w-full z-50 bg-white "
        style={{ top: `${secondaryTop}px`, transition: "top 0.3s ease-out" }}
      >
        <SecondaryNavbar />
      </div>
      <div className="pt-44">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;
