<script setup lang="ts">
import CommentForm from '@/components/CommentForm.vue'
import CommentsList from '@/components/CommentsList.vue'
import { useComments } from '@/composables/useComments.ts'
import { onMounted } from 'vue'
import ErrorAlert from '@/components/UI/ErrorAlert.vue'

const {
  toggleFormVisibility,
  commentsFormVisible,
  userComments,
  fetchComments,
  allComments,
  fetchCommentsError,
  getUserComments,
  isLoading,
} = useComments()

onMounted(() => {
  fetchComments()
  getUserComments()
})
</script>

<template>
  <div class="d-flex flex-column align-items-center gap-3">
    <button
      :disabled="userComments.length > 0"
      @click="toggleFormVisibility"
      type="button"
      class="btn btn-magenta"
    >
      {{ commentsFormVisible ? 'Cancel' : 'Add your comment' }}
    </button>

    <div v-if="userComments.length > 0" class="alert alert-light" role="alert">
      You already commented this. Only one comment per user allowed.
    </div>

    <transition name="fade-slide">
      <CommentForm v-if="commentsFormVisible" />
    </transition>

    <div v-if="allComments.length === 0 && !fetchCommentsError && isLoading" class="spinner-border text-magenta" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>

    <ErrorAlert class="my-2 text-center" v-if="fetchCommentsError" :message="fetchCommentsError" />

    <div
      v-if="!fetchCommentsError && allComments.length === 0 && !isLoading"
      class="alert alert-light"
      role="alert"
    >
      There is no comments yet
    </div>

    <CommentsList :comments="allComments" />
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
