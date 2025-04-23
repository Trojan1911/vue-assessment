export interface CommentsResponse {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface CommentPayload {
  email: string
  name: string
  comment: string
}
