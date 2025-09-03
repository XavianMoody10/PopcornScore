import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { HiOutlineArrowSmLeft as LeftArrow } from "react-icons/hi";
import { HiOutlineArrowSmRight as RightArrow } from "react-icons/hi";
import { IoIosStar as RatingStar } from "react-icons/io";
import { useRef } from "react";

export const MediaReviewsSlider = ({ data }) => {
  const swiperRef = useRef(null);

  // Display review slides
  const reviews = data
    ?.map((review) => {
      return (
        <SwiperSlide>
          <div className=" h-[300px] border border-gray-200 bg-white rounded-md px-6 py-2 space-y-4">
            <div className=" border-b border-gray-200 py-4 flex items-center justify-between">
              <span className=" font-medium">{review.title}</span>

              <div className=" flex items-center gap-1">
                <RatingStar />
                <span>{review.rating}</span>
              </div>
            </div>

            <div className="h-[200px] pr-2 overflow-y-auto">
              <p>{review.review}</p>
            </div>
          </div>
        </SwiperSlide>
      );
    })
    .reverse();

  // Go to previous slide
  function goToPrevSlideHandler() {
    if (swiperRef.current && swiperRef.current.swiper) {
      // Use the swiper instance from the ref to call slidePrev()
      swiperRef.current.swiper.slidePrev();
    }
  }

  // Go to next slide
  function goToNextSlideHandler() {
    if (swiperRef.current && swiperRef.current.swiper) {
      // Use the swiper instance from the ref to call slideNext()
      swiperRef.current.swiper.slideNext();
    }
  }

  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        breakpoints={{
          500: {
            slidesPerView: 1.4,
          },
          600: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3.1,
            allowTouchMove: false,
          },
        }}
      >
        {reviews}
      </Swiper>

      {data?.length >= 1 && (
        <div className=" flex gap-2 select-none">
          <LeftArrow
            size={30}
            className=" cursor-pointer hover:scale-125 duration-150"
            onClick={goToPrevSlideHandler}
          />
          <RightArrow
            size={30}
            className=" cursor-pointer hover:scale-125 duration-150"
            onClick={goToNextSlideHandler}
          />
        </div>
      )}
    </>
  );
};
