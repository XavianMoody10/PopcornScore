import { motion, AnimatePresence } from "motion/react";
import { ClipLoader } from "react-spinners";

export const MediaDetailsLoadingOverlay = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.5 }}
          className=" absolute top-0 left-0 right-0 bottom-0 border border-gray-200 flex items-center justify-center bg-creamy-white"
        >
          <ClipLoader />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
