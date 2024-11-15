import { useState, useEffect } from "react";
import {
  Home,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Users,
  Guitar,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMobileItemClick = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { icon: <Home size={20} />, label: "Home", path: "/Home" },
    { icon: <Users size={20} />, label: "Users", path: "/ManageUsers" },
    {
      icon: <Guitar size={20} />,
      label: "Musical Equipment",
      path: "/ManageInstrumentListing",
    },
  ];

  const MobileMenuButton = () => (
    <button
      onClick={() => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsAnimating(true);
      }}
      className="md:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-[#FF0063] text-white hover:bg-[#e6005a] transition-colors"
      aria-label="Toggle menu"
    >
      <div className="relative w-6 h-6">
        <div
          className={`absolute transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
          }`}
        >
          <X size={24} />
        </div>
        <div
          className={`absolute transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "-rotate-180 opacity-0" : "rotate-0 opacity-100"
          }`}
        >
          <Menu size={24} />
        </div>
      </div>
    </button>
  );

  const SidebarContent = ({ isMobile = false }) => (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex items-center justify-between p-4 border-b border-[#ff1a75]">
        {(!isCollapsed || isMobile) && (
          <span className="font-bold text-lg animate-fade-in">Admin Panel</span>
        )}
        {!isMobile && (
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-[#ff1a75] transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight size={20} />
            ) : (
              <ChevronLeft size={20} />
            )}
          </button>
        )}
      </div>

      <nav className="p-2 flex flex-col gap-5">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={handleMobileItemClick}
            className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#ff1a75] transition-colors"
          >
            {item.icon}
            {(!isCollapsed || isMobile) && (
              <span className="animate-fade-in">{item.label}</span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      <MobileMenuButton />

      {/* Desktop Sidebar */}
      <div
        className={`hidden md:block h-screen bg-[#FF0063] text-white transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        <SidebarContent />
      </div>

      {/* Mobile Sidebar (Overlay) */}
      {(isMobileMenuOpen || isAnimating) && (
        <div
          className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onTransitionEnd={() => {
            if (!isMobileMenuOpen) setIsAnimating(false);
          }}
        >
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
              isMobileMenuOpen ? "opacity-50" : "opacity-0"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <div
            className={`fixed inset-y-0 left-0 w-64 bg-[#FF0063] text-white transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <SidebarContent isMobile={true} />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
