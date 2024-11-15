import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export const WelcomeSection = () => {
  return (
    <Card className="bg-white shadow-lg w-full">
      <CardHeader
        variant="gradient"
        color="pink"
        className="mb-2 sm:mb-4 grid h-20 sm:h-28 place-items-center"
      >
        <div className="px-4 w-full text-center">
          <Typography
            variant="h3"
            color="white"
            className="text-xl sm:text-2xl md:text-3xl font-bold truncate"
          >
            Welcome back, Admin!
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="p-4 sm:p-6">
        <Typography
          variant="paragraph"
          className="text-gray-600 text-sm sm:text-base text-center sm:text-left"
        >
          Here's what's happening in your dashboard today
        </Typography>
      </CardBody>
    </Card>
  );
};
