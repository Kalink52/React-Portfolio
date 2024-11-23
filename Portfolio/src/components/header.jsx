import { NavLink } from "react-router-dom";
import darkMode from "../utilities/darkmode";
import Toggle from "./CustomTailwind/toggle";
import { useState, useEffect } from "react";
import { NavDrawer } from "./header/drawer";
// controls the medita query for the navigation menu.

const WindowSize = 748;

const navList = [
  {
    id: 1,
    title: "About me",
    navURL: "/",
    selected: false,
  },
  {
    id: 2,
    title: "Portfolio",
    navURL: "portfolio",
    selected: false,
  },
  // {
  //   id: 3,
  //   title: "Contact",
  //   navURL: "contact",
  //   selected: false,
  // },
];
const defaultNavButtonStyling =
  "rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none";

const activeNavButtonStyling =
  "rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none m-5 ";

function Header() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > WindowSize);
  console.log(isDesktop);
  const updateMedia = () => {
    setDesktop(window.innerWidth > WindowSize);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  const makeNav = navList.map((nav) => {
    return (
      <NavLink
        to={nav.navURL}
        key={nav.id}
        className={({ isActive }) =>
          [isActive ? activeNavButtonStyling : defaultNavButtonStyling].join(
            " "
          )
        }
      >
        {nav.title}
      </NavLink>
    );
  });
  if (!isDesktop) {
    return <NavDrawer navList={navList} />;
  }

  return (
    <>
      <div className="2xl:container 2xl:mx-auto">
        <div className="bg-white dark:bg-light-blue rounded shadow-lg py-5 px-7">
          <nav className="flex justify-between">
            <div className="flex items-center space-x-3 lg:pr-16 pr-6">
              <img src="/assets/svgs/about/gamepad.svg" alt="logo no gogo" />
              <h2 className="font-normal text-2xl leading-6 text-gray-800 dark:text-beige">
                Micah Cox
              </h2>
            </div>
            <div>
              {makeNav}
              <a
                href="https://docs.google.com/document/d/1IM39jkgJv8Owo1UvIh7hwYvaNbHcR4iKf7VWTeXcx0E/edit?usp=sharing"
                target="_blank"
                className="rounded-md bg-black dark:bg-white dark:text-black py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Resume
              </a>
              <Toggle onClick={darkMode} />
              {/* <Button onClick={darkMode}>Light mode</Button> */}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Header;
