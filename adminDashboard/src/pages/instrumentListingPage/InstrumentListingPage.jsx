import { useState, useMemo } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
} from "@material-tailwind/react";
import { Search } from "lucide-react";
import { InstrumentCard } from "./components/instrumentCardsMobileView";
import { InstrumentCardsDesktop } from "./components/instrumentCardsDesktopView";
import { CircularPagination } from "../../sharedComponnents/pagination/pagination";
import { useGetPaginatedInstruments } from "../../customHooks/instrumentHooks/getPaginatedInstrumentsHook";
import { useGetInstrumentCount } from "../../customHooks/instrumentHooks/useGetInstrumentCount";
import { useDispatch, useSelector } from "react-redux";
import { setInstrumentPageNumber } from "../../redux/slices/instrumentSlice";

export const InstrumentListingTable = () => {
  const page = useSelector((state) => state.instrument.page);
  const { instruments } = useGetPaginatedInstruments(page);
  const [searchQuery, setSearchQuery] = useState("");
  const count = useGetInstrumentCount();
  const dispatch = useDispatch();

  const TABLE_HEAD = [
    "Instrument",
    "Request Status",
    "Availability Status",
    "Request Date",
    "Actions",
  ];

  const setPageNumber = (page) => {
    dispatch(setInstrumentPageNumber(page));
  };

  const filteredInstruments = useMemo(() => {
    if (!searchQuery) return instruments;
    return instruments.filter((instrument) =>
      instrument.instrumentTitle
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  }, [instruments, searchQuery]);

  return (
    <div className="bg-blue-gray-50/50 min-h-screen p-4">
      <Card className="h-full w-full ">
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
        <CardBody className="px-0  ">
          <div className="md:hidden px-4 overflow-y-scroll">
            {filteredInstruments?.map((instrument) => (
              <InstrumentCard key={instrument.id} instrument={instrument} />
            ))}
          </div>

          <div className="hidden md:block overflow-y-scroll h-[48rem]">
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
                {filteredInstruments?.map((instrument, index) => (
                  <InstrumentCardsDesktop instrument={instrument} key={index} />
                ))}
              </tbody>
            </table>
            <div className="flex w-full justify-center">
              <CircularPagination
                paginatedDataFunction={setPageNumber}
                itemLength={count}
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
