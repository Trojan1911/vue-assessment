<script setup lang="ts">
import { ref } from 'vue'

interface formFields {
  name: string
  email: string
  comment: string
}

import FormInput from '@/components/UI/FormInput.vue'
import FormTextarea from '@/components/UI/FormTextarea.vue'

const form = ref<formFields>({
  name: '',
  email: '',
  comment: '',
})
</script>

<template>
  <div class="col-6">
    <FormInput
      v-model="form.email"
      input-id="email"
      label="E-mail:"
      type="email"
      required
      placeholder="name@example.com"
    />

    <FormInput
      v-model="form.name"
      input-id="name"
      label="Name:"
      type="text"
      placeholder="name"
      required
    />

    <FormTextarea
      v-model="form.comment"
      textarea-id="message"
      label="Comment:"
      placeholder="Put your comment here..."
    />
  </div>
</template>

<style scoped></style>
