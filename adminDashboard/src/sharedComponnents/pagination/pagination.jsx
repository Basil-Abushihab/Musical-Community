/* eslint-disable react/prop-types */
import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function CircularPagination({ itemLength, paginatedDataFunction }) {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
    className: "rounded-full",
  });

  const next = () => {
    if (active === itemLength) return;
    setActive(active + 1);
    paginatedDataFunction(active);
  };

  const prev = () => {
    if (active === itemLength) return;

    setActive(active - 1);
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {" "}
        {Array.from({ length: itemLength }, (_, index) => (
          <IconButton
            onClick={() => paginatedDataFunction(index + 1)}
            key={index + 1}
            {...getItemProps(index + 1)}
          >
            {index + 1}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={active === itemLength}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
