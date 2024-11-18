/* eslint-disable react/prop-types */
import {
  Menu,
  Typography,
  MenuList,
  MenuItem,
  MenuHandler,
  IconButton,
  Chip,
} from "@material-tailwind/react";
import { useState } from "react";
import { MoreVertical } from "lucide-react";
import { useInstrument } from "../../../customHooks/instrumentHooks/useInstrument";

export const InstrumentCardsDesktop = ({ instrument }) => {
  const { handleApprove, handleReject } = useInstrument(instrument._id);
  const [isApproved, setIsApproved] = useState(instrument.isApproved);
  return (
    <tr key={instrument._id} className="hover:bg-blue-gray-50/50">
      <td className="p-4">
        <div className="flex items-center gap-3">
          <img
            src={instrument.instrumentMedia}
            alt={instrument.instrumentTitle}
            className="h-12 w-12 rounded-lg object-cover"
          />
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {instrument.instrumentTitle}
            </Typography>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal opacity-70"
            >
              {instrument.posterID.username}
            </Typography>
          </div>
        </div>
      </td>
      <td className="p-4">
        <Chip
          className="w-fit"
          size="sm"
          variant="filled"
          value={isApproved ? "Approved" : "Not Approved"}
          color={isApproved ? "green" : "red"}
        />
      </td>

      <td className="p-4">
        <Chip
          className="w-fit"
          size="sm"
          variant="filled"
          value={instrument.isSoldOut ? "Sold Out" : "Available"}
          color={instrument.isSoldOut ? "red" : "green"}
        />
      </td>
      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {instrument.requestDate}
        </Typography>
      </td>
      <td className="p-4">
        <Menu placement="bottom-end">
          <MenuHandler>
            <IconButton variant="text" color="blue-gray">
              <MoreVertical className="h-5 w-5" />
            </IconButton>
          </MenuHandler>
          <MenuList>
            <MenuItem
              onClick={() => {
                setIsApproved(true);
                handleApprove();
              }}
            >
              Approve Request
            </MenuItem>
            <MenuItem
              onClick={() => {
                setIsApproved(false);
                handleReject();
              }}
              className="text-red-500"
            >
              Disapprove Request
            </MenuItem>
          </MenuList>
        </Menu>
      </td>
    </tr>
  );
};
