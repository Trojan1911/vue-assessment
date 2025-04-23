<script setup lang="ts">
import CommentForm from '@/components/CommentForm.vue'
import { ref } from 'vue'

const commentFormVisible = ref(false)

const toggleFormVisibility = () => {
  commentFormVisible.value = !commentFormVisible.value
}
</script>

<template>
  <div class="d-flex flex-column align-items-center gap-3">
    <CommentForm v-if="commentFormVisible" />
    <button @click="toggleFormVisibility" type="button" class="btn btn-primary">
      Add your comment
    </button>
  </div>
</template>

<style scoped></style>
