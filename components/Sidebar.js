/* eslint-disable no-undef */
"use client"
import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
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
  ChevronDown,
  ChevronUp,
} from "lucide-react";
// import DummyContent from "./DummyContent";

// Dummy Component for Content Display

const Sidebar = ({ activeItem, setActiveItem }) => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const router = useRouter();
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [openDropdowns, setOpenDropdowns] = useState({
    Recent: false,
    Pinned: false,
  });

  useEffect(() => {
    // Only run this code in the browser
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        const mobile = window.innerWidth <= 768;
        setIsMobile(mobile);
        setIsOpen(!mobile);
      };

      // Set initial state based on window size (only in browser)
      handleResize();

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

 
  const recentItems = [
    { text: "Recent Project A", path: "/recent/project-a" },
    { text: "Recent Customer B", path: "/recent/customer-b" },
    { text: "Recent Order C", path: "/recent/order-c" },
    { text: "Recent Report D", path: "/recent/report-d" },
  ];

  const pinnedItems = [
    { text: "Important Deal", path: "/pinned/important-deal" },
    { text: "Q4 Sales Report", path: "/pinned/q4-sales" },
    { text: "Key Account XYZ", path: "/pinned/account-xyz" },
    { text: "Team Dashboard", path: "/pinned/team-dashboard" },
  ];

  const menuItems = [
    { text: "Home", icon: <Home size={18} />, path: "/" },
    {
      text: "Recent",
      icon: <History size={18} />,
      hasDropdown: true,
      dropdownItems: recentItems,
    },
    {
      text: "Pinned",
      icon: <Star size={18} />,
      hasDropdown: true,
      dropdownItems: pinnedItems,
    },
    { text: "Agent Skills", icon: <File size={18} />, path: "/agent-skills" },
  ];

  const myWork = [
    {
      text: "Sales accelerator",
      icon: <Rocket size={18} />,
      path: "/",
    },
    {
      text: "Dashboards",
      icon: <LayoutDashboard size={18} />,
      path: "/",
    },
    { text: "Activities", icon: <Clipboard size={18} />, path: "/" },
  ];

  const customers = [
    { text: "Accounts", icon: <Folder size={18} />, path: "/" },
    { text: "Contacts", icon: <Users size={18} />, path: "/" },
  ];

  const sales = [
    { text: "Leads", icon: <Phone size={18} />, path: "/" },
    { text: "Opportunities", icon: <Info size={18} />, path: "/" },
    {
      text: "Competitors",
      icon: <UserCircle2 size={18} />,
      path: "/",
    },
  ];

  const collateral = [
    { text: "Quotes", icon: <FileText size={18} />, path: "/" },
    { text: "Orders", icon: <FileSpreadsheet size={18} />, path: "/" },
    { text: "Invoices", icon: <FileCheck size={18} />, path: "/" },
    { text: "Products", icon: <Box size={18} />, path: "/" },
    {
      text: "Sales Literature",
      icon: <FileArchive size={18} />,
      path: "/sales-literature",
    },
  ];

  const marketing = [
    {
      text: "Marketing lists",
      icon: <FileArchive size={18} />,
      path: "/marketing-lists",
    },
    {
      text: "Quick Campaigns",
      icon: <Mic size={18} />,
      path: "/quick-campaigns",
    },
  ];
  const performance = [
    {
      text: "Sales",
      icon: <span className="bg-red-200 text-red-900 py-2 px-3">S</span>,
      path: "/sales",
    },
  ];

  const toggleSidebar = () => {
    if (!isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const toggleDropdown = (menuItem) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [menuItem]: !prev[menuItem],
    }));
  };

  const handleItemClick = (itemText) => {
    if (itemText.hasDropdown) {
      toggleDropdown(itemText.text);
    } else {
      setActiveItem(itemText);
      setActiveItem(itemText.text);
      router.push(itemText.path);
      if (itemText === "Agent Skills") {
        // If it's Agent Skills, render the component in full screen
        setIsFullScreen(true);
      } else {
        setIsFullScreen(false);
      }
    }
  };

  if (isFullScreen) {
    return null;
  }

  // const renderDropdownItems = (items) => {
  //   return items.map((item) => (
  //     <div
  //       key={item.text}
  //       className="flex items-center space-x-3 pl-8 py-2 cursor-pointer hover:bg-gray-100"
  //       onClick={() => {
  //         setActiveItem(item.text);
  //         router.push(item.path);
  //       }}
  //     >
  //       {isOpen && <span className="text-sm text-gray-600">{item.text}</span>}
  //     </div>
  //   ));
  // };

  const renderMenuSection = (title, items) => (
    <div className="mb-2">
      {isOpen && (
        <p className="text-xs text-gray-700 font-bold mt-4 capitalize px-4 py-2">
          {title}
        </p>
      )}
      {items.map((item) => (
        <div key={item.text}>
          <div
            className={`flex text-gray-600 items-center text-xs space-x-3 px-4 py-2 cursor-pointer 
              ${
                activeItem === item.text
                  ? "bg-white border-l-4 border-blue-500"
                  : "hover:bg-gray-100"
              }`}
            onClick={() => handleItemClick(item)}
            title={!isOpen ? item.text : undefined}
          >
            <span className="">{item.icon}</span>
            {isOpen && (
              <>
                <span className="text-[11px] ml-3 flex-grow">{item.text}</span>
                {item.hasDropdown && (
                  <span className="ml-2">
                    {openDropdowns[item.text] ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </span>
                )}
              </>
            )}
          </div>
          {/* Dropdown content */}
          {item.hasDropdown && openDropdowns[item.text] && isOpen && (
            <div className="bg-gray-50 py-1">
              {item.dropdownItems.map((dropdownItem) => (
                <div
                  key={dropdownItem.text}
                  className="flex items-center text-gray-600 text-xs hover:bg-gray-100 pl-11 py-2 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveItem(dropdownItem.text);
                    router.push(dropdownItem.path);
                  }}
                >
                  <span>{dropdownItem.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
  return (
    <div className="flex">
      <div
        className={`text-xs bg-[#EFEFEF]
          overflow-y-visible scrollbar-hide transition-all duration-300
          ${isOpen ? "w-40" : "w-12"}`}
      >
        <div className="py-2 text-xs  border-r-[#dadada] border-r-2">
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
          {renderMenuSection("Performance", performance)}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
