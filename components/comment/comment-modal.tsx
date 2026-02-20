'use client'

import React, { useState } from 'react'
import Comment from './comment'
import { OrangeButton } from '../button/button'

export interface CommentType {
  id: string
  profileImage: string
  name: string
  date: string
  text: string
  role?: string
  replies?: CommentType[]
}
interface CommentModalProps {
  isOpen: boolean
  onClose: () => void
  comments: CommentType[]
}

export default function CommentModal({
  isOpen,
  onClose,
  comments
}: CommentModalProps) {
  const [sortBy, setSortBy] = useState('newest')

  if (!isOpen) return null

  return (
<div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-96 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <button
            onClick={onClose}
            className="text-xl font-bold text-gray-900"
          >
            ✕
          </button>
          <h2 className="text-xl font-bold text-gray-900">Comments</h2>
          <div className="w-6" />
        </div>

        {/* Sort */}
        <div className="px-4 pt-4 flex items-center gap-2">
          <span className="text-sm text-gray-700">≡ ↑</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm font-medium text-gray-700 bg-transparent cursor-pointer hover:underline"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>

        {/* Comments List */}
        <div className="overflow-y-auto flex-1 px-4">
          {comments.map(comment => (
             <Comment
      key={comment.id}
      comment={comment}
    />
          ))}
        </div>
      </div>
    </div>
  )
}
