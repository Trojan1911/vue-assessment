<script setup lang="ts">
import type { Comment } from '../types/types.ts'

interface Props {
  comments: Comment[];
}

defineProps<Props>()
</script>

<template>
  <div v-for="comment in comments" :key="comment.id" class="card my-2 col-12">
    <div class="card-header">
      {{ comment.name }}
    </div>

    <div class="card-body">
      <div class="blockquote mb-0">
        <p>{{ comment.body }}</p>

        <footer class="blockquote-footer">
          {{ comment.email }}
        </footer>
      </div>
    </div>
  </div>
</template>
