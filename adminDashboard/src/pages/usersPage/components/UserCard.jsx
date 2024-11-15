/* eslint-disable react/prop-types */
import {
  Card,
  Typography,
  CardBody,
  Avatar,
  Menu,
  MenuHandler,
  IconButton,
  MenuList,
  MenuItem,
  Chip,
} from "@material-tailwind/react";

import { MoreVertical } from "lucide-react";

export const UserCard = ({ user }) => (
  <Card className="mb-4">
    <CardBody>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <Avatar
            src={user.profilePicture}
            alt={user.username}
            size="md"
            className="border border-blue-gray-50 bg-blue-gray-50/50"
          />
          <div>
            <Typography variant="h6" color="blue-gray">
              {user.username}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {user.email}
            </Typography>
          </div>
        </div>
        <Menu placement="bottom-end">
          <MenuHandler>
            <IconButton variant="text" color="blue-gray">
              <MoreVertical className="h-5 w-5" />
            </IconButton>
          </MenuHandler>
          <MenuList>
            <MenuItem className="text-red-500">
              {user.isDisabled ? "Enable Account" : "Disable Account"}
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <Typography variant="small" color="blue-gray">
            Status
          </Typography>
          <Chip
            size="sm"
            variant="ghost"
            value={user.isActive ? "Active" : "Inactive"}
            color={user.isActive ? "green" : "blue-gray"}
          />
        </div>
        <div className="flex justify-between items-center">
          <Typography variant="small" color="blue-gray">
            Account Status
          </Typography>
          <Chip
            size="sm"
            variant="ghost"
            value={user.isDisabled ? "Disabled" : "Enabled"}
            color={user.isDisabled ? "red" : "blue"}
          />
        </div>
        <div className="flex justify-between items-center">
          <Typography variant="small" color="blue-gray">
            Last Active
          </Typography>
          <Typography variant="small" color="blue-gray">
            {user.lastActive}
          </Typography>
        </div>
      </div>
    </CardBody>
  </Card>
);
