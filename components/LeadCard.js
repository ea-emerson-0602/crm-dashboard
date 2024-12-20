import React, { useState } from "react";
import FilterableTable from "./FilterableTable";
import copilot from "../assets/copilot-color.svg";
import bard from "../assets/google-bard.svg";
import Image from "next/image";
import KeyActivities from "./KeyActivities";
import jane from "../assets/jane-reyes.jpeg";
import allan from "../assets/allan-munger.jpg";
import linkedIn from "../assets/LinkedIn_icon.svg";
import intent from "../assets/intent.png";
import potential from "../assets/potential.png";
import decision from "../assets/decision.png";
import badge from "../assets/award-badge.jpg";
import {
  MoreVertical,
  X,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  LineChart,
  RefreshCw,
  Trash2,
  Plus,
  Group,
  FilterIcon,
  PieChart,
  MailPlusIcon,
  Calendar,
  ChevronUp,
  List,
  SendHorizonal,
  Pen,
  Edit,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

const LeadCard = () => {
  const [selectedLead, setSelectedLead] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUp, setIsUp] = useState(false);
  const [isUp2, setIsUp2] = useState(false);

  const [isListView, setIsListView] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const [activeButton, setActiveButton] = useState("snooze");
  const [isCaretRight, setIsCaretRight] = useState(true);

  const handleToggle = () => {
    setIsCaretRight((prev) => !prev);
  };
  // Consolidated data structure for leads
  const leads = [
    {
      id: 1,
      name: "Jane Reyes",
      role: "CIO - Paramount traders",
      avatar: jane,
      icon: <MailPlusIcon className="w-4 h-4" />,
      social: linkedIn,
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
            "Northwind Traders currently use $200M in revenue from their in-store coffee shops.",
          ],
          stats: {
            isDecisionMaker: "Yes",
            potentialValue: "$1.5M",
            intent: "High",
          },
        },
        about:
          "Jane Reyes, the Chief Operations Officer of Northwind Traders is a dynamic leader with a proven track record in optimizing operations and enhancing customer experiences. Under her guidance, Northwind Trader's in-store coffee shops have flourished, becoming a model of agility and innovation. Jane's commitment to excellence makes her an ideal partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shops' offerings, ensuring consistent, high-quality service.",
      },
    },
    {
      id: 2,
      name: "Allan Munger",
      role: "Head of Real Estate Development - Contoso Coffee",
      avatar: allan,
      icon: <Calendar className="w-4 h-4 " />,
      social: linkedIn,
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
    { text: "Focused view", icon: <List className="w-4 h-4 text-blue-800" /> },
    { text: "New", icon: <Plus className="w-4 h-4 text-green-600" /> },
    { text: "Refresh", icon: <RefreshCw className="w-4 h-4" /> },
    { text: "Collaborate", icon: <Group className="w-4 h-4" /> },
  ];

  const dataActions = [
    { text: "Smart Data", icon: <PieChart className="w-4 h-4" /> },
    { text: "Edit Filters", icon: <FilterIcon className="w-4 h-4" /> },
    { text: "Edit Columns", icon: <Edit className="w-4 h-4" /> },
  ];

  const handleViewChange = (viewName) => {
    if (viewName == "Focused view") {
      setIsListView(!isListView);
    }
  };

  return (
    <div className="relative flex flex-col space-y-4 ">
      <div className="flex items-center gap-4 text-xs py-1 px-2 rounded-lg bg-white">
        <div className="flex items-center text-gray-600">
          <span className="hidden sm:block">My open leads</span>{" "}
          {/* Hidden on mobile */}
          <button
            onClick={() => setIsUp2(!isUp2)}
            className="hover:bg-gray-100 transition-colors"
          >
            {isUp2 ? (
              <ChevronUp className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>
        <div className="flex items-center gap-3 ml-auto text-gray-600">
          <div className="flex items-center gap-5 ml-2 border-l pl-3">
            {actionItems.map((item, index) => (
              <button
                key={index}
                className="flex items-center text-xs"
                onClick={() => handleViewChange(item.text)}
              >
                {item.icon}
                <span className="hidden sm:block ml-1">{item.text}</span>{" "}
                {/* Hidden on mobile */}
              </button>
            ))}
            <button className="flex items-center text-xs">
              <Trash2 className="w-4 h-4" />
              <span className="hidden sm:block ml-1">Delete</span>{" "}
              {/* Hidden on mobile */}
            </button>

            <div className="my-auto">
              <button
                onClick={() => setIsUp(!isUp)}
                className="px-2 border-l hover:bg-gray-100 transition-colors"
              >
                {isUp ? (
                  <ChevronUp className="w-4 h-4 text-gray-600" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                )}
              </button>
            </div>
            <MoreVertical className="h-4 w-4 font-extralight" />
          </div>
          <div className="flex items-center gap-3 ml-2">
            {dataActions.map((item, index) => (
              <span
                key={index}
                className="flex items-center border px-2 py-1 rounded-md"
              >
                {item.icon}
                <span className="hidden sm:block ml-1">{item.text}</span>{" "}
                {/* Hidden on mobile */}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Lead Cards Grid */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px] rounded-[10px] shadow-[0px_50px_25px_-11px_rgba(0,_0,_0,_0.2)]">
        <div className="flex flex-col bg-white rounded-lg pl-8 pr-6 pt-8 pb-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 font-[800]">
              <span className="text-gray-800 flex gap-x-2 items-center">
                <Image
                  src={copilot}
                  alt="copilot logo"
                  width={20}
                  height={20}
                />{" "}
                Hi Mona,
              </span>
              <span className="">
                <span className="text-[#332CAA]">68% </span> of goal achieved
              </span>
              <span className="text-gray-600">
                and rest can be achieved by focusing on 20 top leads.
              </span>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>

          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex lg:flex-row flex-col  space-x-6">
              <div
                className={`flex flex-col w-full ${isListView ? "lg:w-1/2 w-full" : "lg:w-[70%] w-full"}
        `}
              >
                <div className="text-xs text-gray-600 mb-4">
                  Copilot has prioritized 20 key leads that show strong purchase
                  intent and are actively engaging. These leads need your focus.
                </div>
                <div className="relative flex">
                  <div
                    className={`
    flex flex-col gap-4
    ${isListView ? "md:flex md:flex-col" : "md:grid md:grid-cols-2"}
  `}
                  >
                    {leads.map((lead, index) => (
                      <div
                        key={lead.id}
                        className={`
        bg-white rounded-xl border cursor-pointer hover:shadow-md transition-shadow
        p-4
      `}
                        onClick={() => {
                          setSelectedLead(lead);
                          setCurrentIndex(index);
                        }}
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <Image
                            src={lead.avatar}
                            alt={lead.name}
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <div className="font-medium w-full">
                              {lead.name}
                            </div>
                            <div className="text-gray-500 w-full text-[11px]">
                              {lead.role}
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-2 rounded-lg space-y-2 relative bg-[#F1F5FF]">
                          <Image
                            src={bard}
                            alt="google bard logo"
                            width={32}
                            height={32}
                            className="absolute top-0 right-0 p-2 rounded-bl-lg border-convex-tl bg-white"
                          />
                          <div className="flex font-bold gap-x-2 items-center text-gray-700">
                            {lead.icon} {lead.title}
                          </div>
                          <div className="text-gray-600 text-[10px]">
                            {lead.description}
                          </div>
                        </div>
                        <div className="mt-2 text-gray-500 flex items-center gap-2 text-xs">
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
                  {/* Button positioned to the right of the cards */}
                  <button
                    onClick={handleToggle}
                    className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white h-fit rounded-full p-2 shadow-lg hover:bg-gray-50"
                  >
                    {isCaretRight ? (
                      <ChevronRight className="w-5 h-5" />
                    ) : (
                      <ChevronLeft className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="w-[1px] bg-gray-300"></div>
              <div className={`${isListView ? "lg:w-1/2 w-full my-auto" : "lg:w-1/3 w-full"} `}>
                <KeyActivities isListView={isListView} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {selectedLead && (
        <div className="bg-gradient-to-r fixed inset-0 w-fit h-fit mx-auto z-50 from-blue-500 via-purple-500 to-pink-500 p-[2px] rounded-[10px]">
          <div className=" h-fit text-xs  flex items-center justify-center">
            <div className="bg-white w-full max-w-[800px] rounded-lg shadow-xl relative">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 ">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <h2 className="font-bold">Engage with {selectedLead.name}</h2>
                </div>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="px-4 py-2">
                {/* User Info */}
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg border bg-white shadow-2xl mb-4">
                  <Image
                    src={selectedLead.avatar}
                    alt={selectedLead.name}
                    className="w-8  h-8 rounded-full"
                  />
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <div className="font-bold">{selectedLead.name}</div>
                      <div className=" flex text-gray-600">
                        <Image
                          src={selectedLead.social}
                          alt="linkedIn image"
                          className="w-4 h-4"
                        />
                        <span className="px-1">|</span>
                        {selectedLead.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interest Card */}
                <div className="bg-gradient-to-tr from-white overflow-x-hidden to-[#FAFCFF] rounded-lg px-3 py-4 ">
                  <div className="flex justify-between overflow-hidden items-center rounded-lg text-[11px]  px-4 py-4 bg-gradient-to-r from-[#EBF3FF] to-[#EBEBFF] mb-2">
                    <span className="flex space-x-3">
                      <Image
                        src={bard}
                        alt="google bard image"
                        height={16}
                        width={16}
                      />
                      <p className="bg-gradient-to-r from-blue-700  to-purple-600 bg-clip-text text-transparent">
                        {selectedLead.modalDetails.interests}
                      </p>
                    </span>
                    <div className="flex gap-2">
                      <button className="text-purple-900 gap-x-1 space-x-2 bg-white px-2 rounded-sm flex items-center">
                        <Pen className="w-4 h-4" />
                        Edit
                      </button>
                      <button className="flex gap-x-1 bg-gradient-to-r from-blue-600  to-purple-600 text-white  px-3 py-1 rounded-md font-extralight">
                        <SendHorizonal className="w-4 h-4" />
                        Approve and Send
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2 border-b border-l">
                    {/* Engage Button */}
                    <button
                      className={`ml-4 py-1 ${
                        activeButton === "engage"
                          ? "border-b-2 border-blue-600"
                          : ""
                      }`}
                      onClick={() => setActiveButton("engage")}
                    >
                      Engage
                    </button>

                    {/* Snooze Button */}
                    <button
                      className={`ml-4 py-1 ${
                        activeButton === "snooze"
                          ? "border-b-2 border-blue-600"
                          : ""
                      }`}
                      onClick={() => setActiveButton("snooze")}
                    >
                      Snooze
                    </button>
                  </div>
                  <div className="px-4 py-2  bg-white my-4 rounded-xl shadow-[20px_50px_65px_-50px_rgba(0,_0,_0,_0.2)]">
                    <div className="bg-gradient-to-r from-[#eef4fe] to-[#f7f6ff] rounded-lg px-4 py-2 mb-2">
                      <h3 className="font-medium mb-3 flex justify-between">
                        Why I picked this lead
                        <Image
                          src={copilot}
                          width={20}
                          height={20}
                          alt="copilot logo"
                        />
                      </h3>
                      <ul className="list-disc pl-5 mb-2 space-y-2">
                        {selectedLead.modalDetails.whyPicked.points.map(
                          (point, index) => (
                            <li
                              key={index}
                              className=" text-gray-700"
                              dangerouslySetInnerHTML={{
                                __html: point
                                  .replace(
                                    "key decision maker",
                                    "<strong>key decision maker</strong>"
                                  )
                                  .replace(
                                    "'espresso machines'",
                                    "<strong>'espresso machines'</strong>"
                                  )
                                  .replace(
                                    "'service requests'",
                                    "<strong>'service requests'</strong>"
                                  )
                                  .replace(
                                    "$200M",
                                    "<strong>$200M in revenue</strong>"
                                  ),
                              }}
                            ></li>
                          )
                        )}
                      </ul>

                      <div className="grid grid-cols-3 gap-3 w-4/5">
                        <div className="px-2 py-1 rounded-xl bg-white flex space-x-2 items-center">
                          <Image
                            src={decision}
                            width={36}
                            height={36}
                            alt="random"
                          />
                          <div className="flex flex-col">
                            Desion maker
                            <p className="text-purple-700 text-sm font-bold">
                              Yes
                            </p>
                          </div>
                        </div>
                        <div className="p-2 rounded-xl space-x-2 bg-white flex items-center">
                          <Image
                            src={potential}
                            width={36}
                            height={36}
                            alt="random"
                          />
                          <div className="flex flex-col">
                            Potential deal value
                            <p className="text-purple-700 text-sm font-bold">
                              $1M
                            </p>
                          </div>
                        </div>
                        <div className="p-2 rounded-xl space-x-2 bg-white flex items-center">
                          <Image
                            src={intent}
                            width={36}
                            height={36}
                            alt="random"
                          />

                          <div className="flex flex-col">
                            Intent
                            <p className="text-purple-700 text-sm font-bold">
                              High
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <div className="flex gap-x-1 items-center h-fit">
                        <div className="px-2 h-7 rounded-md flex items-center  bg-[#E6E6E6]">
                          <Image
                            src={badge}
                            height={12}
                            width={12}
                            alt="random badge"
                          />
                        </div>
                        <div className="flex px-2  h-7 rounded-md items-center bg-[#E6E6E6]">
                          <span className="pr-1  border-r-gray-400 border-r ">
                            1
                          </span>
                          <span className="px-1 flex items-center">
                            <PieChart className="text-blue-600 w-5 h-5 pr-1" />{" "}
                            D365 Sales
                          </span>
                        </div>
                        <div className="px-2 rounded-md h-7 flex bg-[#E6E6E6] items-center">
                          +2
                        </div>
                      </div>
                      <div className="flex gap-x-3">
                        <p className="px-2 h-7 rounded-md flex items-center bg-[#E6E6E6]">
                          AI generated content may be incorrect
                        </p>
                        <div className="flex gap-x-2 items-center text-gray-500">
                          <ThumbsUp className="w-4 h-4 cursor-pointer" />
                          <ThumbsDown className="w-4 h-4 cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Picked Section */}

                {/* About Section */}
                <div className="mb-4 mx-6 px-4 py-2 bg-[#E9E9E9] rounded-lg">
                  <h3 className="font-bold mb-2">About {selectedLead.name}</h3>
                  <p className="text-[10px] text-gray-700">
                    {selectedLead.modalDetails.about}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center text-gray-500">
                  <div className="flex gap-x-3">
                    <div>
                      Showing {currentIndex + 1} of {leads.length}
                    </div>
                    <button className="text-blue-600">Show all</button>
                  </div>
                  <div className="flex gap-x-2 items-center text-gray-500">
                    <ThumbsUp className="w-4 h-4 cursor-pointer" />
                    <ThumbsDown className="w-4 h-4 cursor-pointer" />
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              {/* <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4"> */}
              {currentIndex > 0 && (
                <button
                  onClick={handlePrevLead}
                  className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-fit flex justify-between  bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
                >
                  <ChevronLeft className="w-5 h-5 text-blue-600" />
                </button>
              )}
              {currentIndex < leads.length - 1 && (
                <button
                  onClick={handleNextLead}
                  className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 flex w-fit justify-between  bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 ml-auto"
                >
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                </button>
              )}
              {/* </div> */}
            </div>
          </div>
        </div>
      )}

      <div className="w-full">
        <FilterableTable />
      </div>
    </div>
  );
};

export default LeadCard;
