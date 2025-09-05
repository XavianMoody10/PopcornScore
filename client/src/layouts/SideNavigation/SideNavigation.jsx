import { MdOutlineLocalMovies as MovieIcon } from "react-icons/md";
import { FaTv as TVIcon } from "react-icons/fa";
import { IoClose as CloseIcon } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useContext } from "react";
import { SideNavigationContext } from "../../contexts/SideNavigationContext";
import { DarkBackgroundWrapper } from "../../components/DarkBackgroundWrapper/DarkBackgroundWrapper";

export const SideNavigation = () => {
  const { isSideNavigationOpen, setIsSideNavigationOpen } = useContext(
    SideNavigationContext
  );

  return (
    <>
      {isSideNavigationOpen && (
        <DarkBackgroundWrapper>
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: isSideNavigationOpen ? 0 : "-100%" }}
            transition={{ stiffness: 0 }}
            className=" fixed left-0 top-0 w-full h-screen bg-white z-20 min-[500px]:max-w-[300px] shadow-2xl p-3 space-y-4"
          >
            <CloseIcon
              size={30}
              className=" ml-auto block hover:scale-125 duration-150 cursor-pointer"
              onClick={() => setIsSideNavigationOpen(false)}
            />

            <nav>
              <ul className=" space-y-3">
                <li>
                  <Link
                    to={"/movies"}
                    className=" flex items-center gap-3 hover:bg-black hover:text-white p-3 rounded-md"
                    onClick={() => setIsSideNavigationOpen(false)}
                  >
                    <span className=" text-lg font-semibold">Movies</span>
                    <MovieIcon size={25} />
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/tv-shows"}
                    className=" flex items-center gap-3 hover:bg-black hover:text-white p-3 rounded-md"
                    onClick={() => setIsSideNavigationOpen(false)}
                  >
                    <span className=" text-lg font-semibold">TV Shows</span>
                    <TVIcon size={25} />
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.aside>
        </DarkBackgroundWrapper>
      )}
    </>
  );
};
