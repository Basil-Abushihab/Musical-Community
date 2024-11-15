/* eslint-disable react/prop-types */

import {
  Card,
  Typography,
  Menu,
  MenuHandler,
  IconButton,
  MenuItem,
  MenuList,
  Chip,
} from "@material-tailwind/react";

import { MoreVertical } from "lucide-react";

export const InstrumentCard = ({ instrument }) => {
  return (
    <Card className="p-4 mb-4">
      <div className="flex items-center gap-4">
        <img
          src={instrument.image}
          alt={instrument.title}
          className="h-16 w-16 rounded-lg object-cover"
        />
        <div className="flex-1">
          <Typography variant="h6" color="blue-gray" className="mb-1">
            {instrument.title}
          </Typography>
          <Typography variant="small" color="gray" className="mb-2">
            Requested by: {instrument.requester}
          </Typography>
          <div className="flex flex-wrap gap-2 mb-2">
            <Chip
              variant="filled"
              size="sm"
              value={instrument.status}
              color="blue"
            />
          </div>
        </div>
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
      </div>
    </Card>
  );
};
