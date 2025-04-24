<script setup lang="ts">
import type { Comment } from '../types/types.ts'
import ErrorAlert from '@/components/UI/ErrorAlert.vue'
import { useComments } from '@/composables/useComments.ts'

const { fetchCommentsError } = useComments()


interface Props {
  comments: Comment[];
}

defineProps<Props>()
</script>

<template>
  <ErrorAlert class="my-2 text-center" v-if="fetchCommentsError" :message="fetchCommentsError" />

  <div v-for="comment in comments" :key="comment.id" class="card my-2 col-12">
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
