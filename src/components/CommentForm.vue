<script setup lang="ts">
import { ref } from 'vue'

import { postComment } from '@/clients/commentsClient.ts'
import type { CommentPayload } from '@/types/types.ts'

import FormInput from '@/components/UI/FormInput.vue'
import FormTextarea from '@/components/UI/FormTextarea.vue'

const formFields = ref<CommentPayload>({
  name: '',
  email: '',
  comment: '',
})

const formKey = ref<number>(1)

const handleSubmit = async (): Promise<void> => {
  try {
    await postComment(formFields.value)
    formKey.value++
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="card col-6 mb-3">
    <div class="card-header">Please, be kind and respect the others</div>

    <div class="card-body">
      <form :key="formKey" @submit.prevent="handleSubmit">
        <FormInput
          v-model="formFields.email"
          input-id="email"
          label="E-mail:"
          type="email"
          isRequired
          placeholder="name@example.com"
        />

        <FormInput
          v-model="formFields.name"
          input-id="name"
          label="Name:"
          type="text"
          placeholder="name"
          isRequired
        />

        <FormTextarea
          v-model="formFields.comment"
          textarea-id="message"
          label="Comment:"
          placeholder="Put your comment here..."
          isRequired
        />

        <div class="d-flex justify-content-center">
          <button class="btn btn-magenta col-8" type="submit">Submit comment</button>
        </div>
      </form>
    </div>
  </div>
</template>
