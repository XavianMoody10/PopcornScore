import { IoCheckmark as CheckMark } from "react-icons/io5";
import { motion } from "motion/react";

export const PageSuccessMessage = ({ successMessage, isOpen }) => {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: isOpen ? 0 : "-100%" }}
      transition={{ stiffness: 0 }}
      className=" fixed top-0 left-0 right-0 bg-green-600 z-40 py-2.5 text-center flex justify-center items-center gap-2"
    >
      <span className=" text-white font-medium text-lg">{successMessage}</span>
      <CheckMark color="white" size={28} />
    </motion.div>
  );
};
