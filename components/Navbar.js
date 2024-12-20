import React from 'react';
import { 
  Lightbulb, 
  Plus, 
  Settings, 
  HelpCircle,
  MessageCircleQuestion 
} from 'lucide-react';
import jane from "../assets/jane-reyes.jpeg"
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#00102A] text-white/80 z-50 h-12 flex items-center justify-between px-4 shadow-md">
      {/* Left Side */}
      <div className="flex items-center space-x-4">
        <div className="grid grid-cols-3 gap-[2px] w-6 h-6">
          {[...Array(9)].map((_, index) => (
            <div 
              key={index} 
              className="bg-white/80 rounded-sm" 
              style={{ 
                width: '2px', 
                height: '2px' 
              }}
            />
          ))}
        </div>
        <span className="text-sm">Dynamics 365 | Sales Hub</span>
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
        <button>
          <Image src={jane} width={24} height={24} alt='placeholder image' className='rounded-full' />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;