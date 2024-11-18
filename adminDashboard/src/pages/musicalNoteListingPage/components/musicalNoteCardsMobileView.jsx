/* eslint-disable react/prop-types */

import {
  Card,
  Typography,
  Menu,
  MenuHandler,
  IconButton,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useInstrument } from "../../../customHooks/instrumentHooks/useInstrument";
import { MoreVertical } from "lucide-react";
export const MusicalNoteCard = ({ musicalNote }) => {
  const { handleApprove, handleReject } = useInstrument(musicalNote._id);
  return (
    <Card className="p-4 mb-4">
      <div className="flex items-center gap-4">
        <img
          src={musicalNote.noteMedia}
          alt={musicalNote.noteTitle}
          className="h-16 w-16 rounded-lg object-cover"
        />
        <div className="flex-1">
          <Typography variant="h6" color="blue-gray" className="mb-1">
            {musicalNote.noteTitle}
          </Typography>
          <Typography variant="small" color="gray" className="mb-2">
            Requested by: {musicalNote?.posterID?.username}
          </Typography>
        </div>
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
              }}
            >
              Approve Request
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleReject();
              }}
              className="text-red-500"
            >
              Disapprove Request
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </Card>
  );
};
