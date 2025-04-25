<script setup lang="ts">
import { ref } from 'vue'

import { useComments } from '@/composables/useComments.ts'
import type { CommentPayload } from '@/types/types.ts'

import FormInput from '@/components/UI/FormInput.vue'
import FormTextarea from '@/components/UI/FormTextarea.vue'
import UiAlert from '@/components/UI/UiAlert.vue'
import UiCard from '@/components/UI/UiCard.vue'
import UiButton from '@/components/UI/UiButton.vue'

const { postComment, postCommentError, isLoading } = useComments()

const formFields = ref<CommentPayload>({
  name: '',
  email: '',
  comment: '',
})

const handleSubmit = async (): Promise<void> => {
  await postComment(formFields.value)
}
</script>

<template>
  <UiCard>
    <template #header> Please, be kind and respect the others</template>

    <template #body>
      <form @submit.prevent="handleSubmit">
        <FormInput
          v-model="formFields.email"
          input-id="email"
          label="E-mail:"
          type="email"
          required
          placeholder="name@example.com"
        />

        <FormInput
          v-model="formFields.name"
          input-id="name"
          label="Name:"
          input-type="text"
          placeholder="name"
          required
        />

        <FormTextarea
          v-model="formFields.comment"
          textarea-id="message"
          label="Comment:"
          placeholder="Put your comment here..."
          required
        />

        <div class="d-flex justify-content-center">
          <UiButton button-variant="magenta" type="submit" :disabled="isLoading">
            <span v-if="isLoading" class="spinner-border spinner-border-sm" aria-hidden="true" />

            <span role="status"> {{ isLoading ? 'Loading...' : 'Submit Comment' }} </span>
          </UiButton>
        </div>
      </form>
    </template>

    <UiAlert class="my-2 text-center" alert-variant="danger" v-if="postCommentError">
      {{ postCommentError }}
    </UiAlert>
  </UiCard>
</template>
