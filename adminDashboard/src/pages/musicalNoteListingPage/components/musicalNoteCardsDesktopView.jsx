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
import { useMusicalNote } from "../../../customHooks/musicalNoteHooks/useMusicalNote";
export const MusicalNoteCardsDesktop = ({ musicalNote }) => {
  const { handleApprove, handleReject } = useMusicalNote(musicalNote._id);
  const [isApproved, setIsApproved] = useState(musicalNote.isApproved);
  return (
    <tr key={musicalNote._id} className="hover:bg-blue-gray-50/50">
      <td className="p-4">
        <div className="flex items-center gap-3">
          <img
            src={musicalNote.noteMedia}
            alt={musicalNote.noteTitle}
            className="h-12 w-12 rounded-lg object-cover"
          />
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {musicalNote.noteTitle}
            </Typography>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal opacity-70"
            >
              {musicalNote.posterID?.username}
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
        <Typography variant="small" color="blue-gray" className="font-normal">
          {musicalNote.requestDate}
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
                handleApprove();
                setIsApproved(true);
              }}
            >
              Approve Request
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleReject();
                setIsApproved(false);
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
