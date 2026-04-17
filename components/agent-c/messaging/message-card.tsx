"use client"

import Image from "next/image"
import { useState } from "react"
import ConfirmTourModal from "../modal/confirm-tour-modal"

interface MessageCardProps {
  name: string
  message: string
  date: string
  property: string
  timestamp: string
  avatar?: string
}

function getInitials(name: string) {
  const parts = name.trim().split(" ")
  return parts.map(p => p[0]).join("").toUpperCase()
}

export default function MessageCard({
  name,
  message,
  date,
  property,
  timestamp,
  avatar,
}: MessageCardProps) {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 transition hover:shadow-md">
      
      {/* Avatar + Name */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center text-sm font-semibold text-gray-700">
          
          {avatar ? (
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
            />
          ) : (
            getInitials(name)
          )}

        </div>

        <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
          {name}
        </h3>
      </div>

      {/* Message Info */}
      <div className="text-sm sm:text-base text-gray-700 space-y-1">
        <p>{message}</p>
        <p>{date}</p>
        <p>Property: {property}</p>
      </div>

      {/* Time */}
      <p className="text-xs text-gray-500 mt-4">
        {timestamp}
      </p>

      {/* Reply */}
      <button
       onClick={() => setOpenModal(true)}
       className="mt-3 text-[#9b4b17] font-medium hover:underline">
        Reply
      </button>
      <ConfirmTourModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        property="2-Bedroom Apartment in Greenwich Village"
        requester="John D."
        requestedDate="Thursday, October 12, 3:00 PM"
        tourType="In-Person Tour"
      />
    </div>
  )
}