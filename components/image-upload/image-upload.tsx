'use client'

import React, { useState } from 'react'
import { IconImage } from '@/components/icon-image/icon-image'

type ImageUploadProps = {
  label: string
  maxFiles?: number
  description?: string
  onUpload?: (files: File[]) => void
  gridCols?: number
  isVideo?: boolean
}

export default function ImageUpload({
  label,
  maxFiles = 6,
  description,
  onUpload,
  gridCols = 4,
  isVideo = false,
}: ImageUploadProps) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const remainingSlots = maxFiles - uploadedFiles.length
    const filesToAdd = files.slice(0, remainingSlots)

    const newFiles = [...uploadedFiles, ...filesToAdd]
    setUploadedFiles(newFiles)
    onUpload?.(newFiles)
  }

  const handleUploadClick = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.multiple = maxFiles > 1
    input.accept = isVideo ? 'video/*' : 'image/*'
    input.onchange = (e) => handleFileSelect(e as any)
    input.click()
  }

  const removeFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index)
    setUploadedFiles(newFiles)
    onUpload?.(newFiles)
  }

  const gridColsClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }[gridCols] || 'grid-cols-4'

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <label className="text-[16px] text-[#3E3E3E] font-medium">
          {label}
        </label>
        {description && (
          <span className="text-sm text-gray-500">{description}</span>
        )}
      </div>

      <div className={`grid ${gridColsClass} gap-4`}>
        {uploadedFiles.map((file, index) => (
          <div
            key={index}
            className="relative border border-[#808080] rounded-lg overflow-hidden aspect-square bg-gray-50"
          >
            <img
              src={URL.createObjectURL(file)}
              alt={`Upload ${index}`}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => removeFile(index)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}

        {uploadedFiles.length < maxFiles && (
          <button
            onClick={handleUploadClick}
            className="border-2 border-dashed border-[#808080] rounded-lg aspect-square flex items-center justify-center hover:border-[#e87722] hover:bg-orange-50 transition-colors cursor-pointer"
          >
            <IconImage
              src="/upload-cloud.png"
              alt="upload"
              width={24}
              height={24}
            />
          </button>
        )}
      </div>
    </div>
  )
}
