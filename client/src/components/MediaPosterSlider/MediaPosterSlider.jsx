import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MediaPoster } from "../MediaPoster/MediaPoster";

export const MediaPosterSlider = ({ results }) => {
  const slides = results?.map((media) => {
    return (
      <SwiperSlide key={media.id}>
        <MediaPoster
          title={media.title || media.name}
          poster_path={media.poster_path}
          pathToDetails={`/details/movie/${media.id}`}
        />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      slidesPerView={1.4}
      spaceBetween={10}
      breakpoints={{
        500: {
          slidesPerView: 2.4,
        },
        768: {
          slidesPerView: 3.4,
        },
        1024: {
          slidesPerView: 4.4,
        },
        1280: {
          slidesPerView: 5.4,
        },
      }}
    >
      {slides}
    </Swiper>
  );
};
