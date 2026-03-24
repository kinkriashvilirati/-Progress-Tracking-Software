import { Outlet } from "react-router-dom";
import Nav from "./nav/Nav";
import { useBar } from "../../context/TopContext";

export default function AppLayout() {
  const { isOpenNav } = useBar();
  return (
    <div className="px-5">
      <Nav />
      <main
        className={`transition-all duration-500 ${isOpenNav ? "sm:pt-45 pt-65" : "pt-20"}`}
      >
        <Outlet />
      </main>
    </div>
  );
}
