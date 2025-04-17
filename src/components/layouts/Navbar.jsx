import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo, usa } from "../../assets";
import { brandName, navigation, number } from "../../constant";
import Button from "../ui/Button";
import DropdownMenu from "../ui/DropdownMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActiveItem = (item) => {
    if (item.url && location.pathname === item.url) return true;

    if (item.children) {
      return item.children.some((child) => {
        if (location.pathname === child.link) return true;
        return false;
      });
    }
    return false;
  };

  return (
    <header
      ref={navRef}
      className={`w-full bg-white top-0 left-0 border-b border-[#ddd7db] z-[100] transition-all duration-300 ease-in-out ${
        isScrolled
          ? "fixed bg-white shadow-[0px_2px_10px_1px_#e0e0e0]"
          : "absolute bg-transparent"
      }`}
    >
      <div className="py-2.5 px-10 relative mx-auto">
        <div className="flex item-center justify-between -mx-3.5">
          <div className="w-full min-h-px relative lg:w-2/12 lg:grow-0 lg:shrink-0 lg:basis-2/12">
            <div>
              <Link to={"/"}>
                <img src={logo} alt={brandName} />
              </Link>
            </div>
          </div>
          <div className="w-full min-h-px relative lg:w-7/12 lg:grow-0 lg:shrink-0 lg:basis-7/12">
            <div className="text-center">
              <ul className="flex justify-end gap-5 items-center">
                {navigation.map((item, idx) => {
                  const isDropdownActive =
                    item.children && activeDropdown === item.url;

                  const Wrapper = item.url ? Link : "span";
                  return (
                    <li
                      key={idx}
                      className="relative cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (activeDropdown === item.url) {
                          setActiveDropdown(null);
                        } else {
                          setActiveDropdown(item.url);
                        }
                      }}
                    >
                      <Wrapper
                        {...(item.url && { to: item.url })}
                        className="text-base text-black py-6 relative align-middle"
                      >
                        {item.title}
                      </Wrapper>
                      {item.children && isDropdownActive && (
                        <DropdownMenu
                          extraClasses="absolute w-64 top-8 left-0 m-auto bg-matisse-950 py-3.5 pl-6 pr-5 z-[1]"
                          visible={isDropdownActive}
                        >
                          {item.children.map((child, idx) => (
                            <li
                              key={`child-${idx}`}
                              className="w-full block mb-2.5 pb-2.5 border-b border-white mr-[30px] xl:mr-3 text-white"
                            >
                              <Link
                                to={child.url}
                                className="text-sm text-white font-medium block"
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </DropdownMenu>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="w-full min-h-px relative lg:w-3/12 lg:grow-0 lg:shrink-0 lg:basis-3/12">
            <div className="h-full flex flex-col items-center justify-center">
              <ul className="flex flex-row items-center justify-end">
                <li className="inline-block mr-[30px] xl:mr-5">
                  <a
                    href={number[1]}
                    className="text-[11px] font-bold relative text-gray-900 inline-flex items-center"
                  >
                    <img src={usa} className="h-10" alt="" />
                    {number[0]}
                  </a>
                </li>
                <li className="inline-block">
                  <Button children={"Get in Touch"} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
