'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BackNavbar from '@/components/agent-c/back-navbar';
import { AgentInfoSection } from '@/components/agent-c/agent-info-section';
import AgentInfoSectionSkeleton from '@/components/agent-c/agent-info-section-skeleton';
import CurrentListingsSection from '@/components/agent-c/current-listings-section';
import CurrentListingsSectionSkeleton from '@/components/agent-c/current-listings-section-skeleton';
import MessagesSection from '@/components/agent-c/messaging/messages-section';
import MessagesSectionSkeleton from '@/components/agent-c/messaging/messages-section-skeleton';
import { useGetCurrentAgent } from '@/app/apis/mutations/use-agent/get-current-agent';
import { useGetMyProperties } from '@/app/apis/mutations/use-property/use-get-my-properties';
import { useAuth } from '@/components/layout/auth-provider';
import { useLayoutStore } from '@/store/layout-store';

export default function AgentPrivateProfilePage() {
  const setHideNavbar = useLayoutStore((state) => state.setHideNavbar);
  const router = useRouter();
  const { user } = useAuth();

  const { data, isLoading } = useGetCurrentAgent();
  const { data: propertiesData, isLoading: isPropertiesLoading } = useGetMyProperties();
  const isAgent = data?.data;
  useEffect(() => {
    setHideNavbar(true);
    return () => setHideNavbar(false);
  }, [setHideNavbar]);

  const agentData = data?.data;
  const currentAgent = agentData?.agent;
  const properties = propertiesData?.data ?? [];

  const agent = {
    name:
      currentAgent?.fullName ||
      user?.fullName ||
      [agentData?.firstName, agentData?.lastName].filter(Boolean).join(' ') ||
      'Agent',
    agency: agentData?.companyName || currentAgent?.role || 'Real estate agency',
    experience: `${agentData?.yearsOfExperience ?? 0} years of experience`,
    location:
      [agentData?.city, agentData?.address].filter(Boolean).join(', ') || 'No location added',
    image:
      currentAgent?.profileImage?.url || user?.profileImage?.url || '/image/profile-image2.jpg',
    phone: currentAgent?.phoneNumber || user?.phoneNumber || 'No phone number added',
    email: currentAgent?.email || user?.email || 'No email added',
    about:
      agentData?.description || 'Create your agent profile to add your agency details and bio.',
  };

  const listings = properties.map((property) => ({
    id: property._id,
    title: property.title,
    price: property.price,
    status: property.status as 'For_Rent' | 'For_Sale' | 'Sold',
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    sqft: property.size,
    image: property.images?.[0]?.url || '/image/image1.jpg',
  }));

  const messages: Array<{
    id: string;
    name: string;
    message: string;
    date: string;
    property: string;
    timestamp: string;
    avatar?: string;
  }> = [];

  return (
    <div>
      <BackNavbar logoSrc="/Rublist.svg" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <AgentInfoSectionSkeleton />
        ) : (
          <AgentInfoSection
            agent={agent}
            isCreateAgent={!isAgent}
            onActionClick={() => {
              if (!isAgent) {
                router.push('/agent/request');
              }
            }}
          />
        )}
        {isPropertiesLoading ? (
          <CurrentListingsSectionSkeleton />
        ) : (
          <CurrentListingsSection properties={listings} />
        )}
        {isLoading ? <MessagesSectionSkeleton /> : <MessagesSection messages={messages} />}
      </div>
    </div>
  );
}
