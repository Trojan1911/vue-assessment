import { ref, computed } from 'vue'
import type { Comment, CommentPayload } from '@/types/types.ts'
import { fetchComments, postComment } from '@/clients/commentsClient.ts'

import { defineStore } from 'pinia'

export const useCommentsStore = defineStore('comments', () => {
  const comments = ref<Comment[]>([])
  const userComments = ref<Comment[]>([])
  const isLoading = ref(false)
  const fetchCommentsError = ref<string | null>(null)
  const commentsFormVisible = ref(false)

  const toggleFormVisibility = () => {
    commentsFormVisible.value = !commentsFormVisible.value
  }

  const getUserComments = () => {
    const localSavedComments = localStorage.getItem('userComments')
    if (localSavedComments) {
      userComments.value = JSON.parse(localSavedComments)
    }
  }

  const saveUserCommentsLocally = () => {
    localStorage.setItem('userComments', JSON.stringify(userComments.value))
  }

  const postAndSaveComment = async (commentPayload: CommentPayload) => {
    const response = await postComment(commentPayload)
    const newComment: Comment = {
      id: response.id,
      email: response.email,
      body: response.body,
      name: response.name,
      postId: Date.now(),
    }

    userComments.value.push(newComment)
    saveUserCommentsLocally()
  }

  const getComments = async () => {
    isLoading.value = true
    fetchCommentsError.value = null

    try {
      const data = await fetchComments()

      comments.value = data.reverse() // simplest way to display comments from the newest - ID is from 1 to 500 and after posting is 501 so it means that the last ID is the newest comment. There is no Date data saved on API
    } catch (e) {
      fetchCommentsError.value = `Could not fetch, reason: ${e}`
    } finally {
      isLoading.value = false
    }
  }

  const allComments = computed(() => [
    ...userComments.value,
    ...comments.value
  ])

  getUserComments()

  return {
    comments,
    userComments,
    allComments,
    isLoading,
    fetchCommentsError,
    getComments,
    postAndSaveComment,
    commentsFormVisible,
    toggleFormVisibility,
  }
})
