<script setup lang="ts">
import { onMounted } from 'vue'

import { useCommentsStore } from '@/store/commentsStore'

const commentsStore = useCommentsStore()

onMounted(() => {
  commentsStore.getComments()
})
</script>

<template>
  <div v-for="comment in commentsStore.allComments" :key="comment.id" class="card my-2 col-12">
    <div class="card-header">
      {{ comment.name }}
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>{{ comment.body }}</p>
        <footer class="blockquote-footer">
          {{ comment.email }}
        </footer>
      </blockquote>
    </div>
  </div>
</template>
