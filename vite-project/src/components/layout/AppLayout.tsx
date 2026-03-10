import { Outlet } from "react-router-dom";
import Nav from "./nav/Nav";
import { useBar } from "../../context/TopContext";

export default function AppLayout() {
  const { isOpenNav } = useBar();
  return (
    <div className="px-5">
      <Nav />
      <div
        className={`transition-all duration-500 ${isOpenNav ? "pt-45" : "pt-20"}`}
      >
        <Outlet />
      </div>
    </div>
  );
}
