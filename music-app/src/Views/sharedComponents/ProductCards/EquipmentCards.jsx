import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
  Button,
  Rating,
} from "@material-tailwind/react";
import Heart from "react-heart";
import { useState } from "react";
import { context } from "../Context-provider/context-provider";
import { useContext } from "react";
import { useCart } from "../../../Custom-Hooks/cartHooks/cartHooks";
export const EquipmentCards = ({ isHomePage, instrument, index }) => {
  const [isClick, setClick] = useState(false);
  const [darkSide, setDarkside] = useContext(context).darkSide;

  const { addItemToCartHandler } = useCart();
  const cardClassNames = isHomePage
    ? "w-96 h-[34rem] bg-gray-200 dark:bg-gray-900"
    : "w-96 h-[34rem] bg-gray-900 dark:bg-gray-200";
  const textClassNames = isHomePage
    ? "text-gray-900 dark:text-gray-200"
    : "text-gray-200 dark:text-gray-900";
  const buttonClassNames = isHomePage
    ? "bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-900"
    : "bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-200";

  return (
    <Card className={cardClassNames}>
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={instrument.instrumentMedia}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className={textClassNames}>
        <div className="mb-2 flex items-center justify-between">
          <Typography className="font-medium">
            {instrument.instrumentTitle}
          </Typography>
          <Typography className="font-medium">{`$ ${instrument.instrumentPrice}`}</Typography>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <Typography className="font-medium">Seller</Typography>
          <div className="flex items-center">
            <Typography className="font-medium">
              {instrument.posterID?.username}
            </Typography>
          </div>
        </div>
        <div className="flex justify-end items-center gap-2">
          <Typography className="text-[1rem]">
            {instrument.rating} Rating
          </Typography>
          <Rating value={instrument.rating} readonly />
        </div>
      </CardBody>
      <CardFooter className="pt-0 flex gap-4">
        <Button
          ripple={false}
          fullWidth={true}
          className={buttonClassNames}
          onClick={() => {
            const cartItem = {
              quantity: 1,
              itemName: instrument.instrumentTitle,
              price: instrument.instrumentPrice,
              id: index,
            };

            addItemToCartHandler(cartItem);
          }}
        >
          Add to Cart
        </Button>
        <div className="w-[1.9rem] flex justify-end ">
          <Heart
            isActive={isClick}
            onClick={() => setClick(!isClick)}
            inactiveColor={
              isHomePage
                ? darkSide
                  ? "white"
                  : "black"
                : darkSide
                ? "black"
                : "white"
            }
          />
        </div>
      </CardFooter>
    </Card>
  );
};
