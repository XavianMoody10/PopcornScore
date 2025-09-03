import { Squash as Hamburger } from "hamburger-react";

export const Header = ({ position }) => {
  return (
    <header
      style={{ position: position || "sticky" }}
      className=" fixed top-0 w-full z-10 py-3 bg-creamy-white"
    >
      <div className=" w-[90%] flex justify-end max-w-[1400px] mx-auto">
        <Hamburger size={23} />
      </div>
    </header>
  );
};
