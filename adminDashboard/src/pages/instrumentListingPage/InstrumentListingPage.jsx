import { useState } from "react";
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
// Main Component
export const InstrumentListingTable = () => {
  const [instruments] = useState([
    {
      id: 1,
      title: "Yamaha Grand Piano",
      requester: "John Doe",
      department: "Music Department",
      status: "pending",
      image: "/api/placeholder/100/100",
      details: "Professional grade grand piano for concert hall",
      requestDate: "2024-10-15",
    },
    {
      id: 2,
      title: "Gibson Les Paul",
      requester: "Jane Smith",
      department: "Band",
      status: "pending",
      image: "/api/placeholder/100/100",
      details: "Electric guitar for music lab",
      requestDate: "2024-10-16",
    },
    {
      id: 3,
      title: "Pearl Drum Set",
      requester: "Mike Johnson",
      department: "Jazz Band",
      status: "pending",
      image: "/api/placeholder/100/100",
      details: "Complete drum set for practice room",
      requestDate: "2024-10-17",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const TABLE_HEAD = [
    "Instrument",
    "Department",
    "Request Status",
    "Availability Status",
    "Request Date",
    "Actions",
  ];

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
            {instruments.map((instrument) => (
              <InstrumentCard key={instrument.id} instrument={instrument} />
            ))}
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
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
                {instruments.map((instrument, index) => (
                  <InstrumentCardsDesktop instrument={instrument} key={index} />
                ))}
              </tbody>
            </table>
            <CircularPagination itemLength={5} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
