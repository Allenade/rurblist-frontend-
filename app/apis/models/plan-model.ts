export type Root = PlanModel[];

export interface PlanModel {
  _id: string;
  name: string;
  slug: string;
  amount: number;
  currency: string;
  features: string[];
  isActive: boolean;
  createdBy: string;
}
