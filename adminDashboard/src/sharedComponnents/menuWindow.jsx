import {
  Menu,
  MenuItem,
  MenuHandler,
  IconButton,
  MenuList,
} from "@material-tailwind/react";
import { MoreVertical } from "lucide-react";
export const MenuWindow = ({ menuItems }) => {
  return (
    <Menu placement="bottom-end">
      <MenuHandler>
        <IconButton variant="text" color="blue-gray">
          <MoreVertical className="h-5 w-5" />
        </IconButton>
      </MenuHandler>
      <MenuList>
        <MenuItem>View Details</MenuItem>
        <MenuItem className="text-red-500">
          {user.isDisabled ? "Enable Account" : "Disable Account"}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
