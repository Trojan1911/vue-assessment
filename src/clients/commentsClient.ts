import type { CommentsResponse, CommentPayload } from '@/types/types.ts'

export const fetchComments = async (): Promise<CommentsResponse[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.status}`)
  }

  return response.json()
}

export const postComment = async (payload: CommentPayload): Promise<void> => {
  await fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      body: payload.comment,
    }),
  })
}
