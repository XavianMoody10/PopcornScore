import { useContext, useEffect } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../layouts/Header/Header";
import { MediaDetails } from "../../components/MediaDetails/MediaDetails";
import { MediaDetailsLoadingOverlay } from "../../components/MediaDetailsLoadingOverlay/MediaDetailsLoadingOverlay";
import { MediaDetailsErrorOverlay } from "../../components/MediaDetailsErrorOverlay/MediaDetailsErrorOverlay";
import { PageSuccessMessage } from "../../components/PageSuccessMessage/PageSuccessMessage";
import { MediaReviewsSlider } from "../../components/MediaReviewsSlider/MediaReviewsSlider";
import { MediaReviewsLoadingOverlay } from "../../components/MediaReviewsLoadingOverlay/MediaReviewsLoadingOverlay";
import { ReviewForm } from "../../components/ReviewForm/ReviewForm";
import { ReviewFormLoadingOverlay } from "../../components/ReviewFormLoadingOverlay/ReviewFormLoadingOverlay";
import { MediaReviewsErrorOverlay } from "../../components/MediaReviewsErrorOverlay/MediaReviewsErrorOverlay";
import { PageSuccessMessageContext } from "../../contexts/PageSuccessMessageContext";
import { useFetchMediaDetails } from "../../hooks/useFetchMediaDetails";
import { useFetchMediaReviews } from "../../hooks/useFetchMediaReviews";

export const Details = () => {
  const { successMessage } = useContext(PageSuccessMessageContext);
  const { mediaType, mediaId } = useParams();
  const reviewsRef = useRef();
  const detailsQuery = useFetchMediaDetails(mediaType, mediaId);
  const reviewsQuery = useFetchMediaReviews(mediaType, mediaId);

  // Scroll to the top of page
  useEffect(() => {
    if (detailsQuery.isLoading) {
      scrollTo(0, 0);
    }
  }, [detailsQuery.isLoading]);

  return (
    <>
      <Header />

      <PageSuccessMessage
        successMessage={successMessage.message}
        isOpen={successMessage.isOpen}
      />

      <main className=" bg-creamy-white">
        <div className=" max-w-[1400px] mx-auto p-5 space-y-14">
          <div className=" relative min-h-[500px]">
            {detailsQuery.isSuccess && (
              <MediaDetails mediaData={detailsQuery.data} />
            )}

            <MediaDetailsLoadingOverlay isLoading={detailsQuery.isLoading} />

            {detailsQuery.isError && (
              <MediaDetailsErrorOverlay
                errorMessage={detailsQuery?.error?.message}
              />
            )}
          </div>

          <div className=" space-y-5" ref={reviewsRef}>
            <h3 className=" text-2xl font-bold">Reviews</h3>

            <div className=" min-h-[300px] space-y-5 relative">
              {reviewsQuery.isSuccess && (
                <MediaReviewsSlider data={reviewsQuery.data} />
              )}

              <MediaReviewsLoadingOverlay
                isLoading={detailsQuery.isLoading && reviewsQuery.isLoading}
              />

              {reviewsQuery.error && (
                <MediaReviewsErrorOverlay
                  errorMessage={reviewsQuery.error?.message}
                />
              )}

              {reviewsQuery.isSuccess && reviewsQuery.data?.length === 0 && (
                <div className=" absolute h-full border border-gray-200 bg-creamy-white top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-3">
                  <span className=" text-xl font-bold">No reviews...yet</span>
                </div>
              )}
            </div>
          </div>

          <div className=" max-w-[500px] space-y-5">
            <h3 className=" text-2xl font-bold">Leave a review</h3>

            <div className=" relative min-h-[320px]">
              <ReviewFormLoadingOverlay
                isLoading={reviewsQuery.isLoading && detailsQuery.isLoading}
              />

              <ReviewForm mediaId={mediaId} mediaType={mediaType} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
