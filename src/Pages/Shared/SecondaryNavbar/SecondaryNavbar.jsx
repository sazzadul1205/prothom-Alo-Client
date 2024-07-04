import { NavLink } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import { MdOutlineNewspaper } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";

const navItems = [
  { to: "/", label: "সর্বশেষ" },
  { to: "/politics", label: "রাজনীতি" },
  { to: "/bangladesh", label: "বাংলাদেশ" },
  { to: "/crime", label: "অপরাধ" },
  { to: "/world", label: "বিশ্ব" },
  { to: "/business", label: "বাণিজ্য" },
  { to: "/opinion", label: "মতামত" },
  { to: "/sports", label: "খেলা" },
  { to: "/entertainment", label: "বিনোদন" },
  { to: "/jobs", label: "চাকরি" },
  { to: "/lifestyle", label: "জীবনযাপন" },
];

const buttons = [
  { icon: FaSearch, label: "Search" },
  { icon: MdOutlineNewspaper, label: "E-Paper" },
  { icon: CiGlobe, label: "Eng" },
  { icon: FaUser, label: "Login" },
  { icon: IoMdMenu, label: "", isMenu: true },
];

const SecondaryNavbar = () => {
  return (
    <div className="bg-white border-b-2 w-full h-16 text-black border-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="navbar z-10 justify-between bg-white text-black max-w-screen-xl mx-auto p-0 border-b-2 border-black">
          <div className="navbar-center flex justify-center lg:flex">
            <ul className="gap-2 menu-horizontal px-1 pt-2">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-sm pr-3 hover:text-blue-400 font-normal"
                >
                  <NavLink to={item.to}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`border-l px-3 py-4 flex hover:text-blue-400 ${
                  button.isMenu ? "border-r" : ""
                }`}
              >
                <button.icon className="text-xl mr-1" />
                {button.label && (
                  <span className="text-sm">{button.label}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
