import { ProfileImage } from "./profile-model"

export interface UserModel {
  profileImage: ProfileImage
  _id: string
  fullName: string
  email: string
  username: string
  googleId: string
  phoneNumber: string
  savedProperties: string[]
  role: string
  isEmailVerified: boolean
  verificationStatus: string
  isLogin: boolean
  isBlocked: boolean
}


