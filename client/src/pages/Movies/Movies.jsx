import { Squash as Hamburger } from "hamburger-react";
import { useFetchTrendingMedia } from "../../hooks/useFetchTrendingMedia";
import { useFetchMoviesByList } from "../../hooks/useFetchMoviesByList";
import { MediaBackdropSlider } from "../../components/MediaBackdropSlider/MediaBackdropSlider";
import { MediaBackdropLoadingOverlay } from "../../components/MediaBackdropLoadingOverlay/MediaBackdropLoadingOverlay";
import { MediaBackdropErrorOverlay } from "../../components/MediaBackdropErrorOverlay/MediaBackdropErrorOverlay";
import { MediaPosterSlider } from "../../components/MediaPosterSlider/MediaPosterSlider";
import { MediaPosterLoadingOverlay } from "../../components/MediaPosterLoadingOverlay/MediaPosterLoadingOverlay";
import { MediaPosterErrorOverlay } from "../../components/MediaPosterErrorOverlay/MediaPosterErrorOverlay";

export const Movies = () => {
  const trendingQuery = useFetchTrendingMedia("movies");
  const nowPlayingQuery = useFetchMoviesByList("now_playing", 1);
  const popularQuery = useFetchMoviesByList("popular", 1);
  const topRatedQuery = useFetchMoviesByList("top_rated", 1);
  const upcomingQuery = useFetchMoviesByList("upcoming", 1);
  const pathToDetails = "/details/movies/";

  return (
    <>
      <header className=" fixed top-0 w-full z-10 py-3 bg-creamy-white">
        <div className=" w-[90%] flex justify-end max-w-[1400px] mx-auto">
          <Hamburger size={23} />
        </div>
      </header>

      <main className=" min-h-screen bg-creamy-white pt-[80px] pb-10 space-y-12">
        <section className=" relative">
          <div className=" h-[700px] w-[90%] max-w-[1400px] mx-auto relative">
            <MediaBackdropSlider results={trendingQuery?.data?.results} />
            <MediaBackdropLoadingOverlay isLoading={trendingQuery.isLoading} />
            {trendingQuery.error && (
              <MediaBackdropErrorOverlay
                errorMessage={trendingQuery.error.message}
              />
            )}
          </div>
        </section>

        <section>
          <div className=" w-[90%] max-w-[1400px] mx-auto space-y-3">
            <h2 className=" text-2xl font-bold">Now Playing</h2>

            <div className=" min-h-[300px] relative">
              <MediaPosterSlider
                results={nowPlayingQuery.data?.results}
                pathToDetails={pathToDetails}
              />
              <MediaPosterLoadingOverlay
                isLoading={nowPlayingQuery.isLoading}
              />
              {nowPlayingQuery.error && (
                <MediaPosterErrorOverlay
                  errorMessage={nowPlayingQuery.error?.message}
                />
              )}
            </div>
          </div>
        </section>

        <section>
          <div className=" w-[90%] max-w-[1400px] mx-auto space-y-3">
            <h2 className=" text-2xl font-bold">Popular</h2>

            <div className=" min-h-[300px] relative">
              <MediaPosterSlider results={popularQuery.data?.results} />
              <MediaPosterLoadingOverlay isLoading={popularQuery.isLoading} />
              {popularQuery.error && (
                <MediaPosterErrorOverlay
                  errorMessage={popularQuery.error?.message}
                />
              )}
            </div>
          </div>
        </section>

        <section>
          <div className=" w-[90%] max-w-[1400px] mx-auto space-y-3">
            <h2 className=" text-2xl font-bold">Top Rated</h2>

            <div className=" min-h-[300px] relative">
              <MediaPosterSlider results={topRatedQuery.data?.results} />
              <MediaPosterLoadingOverlay isLoading={topRatedQuery.isLoading} />
              {topRatedQuery.error && (
                <MediaPosterErrorOverlay
                  errorMessage={topRatedQuery.error?.message}
                />
              )}
            </div>
          </div>
        </section>

        <section>
          <div className=" w-[90%] max-w-[1400px] mx-auto space-y-3">
            <h2 className=" text-2xl font-bold">Upcoming</h2>

            <div className=" min-h-[300px] relative">
              <MediaPosterSlider results={upcomingQuery.data?.results} />
              <MediaPosterLoadingOverlay isLoading={upcomingQuery.isLoading} />
              {upcomingQuery.error && (
                <MediaPosterErrorOverlay
                  errorMessage={upcomingQuery.error?.message}
                />
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
