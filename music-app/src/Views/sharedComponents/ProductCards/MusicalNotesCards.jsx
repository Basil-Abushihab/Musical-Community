import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
  Rating,
  Button,
} from "@material-tailwind/react";

export const NotesCards = ({ isHomePage, note }) => {
  const cardClassNames = isHomePage
    ? "flex-row w-[30rem] items-center bg-gray-200 dark:bg-gray-900 transition-all duration-700"
    : "flex-row w-[30rem] items-center bg-gray-900 dark:bg-gray-200 transition-all duration-700";
  const textClassNames = isHomePage
    ? "dark:text-gray-200 text-gray-900"
    : "dark:text-gray-900 text-gray-200";
  const buttonClassNames = isHomePage
    ? "bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-900"
    : "bg-blue-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-200";

  return (
    <Card className={cardClassNames}>
      <div className="w-[50%] flex flex-col gap-4 items-center">
        <img
          src={note.noteMedia}
          alt=""
          className="w-full h-full object-cover rounded-md"
        />

        <Typography className={textClassNames + " text-[1.3rem]"}>
          Price {note.price}
        </Typography>
      </div>
      <CardBody>
        <div
          className={`flex flex-col justify-between ${textClassNames} gap-2`}
        >
          <Typography className="text-[1rem]">
            Artist: {note.posterID?.username}
          </Typography>
          <div className="flex items-center justify-between gap-16">
            <Typography className="text-[1rem]">{note.noteRating}</Typography>
            <Rating value={note.noteRating} readonly />
          </div>
          <div className="flex flex-col gap-2">
            <Typography className="text-[1.2rem]">Description:</Typography>
            <Typography className="text-[1rem]">
              {note.noteDescription}
            </Typography>
          </div>
          <Button ripple={false} className={buttonClassNames}>
            Add To Cart
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
