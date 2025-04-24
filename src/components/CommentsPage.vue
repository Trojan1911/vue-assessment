<script setup lang="ts">
import CommentForm from '@/components/CommentForm.vue'
import CommentsList from '@/components/CommentsList.vue'
import { useComments } from '@/composables/useComments.ts'
import { onMounted } from 'vue'

const { toggleFormVisibility, commentsFormVisible, userComments, fetchComments, allComments } = useComments()

onMounted(() => {
  fetchComments()
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
      Add your comment
    </button>

    <div v-if="userComments.length > 0" class="alert alert-light" role="alert">
      You already commented this. Only one comment per user allowed.
    </div>

    <transition name="fade-slide">
      <CommentForm v-if="commentsFormVisible" />
    </transition>

    <CommentsList :comments='allComments' />
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
