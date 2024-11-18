import {
  Input,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Select,
  Option,
} from "@material-tailwind/react";
import { RiFilterFill } from "react-icons/ri"; // Import a different filter icon (RiFilterFill)
import { useContext } from "react";
import { context } from "../Context-provider/context-provider";
import { useState } from "react";

export const FilteringSection = ({ isEquipment }) => {
  const [darkSide, setDarkside] = useContext(context).darkSide;
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(!isOpen);
  console.log(darkSide);

  return (
    <div className="flex items-center gap-10 w-[87%]">
      <Input
        className="w-full"
        variant="outline"
        label="Search"
        color="orange"
      />

      {/* Use a button and apply the color directly to the icon */}
      <button
        className="w-[3%] cursor-pointer text-orange-500 dark:text-white" // Apply orange and white colors
        onClick={handleOpen}
      >
        <RiFilterFill size={24} /> {/* Adjust size if needed */}
      </button>

      <Dialog
        open={isOpen}
        handler={handleOpen}
        className="bg-gray-200 dark:bg-gray-900"
      >
        <DialogHeader className="text-gray-900 dark:text-gray-200">
          Filter
        </DialogHeader>
        <DialogBody>
          <div className="flex flex-col w-full">
            <div className="flex justify-evenly">
              <div className="flex flex-col w-[40%]">
                <label className="dark:text-gray-200 text-gray-900 font-semibold">
                  Condition
                </label>
                <Select
                  name="condition"
                  id="condition"
                  className="h-[2.5rem] text-[1rem] bg-gray-200 outline-none"
                >
                  <Option value="Mint">Mint</Option>
                  <Option value="Excellent">Excellent</Option>
                  <Option value="Very Good">Very Good</Option>
                  <Option value="Good">Good</Option>
                  <Option value="Fair">Fair</Option>
                </Select>
              </div>
              <div className="flex flex-col w-[40%]">
                <label className="dark:text-gray-200 text-gray-900 font-semibold">
                  Equipment Type
                </label>
                <Select
                  name="Type"
                  id="condition"
                  className="w-[rem] h-[2.5rem] text-[1rem] bg-gray-200 outline-none"
                >
                  <Option value="Instruments">Instruments</Option>
                  <Option value="Equipment">Equipment</Option>
                  <Option value="Accessories">Accessories</Option>
                </Select>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="orange" onClick={handleOpen}>
            <span>Filter</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};
