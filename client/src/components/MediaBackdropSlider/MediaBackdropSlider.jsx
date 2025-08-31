import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MediaBackdrop } from "../MediaBackdrop/MediaBackdrop";
import { Autoplay } from "swiper/modules";

export const MediaBackdropSlider = ({ results }) => {
  const slides = results?.map((media) => {
    return (
      <SwiperSlide>
        <MediaBackdrop
          backdrop_path={media.backdrop_path}
          title={media.title || media.name}
          overview={media.overview}
          pathToDetails={`/details/movie/${media.id}`}
        />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      grabCursor={true}
    >
      {slides}
    </Swiper>
  );
};
