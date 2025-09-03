import { MdErrorOutline as ErrorIcon } from "react-icons/md";

export const MediaReviewsErrorOverlay = ({ errorMessage }) => {
  return (
    <div className=" absolute h-full border border-gray-200 top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-3 bg-white">
      <span className=" text-xl font-bold text-red-500">{errorMessage}</span>
      <ErrorIcon className=" text-red-500" size={50} />
    </div>
  );
};
