import { Link } from "react-router-dom";
import { IoIosInformationCircleOutline as InfoIcon } from "react-icons/io";

export const MediaPoster = ({ poster_path, title, pathToDetails }) => {
  const poster = `https://image.tmdb.org/t/p/original/${poster_path}`;

  return (
    <div className=" relative">
      <img src={poster} alt="" className=" rounded-lg" />

      <div className=" absolute top-0 left-0 right-0 bottom-0 bg-black/65 rounded-lg opacity-0 hover:opacity-100 duration-150">
        <div className=" absolute bottom-3 left-3">
          <span className=" text-lg font-semibold text-white">{title}</span>

          <Link to={pathToDetails}>
            <InfoIcon color="white" size={35} />
          </Link>
        </div>
      </div>
    </div>
  );
};
