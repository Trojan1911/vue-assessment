export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface CommentPayload {
  email: string;
  name: string;
  comment: string;
}

export interface PostCommentResponse {
  name: string;
  email: string;
  body: string;
  id: number;
}
