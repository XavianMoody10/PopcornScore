export const MediaDetails = ({ mediaData }) => {
  const poster = `https://image.tmdb.org/t/p/original/${mediaData.poster_path}`;

  return (
    <div className=" flex flex-col items-center gap-4 min-[800px]:flex-row min-[800px]:items-start min-[800px]:gap-10">
      <img src={poster} alt="" className=" w-full max-w-[350px]" />

      <div className=" space-y-3">
        <h2 className=" text-2xl font-bold">
          {mediaData.title || mediaData.name}
        </h2>
        <p>{mediaData.overview}</p>
      </div>
    </div>
  );
};
