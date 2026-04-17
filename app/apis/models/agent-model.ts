import { UserModel } from './user-model';

export interface CreateAgentPayload {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  city: string;
  address: string;
  nationality: string;
  nin: string;
  cacNumber?: string;
  companyName: string;
  yearsOfExperience: number;
  description: string;
  isAgreement: boolean;

  selfie: File;
  ninSlip: File;
  cacDoc?: File;
}

export interface AgentModel {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  city: string;
  address: string;
  nationality: string;
  user: UserModel;
  nin: string;
  ninSlipUrl: NinSlipUrl;
  selfieUrl: SelfieUrl;
  cacNumber: string;
  cacDocumentUrl: CacDocumentUrl;
  companyName: string;
  yearsOfExperience: number;
  description: string;
  kycStatus: KycStatus;
  status: string;
  isAgreement: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface NinSlipUrl {
  url: string;
  public_id: string;
}

export interface SelfieUrl {
  url: string;
  public_id: string;
}

export interface CacDocumentUrl {
  url: string;
  public_id: string;
}

export interface KycStatus {
  ninVerified: boolean;
  cacVerified: boolean;
  bvnVerified: boolean;
  livenessVerified: boolean;
}
