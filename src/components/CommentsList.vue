<script setup lang="ts">
import UiCard from '@/components/UI/UiCard.vue'
import type { Comment } from '../types/types.ts'

interface Props {
  comments: Comment[];
}

defineProps<Props>()
</script>

<template>
  <UiCard v-for="comment in comments" :key="comment.id" class="my-2 col-12">
    <template #header>
      {{ comment.name }}
    </template>

    <template #body>
      <div class="blockquote mb-0">
        <p>{{ comment.body }}</p>

        <footer class="blockquote-footer">
          {{ comment.email }}
        </footer>
      </div>
    </template>
  </UiCard>
</template>
