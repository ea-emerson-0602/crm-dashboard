"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
// import InsightsPanel from "../components/InsightsPanel";
import LeadCard from "../components/LeadCard";
import LeadModal from "../components/LeadModal";

// Dummy Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="space-y-4 p-4">
    <div className="h-6 bg-gray-300 rounded w-1/4 animate-pulse"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
    <div className="h-4 bg-gray-300 rounded w-2/3 animate-pulse"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
  </div>
);

// Dummy Component for Other Sections
const DummyContent = ({ title }) => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <SkeletonLoader />
  </div>
);

const leadsData = [
  {
    name: "Jane Reyes",
    position: "CEO",
    details: "Deal value: $1M, Decision Maker",
  },
  {
    name: "John Doe",
    position: "CTO",
    details: "Deal value: $500K, Influencer",
  },
];

const Home = () => {
  const [selectedLead, setSelectedLead] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Leads"); // Default active item

  const handleCardClick = () => {
    // setSelectedLead(lead);
    setModalOpen(true);
    setShowModal(true)
  };

  // Function to render content based on the active menu item
  const renderContent = () => {
    if (activeItem === "Leads") {
      return (
        <>
          {/* <InsightsPanel /> */}
          {/* {leadsData.map((lead) => ( */}
          <LeadCard
            // key={lead.name}
            // lead={lead}
            onClick={() => handleCardClick()}
          />
          {/* ))} */}
         
        </>
      );
    } else {
      return <DummyContent title={activeItem} />;
    }
  };

  return (
    <div className="flex flex-col h-screen  space-y-12">
      {/* Navbar at the top */}
      <Navbar />

      {/* Sidebar and Main Content Container */}
      <div className="flex flex-1 space-x-4 space-y-4 ">
        {/* Sidebar */}
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

        {/* Main Content */}
        <div className="flex-grow bg-gray-50">
          {/* <InsightsPanel /> */}
          <div className="flex-grow bg-gray-50">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
