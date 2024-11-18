import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import musicalLogo from "./assets/Musical-Note.png";
import musicalLogoDark from "./assets/Musical-Note-Dark.png";
import Switcher from "../theme-selector/Switcher";
import { useAuth } from "../../../Custom-Hooks/authHooks/authHooks";
import { ProfileMenu } from "../ProfileMenu/ProfileMenu";
import { CheckoutDialog } from "../../Pages/checkoutDialog/checkoutDialog";
import { useContext } from "react";
import { context } from "../Context-provider/context-provider"; // Assuming the context is in this path

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("home");
  const navigate = useNavigate();
  const { auth } = useAuth();

  // Access the darkSide value from the context
  const [darkSide, setDarkSide] = useContext(context).darkSide;

  // Audio reference
  const audioRef = useRef(new Audio("/click-sound.mp3"));

  // Alert message state
  const [alertVisible, setAlertVisible] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Marketplace", path: "/Marketplace" },
    { name: "Musical Notes Player", path: "/MusicalNotesPlayer" },
    { name: "About Us", path: "/aboutUs" },
  ];

  const Button = ({ onClick, children, variant, size, className }) => {
    const baseStyles =
      "font-semibold rounded-md focus:outline-none transition-all duration-300";

    const sizeClasses =
      size === "small" ? "px-3 py-1.5 text-xs" : "px-6 py-3 text-lg";

    const gradientClasses =
      "bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600";

    const variantClasses =
      variant === "outlined"
        ? "border-2 border-orange-500 text-orange-500 hover:bg-orange-100"
        : `${gradientClasses} text-white hover:from-orange-500 hover:to-orange-700`;

    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${sizeClasses} ${variantClasses} ${className}`}
      >
        {children}
      </button>
    );
  };

  const handleTitleClick = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    navigate("/");
  };

  useEffect(() => {
    setAlertVisible(true);
    const timer = setTimeout(() => {
      setAlertVisible(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="flex justify-center items-center backdrop-blur-xl fixed w-full z-50 h-16 shadow-lg">
      <nav className="flex justify-between items-center w-full px-6 md:px-12 h-full">
        {/* Logo and Title with Link */}
        <div className="flex items-center gap-2">
          <img
            src={darkSide ? musicalLogoDark : musicalLogo}
            alt="Musical Logo"
            className="w-10 h-10 md:w-14 md:h-14"
          />
          <Link
            to="#"
            onClick={handleTitleClick}
            className="pr-4 text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 font-[Pacifico]"
          >
            Musical
          </Link>

          {/* Alert Message */}
          {alertVisible && (
            <div className="absolute top-14 left-80 transform -translate-x-1/2 px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md">
              <p>
                This is a cool new feature that plays music when you click on
                the "Musical"! Try it out!
              </p>
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-lg font-medium ${
                selectedItem === item.name.toLowerCase()
                  ? "text-orange-500"
                  : "text-gray-800 dark:text-white hover:text-orange-500 transition-colors duration-300"
              }`}
              onClick={() => setSelectedItem(item.name.toLowerCase())}
            >
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>

        {/* Actions & Profile */}
        <div className="hidden md:flex items-center gap-6">
          {auth.isLoggedIn ? (
            <div>
              <ProfileMenu />
              <CheckoutDialog />
            </div>
          ) : (
            <Button
              onClick={() => navigate("/Signup")}
              variant="outlined"
              size="small"
            >
              Signup
            </Button>
          )}
          <Switcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-white"
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
                    ? "text-orange-500"
                    : "text-gray-800 dark:text-white hover:text-orange-500 transition-colors duration-300"
                }`}
                onClick={() => {
                  setSelectedItem(item.name.toLowerCase());
                  toggleMenu();
                }}
              >
                <li>{item.name}</li>
              </Link>
            ))}
            <div className="flex flex-col items-center gap-2 mt-6">
              {auth.isLoggedIn ? (
                <ProfileMenu />
              ) : (
                <Button
                  onClick={() => {
                    navigate("/Signup");
                    toggleMenu();
                  }}
                  variant="outlined"
                  size="small"
                  fullWidth
                >
                  Signup
                </Button>
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
