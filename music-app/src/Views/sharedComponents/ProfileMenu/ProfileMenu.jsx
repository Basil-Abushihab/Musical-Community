import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Custom-Hooks/authHooks/authHooks";
export const ProfileMenu = () => {
  const { auth } = useAuth();
  return (
    <Menu>
      <MenuHandler>
        <Typography className="cursor-pointer  bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 text-transparent font-[Pacifico] bg-clip-text">
          {auth.username}
        </Typography>
      </MenuHandler>
      <MenuList>
        <Link to="/ProfilePage">
          <MenuItem>Profile</MenuItem>
        </Link>
        <Link to="/">
          <MenuItem>Logout</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};
