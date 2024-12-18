import React from 'react';
import { MoreHorizontal, ChevronDown, LineChart, Layout, RefreshCw, Users, Trash2, Filter, Settings, ChevronRight } from 'lucide-react';
import FilterableTable from "./FilterableTable"
const LeadCard = () => {
  return (
    <div className="w-full max-w-5xl p-4 bg-white rounded-lg">
      {/* Header Navigation */}
      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
        <div className="flex items-center">
          <span>My open leads</span>
          <ChevronDown className="w-4 h-4 ml-1" />
        </div>
        <div className="flex items-center gap-3 ml-auto">
          <LineChart className="w-4 h-4" />
          <span>Show chart</span>
          <Layout className="w-4 h-4 ml-2" />
          <span>Focused view</span>
          <div className="flex items-center gap-3 ml-2 border-l pl-3">
            <button className="flex items-center gap-1">
              <span className="text-blue-600">New</span>
            </button>
            <RefreshCw className="w-4 h-4" />
            <Users className="w-4 h-4" />
            <Trash2 className="w-4 h-4" />
            <Filter className="w-4 h-4" />
            <Settings className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Main Card */}
      <div className="border rounded-lg p-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-gray-800">Hi Mona,</span>
          <span className="font-medium">68% of goal achieved</span>
          <span className="text-gray-600">and rest can be achieved by focusing on 20 top leads.</span>
        </div>

        <div className="text-sm text-gray-600 mb-4">
          Copilot has prioritized 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus.
        </div>

        {/* Tasks Grid */}
        <div className="grid grid-cols-3 gap-4">
          {/* Task 1 */}
          <div className="bg-white p-4 rounded-lg border">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div>
                <div className="font-medium">Jane Reyes</div>
                <div className="text-sm text-gray-500">CIO - Paramount traders</div>
              </div>
              <MoreHorizontal className="w-4 h-4 ml-auto" />
            </div>
            <div className="text-sm text-gray-600">
              Jane may be interested in upgrading espresso machines for her in-store coffee shops.
            </div>
            <div className="mt-2 text-xs text-gray-500 flex items-center gap-2">
              <span>Current Business</span>
              <span>•</span>
              <span>High buying intent</span>
            </div>
          </div>

          {/* Task 2 */}
          <div className="bg-white p-4 rounded-lg border">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div>
                <div className="font-medium">Allan Munger</div>
                <div className="text-sm text-gray-500">Head of Real Estate Development - Contoso Coffee</div>
              </div>
              <MoreHorizontal className="w-4 h-4 ml-auto" />
            </div>
            <div className="text-sm text-gray-600">
              Prepare for high-buying intent meeting scheduled for 2 PM regarding upgrading service contract.
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Upcoming meeting • B2B Sales
            </div>
          </div>

          {/* Key Activities Section */}
          <div className="bg-white p-4 rounded-lg border">
            <div className="font-medium mb-2">Other key activities</div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center text-xs">
                  AI
                </div>
                <div className="text-sm">
                  <div className="font-medium">Cafe AI360 for WoodLand Bank</div>
                  <div className="text-gray-500">Review AI analysis Data News</div>
                </div>
                <ChevronRight className="w-4 h-4 ml-auto" />
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center text-xs">
                  P
                </div>
                <div className="text-sm">
                  <div className="font-medium">Partnership for Fairburn</div>
                  <div className="text-gray-500">Review AI analysis Data News</div>
                </div>
                <ChevronRight className="w-4 h-4 ml-auto" />
              </div>
            </div>
            <button className="text-sm text-blue-600 mt-3">
              Show all my activities
            </button>
          </div>
        </div>
      </div>
      <FilterableTable/>
    </div>
  );
};

export default LeadCard;