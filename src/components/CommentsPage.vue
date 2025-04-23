<script setup lang="ts">
import CommentForm from '@/components/CommentForm.vue'
import { ref } from 'vue'
import CommentsList from '@/components/CommentsList.vue'

const commentFormVisible = ref(false)

const toggleFormVisibility = () => {
  commentFormVisible.value = !commentFormVisible.value
}
</script>

<template>
  <div class="d-flex flex-column align-items-center gap-3">
    <button @click="toggleFormVisibility" type="button" class="btn btn-magenta">
      Add your comment
    </button>

    <transition name="fade-slide">
      <CommentForm v-if="commentFormVisible" />
    </transition>

    <CommentsList/>
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
