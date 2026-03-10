import Theme from "./Theme";
import { navItems } from "../../../data/frontData";
import { NavLink } from "react-router-dom";
export default function LeftSide() {
  return (
    <>
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
    </>
  );
}
