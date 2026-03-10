import { createContext, useContext, useState } from "react";

type BarType = {
  isOpenNav: boolean;
  setIsOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarContext = createContext<BarType | null>(null);

export function NavBarProvider({ children }: { children: React.ReactNode }) {
  const [isOpenNav, setIsOpenNav] = useState(false);
  return (
    <SidebarContext.Provider value={{ isOpenNav, setIsOpenNav }}>
      {children}
    </SidebarContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useBar() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar must be used inside SidebarProvider");
  }

  return context;
}
