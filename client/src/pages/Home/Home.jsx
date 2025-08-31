import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main className=" min-h-screen bg-creamy-white flex items-center justify-center">
      <div className=" w-full max-w-[200px]">
        <Link
          to={"/movies"}
          className=" bg-creamy-white block w-full text-center font-semibold py-3 border border-gray-300 rounded-md hover:bg-black hover:text-white duration-150"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
};
