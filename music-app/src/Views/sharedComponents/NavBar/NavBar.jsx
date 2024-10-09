import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Menu } from "lucide-react";
import musicalLogo from "./assets/Musical-Note.png";
import Switcher from "../theme-selector/Switcher";
import { useAuth } from "../../../Custom-Hooks/authHooks";
import { ProfileMenu } from "../ProfileMenu/ProfileMenu";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("home");
  const navigate = useNavigate();
  const { auth } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Marketplace", path: "/Marketplace" },
    { name: "Community", path: "/" },
  ];

  return (
    <header className="flex justify-center items-center backdrop-blur-xl fixed w-full z-50 h-16">
      <nav className="flex justify-between items-center w-full px-4 h-full">
        <div className="flex items-center">
          <img
            src={musicalLogo}
            alt="Musical Logo"
            className="w-8 h-8 md:w-12 md:h-12"
          />
          <h1 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-pink-300 via-purple-300 to-pink-500 text-transparent bg-clip-text ml-2">
            Musical
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-lg ${
                selectedItem === item.name.toLowerCase()
                  ? "text-pink-400"
                  : "text-black dark:text-white hover:text-pink-400 transition-colors duration-300"
              }`}
              onClick={() => setSelectedItem(item.name.toLowerCase())}
            >
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {auth.isLoggedIn ? (
            <ProfileMenu />
          ) : (
            <>
              <Button
                onClick={() => navigate("/Signup")}
                color="secondary"
                variant="outlined"
                size="small"
              >
                Signup
              </Button>
            </>
          )}
          <Switcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black dark:text-white"
          onClick={toggleMenu}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-md">
          <ul className="flex flex-col items-center py-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`w-full text-center py-2 ${
                  selectedItem === item.name.toLowerCase()
                    ? "text-pink-400"
                    : "text-black dark:text-white hover:text-pink-400 transition-colors duration-300"
                }`}
                onClick={() => {
                  setSelectedItem(item.name.toLowerCase());
                  toggleMenu();
                }}
              >
                <li>{item.name}</li>
              </Link>
            ))}
            <div className="flex flex-col items-center gap-2 mt-4">
              {auth.isLoggedIn ? (
                <ProfileMenu />
              ) : (
                <>
                  <Button
                    onClick={() => {
                      navigate("/Signup");
                      toggleMenu();
                    }}
                    color="secondary"
                    variant="outlined"
                    fullWidth
                  >
                    Signup
                  </Button>
                </>
              )}
              <Switcher />
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
