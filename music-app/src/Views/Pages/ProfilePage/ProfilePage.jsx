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
  <div className="w-full mt-8">
    <Typography
      variant="h5"
      color="orange"
      className="mb-4 font-bold transition-colors duration-300 dark:text-orange-400"
    >
      {title}
    </Typography>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl"
        >
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-2 font-semibold dark:text-white"
          >
            {item.name}
          </Typography>
          <Typography
            variant="paragraph"
            color="gray"
            className="mb-4 text-sm dark:text-gray-300"
          >
            {item.description}
          </Typography>
          <Typography
            variant="small"
            className="text-orange-500 font-semibold dark:text-orange-400"
          >
            ${item.price}
          </Typography>
        </div>
      ))}
    </div>
  </div>
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

  if (user.status === "pending") {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner color="orange" />
      </div>
    );
  }

  if (user.status === "error") {
    return (
      <div className="flex justify-center items-center h-screen">
        <Typography variant="h5" color="red" className="text-red-500">
          Error loading user data.
        </Typography>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 min-h-screen pt-16 dark:bg-gray-900 dark:text-white">
      {/* Profile Card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 flex flex-col md:flex-row items-center w-full transition-all duration-300 dark:hover:shadow-2xl mt-14">
        <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
          <img
            src={user.user.profilePicture}
            alt={`${user.user.username}'s profile`}
            className="rounded-full w-40 h-40 object-cover border-4 border-orange-500 dark:border-gray-700"
          />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <Typography
            variant="h4"
            color="black"
            className="mb-2 font-bold dark:text-white"
          >
            {user.user.username}
          </Typography>
          <Typography
            variant="paragraph"
            color="gray"
            className="mb-4 opacity-80 dark:text-gray-300"
          >
            {user.user.phone}
          </Typography>
          <div className="flex justify-center md:justify-start gap-4">
            <Button
              color="orange"
              className="text-white hover:bg-orange-600 transition-all dark:hover:bg-orange-500"
            >
              Edit Profile
            </Button>
            <EquipmentForm />
            <NoteForm />
          </div>
        </div>
      </div>

      {/* Profile Sections */}
      <ProfileSection title="Listed Musical Items" items={listedItems} />
      <ProfileSection title="Offered Musical Notes" items={offeredNotes} />
      <ProfileSection title="Purchased Musical Items" items={purchasedItems} />
      <ProfileSection title="Purchased Musical Notes" items={purchasedNotes} />
    </div>
  );
};

export default ProfilePage;
