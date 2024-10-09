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
import { useGetNoteByID } from "../../../Custom-Hooks/getNoteByIDHook";

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
        user: "Current User", // Replace with actual user data
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
      <div className="flex justify-center items-center h-screen">
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

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen pt-20">
      <Card className="w-full overflow-hidden mb-8">
        <CardBody>
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            <div className="w-full lg:w-1/3 flex flex-col items-center">
              <Music size={100} className="text-blue-500 mb-4" />
              <Typography variant="h2" color="blue-gray" className="mb-2">
                {note.noteTitle}
              </Typography>
              <div className="flex items-center mb-2">
                <Rating value={Math.round(averageRating)} readonly size="lg" />
                <Typography color="blue-gray" className="ml-2">
                  ({averageRating.toFixed(1)})
                </Typography>
              </div>
            </div>

            <div className="w-full lg:w-2/3">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Description
              </Typography>
              <Typography
                variant="paragraph"
                color="blue-gray"
                className="mb-4"
              >
                {note.noteDescription}
              </Typography>

              <Button
                color="white"
                ripple="light"
                className="mb-4 text-pink-500 hover:bg-pink-50"
                onClick={() => {
                  // In a real application, this would play the audio sample
                  console.log("Playing audio sample");
                }}
              >
                Add to cart
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
              value={userRating}
              onChange={(value) => setUserRating(value)}
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

export default MusicalNoteDetailPage;
