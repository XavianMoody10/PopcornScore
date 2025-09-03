import { MdErrorOutline as ErrorIcon } from "react-icons/md";

export const MediaBackdropErrorOverlay = ({ errorMessage }) => {
  return (
    <div className=" absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-creamy-white z-10 border border-gray-200 rounded-3xl">
      <div className=" flex items-center gap-3">
        <span className=" text-2xl text-red-500 font-bold">{errorMessage}</span>
        <ErrorIcon className=" text-red-500" size={50} />
      </div>
    </div>
  );
};
