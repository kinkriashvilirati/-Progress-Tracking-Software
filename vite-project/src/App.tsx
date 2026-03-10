import { RouterProvider } from "react-router-dom";
import { router } from "./app/routing/Router";
import { NavBarProvider } from "./context/TopContext";

export default function App() {
  return (
    <>
      <NavBarProvider>
        <RouterProvider router={router} />
      </NavBarProvider>
    </>
  );
}
