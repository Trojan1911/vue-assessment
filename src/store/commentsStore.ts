import { ref, computed } from 'vue'
import type { Comment, CommentPayload, PostCommentResponse } from '@/types/types.ts'
import { callApi } from '@/clients/apiClient.ts'

import { defineStore } from 'pinia'

const commentsUrl: string = 'https://jsonplaceholder.typicode.com/comments' // Declared here, because i have one API url for fetching and posting comments. Potentially, if app will grow and we want to have generic functions in client, worth to put it in separate url const file


export const useCommentsStore = defineStore('comments', () => {
  const comments = ref<Comment[]>([])
  const userComments = ref<Comment[]>([])
  const isLoading = ref<boolean>(false)
  const fetchCommentsError = ref<string | null>(null)
  const postCommentError = ref<string | null>(null)
  const commentsFormVisible = ref<boolean>(false)

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
    commentsFormVisible.value = false
  }

  const postAndSaveComment = async (commentPayload: CommentPayload): Promise<void> => {
    try {
      const response: PostCommentResponse = await callApi<PostCommentResponse>(commentsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: commentPayload.name,
          email: commentPayload.email,
          body: commentPayload.comment,
        }),
      })

      const newComment: Comment = {
        id: response.id,
        email: response.email,
        body: response.body,
        name: response.name,
        postId: Date.now(), //to fit the type, i know its a bit hacky and cant happen in a real life scenario, where we probalby will have post id fot the method where we putting the comment to the post
      }

      userComments.value.push(newComment)
      saveUserCommentsLocally()
    } catch (e) {
      postCommentError.value = `Could not save comment. ${e}`
      localStorage.removeItem('userComments');
    }
  }

  const getComments = async () => {
    isLoading.value = true
    fetchCommentsError.value = null

    try {
      const data = await callApi<Comment[]>(commentsUrl)

      comments.value = data.reverse() // simplest way to display comments from the newest - ID is from 1 to 500 and after posting is 501 so it means that the last ID is the newest comment. There is no Date data saved on API
    } catch (e) {
      fetchCommentsError.value = `Could not fetch. ${e}`
    } finally {
      isLoading.value = false
    }
  }

  const allComments = computed(() => [...userComments.value, ...comments.value])

  return {
    userComments,
    allComments,
    isLoading,
    fetchCommentsError,
    postCommentError,
    getComments,
    postAndSaveComment,
    commentsFormVisible,
    toggleFormVisibility,
    getUserComments
  }
})
