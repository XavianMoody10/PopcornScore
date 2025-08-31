import { Squash as Hamburger } from "hamburger-react";
import { useFetchTrendingMedia } from "../../hooks/useFetchTrendingMedia";
import { useFetchTVShowsByList } from "../../hooks/useFetchTVShowsByList";
import { MediaBackdropSlider } from "../../components/MediaBackdropSlider/MediaBackdropSlider";
import { MediaBackdropLoadingOverlay } from "../../components/MediaBackdropLoadingOverlay/MediaBackdropLoadingOverlay";
import { MediaBackdropErrorOverlay } from "../../components/MediaBackdropErrorOverlay/MediaBackdropErrorOverlay";
import { MediaPosterSlider } from "../../components/MediaPosterSlider/MediaPosterSlider";
import { MediaPosterLoadingOverlay } from "../../components/MediaPosterLoadingOverlay/MediaPosterLoadingOverlay";
import { MediaPosterErrorOverlay } from "../../components/MediaPosterErrorOverlay/MediaPosterErrorOverlay";

export const TVShows = () => {
  const trendingQuery = useFetchTrendingMedia("tv_shows");
  const airingTodayQuery = useFetchTVShowsByList("airing_today", 1);
  const onTheAirQuery = useFetchTVShowsByList("on_the_air", 1);
  const popularQuery = useFetchTVShowsByList("popular", 1);
  const topRatedQuery = useFetchTVShowsByList("top_rated", 1);

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
              <MediaPosterSlider results={airingTodayQuery.data?.results} />
              <MediaPosterLoadingOverlay
                isLoading={airingTodayQuery.isLoading}
              />
              {airingTodayQuery.error && (
                <MediaPosterErrorOverlay
                  errorMessage={airingTodayQuery.error?.message}
                />
              )}
            </div>
          </div>
        </section>

        <section>
          <div className=" w-[90%] max-w-[1400px] mx-auto space-y-3">
            <h2 className=" text-2xl font-bold">Popular</h2>

            <div className=" min-h-[300px] relative">
              <MediaPosterSlider results={onTheAirQuery.data?.results} />
              <MediaPosterLoadingOverlay isLoading={onTheAirQuery.isLoading} />
              {onTheAirQuery.error && (
                <MediaPosterErrorOverlay
                  errorMessage={onTheAirQuery.error?.message}
                />
              )}
            </div>
          </div>
        </section>

        <section>
          <div className=" w-[90%] max-w-[1400px] mx-auto space-y-3">
            <h2 className=" text-2xl font-bold">Top Rated</h2>

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
            <h2 className=" text-2xl font-bold">Upcoming</h2>

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
      </main>
    </>
  );
};
