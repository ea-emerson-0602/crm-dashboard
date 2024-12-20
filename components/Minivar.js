import React from "react";
import { MessageCircleMore, Phone, Link2Icon, CloudCog } from "lucide-react";

const MiniNavBar = () => {
  return (
    <div className="h-full w-12 bg-[#EFEFEF] backdrop-blur-sm border-l flex flex-col items-center py-4 space-y-6">
      <div className=" space-y-2">
        {/* Message icon */}
        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
          <Link2Icon className="w-4 h-4 text-gray-600" />
        </button>

        {/* Phone icon */}
        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
          <MessageCircleMore className="w-4 h-4 text-gray-600" />
        </button>

        {/* Document icon */}
        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
          <Phone className="w-4 h-4 text-gray-600" />
        </button>
        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
          <CloudCog className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default MiniNavBar;
