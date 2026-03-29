import Theme from "./Theme";
import { NavLink } from "react-router-dom";
import { navItems } from "../../../data/frontData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars as Bar } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
import { useBar } from "../../../context/TopContext";
export default function Nav() {
  const { isOpenNav, setIsOpenNav } = useBar();
  const barClick = () => {
    setIsOpenNav(!isOpenNav);
  };
  return (
    <header className=" bg-bg flex justify-between top-0 py-5 fixed left-5 right-5 z-20">
      <div
        className={`py-5 absolute transition-all  duration-500 ${isOpenNav ? "top-19" : "-top-100"} bg-bg  w-full z-10 `}
      >
        <ul className="flex flex-wrap-reverse text-text-dark justify-center items-center gap-4 *:w-full sm:*:w-auto lmd:hidden">
          <li className="w-full">
            <Theme />
          </li>
          <li>
            <button
              className="border border-primary px-4 py-2 text-primary hover:border-primaryHover transition-colors duration-300 hover:text-primaryHover cursor-pointer rounded-md"
              type="button"
            >
              {navItems.createEmployee}
            </button>
          </li>
          <li>
            <NavLink
              className=" bg-primary px-4 py-2 text-bg hover:bg-primaryHover transition-colors duration-300 cursor-pointer rounded-md"
              to="/create-exercise"
            >
              {navItems.createExercise}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex">
        <NavLink
          className="cursor-pointer inline text-primary font-extrabold text-2xl"
          to="/"
        >
          {navItems.logo}
        </NavLink>
        <img className="inline" src="/Hourglass.png" alt="" />
      </div>
      <nav className="relative flex-2  flex justify-end z-20">
        <div className="lmd:hidden">
          <button
            className={`text-primary hover:text-primaryHover transition-transform duration-300 cursor-pointer ${isOpenNav ? "rotate-90" : ""}`}
            onClick={barClick}
          >
            <FontAwesomeIcon icon={Bar} size="2x" />
          </button>
        </div>

        <ul className="hidden lmd:flex text-text-dark justify-center items-center gap-4">
          <li>
            <Theme />
          </li>
          <li>
            <button
              className="border border-primary px-4 py-2 text-primary hover:border-primaryHover transition-colors duration-300 hover:text-primaryHover cursor-pointer rounded-md"
              type="button"
            >
              {navItems.createEmployee}
            </button>
          </li>
          <li>
            <NavLink
              className=" bg-primary px-4 py-2 text-bg hover:bg-primaryHover transition-colors duration-300 cursor-pointer rounded-md"
              to="/create-exercise"
            >
              {navItems.createExercise}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

/**
path is the URL (the link in the browser).

"/" is the root URL of the site.

AppLayout is the wrapper/shell (nav + outlet). Pages don’t “appear on AppLayout”, they appear inside its <Outlet />.

children are the pages that render inside <Outlet />.

index: true means default child route (so / shows LandingPage).

Nav changes the URL using <Link to="..."> and React Router swaps what’s inside <Outlet />.
 */
