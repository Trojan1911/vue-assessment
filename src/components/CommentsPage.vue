<script setup lang="ts">
import CommentForm from '@/components/CommentForm.vue'
import CommentsList from '@/components/CommentsList.vue'
import { useComments } from '@/composables/useComments.ts'
import { onMounted } from 'vue'
import UiAlert from '@/components/UI/UiAlert.vue'
import UiButton from '@/components/UI/UiButton.vue'

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
    <UiButton :disabled="userComments.length > 0" @click="toggleFormVisibility" type="button">
      {{ commentsFormVisible ? 'Cancel' : 'Add your comment' }}
    </UiButton>

    <UiAlert v-if="userComments.length > 0" alertVariant="light">
      You already commented this. Only one comment per user allowed.
    </UiAlert>

    <transition name="fade-slide">
      <CommentForm class="col-6 mb-3" v-if="commentsFormVisible" />
    </transition>

    <div
      v-if="allComments.length === 0 && !fetchCommentsError && isLoading"
      class="spinner-border text-magenta"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>

    <UiAlert class="my-2 text-center" alert-variant="danger" v-if="fetchCommentsError">
      {{ fetchCommentsError }}
    </UiAlert>

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
