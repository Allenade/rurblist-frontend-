import { AgentModel } from './agent-model';
import { PropertyModel } from './property-model';
import { UserModel } from './user-model';

export interface PaymentModel {
  authorization_url: string;
  access_code: string;
  reference: string;
}

export interface PaymentDetailModel {
  _id: string;
  user: UserModel;
  agent: AgentModel;
  property: PropertyModel;
  tour: string;
  paymentFor: string;
  paymentMethod: string;
  amount: number;
  currency: string;
  status: string;
  plan: any;
  reference: string;
  receiptSent: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  paidAt: string;
  transactionId: string;
}
