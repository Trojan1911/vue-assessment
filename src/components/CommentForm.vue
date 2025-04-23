<script setup lang="ts">
import FormInput from '@/components/UI/FormInput.vue'
import FormTextarea from '@/components/UI/FormTextarea.vue'
</script>

<template>
  <div class="col-4">
    <FormInput
      input-id="email"
      label="E-mail:"
      type="email"
      required
      placeholder="name@example.com"
    />

    <FormInput input-id="name" label="Name:" type="text" placeholder="name" required />

    <FormTextarea textarea-id="message" label="Comment:" placeholder="Put your comment here..." />
  </div>
</template>

<style scoped></style>
