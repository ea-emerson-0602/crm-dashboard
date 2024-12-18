import React, { useState, useEffect } from "react";
import {
  Home,
  History,
  Star,
  File,
  Rocket,
  LayoutDashboard,
  Clipboard,
  Folder,
  Users,
  Phone,
  Info,
  UserCircle2,
  FileText,
  FileSpreadsheet,
  FileCheck,
  Box,
  FileArchive,
  Mic,
  Menu,
  ChevronRight,
} from "lucide-react";
// import DummyContent from "./DummyContent";

// Dummy Component for Content Display

const Sidebar = ({ activeItem, setActiveItem }) => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // const [activeItem, setActiveItem] = useState("Leads");

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setIsOpen(!mobile);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { text: "Home", icon: <Home size={18} /> },
    { text: "Recent", icon: <History size={18} /> },
    { text: "Pinned", icon: <Star size={18} /> },
    { text: "My Work", icon: <File size={18} /> },
  ];

  const myWork = [
    { text: "Sales accelerator", icon: <Rocket size={18} /> },
    { text: "Dashboards", icon: <LayoutDashboard size={18} /> },
    { text: "Activities", icon: <Clipboard size={18} /> },
  ];

  const customers = [
    { text: "Accounts", icon: <Folder size={18} /> },
    { text: "Contacts", icon: <Users size={18} /> },
  ];

  const sales = [
    { text: "Leads", icon: <Phone size={18} /> },
    { text: "Opportunities", icon: <Info size={18} /> },
    { text: "Competitors", icon: <UserCircle2 size={18} /> },
  ];

  const collateral = [
    { text: "Quotes", icon: <FileText size={18} /> },
    { text: "Orders", icon: <FileSpreadsheet size={18} /> },
    { text: "Invoices", icon: <FileCheck size={18} /> },
    { text: "Products", icon: <Box size={18} /> },
    { text: "Sales Literature", icon: <FileArchive size={18} /> },
  ];

  const marketing = [
    { text: "Marketing lists", icon: <FileArchive size={18} /> },
    { text: "Quick Campaigns", icon: <Mic size={18} /> },
  ];

  const toggleSidebar = () => {
    if (!isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const renderMenuSection = (title, items) => (
    <div className="mb-2">
      {isOpen && (
        <p className="text-xs text-gray-500 font-semibold uppercase px-4 py-2">
          {title}
        </p>
      )}
      {items.map((item) => (
        <div
          key={item.text}
          className={`flex items-center space-x-3 px-4 py-2 cursor-pointer 
            ${
              activeItem === item.text
                ? "bg-white border-l-4 border-blue-500"
                : "hover:bg-gray-100"
            }`}
          onClick={() => setActiveItem(item.text)} // Update activeItem
          title={!isOpen ? item.text : undefined}
        >
          <span className="text-gray-600">{item.icon}</span>
          {isOpen && <span className="text-sm">{item.text}</span>}
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex">
      <div
        className={`h-screen bg-[#EFEFEF] border-r border-gray-200 
          overflow-y-scroll scrollbar-hide transition-all duration-300 
          ${isOpen ? "w-56" : "w-16"}`}
      >
        <div className="py-2">
          <div
            className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={toggleSidebar}
          >
            {isOpen ? <Menu size={20} /> : <ChevronRight size={20} />}
          </div>

          {renderMenuSection("Main", menuItems)}
          {renderMenuSection("My Work", myWork)}
          {renderMenuSection("Customers", customers)}
          {renderMenuSection("Sales", sales)}
          {renderMenuSection("Collateral", collateral)}
          {renderMenuSection("Marketing", marketing)}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
