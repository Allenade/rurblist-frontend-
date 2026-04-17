import { ProfileImage } from './profile-model';

export interface currentUserModel {
  user: UserModel;
  homeSeeker: HomeSeekerModel;
  agent: AgentModelc;
}

export interface UserModel {
  profileImage: ProfileImage;
  _id: string;
  fullName: string;
  email: string;
  username: string;
  phoneNumber: string;
  roles: string[];
  isLogin: boolean;
}

export interface HomeSeekerModel {
  ninSlipUrl: NinSlipUrl;
  selfieUrl: SelfieUrl;
  kycStatus: KycStatus;
  verificationData: VerificationData;
  _id: string;
  user: string;
  preferredLocations: any[];
  savedProperties: any[];
  status: string;
  plan: any;
  isPlanActive: boolean;
  nin: any;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface AgentModelc {
  ninSlipUrl: NinSlipUrl;
  selfieUrl: SelfieUrl;
  cacDocumentUrl: CacDocumentUrl;
  kycStatus: KycStatus;
  verificationData: VerificationData;
  _id: string;
  user: UserModel;
  firstName: string;
  lastName: string;
  nationality: string;
  cacNumber: any;
  companyName: any;
  status: string;
  nin: any;
  bvn: any;
  isAgreement: boolean;
  savedProperties: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface NinSlipUrl {
  url: any;
  public_id: any;
}

export interface SelfieUrl {
  url: any;
  public_id: any;
}

export interface CacDocumentUrl {
  url: any;
  public_id: any;
}

export interface KycStatus {
  ninVerified: boolean;
  cacVerified: boolean;
  bvnVerified: boolean;
  livenessVerified: boolean;
}

export interface VerificationData {
  nin: any;
  cac: any;
  liveness: any;
  bvn: any;
}
