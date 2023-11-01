import { useState } from "react";
import { NavBar } from "../../components/NavBar";
import { RightPanel } from "../../components/RightPanel";
import SideBar from "../../components/SideBar";

export const HomeLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <NavBar toggleMenu={toggleMenu} />
      <SideBar isOpen={isOpen} />
      <RightPanel />
      <div className="mx-2 lg:ml-lmain lg:mr-lmain">{children}</div>
    </div>
  );
};
