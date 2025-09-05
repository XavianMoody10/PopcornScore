import { Squash as Hamburger } from "hamburger-react";
import { useContext } from "react";
import { SideNavigationContext } from "../../contexts/SideNavigationContext";

export const Header = ({ position }) => {
  const { isSideNavigationOpen, setIsSideNavigationOpen } = useContext(
    SideNavigationContext
  );

  return (
    <header
      style={{ position: position || "sticky" }}
      className=" top-0 w-full z-10 py-3 bg-creamy-white"
    >
      <div className=" w-[90%] flex justify-end max-w-[1400px] mx-auto">
        <Hamburger
          size={23}
          toggle={setIsSideNavigationOpen}
          toggled={isSideNavigationOpen}
        />
      </div>
    </header>
  );
};
