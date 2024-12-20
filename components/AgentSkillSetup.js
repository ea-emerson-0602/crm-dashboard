"use client";
import React, { useState } from "react";
import {
  X,
  ChevronUp,
  ChevronDown,
  User,
  File,
  BarChartHorizontal,
  ArrowRightFromLine,
} from "lucide-react";
import { useRouter } from "next/navigation";
import agent from "../assets/agent-skills.jpg";
import copilot from "../assets/copilot-color.svg";
import Image from "next/image";

const AgentSkillSetup = () => {
  const [showModal, setShowModal] = useState(true);
  const [isExpanded, setIsExpanded] = useState(true);
  const [email, setEmail] = useState("purchasing@contoso.com");
  const router = useRouter();

  const handleClose = () => {
    setShowModal(false);
    router.push("/");
  };

  return (
    <div className="relative ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[url('../assets/agent-skills.jpg')] bg-center"
        style={{ backgroundImage: `url(${agent})` }}
      >
        {/* Header */}
        <div className="relative z-10 border-b bg-white/80  px-6 py-4">
          <h1 className="text-xl font-semibold">
            Good morning. Define agent skills and capabilities
          </h1>
        </div>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-gray-500/70 backdrop-blur-xl" />

          {/* Modal Container */}
          <div className="relative h-full flex items-center justify-center p-4">
            {/* Modal Content */}
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl">
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Image
                      src={copilot}
                      alt="Copilot"
                      width={24}
                      height={24}
                      className="rounded"
                    />
                    <h2 className="text-base font-medium">Agent skill</h2>
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Skill Description */}
                <div className="mb-6">
                  <div
                    className="flex justify-between items-start cursor-pointer"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    <p className="text-sm text-gray-700 pr-4">
                      Check if on-hand inventory will allow all sales orders to
                      ship without delay
                    </p>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                    )}
                  </div>
                  {isExpanded && (
                    <div className="mt-4 text-sm">
                      <div className="flex flex-wrap items-center text-gray-700 leading-loose gap-y-3">
                        When
                        <span className="inline-flex items-center gap-1 px-3 mx-2 bg-blue-50 text-blue-600 rounded-full h-7">
                          <User className="w-3.5 h-3.5" />
                          any vendor
                        </span>
                        sends an email with changes to
                        <span className="inline-flex items-center gap-1 px-3 mx-2 bg-blue-50 text-blue-600 rounded-full h-7">
                          <File className="w-3.5 h-3.5" />
                          confirmed purchase orders
                        </span>
                        , check if the resulting
                        <span className="inline-flex items-center gap-1 px-3 mr-2 bg-blue-50 text-blue-600 rounded-full h-7">
                          <BarChartHorizontal className="w-3.5 h-3.5" />
                          on-hand inventory
                        </span>
                        will allow
                        <span className="inline-flex items-center gap-1 px-3 mx-2 bg-blue-50 text-blue-600 rounded-full h-7">
                          <File className="w-3.5 h-3.5" />
                          all sales orders
                        </span>
                        to
                        <span className="inline-flex items-center gap-1 px-3 mx-2 bg-blue-50 text-blue-600 rounded-full h-7">
                          <ArrowRightFromLine className="w-3.5 h-3.5" />
                          ship without delay
                        </span>
                        . If so,
                        <span className="inline-flex items-center gap-1 px-3 mr-2 bg-blue-50 text-blue-600 rounded-full h-7">
                          <ArrowRightFromLine className="w-3.5 h-3.5" />
                          update the purchase order
                        </span>
                        to reflect the change.
                      </div>
                    </div>
                  )}
                </div>

                {/* Email Access Section */}
                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center">
                      <span className="text-blue-600">✉</span>
                    </div>
                    <h3 className="text-sm font-bold">Enable email access</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Allow the agent to access email inboxes to read mail from
                    known vendors
                  </p>
                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-800 text-xs">P</span>
                        </div>
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-8 py-2 border rounded-md bg-gray-50"
                      />
                      <button
                        onClick={() => setEmail("")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
                      Allow access
                    </button>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-blue-600 hover:text-white"  onClick={handleClose}>
                    Activate
                  </button>
                  <button
                    onClick={handleClose}
                    className="px-4 py-2 text-gray-600 text-sm font-medium rounded-md hover:bg-gray-50"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentSkillSetup;
