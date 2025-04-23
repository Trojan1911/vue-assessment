import { ref } from 'vue'
import type { Comment } from '@/types/types.ts'
import { fetchComments } from '@/clients/commentsClient.ts'

import { defineStore } from 'pinia'

export const useCommentsStore = defineStore('comments', () => {
  const comments = ref<Comment[]>([])
  const isLoading = ref(false)
  const fetchCommentsError = ref<string | null>(null)



  const getComments = async () => {
    isLoading.value = true
    fetchCommentsError.value = null

    try {
      const data = await fetchComments()

      comments.value = data.reverse()
    } catch (e) {
      fetchCommentsError.value = `Could not fetch, reason: ${e}`
    } finally {
      isLoading.value = false
    }
  }

  return {
    comments,
    isLoading,
    fetchCommentsError,
    getComments,
  }
})
