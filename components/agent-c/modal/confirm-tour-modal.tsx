"use client";

import { OrangeButton } from "@/components/button/button";
import Input from "@/components/input";
import { useState } from "react";

interface ConfirmTourModalProps {
  open: boolean;
  onClose: () => void;
  property: string;
  requester: string;
  requestedDate: string;
  tourType: string;
}

export default function ConfirmTourModal({
  open,
  onClose,
  property,
  requester,
  requestedDate,
  tourType,
}: ConfirmTourModalProps) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

      <div className="bg-white rounded-xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden">

        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-white border-b p-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xl text-gray-500 hover:text-black"
          >
            ✕
          </button>

          <h2 className="text-lg sm:text-xl font-semibold">
            Confirm tour booking
          </h2>

          <div className="w-6" />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-8">

          {/* Property Info */}
          <div>
            <h3 className="text-[#9b4b17] text-lg font-semibold mb-3">
              Property Info
            </h3>

            <div className="text-sm sm:text-base text-gray-700 space-y-2">
              <p>
                Property Info: <span className="font-medium">{property}</span>
              </p>

              <p>
                Requester: <span className="font-medium">{requester}</span>
              </p>

              <p>
                Requested Date & Time:{" "}
                <span className="font-medium">{requestedDate}</span>
              </p>

              <p>
                Tour Type: <span className="font-medium">{tourType}</span>
              </p>
            </div>
          </div>

          {/* Reschedule */}
          <div className="space-y-4">
            <h3 className="text-[#9b4b17] text-lg font-semibold">
              Reschedule options
            </h3>

            <Input
              label="Date" 
              className="p-4"
              placeholder="Choose a convenient date for you"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <Input
              label="Time"
               className="p-4"
              placeholder="Choose a convenient time for you"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <OrangeButton variant="gray" className="px-12 py-2">
              Reschedule tour
            </OrangeButton>
          </div>

          {/* Message */}
          <div className="space-y-3">
            <h3 className="text-[#9b4b17] text-lg font-semibold">
              Add Custom message (optional)
            </h3>

            <label className="block text-[16px] text-[#3E3E3E] mb-2">
              Message
            </label>

            <textarea
              placeholder="E.g See you then!"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-[#808080] rounded-lg p-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#e87722]"
            />
          </div>
            <OrangeButton className="px-12 py-2">
            Confirm booking
          </OrangeButton>

        </div>

     
        

      </div>
    </div>
  );
}