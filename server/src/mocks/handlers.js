import { delay, http, HttpResponse } from "msw";
import trendingMoviesMockdata from "./mockdata/trendingMovies.mockdata.js";
import nowPlayingMoviesMockdata from "./mockdata/nowPlayingMovies.mockdata.js";
import trendingTVShowsMockdata from "./mockdata/trendingTVShows.mockdata.js";
import airingTodayTVShowsMockdata from "./mockdata/airingTodayTVShows.mockdata.js";

export const handlers = [
  http.get("https://api.themoviedb.org/3/trending/movie/day", async () => {
    // await delay(3000);
    return HttpResponse.json(trendingMoviesMockdata);

    // return HttpResponse.json(
    //   {
    //     status_code: 7,
    //     status_message: "This is an error message",
    //     success: false,
    //   },
    //   { status: 400 }
    // );
  }),

  http.get("https://api.themoviedb.org/3/trending/tv/day", async () => {
    // await delay(3000);
    return HttpResponse.json(trendingTVShowsMockdata);

    // return HttpResponse.json(
    //   {
    //     status_code: 7,
    //     status_message: "This is an error message",
    //     success: false,
    //   },
    //   { status: 400 }
    // );
  }),

  http.get(
    "https://api.themoviedb.org/3/movie/now_playing",
    async ({ request }) => {
      const url = new URL(request.url);
      const page = url.searchParams.get("page");

      return HttpResponse.json(
        nowPlayingMoviesMockdata.find((data) => data.page == page)
      );
    }
  ),

  http.get("https://api.themoviedb.org/3/movie/popular", async () => {
    return HttpResponse.json(
      {
        status_code: 7,
        status_message: "This is an error message",
        success: false,
      },
      { status: 400 }
    );
  }),

  http.get("https://api.themoviedb.org/3/movie/top_rated", async () => {
    return HttpResponse.json(
      {
        status_code: 7,
        status_message: "This is an error message",
        success: false,
      },
      { status: 400 }
    );
  }),

  http.get("https://api.themoviedb.org/3/movie/upcoming", async () => {
    return HttpResponse.json(
      {
        status_code: 7,
        status_message: "This is an error message",
        success: false,
      },
      { status: 400 }
    );
  }),

  http.get(
    "https://api.themoviedb.org/3/tv/airing_today",
    async ({ request }) => {
      const url = new URL(request.url);
      const page = url.searchParams.get("page");

      return HttpResponse.json(
        airingTodayTVShowsMockdata.find((data) => data.page == page)
      );
    }
  ),

  http.get("https://api.themoviedb.org/3/tv/on_the_air", async () => {
    return HttpResponse.json(
      {
        status_code: 7,
        status_message: "This is an error message",
        success: false,
      },
      { status: 400 }
    );
  }),

  http.get("https://api.themoviedb.org/3/tv/popular", async () => {
    return HttpResponse.json(
      {
        status_code: 7,
        status_message: "This is an error message",
        success: false,
      },
      { status: 400 }
    );
  }),

  http.get("https://api.themoviedb.org/3/tv/top_rated", async () => {
    return HttpResponse.json(
      {
        status_code: 7,
        status_message: "This is an error message",
        success: false,
      },
      { status: 400 }
    );
  }),
];
