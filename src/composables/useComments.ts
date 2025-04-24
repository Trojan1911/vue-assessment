import { useCommentsStore } from '@/store/commentsStore'
import { storeToRefs } from 'pinia'

export const useComments = () => {
  const commentsStore = useCommentsStore()
  const { allComments, isLoading, fetchCommentsError, postCommentError, userComments, commentsFormVisible } =
    storeToRefs(commentsStore)

  return {
    allComments,
    userComments,
    isLoading,
    fetchCommentsError,
    postCommentError,
    postComment: commentsStore.postAndSaveComment,
    fetchComments: commentsStore.getComments,
    toggleFormVisibility: commentsStore.toggleFormVisibility,
    getUserComments: commentsStore.getUserComments,
    commentsFormVisible,
  }
}
