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
        <Typography className="cursor-pointer  bg-gradient-to-r from-pink-300 via-purple-300 to-pink-500 text-transparent bg-clip-text">
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
