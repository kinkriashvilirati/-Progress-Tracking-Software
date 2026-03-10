import { useState } from "react";
import type { Theme } from "../../../types/CommonTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
export default function Theme() {
  const [theme, setTheme] = useState<Theme>("dark");
  return (
    <>
      <button
        className="border border-primary px-4 py-2 text-primary hover:border-primaryHover transition-colors duration-300 hover:text-primaryHover cursor-pointer rounded-md p-2"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
          document.documentElement.setAttribute("data-theme", theme);
        }}
      >
        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
      </button>
    </>
  );
}
