import React from 'react';
import { 
  LayoutGrid, 
  Lightbulb, 
  Plus, 
  Settings, 
  HelpCircle, 
  UserCircle2, 
  MessageCircleQuestion 
} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-900 text-white z-50 h-12 flex items-center justify-between px-4 shadow-md">
      {/* Left Side */}
      <div className="flex items-center space-x-4">
        <div className="grid grid-cols-3 gap-1 w-6 h-6">
          {[...Array(9)].map((_, index) => (
            <div 
              key={index} 
              className="bg-white/30 rounded-sm" 
              style={{ 
                width: '6px', 
                height: '6px' 
              }}
            />
          ))}
        </div>
        <span className="text-sm font-semibold">Dynamics 365 | Sales Hub</span>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <button className="hover:bg-white/10 rounded-full p-2">
          <Lightbulb size={20} />
        </button>
        <button className="hover:bg-white/10 rounded-full p-2">
          <Plus size={20} />
        </button>
        <button className="hover:bg-white/10 rounded-full p-2">
          <Settings size={20} />
        </button>
        <button className="hover:bg-white/10 rounded-full p-2">
          <HelpCircle size={20} />
        </button>
        <button className="hover:bg-white/10 rounded-full p-2">
          <MessageCircleQuestion size={20} />
        </button>
        <button className="hover:bg-white/10 rounded-full p-2">
          <UserCircle2 size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;