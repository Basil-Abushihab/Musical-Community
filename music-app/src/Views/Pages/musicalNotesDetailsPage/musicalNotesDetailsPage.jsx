import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Card,
  CardBody,
  Spinner,
  Button,
  Textarea,
  Rating,
} from "@material-tailwind/react";
import { Music } from "lucide-react";

// Mock hook for demonstration purposes
const useGetNoteByID = (id) => {
  const mockNote = {
    noteTitle: "C Major Scale",
    noteDescription:
      "The C major scale is one of the most common and fundamental scales in music. It contains the notes C, D, E, F, G, A, and B.",
  };

  return {
    status: "success",
    note: mockNote,
    error: null,
  };
};

export const MusicalNoteDetailPage = () => {
  const { id } = useParams();
  const { status, note, error } = useGetNoteByID(id);
  const [reviewText, setReviewText] = useState("");
  const [userRating, setUserRating] = useState(0);

  const [reviews, setReviews] = useState([
    { id: 1, user: "Musician123", rating: 5, text: "Perfect pitch reference!" },
    { id: 2, user: "TunerPro", rating: 4, text: "Clear tone, very useful." },
  ]);

  const handleSubmitReview = () => {
    if (reviewText && userRating) {
      const newReview = {
        id: reviews.length + 1,
        user: "Current User",
        rating: userRating,
        text: reviewText,
      };
      setReviews([...reviews, newReview]);
      setReviewText("");
      setUserRating(0);
    }
  };

  if (status === "pending") {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
        <Spinner />
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 text-red-500">
        Error: {error}
      </div>
    );
  }

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen pt-20  dark:bg-gray-900">
      <Card className="w-full overflow-hidden mb-8 shadow-lg rounded-lg bg-orange-50 dark:bg-gray-800">
        <CardBody>
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            <div className="w-full lg:w-1/3 flex flex-col items-center">
              <Music
                size={100}
                className="text-brown-600 dark:text-orange-500 mb-4"
              />
              <Typography
                variant="h2"
                color="brown"
                className="mb-2 font-bold text-orange-600 dark:text-white"
              >
                {note.noteTitle}
              </Typography>
              <div className="flex items-center mb-2">
                <Rating value={Math.round(averageRating)} readonly size="lg" />
                <Typography
                  color="brown"
                  className="ml-2 text-brown-500 dark:text-white"
                >
                  ({averageRating.toFixed(1)})
                </Typography>
              </div>
            </div>

            <div className="w-full lg:w-2/3">
              <Typography
                variant="h4"
                color="brown"
                className="mb-2 font-semibold text-orange-500 dark:text-orange-400"
              >
                Description
              </Typography>
              <Typography
                variant="paragraph"
                color="gray"
                className="mb-4 text-gray-700 dark:text-gray-300"
              >
                {note.noteDescription}
              </Typography>

              <Button
                color="orange"
                ripple="light"
                className="mb-4 bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
                onClick={() => {}}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Reviews Section */}
      <Card className="w-full overflow-hidden shadow-lg rounded-lg bg-white dark:bg-gray-800">
        <CardBody>
          <Typography
            variant="h4"
            color="brown"
            className="mb-4 font-semibold text-brown-600 dark:text-orange-400"
          >
            Reviews
          </Typography>

          {/* Existing Reviews */}
          <div className="mb-6">
            {reviews.map((review) => (
              <div key={review.id} className="mb-4 border-b pb-4">
                <div className="flex items-center mb-2">
                  <Typography
                    variant="h6"
                    color="brown"
                    className="font-bold text-brown-500 dark:text-orange-400"
                  >
                    {review.user}
                  </Typography>
                  <Rating
                    value={review.rating}
                    readonly
                    className="ml-2 text-brown-500 dark:text-orange-400"
                  />
                </div>
                <Typography
                  color="gray"
                  className="text-gray-700 dark:text-gray-300"
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
              color="brown"
              className="mb-2 font-semibold text-brown-500 dark:text-orange-400"
            >
              Add Your Review
            </Typography>
            <Rating
              value={userRating}
              onChange={(value) => setUserRating(value)}
              className="mb-2 text-brown-500 dark:text-orange-400"
            />
            <Textarea
              label="Your Review"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="mb-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
            <Button
              color="orange"
              ripple="light"
              onClick={handleSubmitReview}
              className="bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
            >
              Submit Review
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default MusicalNoteDetailPage;
