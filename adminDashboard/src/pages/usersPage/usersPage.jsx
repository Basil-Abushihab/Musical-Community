import { useState, useMemo } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
  Avatar,
} from "@material-tailwind/react";
import { useGetUserCount } from "../../customHooks/userHooks/getUserCount";
import { useUser } from "../../customHooks/userHooks/useUser";
import { Search, MoreVertical } from "lucide-react";
import { UserCard } from "./components/UserCard";
import { CircularPagination } from "../../sharedComponnents/pagination/pagination";
import { useGetPaginatedUsers } from "../../customHooks/userHooks/getPaginatedUsers";
import { useDispatch, useSelector } from "react-redux";
import { setUserPageNumber } from "../../redux/slices/userSlice";
const TABLE_HEAD = ["User", "Account Status", "Actions"];
export const UsersPage = () => {
  const page = useSelector((state) => state.user.page);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const { disableOrEnableUser } = useUser();
  const count = useGetUserCount();
  const { users } = useGetPaginatedUsers(page);
  const setPage = (page) => {
    dispatch(setUserPageNumber(page));
  };

  const filteredUsers = useMemo(() => {
    if (!searchQuery) return users;
    return users.filter((instrument) =>
      instrument.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [users, searchQuery]);
  return (
    <div className="bg-blue-gray-50/50 min-h-screen p-4">
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-end">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="w-full md:w-72 flex justify-end">
                <Input
                  label="Search"
                  icon={<Search className="h-5 w-5" />}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-0">
          <div className="md:hidden px-4 h-[49rem] overflow-y-scroll">
            {filteredUsers?.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>

          <div className="hidden md:block h-[49rem] overflow-y-scroll">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredUsers?.map((user) => (
                  <tr key={user.id} className="hover:bg-blue-gray-50/50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={user.profilePicture}
                          alt={user.username}
                          size="sm"
                          className="border border-blue-gray-50 bg-blue-gray-50/50"
                        />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {user.username}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {user.email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Chip
                        size="sm"
                        variant="ghost"
                        value={user.isDisabled ? "Disabled" : "Enabled"}
                        color={user.isDisabled ? "red" : "blue"}
                      />
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
                              disableOrEnableUser(user);
                            }}
                            className="text-red-500"
                          >
                            {user.isDisabled
                              ? "Enable Account"
                              : "Disable Account"}
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex w-full justify-center">
              <CircularPagination
                paginatedDataFunction={setPage}
                itemLength={count}
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
