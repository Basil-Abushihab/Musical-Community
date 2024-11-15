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
import { MoreVertical } from "lucide-react";

export const InstrumentCardsDesktop = ({ instrument }) => {
  return (
    <tr key={instrument.id} className="hover:bg-blue-gray-50/50">
      <td className="p-4">
        <div className="flex items-center gap-3">
          <img
            src={instrument.image}
            alt={instrument.title}
            className="h-12 w-12 rounded-lg object-cover"
          />
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {instrument.title}
            </Typography>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal opacity-70"
            >
              {instrument.requester}
            </Typography>
          </div>
        </div>
      </td>
      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {instrument.department}
        </Typography>
      </td>
      <td className="p-4">
        <Chip
          className="w-fit"
          size="sm"
          variant="filled"
          value={instrument.isApproved ? "Approved" : "Not Approved"}
          color={instrument.isApproved ? "green" : "red"}
        />
      </td>

      <td className="p-4">
        <Chip
          className="w-fit"
          size="sm"
          variant="filled"
          value={instrument.isSoldOut ? "Sold Out" : "Available"}
          color={instrument.isApproved ? "red" : "green"}
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
            <MenuItem>View Details</MenuItem>
            <MenuItem>Approve Request</MenuItem>
            <MenuItem className="text-red-500">Disapprove Request</MenuItem>
          </MenuList>
        </Menu>
      </td>
    </tr>
  );
};
