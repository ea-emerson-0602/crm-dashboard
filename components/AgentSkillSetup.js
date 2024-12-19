"use client"
import React, { useState } from 'react';
import { X, ChevronUp, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AgentSkillSetup = () => {
  const [showModal, setShowModal] = useState(true);
  const [isExpanded, setIsExpanded] = useState(true);
  const [email, setEmail] = useState('purchasing@contoso.com');
  const router = useRouter();

  const handleClose = () => {
    setShowModal(false);
    router.push('/'); // Navigate to homepage
  };

  return (
    <div className="fixed inset-0 bg-white z-50">
      {/* Header */}
      <div className="border-b px-6 py-4">
        <h1 className="text-xl">Good morning. Define agent skills and capabilities</h1>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Agent Skill Configuration */}
        <div className="max-w-3xl">
          {showModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-xl">
                <div className="p-6">
                  {/* Modal Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-400 to-blue-600"></div>
                      <h2 className="text-lg font-medium">Agent skill</h2>
                    </div>
                    <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Skill Description */}
                  <div className="mb-6">
                    <div 
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      <span className="text-sm">Check if on-hand inventory will allow all sales orders to ship without delay</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                    {isExpanded && (
                      <div className="mt-4 text-sm">
                        <p className="mb-4">When <span className="text-blue-600">any vendor</span> sends an email with changes to <span className="text-blue-600">confirmed purchase orders</span>, check if the resulting</p>
                        <p className="mb-4"><span className="text-blue-600">on-hand inventory</span> will allow <span className="text-blue-600">all sales orders</span> to <span className="text-blue-600">ship without delay</span>. If so,</p>
                        <p><span className="text-blue-600">update the purchase order</span> to reflect the change.</p>
                      </div>
                    )}
                  </div>

                  {/* Email Access Section */}
                  <div className="border-t pt-4">
                    <h3 className="flex items-center gap-2 mb-4">
                      <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-xs">✉</span>
                      </div>
                      Enable email access
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Allow the agent to access email inboxes to read mail from known vendors
                    </p>
                    <div className="flex gap-2">
                      <div className="flex-1 relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2">
                          <div className="w-4 h-4 rounded bg-red-100 flex items-center justify-center">
                            <span className="text-red-600 text-xs">P</span>
                          </div>
                        </div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-8 py-2 border rounded"
                        />
                        <button 
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          onClick={() => setEmail('')}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Allow access
                      </button>
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="flex justify-end gap-3 mt-6">
                    <button 
                      onClick={handleClose}
                      className="px-4 py-2 border rounded hover:bg-gray-50"
                    >
                      Close
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-500 rounded">
                      Activate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentSkillSetup;