import { useInstrument } from "../../../Custom-Hooks/instrumentHooks/instrumentHooks";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Option,
  Textarea,
  Select,
} from "@material-tailwind/react";

export const EquipmentForm = () => {
  const [formData, setFormData] = useState(new FormData());
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const { instrument, makeInstrumentListingHandler } = useInstrument(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    const newFormData = formData;
    newFormData.set(name, value);

    setFormData(newFormData);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        color="orange"
        className="text-white hover:bg-orange-600"
      >
        Make Equipment Listing
      </Button>
      <Dialog open={open} handler={handleOpen} size="xl">
        <form onSubmit={makeInstrumentListingHandler}>
          <DialogHeader className="text-2xl font-bold text-center text-white bg-orange-500 py-4">
            Sell Your Musical Equipment
          </DialogHeader>
          <DialogBody divider className="grid gap-4 p-6">
            <Input
              type="text"
              label="Instrument Title"
              name="instrumentTitle"
              onChange={handleInputChange}
              required
              className="w-full"
            />
            <Textarea
              label="Instrument Description"
              name="instrumentDescription"
              onChange={handleInputChange}
              required
              className="w-full"
            />
            <Select
              label="Instrument Condition"
              name="instrumentCondition"
              onChange={(value) =>
                handleInputChange({
                  target: { name: "instrumentCondition", value },
                })
              }
              required
              className="w-full"
            >
              <Option value="new">New</Option>
              <Option value="excellent">Excellent</Option>
              <Option value="good">Good</Option>
              <Option value="fair">Fair</Option>
              <Option value="poor">Poor</Option>
            </Select>
            <Input
              type="file"
              label="Instrument Media"
              name="instrumentMedia"
              onChange={handleInputChange}
              accept="image/*"
              required
              className="w-full"
            />
            <Input
              type="number"
              label="Instrument Price ($)"
              name="instrumentPrice"
              onChange={handleInputChange}
              required
              className="w-full"
            />
          </DialogBody>
          <DialogFooter className="flex justify-end space-x-2 p-4">
            <Button
              variant="outlined"
              color="orange"
              onClick={handleOpen}
              className="mr-1"
            >
              Cancel
            </Button>
            <Button type="submit" variant="gradient" color="orange">
              List Instrument
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};
