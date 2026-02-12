'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Input from '@/components/input'
import Dropdown from '@/components/dropdown/dropdown'
import ImageUpload from '@/components/image-upload/image-upload'
import { OrangeButton } from '@/components/button/button'
import Footer from '@/components/footer/footer'
import { IconImage } from '@/components/icon-image/icon-image'

export default function AddPropertyPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    propertyTitle: '',
    propertyAddress: '',
    description: '',
    type: '',
    status: '',
    bedrooms: '',
    bathrooms: '',
    price: '',
  })

  const [images, setImages] = useState<File[]>([])
  const [video, setVideo] = useState<File[]>([])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDropdownChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSaveDraft = () => {
    console.log('Saving draft...', formData)
  }

  const handleUploadProperty = () => {
    console.log('Uploading property...', { formData, images, video })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 px-6 py-8 bg-white">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => router.back()}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <IconImage
              src="/chevron-left.png"
              alt="back"
              width={24}
              height={24}
            />
          </button>
          <h1 className="text-2xl font-semibold text-[#000000]">Add Property</h1>
          <p className="font-semibold">
            <span className="text-brand-500 font-bold ">03</span>
            <span className="text-[24] font-normal"> of 03</span>
          </p>
        </div>
      </header>

      {/* Form */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Basic Details */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#833700] mb-8">
            Basic Details
          </h2>
          <div className="space-y-6">
            <Input
              label="Property title"
              name="propertyTitle"
              placeholder="E.g A luxury 2 bedroom flat"
              value={formData.propertyTitle}
              onChange={handleInputChange}
            />

            <Input
              label="Property address"
              name="propertyAddress"
              placeholder="E.g Ugbomro"
              value={formData.propertyAddress}
              onChange={handleInputChange}
            />

            <div>
              <label className="block text-[16px] text-[#3E3E3E] mb-2">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Describe the property in full. Every detail matters"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#808080] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e87722] focus:border-transparent resize-none h-32"
              />
            </div>
          </div>
        </div>

        {/* Property Specifications */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#833700] mb-8">
            Property Specifications
          </h2>
          <div className="space-y-6">
            <Dropdown
              label="Type"
              placeholder="1 bedroom flat"
              options={[
                { value: 'apartment', label: 'Apartment' },
                { value: 'house', label: 'House' },
                { value: 'land', label: 'Land' },
                { value: 'commercial', label: 'Commercial' },
              ]}
              value={formData.type}
              onChange={(value) => handleDropdownChange('type', value)}
            />

            <Dropdown
              label="Status"
              placeholder="For rent"
              options={[
                { value: 'for-sale', label: 'For Sale' },
                { value: 'for-rent', label: 'For Rent' },
              ]}
              value={formData.status}
              onChange={(value) => handleDropdownChange('status', value)}
            />

            <Input
              label="Number of bedrooms"
              name="bedrooms"
              type="number"
              placeholder="Input number of bedrooms"
              value={formData.bedrooms}
              onChange={handleInputChange}
            />

            <Input
              label="Number of bathrooms"
              name="bathrooms"
              type="number"
              placeholder="Input number of bathrooms"
              value={formData.bathrooms}
              onChange={handleInputChange}
            />

            <Input
              label="Price"
              name="price"
              placeholder="$"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Media Uploads */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#833700] mb-8">
            Media Uploads
          </h2>
          <div className="space-y-8">
            <ImageUpload
              label="Images"
              maxFiles={6}
              onUpload={setImages}
              gridCols={4}
            />

            <ImageUpload
              label="Video (optional)"
              maxFiles={1}
              onUpload={setVideo}
              gridCols={1}
              isVideo={true}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-16">
          <OrangeButton
            variant="gray"
            fullWidth
            onClick={handleSaveDraft}
          >
            Save as draft
          </OrangeButton>
          <OrangeButton
            variant="orange"
            fullWidth
            onClick={handleUploadProperty}
          >
            Upload property
          </OrangeButton>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
