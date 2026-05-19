import { AgentModel } from '@/features/agents/models/agent-model';
import { PropertyModel } from '@/features/properties/models/property-model';
import { UserModel } from '@/features/users/models/user-model';

export interface BookInspectionPayload {
  agentId: string;
  propertyId: string;
  price: number;
  tourType: 'in-person' | 'inspection' | 'call';
  scheduledAt: Date; // ISO date
  note?: string;
}

export interface TourModel {
  user: string;
  agent: string;
  property: string;
  tourType: string;
  date: string;
  price: number;
  paid: boolean;
  note: string;
  status: string;
  expiresAt: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TourModel2 {
  _id: string;
  user: UserModel;
  agent: AgentModel;
  property: PropertyModel;
  tourType: string;
  date: string;
  price: number;
  paid: boolean;
  status: string;
  note: string;
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
