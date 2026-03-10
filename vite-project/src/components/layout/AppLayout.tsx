import { Outlet } from "react-router-dom";
import Nav from "./nav/Nav";

export default function AppLayout() {
  return (
    <div className="px-5">
      <Nav />
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
}
