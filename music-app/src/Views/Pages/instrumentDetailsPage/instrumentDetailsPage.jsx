import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Carousel,
  Card,
  CardBody,
  CardFooter,
  Spinner,
  Button,
  Textarea,
  Rating,
} from "@material-tailwind/react";
import { useGetInstrumentByID } from "../../../Custom-Hooks/instrumentHooks/getInstrumentsByIdHook";

export const InstrumentDetailPage = () => {
  const { id } = useParams();
  const { status, instrument, error } = useGetInstrumentByID(id);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  // Mock reviews data (replace with actual data from your backend)
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "John Doe",
      rating: 4,
      text: "Great instrument! Sounds amazing.",
    },
    {
      id: 2,
      user: "Jane Smith",
      rating: 5,
      text: "Excellent quality and fast shipping.",
    },
  ]);

  const handleSubmitReview = () => {
    if (reviewText && rating) {
      const newReview = {
        id: reviews.length + 1,
        user: "Current User", // Replace with actual user data
        rating: rating,
        text: reviewText,
      };
      setReviews([...reviews, newReview]);
      setReviewText("");
      setRating(0);
    }
  };

  if (status === "pending") {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner></Spinner>
      </div>
    );
  }

  if (status === "rejected") {
    return (
      <div className="flex justify-center items-center h-screen">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen pt-20">
      <Card className="w-full overflow-hidden mb-8">
        <CardBody>
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            <div className="w-full lg:w-1/2">
              <Carousel
                className="rounded-xl aspect-video"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                {instrument.instrumentMedia &&
                  instrument.instrumentMedia.map((image, index) => (
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img
                      key={index}
                      src={image}
                      alt={`${instrument.instrumentTitle}`}
                      className="h-full w-full object-cover"
                    />
                  ))}
              </Carousel>
            </div>

            <div className="w-full lg:w-1/2 ">
              <Typography variant="h2" color="blue-gray" className="mb-4">
                {instrument.instrumentTitle}
              </Typography>
              <Typography
                variant="paragraph"
                color="blue-gray"
                className="mb-4"
              >
                Description:
                {instrument.instrumentDescription}
              </Typography>

              <Typography variant="h6" color="blue-gray" className="mb-2">
                Condition: {instrument.condition}
              </Typography>

              <Typography variant="h4" color="blue-gray" className="mb-4">
                Price: ${instrument.instrumentPrice}
              </Typography>

              <Button
                color="white"
                ripple="light"
                className="mb-4 text-pink-500 hover:bg-pink-50"
              >
                Add To Cart
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Reviews Section */}
      <Card className="w-full overflow-hidden">
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-4">
            Reviews
          </Typography>

          {/* Existing Reviews */}
          <div className="mb-6">
            {reviews.map((review) => (
              <div key={review.id} className="mb-4 border-b pb-4">
                <div className="flex items-center mb-2">
                  <Typography variant="h6" color="blue-gray">
                    {review.user}
                  </Typography>
                  <Rating value={review.rating} readonly className="ml-2" />
                </div>
                <Typography color="gray">{review.text}</Typography>
              </div>
            ))}
          </div>

          {/* Add Review Form */}
          <div>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Add Your Review
            </Typography>
            <Rating
              value={rating}
              onChange={(value) => setRating(value)}
              className="mb-2"
            />
            <Textarea
              label="Your Review"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="mb-2"
            />
            <Button color="blue" ripple="light" onClick={handleSubmitReview}>
              Submit Review
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
