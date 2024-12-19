import React, { useState } from "react";
import FilterableTable from "./FilterableTable";
import copilot from "../assets/copilot-color.svg";
import bard from "../assets/google-bard.svg";
import Image from "next/image";
import KeyActivities from "./KeyActivities";
import {
  MoreHorizontal,
  X,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  LineChart,
  Download,
  Layout,
  RefreshCw,
  Trash2,
  Filter,
  Settings,
  Edit,
  Plus,
  Group,
  FilterIcon,
  PieChart,
  MailPlusIcon,
  Calendar,
} from "lucide-react";

const LeadCard = () => {
  const [selectedLead, setSelectedLead] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Consolidated data structure for leads
  const leads = [
    {
      id: 1,
      name: "Jane Reyes",
      role: "CIO - Paramount traders",
      avatar: "/api/placeholder/48/48",
      icon: <MailPlusIcon className="w-4 h-4" />,
      title: "Engage with Jane Reyes",
      description:
        "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
      tags: ["Expand Business", "High buying intent"],
      modalDetails: {
        interests:
          "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
        whyPicked: {
          points: [
            "Jane is a key decision maker and was browsing 'espresso machines' on First Coffee's website.",
            "Multiple people at her company have reported 'slowness' during service requests.",
            "Northwind Traders currently use $2000k worth of First Coffee's machines in their in-store coffee shops.",
          ],
          stats: {
            isDecisionMaker: "Yes",
            potentialValue: "$1.5M",
            intent: "High",
          },
        },
        about:
          "Jane Reyes is the Chief Operations Officer of Northwind Traders, a dynamic leader with a proven track record in optimizing operations and enhancing customer experiences. Under her guidance, Northwind Trader's in-store coffee shops have flourished, becoming a model of agility and innovation.",
      },
    },
    {
      id: 2,
      name: "Allan Munger",
      role: "Head of Real Estate Development - Contoso Coffee",
      avatar: "/api/placeholder/48/48",
      icon: <Calendar className="w-4 h-4 " />,
      title: "Prepare for meeting with Allan",
      description:
        "Prepare for high-buying intent meeting scheduled for 2 PM regarding upgrading service contract.",
      tags: ["Upcoming meeting", "Due Today"],
      modalDetails: {
        interests:
          "Prepare for high-buying intent meeting scheduled for 2 PM regarding upgrading service contract.",
        whyPicked: {
          points: [
            "Allan has shown interest in upgrading their service contract",
            "Recent expansion of their coffee shop chain indicates growth potential",
            "Previous interactions show strong intent for long-term partnership",
          ],
          stats: {
            isDecisionMaker: "Yes",
            potentialValue: "$2.1M",
            intent: "High",
          },
        },
        about:
          "Allan Munger leads real estate development at Contoso Coffee, overseeing their rapid expansion across multiple regions. His strategic vision has been instrumental in Contoso's growth, making him a key decision-maker for service contracts and equipment partnerships.",
      },
    },
  ];

  const handleNextLead = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, leads.length - 1));
    setSelectedLead(leads[Math.min(currentIndex + 1, leads.length - 1)]);
  };

  const handlePrevLead = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    setSelectedLead(leads[Math.max(currentIndex - 1, 0)]);
  };

  const actionItems = [
    { text: "Show chart", icon: <LineChart className="w-4 h-4" /> },
    { text: "Focused view", icon: <Layout className="w-4 h-4" /> },
    { text: "New", icon: <Plus className="w-4 h-4" /> },
    { text: "Refresh", icon: <RefreshCw className="w-4 h-4" /> },
    { text: "Collaborate", icon: <Group className="w-4 h-4" /> },
    { text: "Delete", icon: <Trash2 className="w-4 h-4" /> },
  ];

  const dataActions = [
    { text: "Smart Data", icon: <PieChart className="w-4 h-4" /> },
    { text: "Filter Data", icon: <FilterIcon className="w-4 h-4" /> },
    { text: "Edit Columns", icon: <Edit className="w-4 h-4" /> },
  ];

  return (
    <div className="relative flex flex-col">
      <div className="flex items-center gap-4 mb-4 text-xs p-2 bg-white">
        <div className="flex items-center text-gray-600">
          <span>My open leads</span>
          <ChevronDown className="w-4 h-4 ml-1" />
        </div>
        <div className="flex items-center gap-3 ml-auto flex items-center text-gray-600">
          <div className="flex items-center gap-3 ml-2 border-l pl-3">
            {actionItems.map((item, index) => (
              <span key={index} className="flex items-center">
                {item.icon}
                <span className="ml-1">{item.text}</span>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 ml-2 border-l pl-3">
            {dataActions.map((item, index) => (
              <span key={index} className="flex items-center">
                {item.icon}
                <span className="ml-1">{item.text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Lead Cards Grid */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px] rounded-[10px]">
        <div className="flex flex-col bg-white rounded-lg p-6">
          <div className="flex items-center gap-2 font-[800] mb-4">
            <span className="text-gray-800 flex gap-x-2 items-center">
              <Image src={copilot} alt="copilot logo" width={20} height={20} />{" "}
              Hi Mona,
            </span>
            <span className="">
              <span className="text-[#332CAA]">68% </span> of goal achieved
            </span>
            <span className="text-gray-600">
              and rest can be achieved by focusing on 20 top leads.
            </span>
          </div>

          <div className="text-sm text-gray-600 mb-4">
            Copilot has prioritized 20 key leads that show strong purchase
            intent and are actively engaging. These leads need your focus.
          </div>
          <div className="flex ">
            <div className="grid w-2/3 grid-cols-2 gap-4">
              {leads.map((lead, index) => (
                <div
                  key={lead.id}
                  className="bg-white p-4 rounded-lg border cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => {
                    setSelectedLead(lead);
                    setCurrentIndex(index);
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="font-medium">{lead.name}</div>
                      <div className="text-sm text-gray-500">{lead.role}</div>
                    </div>
                    <MoreHorizontal className="w-4 h-4 ml-auto" />
                  </div>
                  <div className="p-4 rounded-lg space-y-2 relative bg-[#F1F5FF]">
                    <Image
                      src={bard}
                      alt="google bard logo"
                      width={32} // Adjust the width as needed
                      height={32} // Adjust the height as needed
                      className="absolute top-0 right-0 p-2 rounded-bl-lg bg-white "
                    />
                    <div className="flex  font-bold gap-x-2 items-center text-gray-700">
                      {lead.icon} {lead.title}
                    </div>
                    <div className=" text-gray-600">{lead.description}</div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500 flex items-center gap-2">
                    {lead.tags.map((tag, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && <span>•</span>}
                        <span>{tag}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <KeyActivities />
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl relative">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <h2 className="font-medium">Engage with {selectedLead.name}</h2>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4">
              {/* User Info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={selectedLead.avatar}
                  alt={selectedLead.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-medium">{selectedLead.name}</div>
                  <div className="text-sm text-gray-600">
                    {selectedLead.role}
                  </div>
                </div>
              </div>

              {/* Interest Card */}
              <div className="bg-white border rounded-lg p-4 mb-4">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-gray-700">
                    {selectedLead.modalDetails.interests}
                  </p>
                  <div className="flex gap-2">
                    <button className="text-gray-500">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                      Approve and save
                    </button>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="border rounded px-4 py-1 text-sm hover:bg-gray-50">
                    Engage
                  </button>
                  <button className="border rounded px-4 py-1 text-sm hover:bg-gray-50">
                    Snooze
                  </button>
                </div>
              </div>

              {/* Why Picked Section */}
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h3 className="font-medium mb-3 flex justify-between">
                  Why I picked this lead
                  <Download className="w-4 h-4" />
                </h3>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  {selectedLead.modalDetails.whyPicked.points.map(
                    (point, index) => (
                      <li key={index} className="text-sm text-gray-700">
                        {point}
                      </li>
                    )
                  )}
                </ul>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(
                    selectedLead.modalDetails.whyPicked.stats
                  ).map(([key, value], index) => (
                    <div
                      key={key}
                      className="bg-white rounded-lg p-3 flex items-center gap-2"
                    >
                      <div
                        className={`${
                          index === 0
                            ? "bg-blue-100"
                            : index === 1
                            ? "bg-yellow-100"
                            : "bg-green-100"
                        } p-2 rounded-lg`}
                      >
                        <img src="/api/placeholder/24/24" alt={key} />
                      </div>
                      <div>
                        <div className="text-sm font-medium">
                          {key
                            .replace(/([A-Z])/g, " $1")
                            .toLowerCase()
                            .replace(/^\w/, (c) => c.toUpperCase())}
                        </div>
                        <div className="text-sm text-gray-600">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* About Section */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">About {selectedLead.name}</h3>
                <p className="text-sm text-gray-700">
                  {selectedLead.modalDetails.about}
                </p>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center text-sm text-gray-500">
                <div>
                  Showing {currentIndex + 1} of {leads.length}
                </div>
                <button className="text-blue-600">Show all</button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
              {currentIndex > 0 && (
                <button
                  onClick={handlePrevLead}
                  className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}
              {currentIndex < leads.length - 1 && (
                <button
                  onClick={handleNextLead}
                  className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 ml-auto"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="text-sm">
        <div className="font-medium">Partnership for Fairburn</div>
        <div className="text-gray-500">Review AI analysis Data News</div>
        {/* </div> */}
        <ChevronRight className="w-4 h-4 ml-auto" />
      </div>
      <button className="text-sm text-blue-600 mt-3">
        Show all my activities
      </button>
      <FilterableTable />
    </div>
  );
};

export default LeadCard;
