import React, { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Spinner,
} from "@material-tailwind/react";
import { EquipmentForm } from "../makeEquipmentListingPage/equipmentForm";
import { useUser } from "../../../Custom-Hooks/userHooks/userHooks";
import { NoteForm } from "../makeMusicalNoteForm/makeMusicalNoteForm";

const ProfileSection = ({ title, items }) => (
  <Card className="w-full mt-6 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-500">
    <CardBody>
      <Typography variant="h5" color="white" className="mb-4 font-bold">
        {title}
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <Card key={index} className="overflow-hidden bg-white bg-opacity-90">
            <CardBody>
              <Typography variant="h6" color="blue-gray" className="mb-2">
                {item.name}
              </Typography>
              <Typography variant="paragraph" color="gray" className="mb-2">
                {item.description}
              </Typography>
              <Typography
                variant="small"
                className="text-pink-500 font-semibold"
              >
                Price: ${item.price}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </CardBody>
  </Card>
);

export const ProfilePage = () => {
  const user = useUser();

  const [listedItems, setListedItems] = useState([
    {
      name: "Acoustic Guitar",
      description: "Barely used, great condition",
      price: 299.99,
    },
    {
      name: "Electric Drum Kit",
      description: "Perfect for apartment practice",
      price: 599.99,
    },
  ]);

  const [offeredNotes, setOfferedNotes] = useState([
    {
      name: "Jazz Piano Basics",
      description: "Learn jazz piano fundamentals",
      price: 49.99,
    },
    {
      name: "Guitar Chord Progressions",
      description: "Master common progressions",
      price: 29.99,
    },
  ]);

  const [purchasedItems, setPurchasedItems] = useState([
    { name: "Digital Piano", description: "88 weighted keys", price: 799.99 },
  ]);

  const [purchasedNotes, setPurchasedNotes] = useState([
    {
      name: "Music Theory 101",
      description: "Comprehensive theory course",
      price: 79.99,
    },
  ]);

  return (
    <>
      {user.status === "pending" ? (
        <div className="flex justify-center items-center h-screen">
          <Typography variant="h5" color="gray">
            <Spinner color="pink"></Spinner>
          </Typography>
        </div>
      ) : user.status === "rejected" ? (
        <div className="flex justify-center items-center h-screen">
          <Typography variant="h5" color="red">
            Error loading user data.
          </Typography>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen pt-24">
          {/* Rest of your component content */}
          <Card className="overflow-hidden bg-gradient-to-r from-pink-300 via-purple-300 to-pink-500">
            <CardBody className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src={user.user.profilePicture}
                  alt={`${user.user.username}'s profile`}
                  className="rounded-full w-48 h-48 object-cover border-4 border-white"
                />
              </div>
              <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-6 text-white">
                <Typography
                  variant="h4"
                  color="white"
                  className="mb-2 font-bold"
                >
                  {user.user.username}
                </Typography>
                <Typography
                  variant="paragraph"
                  color="white"
                  className="mb-4 opacity-80"
                >
                  {user.user.phone}
                </Typography>
                <div className="flex gap-5">
                  <Button
                    color="white"
                    className="text-pink-500 hover:bg-pink-50"
                  >
                    Edit Profile
                  </Button>
                  <EquipmentForm />
                  <NoteForm />
                </div>
              </div>
            </CardBody>
          </Card>

          <ProfileSection title="Listed Musical Items" items={listedItems} />
          <ProfileSection title="Offered Musical Notes" items={offeredNotes} />
          <ProfileSection
            title="Purchased Musical Items"
            items={purchasedItems}
          />
          <ProfileSection
            title="Purchased Musical Notes"
            items={purchasedNotes}
          />
        </div>
      )}
    </>
  );
};

export default ProfilePage;
