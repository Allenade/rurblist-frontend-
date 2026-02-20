'use client'

import React, { useState } from 'react'
import SearchBar from '@/components/search-bar/search-bar2'
import  { BedsBathsFilter, ForSaleFilter, PriceFilter, TypeFilter } from '@/components/dropdown/filter-dropdown'
import PropertyBanner from '@/components/propety-details/property-banner'
import PropertyCard from '@/components/propety-details/property-card'


const mockComments = [
  {
    id: '1',
    profileImage: '/image/profile-image2.jpg',
    name: 'Alfred James',
    date: 'Jan 18, 2025',
    text: "I'm interested in booking a virtual tour. Is it still available?",
     replies: [
      {
        id: '1-1',
        profileImage: '/image/profile-img.png',
        name: 'Emily James',
        date: 'Jan 18, 2025',
        text: 'Yes! Virtual tours are available this week. What date works for you?',
        role: 'Agent'
      }
    ]
  },
  {
    id: '2',
    profileImage: '/image/profile-img.png',
    name: 'Alfred James',
    date: 'Jan 18, 2025',
    text: "I'm interested in booking a virtual tour. Is it still available?",
    role: 'Agent'
  },
  {
    id: '3',
    profileImage: '/image/profile-img.png',
    name: 'Alfred James',
    date: 'Jan 18, 2025',
    text: 'Yes! Virtual tours are available this week. What date works for you?'
  }
]

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('forsale')
  const [selectedPrice, setSelectedPrice] = useState('any')
  const [selectedCategory, setSelectedCategory] = useState('bedsitters')
  const [selectedBeds, setSelectedBeds] = useState('any')

  return (
    <div className="min-h-screen bg-white">
      {/* Search and Filters */}
       <div className=" bg-white px-6 py-4 border-b border-gray-200 pt-18">
        <div className="max-w-7xl mx-auto ">
          <div className="flex items-center gap-4 flex-wrap">
           

          {/* Filter Dropdowns */}
          <div className="flex gap-3 flex-wrap">
             <SearchBar
              placeholder="Search..."
              value={searchQuery}
               className="w-full md:w-96"
              onChange={setSearchQuery}
            />
            <ForSaleFilter
    value={selectedType}
    onChange={setSelectedType}
  />

  <PriceFilter />

  <TypeFilter
    value={selectedCategory}
    onChange={setSelectedCategory}
  />

  <BedsBathsFilter />
          </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Banner */}
        <PropertyBanner
          title="Buy Properties Safely!"
          description="With Rurblist Account, your money is secured while we ensure every property is verified"
          imageUrl="/image/banner-img.svg"
          onLearnMore={() => console.log('Learn more clicked')}
        />

        {/* Property Cards */}
        <div className="space-y-6">
          {[1, 2, 3].map(idx => (
            <PropertyCard
              key={idx}
              title="For Rent - The Pearl Apartments, warri Delta state."
              mainImage="/image/image7.jpg"
              galleryImages={[
                { id: '1', url: '/image/image6.jpg' },
                { id: '2', url: '/image/image2.jpg' },
                { id: '3', url: '/image/image3.jpg' },
                { id: '4', url: '/image/image4.jpg' },
                { id: '5', url: '/image/image5.jpg' }
              ]}
              description="Newly renovated home in the sought-after Lekki neighborhood. This modern property features spacious rooms and excellent amenities."
              price="₦300,000,000 yearly"
              bedrooms={4}
              bathrooms={3}
              profileImage="/image/profile-img.png"
              profileName="Emily James"
              // profileRole="Agent"
              comments={mockComments}
              onChatClick={() => console.log('Chat clicked')}
            />
          ))}
        </div>
      </div>
    </div>
  )
}