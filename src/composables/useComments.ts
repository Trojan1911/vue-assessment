import { useCommentsStore } from '@/store/commentsStore'
import { storeToRefs } from 'pinia'

export const useComments = () => {
  const store = useCommentsStore()
  const { allComments, isLoading, fetchCommentsError, userComments, commentsFormVisible } =
    storeToRefs(store)

  return {
    allComments,
    userComments,
    isLoading,
    fetchCommentsError,
    postComment: store.postAndSaveComment,
    fetchComments: store.getComments,
    toggleFormVisibility: store.toggleFormVisibility,
    commentsFormVisible,
  }
}
