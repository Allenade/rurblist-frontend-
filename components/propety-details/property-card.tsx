'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { OrangeButton } from '../button/button'
import ProfileImage from '../profile-image/profile-image'
import CommentModal from '../comment/comment-modal'
import type { CommentType } from '../comment/comment-modal'
import Input from '../input'
import { IconImage } from '../icon-image/icon-image'
import Link from 'next/link'

interface GalleryImage {
  id: string
  url: string
}

interface PropertyCardProps {
  title: string
  mainImage: string
  galleryImages: GalleryImage[]
  description: string
  price: string
  bedrooms: number
  bathrooms: number
  profileImage: string
  profileName: string
  comments: CommentType[]
  onChatClick?: () => void
}

export default function PropertyCard({
  title,
  mainImage,
  galleryImages,
  description,
  price,
  bedrooms,
  profileImage,
  profileName,
  comments,
  onChatClick
}: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
const [likes, setLikes] = useState(58)
const [unlikes, setUnlikes] = useState(0)
const [reaction, setReaction] = useState<'like' | 'unlike' | null>(null)
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)
const handleLike = () => {
  if (reaction === 'like') {
    setLikes(prev => prev - 1)
    setReaction(null)
  } else {
    if (reaction === 'unlike') {
      setUnlikes(prev => prev - 1)
    }
    setLikes(prev => prev + 1)
    setReaction('like')
  }
}

const handleUnlike = () => {
  if (reaction === 'unlike') {
    setUnlikes(prev => prev - 1)
    setReaction(null)
  } else {
    if (reaction === 'like') {
      setLikes(prev => prev - 1)
    }
    setUnlikes(prev => prev + 1)
    setReaction('unlike')
  }
}
  const displayImage =
    currentImageIndex === 0
      ? mainImage
      : galleryImages[currentImageIndex - 1]?.url

  return (
    <div className="bg-white mb-10">
      
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        {title}
      </h2>

      {/* Main Image */}
      <div className="relative w-full h-99.75  overflow-hidden">
        <Image
          src={displayImage}
          alt={title}
          fill
          className="object-cover"
        />

        {/* Verified badge */}
        <div className="absolute top-4 left-4 bg-green-500 text-white text-sm px-4 py-1 rounded-full">
          Verified
        </div>

        {/* Heart icon */}
        <button >
           <IconImage
                  src="/icons/heart.svg"
                  alt="heart"
                  width={55}
                  height={48}
                  className= "absolute top-4 right-4  p-3"
                />
       
        </button>
      </div>

      {/* Thumbnails */}
      <div className="hidden sm:flex gap-5 mt-5 overflow-x-auto">
        {[{ id: 'main', url: mainImage }, ...galleryImages].map(
          (img, idx) => (
            <button
              key={img.id}
              onClick={() => setCurrentImageIndex(idx)}
              className="relative w-40.75 h-25  overflow-hidden"
            >
              <Image
                src={img.url}
                alt="gallery"
                fill
                className="object-cover"
              />
            </button>
          )
        )}
      </div>

      {/* Content Layout */}
      <div className="grid md:grid-cols-3 gap-10 mt-8">
        
        {/* LEFT CONTENT */}
        <div className="md:col-span-2">
          <p className="text-gray-700 leading-relaxed text-sm mb-6">
            {description}
          </p>

          <p className="text-sm text-gray-700 mb-1">
            {bedrooms} bedroom Duplex
          </p>

          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl  font-bold text-black">
              {price}
            </h3>
            <p className="text-sm text-gray-600">
              Agent fee: ₦2,000,000
            </p>
          </div>
  {/* Agent (Mobile position) */}
        <div className="md:hidden mb-6">
          <div className="flex items-center gap-4">
            <ProfileImage
              src={profileImage}
              alt={profileName}
              size="md"
            />
            <div>
              <p className="font-semibold text-gray-900">
                {profileName}
              </p>
              <p className="text-xs text-gray-500">
                Posted on 12/03/2023
              </p>
            </div>
          </div>

         <Link href="/property/escrow" > <OrangeButton
            variant="orange"
            className="mt-4 px-6 py-2 text-sm"
            onClick={onChatClick}
          >
            CHAT
          </OrangeButton></Link>
        </div>

         {/* Engagement */}
<div className="flex items-center gap-6 text-gray-600 text-sm mb-10">
  
  <button
    onClick={handleLike}
    className={`flex items-center gap-2 transition ${
      reaction === 'like' ? 'text-[#e87722]' : ''
    }`}
  >
    {likes}
    <IconImage
      src="/icons/thumbs-up.svg"
      alt="like"
      width={20}
      height={20}
    />
  </button>

  <button
    onClick={handleUnlike}
    className={`flex items-center gap-2 transition ${
      reaction === 'unlike' ? 'text-red-500' : ''
    }`}
  >
    {unlikes}
    <IconImage
      src="/icons/thumbs-down.svg"
      alt="unlike"
      width={20}
      height={20}
    />
  </button>

  <button
    onClick={() => setIsCommentModalOpen(true)}
    className="flex items-center gap-2"
  >
    {comments.length}
    <IconImage
      src="/icons/message-circle.svg"
      alt="comments"
      width={20}
      height={20}
    />
  </button>

</div>

         {/* Comment Section */}
<div className="mt-12">
  <h4 className="font-semibold text-lg mb-6">
    Leave a Reply
  </h4>

  <div className="space-y-5 max-w-2xl">
    
    <Input
      placeholder="Name (required)"
      className="px-4 bg-white"
      required
    />

    <Input
      type="email"
      placeholder="Email (required)"
      className="px-4 bg-white"
      required
    />

    <textarea
      placeholder="Your comment here..."
      rows={7}
      className="
        w-full 
        px-4 
        py-3 
        bg-white 
        border 
        border-[#808080] 
        rounded-lg 
        resize-none
        focus:outline-none 
        focus:ring-2 
        focus:ring-[#e87722] 
        focus:border-transparent
      "
    />
   <OrangeButton
            variant="gray"
            className="mt-2 px-6 py-2 text-sm"
          
          >
              Post comment
          </OrangeButton>
  

  </div>
</div>
        </div>

          {/* RIGHT SIDE AGENT CARD */}
<div className="hidden md:flex  justify-end">
  <div className="flex items-start gap-4">
    <ProfileImage
      src={profileImage}
      alt={profileName}
      size="lg"
    />

    <div className="flex flex-col items-start">
      <p className="font-semibold text-gray-900">
        {profileName}
      </p>
      <p className="text-xs text-gray-500">
        Posted on 12/03/2023
      </p>

   <Link href="/property/escrow" >   <OrangeButton
        variant="orange"
        className="mt-3 px-7 py-2 text-[12px]"
        onClick={onChatClick}
      >
        CHAT
      </OrangeButton></Link>
    </div>
  </div>
</div>
      </div>
      
      <CommentModal
        isOpen={isCommentModalOpen}
        onClose={() => setIsCommentModalOpen(false)}
        comments={comments}
      />
    </div>
  )
}