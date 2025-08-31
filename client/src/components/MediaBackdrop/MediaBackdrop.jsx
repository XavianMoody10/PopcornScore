import { Link } from "react-router-dom";

export const MediaBackdrop = ({
  backdrop_path,
  title,
  overview,
  pathToDetails,
}) => {
  const backdrop = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  return (
    <div
      className=" relative h-[700px] bg-top bg-cover rounded-3xl"
      style={{ backgroundImage: `url(${backdrop})` }}
    >
      <div className=" absolute top-0 left-0 right-0 bottom-0 bg-black/70 rounded-3xl">
        <div className="absolute bottom-5 left-5 w-[90%] space-y-5 lg:bottom-10 lg:left-10">
          <ul className=" space-y-5">
            <li className=" text-3xl text-white font-bold">{title}</li>
            <li className=" text-white text-lg hidden sm:block max-w-[600px]">
              {overview}
            </li>
          </ul>

          <div className=" max-w-[150px]">
            <Link
              to={pathToDetails}
              className=" bg-creamy-white block w-full text-center font-semibold py-3 border border-gray-300 rounded-md hover:bg-black hover:text-white duration-150"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
