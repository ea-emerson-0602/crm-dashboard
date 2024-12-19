import { useState } from "react";
import { MailPlus, Calendar } from "lucide-react";
import bard from "../assets/google-bard.svg";
import Image from "next/image";
const KeyActivities = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="p-4 border-black flex flex-col space-y-2 gap-y-2 border-4 text-xs mx-auto">
      {/* Title */}
      <h2 className="text-base font-semibold">Other key activities</h2>

      {/* Activity Card 1 */}
      <div className="bg-white px-4 pb-2 rounded-lg shadow-md">
        <div className="flex items-center">
          {/* Icon/Image */}
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
            <img src="/path/to/icon.png" alt="Cafe A100" className="w-8 h-8" />
          </div>
          {/* Details */}
          <div className="ml-3 flex-1">
            <h3 className="font-semibold text-sm">
              Cafe A100 for Woodland Bank
            </h3>
            <p className="text-[11px] text-gray-500">
              Woodland Bank • $280,000 • 8 days to close
            </p>
          </div>
          {/* Action */}
          <div className="text-purple-500 text-sm cursor-pointer">⋮</div>
        </div>
        {/* Sub-task */}
        <div className="flex w-full space-x-2">
          <div className="flex items-center mt-1 w-full bg-gray-100 px-2 py-1 rounded-lg">
            <div className="w-6 h-6 flex items-center justify-center text-gray-500">
              <MailPlus className="h-4 w-4" />
            </div>
            <p className="ml-2 text-gray-600 text-[10px]">
              Review draft and reply to Chris Naido
            </p>
          </div>
          <Image src={bard} alt="google bard logo" width={12} height={12} />
        </div>
      </div>

      {/* Activity Card 2 */}
      <div className="bg-white px-4 pb-2 rounded-lg shadow-md mb-4">
        <div className="flex items-center">
          {/* Icon/Image */}
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            FK
          </div>
          {/* Details */}
          <div className="ml-3 flex-1">
            <h3 className="font-semibold text-sm">
              Partnership opportunity for Fabrikam
            </h3>
            <p className="text-[11px] text-gray-500">
              Fabrikam • $5,000,000 • 12 days to close
            </p>
          </div>
          {/* Action */}
          <div className="text-purple-500 text-sm cursor-pointer">⋮</div>
        </div>
        {/* Sub-task */}
        <div className="flex w-full space-x-2">
        <div className="flex w-full items-center mt-1 bg-gray-100 p-2 rounded-lg">
          <div className=" flex items-center justify-center text-gray-500">
            <Calendar className="w-4 h-4" />
          </div>
          <p className="ml-2 text-gray-600 text-[10px]">
            Prepare me for Fabrikam’s key stakeholder meeting
          </p>
        </div>
        <Image src={bard} alt="google bard logo" width={12} height={12} />
        </div>
      </div>

      {/* See All Key Activities */}
      <button
        onClick={handleShowPopup}
        className="text-blue-600 text-sm mt-4 hover:underline"
      >
        Show all key activities
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-800">No more activities</p>
            <button
              onClick={handleClosePopup}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KeyActivities;
