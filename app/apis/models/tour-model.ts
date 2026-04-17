export interface BookInspectionPayload {
  agentId: string;
  propertyId: string;
  price: number;
  tourType: 'in-person' | 'inspection' | 'call';
  scheduledAt: string; // ISO date
  note?: string;
}
