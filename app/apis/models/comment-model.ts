import { ReplyModel } from "./reply-model"
import { UserModel } from "./user-model"

export interface CommentModel {
  _id: string
  property: string
  user: UserModel
  text: string
  parentComment: any
  createdAt: string
  updatedAt: string
  replies: ReplyModel[]
  isOwnerComment: boolean
  isCurrentUser: boolean
}
