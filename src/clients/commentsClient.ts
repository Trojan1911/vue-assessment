import type { Comment, CommentPayload, PostCommentResponse } from '@/types/types.ts'

export const fetchComments = async (): Promise<Comment[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.status}`)
  }

  return response.json()
}

export const postComment = async (payload: CommentPayload): Promise<PostCommentResponse> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      body: payload.comment,
    }),
  })

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.status}`)
  }

  return response.json()
}
