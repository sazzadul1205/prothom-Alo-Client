import { NavLink } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import { MdOutlineNewspaper } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";

const navItems = [
  { to: "/Last", label: "সর্বশেষ" },
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
];

const SecondaryNavbar = () => {
  return (
    <div className="bg-white border-b-2 w-full h-16 text-black border-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="navbar z-10 justify-between bg-white text-black max-w-screen-xl mx-auto p-0 border-b-2 border-black">
          <div className="navbar-center  justify-center lg:flex md:hidden hidden">
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
          <div>
            <div className="hidden lg:flex">
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
            <div className="dropdown hidden lg:flex">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-blue-200 right-3 top-[55px] rounded-box z-[1] w-72 lg:w-52 lg:p-2 shadow"
              >
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm pr-3 hover:text-blue-400 font-normal hover:bg-blue-300"
                  >
                    <NavLink to={item.to}>{item.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex lg:hidden pl-44">
            <button className={`border-l px-3 py-4 flex hover:text-blue-400 `}>
              <FaSearch className="text-xl mr-1"></FaSearch>
              Search
            </button>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-blue-200 right-3 top-[55px] rounded-box z-[1] w-72 lg:w-52 lg:p-2 shadow"
              >
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm pr-3 hover:text-blue-400 font-normal hover:bg-blue-300"
                  >
                    <NavLink to={item.to}>{item.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
