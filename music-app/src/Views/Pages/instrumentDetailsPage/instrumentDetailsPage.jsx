import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Carousel,
  Card,
  CardBody,
  Spinner,
  Button,
  Textarea,
  Rating,
} from "@material-tailwind/react";

export const InstrumentDetailPage = () => {
  const { id } = useParams();

  // Mock data for testing
  const { status, instrument, error } = {
    status: "success",
    instrument: {
      instrumentTitle: "Acoustic Guitar",
      instrumentDescription:
        "A high-quality acoustic guitar with a rich sound and smooth finish. Perfect for beginners and professionals alike.",
      condition: "New",
      instrumentPrice: 299.99,
      instrumentMedia: [
        "https://images.pexels.com/photos/16027082/pexels-photo-16027082/free-photo-of-black-and-white-photo-of-professional-microp.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
        "https://media.csmusic.net/wp-content/uploads/2019/05/21165347/mic-e1558457657469.png",
      ],
    },
    error: null,
  };

  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  // Mock reviews data
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
        user: "Current User",
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
      <div className="flex justify-center items-center h-screen bg-white">
        <Spinner />
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
      {/* Instrument Details */}
      <Card className="w-full overflow-hidden mb-8 shadow-lg rounded-lg bg-white dark:bg-gray-800">
        <CardBody>
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            {/* Carousel Section */}
            <div className="w-full lg:w-1/2">
              <Carousel
                className="rounded-xl aspect-video text-orange-500 dark:text-white"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i
                            ? "w-8 bg-orange-500"
                            : "w-4 bg-white/50 dark:bg-gray-500"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                {instrument.instrumentMedia &&
                  instrument.instrumentMedia.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={instrument.instrumentTitle}
                      className="h-full w-full object-cover rounded-lg"
                    />
                  ))}
              </Carousel>
            </div>

            {/* Details Section */}
            <div className="w-full lg:w-1/2 text-gray-800 dark:text-gray-200">
              <Typography
                variant="h2"
                color="blue-gray"
                className="mb-4 font-semibold text-4xl text-gray-900 dark:text-gray-100"
              >
                {instrument.instrumentTitle}
              </Typography>
              <Typography
                variant="paragraph"
                color="blue-gray"
                className="mb-4 text-lg leading-relaxed dark:text-gray-300"
              >
                {instrument.instrumentDescription}
              </Typography>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 text-gray-600 dark:text-gray-400"
              >
                Condition: {instrument.condition}
              </Typography>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-4 text-2xl font-semibold text-orange-600 dark:text-orange-400"
              >
                Price: ${instrument.instrumentPrice}
              </Typography>
              <Button
                color="orange"
                ripple="light"
                className="mb-4 text-white hover:bg-orange-600"
              >
                Add To Cart
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Reviews Section */}
      <Card className="w-full overflow-hidden shadow-lg rounded-lg mb-8 bg-white dark:bg-gray-800">
        <CardBody>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-4 font-semibold text-xl text-gray-900 dark:text-gray-100"
          >
            Reviews
          </Typography>

          {/* Existing Reviews */}
          <div className="mb-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="mb-4 border-b pb-4 dark:border-gray-700"
              >
                <div className="flex items-center mb-2">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="font-semibold dark:text-gray-200"
                  >
                    {review.user}
                  </Typography>
                  <Rating
                    value={review.rating}
                    readonly
                    className="ml-2 text-orange-500"
                  />
                </div>
                <Typography
                  color="gray"
                  className="text-lg text-gray-600 dark:text-gray-400"
                >
                  {review.text}
                </Typography>
              </div>
            ))}
          </div>

          {/* Add Review Form */}
          <div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 font-semibold text-gray-800 dark:text-gray-200"
            >
              Add Your Review
            </Typography>
            <Rating
              value={rating}
              onChange={(value) => setRating(value)}
              className="mb-2"
              color="orange"
            />
            <Textarea
              label="Your Review"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="mb-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
            <Button
              color="orange"
              ripple="light"
              onClick={handleSubmitReview}
              className="text-white"
            >
              Submit Review
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
