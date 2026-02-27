import { useState } from "react";
import type { Theme } from "../../../types/CommonTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
export default function Theme() {
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <>
      <button
        className="bg-red-500 text-white p-2 rounded-md cursor-pointer"
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
