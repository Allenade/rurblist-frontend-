'use client'

import React, { useState } from 'react'
import ProfileImage from '../profile-image/profile-image'
import { IconImage } from '../icon-image/icon-image'

interface CommentProps {
  comment: any
}

export default function Comment({ comment }: CommentProps) {
  const [showReplies, setShowReplies] = useState(false)
  const [showReplyInput, setShowReplyInput] = useState(false)
  const [replyText, setReplyText] = useState('')

  const hasReplies = comment.replies && comment.replies.length > 0

  const handleSendReply = () => {
    if (!replyText.trim()) return
    console.log('Reply:', replyText)
    setReplyText('')
    setShowReplyInput(false)
  }

  return (
    <div className="py-5 border-b border-gray-200 last:border-b-0">
      <div className="flex gap-3">
        <ProfileImage
          src={comment.profileImage}
          alt={comment.name}
          size="sm"
        />

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-gray-900">
              {comment.name}
            </h4>
            {comment.role && (
              <span className="text-xs text-[#e87722]">
                {comment.role}
              </span>
            )}
          </div>

          <p className="text-xs text-gray-500 mb-2">
            {comment.date}
          </p>

          <p className="text-gray-700 mb-3">
            {comment.text}
          </p>

          {/* Reply + Toggle */}
          <div className="flex items-center justify-between text-sm">
            <button
              onClick={() => setShowReplyInput(prev => !prev)}
              className="text-[#e87722] font-medium"
            >
              Reply
            </button>

            {hasReplies && (
              <button
                onClick={() => setShowReplies(prev => !prev)}
                className="flex items-center gap-1 text-[#e87722]"
              >
                {comment.replies.length} response
                <IconImage
                  src="/icons/chevron-down.svg"
                  alt="toggle"
                  width={14}
                  height={14}
                  className={`transition-transform ${
                    showReplies ? 'rotate-180' : ''
                  }`}
                />
              </button>
            )}
          </div>

          {/* Reply Input */}
          {showReplyInput && (
            <div className="mt-4 flex gap-3">
              <ProfileImage
                src="/image/profile-img.png"
                alt="you"
                size="sm"
              />
              <div className="flex-1">
                <input
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Write a reply..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#e87722]"
                />
                <button
                  onClick={handleSendReply}
                  className="mt-2 bg-[#e87722] text-white px-4 py-1.5 rounded-lg text-sm"
                >
                  Send
                </button>
              </div>
            </div>
          )}

          {/* Nested Replies */}
          {showReplies && hasReplies && (
            <div className="mt-5 ml-8 border-l border-gray-200 pl-6 space-y-5">
              {comment.replies.map((reply: any) => (
                <Comment key={reply.id} comment={reply} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}