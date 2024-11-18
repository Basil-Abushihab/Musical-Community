import { useState, useMemo } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Search } from "lucide-react";
import { MusicalNoteCard } from "./components/musicalNoteCardsMobileView";
import { MusicalNoteCardsDesktop } from "./components/musicalNoteCardsDesktopView";
import { CircularPagination } from "../../sharedComponnents/pagination/pagination";
import { useGetPaginatedNotes } from "../../customHooks/musicalNoteHooks/getPaginatedMusicalNotes";
import { useGetNoteCount } from "../../customHooks/musicalNoteHooks/getNoteCount";
import { setNotePageNumber } from "../../redux/slices/musicalNoteSlice";
import { useSelector } from "react-redux";
// Main Component
export const MusicalNoteListingTable = () => {
  const page = useSelector((state) => state.musicalNote.page);
  const { musicalNotes } = useGetPaginatedNotes(page);
  const count = useGetNoteCount();
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const setPage = (page) => {
    dispatch(setNotePageNumber(page));
  };

  const TABLE_HEAD = [
    "Instrument",
    "Request Status",
    "Request Date",
    "Actions",
  ];

  const filteredMusicalNotes = useMemo(() => {
    if (!searchQuery) return musicalNotes;
    return musicalNotes.filter((instrument) =>
      instrument.noteTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [musicalNotes, searchQuery]);

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
          {/* Mobile View */}
          <div className="md:hidden px-4">
            {filteredMusicalNotes?.map((musicalNote) => (
              <MusicalNoteCard key={musicalNote.id} musicalNote={musicalNote} />
            ))}
          </div>

          {/* Desktop View */}
          <div className="hidden md:block overflow-y-scroll h-[49rem]">
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
                {filteredMusicalNotes?.map((musicalNote, index) => (
                  <MusicalNoteCardsDesktop
                    musicalNote={musicalNote}
                    key={index}
                  />
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
