import { usePostReview } from "../../hooks/usePostReview";
import { queryClient } from "../../App";
import { MdErrorOutline as ErrorIcon } from "react-icons/md";
import { useContext } from "react";
import { PageSuccessMessageContext } from "../../contexts/PageSuccessMessageContext";

export const ReviewForm = ({ mediaId, mediaType }) => {
  const { setSuccessMessage } = useContext(PageSuccessMessageContext);

  const {
    mutation,
    errorMessage,
    setTitle,
    setReview,
    setRating,
    title,
    review,
    rating,
  } = usePostReview(onSuccessfulReviewPosting);

  // Event from successful review posting
  function onSuccessfulReviewPosting(data) {
    setSuccessMessage({ message: "Thank you for your review", isOpen: true });

    setTimeout(() => {
      setSuccessMessage((data) => {
        return { ...data, isOpen: false };
      });
    }, 6000);

    queryClient.setQueryData(["reviews", mediaType, mediaId], data);
  }

  // // Handler for posting review
  function addReviewHandler(e) {
    e.preventDefault();
    mutation.mutate({ mediaId, mediaType, title, review, rating });
  }

  return (
    <>
      {errorMessage && (
        <div className=" bg-red-500 py-2 text-center rounded-sm flex gap-2 justify-center">
          <span className=" text-white font-semibold text-lg">
            {errorMessage}
          </span>
          <ErrorIcon color="white" size={30} />
        </div>
      )}

      <form className=" space-y-2" onSubmit={addReviewHandler}>
        <input
          type="text"
          placeholder="Title"
          className=" border border-gray-300 rounded-sm w-full py-1 px-3 outline-none bg-white"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          maxLength={25}
        />

        <textarea
          name="review"
          id="review"
          placeholder="Whats your thougths?"
          className=" border border-gray-300 rounded-sm w-full px-3 py-2 resize-none h-[200px] outline-none bg-white"
          onChange={(e) => setReview(e.target.value)}
          value={review}
          maxLength={300}
        />

        <div className=" max-w-[180px]">
          <button className=" bg-white border border-gray-300 rounded-sm w-full py-3 hover:bg-black hover:text-white duration-150">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
