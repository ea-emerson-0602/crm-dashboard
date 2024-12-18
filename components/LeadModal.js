import React, { useState } from 'react';
import { X, ChevronRight, ChevronLeft, Edit, Download } from 'lucide-react';

const LeadModal = ({ isOpen, onClose, initialLeadIndex = 0 }) => {
  const [currentLeadIndex, setCurrentLeadIndex] = useState(initialLeadIndex);

  const leads = [
    {
      id: 1,
      name: "Jane Reyes",
      role: "COO, Northwind Traders",
      avatar: "/api/placeholder/48/48",
      interests: "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
      whyPicked: {
        points: [
          "Jane is a key decision maker and was browsing 'espresso machines' on First Coffee's website.",
          "Multiple people at her company have reported 'slowness' during service requests.",
          "Northwind Traders currently use $2000k worth of First Coffee's machines in their in-store coffee shops."
        ],
        stats: {
          isDecisionMaker: true,
          potentialValue: "$1.5M",
          intent: "High"
        }
      },
      about: "Jane Reyes is the Chief Operations Officer of Northwind Traders, a dynamic leader with a proven track record in optimizing operations and enhancing customer experiences. Under her guidance, Northwind Trader's in-store coffee shops have flourished, becoming a model of agility and innovation. Jane's commitment to excellence makes her an ideal partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shops' offerings, ensuring consistent, high-quality service."
    },
    // Add more leads as needed
  ];

  const currentLead = leads[currentLeadIndex];
  const isFirst = currentLeadIndex === 0;
  const isLast = currentLeadIndex === leads.length - 1;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl relative">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <h2 className="font-medium">Engage with {currentLead.name}</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* User Info */}
          <div className="flex items-center gap-3 mb-4">
            <img 
              src={currentLead.avatar} 
              alt={currentLead.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="font-medium">{currentLead.name}</div>
              <div className="text-sm text-gray-600">{currentLead.role}</div>
            </div>
          </div>

          {/* Interest Card */}
          <div className="bg-white border rounded-lg p-4 mb-4">
            <div className="flex justify-between items-start mb-4">
              <p className="text-gray-700">{currentLead.interests}</p>
              <div className="flex gap-2">
                <button className="text-gray-500"><Edit className="w-4 h-4" /></button>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                  Approve and save
                </button>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="border rounded px-4 py-1 text-sm hover:bg-gray-50">Engage</button>
              <button className="border rounded px-4 py-1 text-sm hover:bg-gray-50">Snooze</button>
            </div>
          </div>

          {/* Why Picked Section */}
          <div className="bg-blue-50 rounded-lg p-4 mb-4">
            <h3 className="font-medium mb-3 flex justify-between">
              Why I picked this lead
              <Download className="w-4 h-4" />
            </h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              {currentLead.whyPicked.points.map((point, index) => (
                <li key={index} className="text-sm text-gray-700">{point}</li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-3 flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <img src="/api/placeholder/24/24" alt="Decision maker" />
                </div>
                <div>
                  <div className="text-sm font-medium">Decision maker</div>
                  <div className="text-sm text-gray-600">Yes</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 flex items-center gap-2">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <img src="/api/placeholder/24/24" alt="Deal value" />
                </div>
                <div>
                  <div className="text-sm font-medium">Potential deal value</div>
                  <div className="text-sm text-gray-600">{currentLead.whyPicked.stats.potentialValue}</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 flex items-center gap-2">
                <div className="bg-green-100 p-2 rounded-lg">
                  <img src="/api/placeholder/24/24" alt="Intent" />
                </div>
                <div>
                  <div className="text-sm font-medium">Intent</div>
                  <div className="text-sm text-gray-600">{currentLead.whyPicked.stats.intent}</div>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-4">
            <h3 className="font-medium mb-2">About Jane</h3>
            <p className="text-sm text-gray-700">{currentLead.about}</p>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div>Showing 1 of 5</div>
            <button className="text-blue-600">Show all</button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
          {!isFirst && (
            <button 
              onClick={() => setCurrentLeadIndex(prev => prev - 1)}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {!isLast && (
            <button 
              onClick={() => setCurrentLeadIndex(prev => prev + 1)}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 ml-auto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadModal;