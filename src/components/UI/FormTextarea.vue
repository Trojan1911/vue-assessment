<script setup lang="ts">
import { useModelValueHandler } from '@/composables/useModelValueHandler.ts'

interface textAreaProps {
  textareaId: string
  isRequired?: boolean
  label: string
  placeholder?: string
  rows?: number
}

const props = withDefaults(defineProps<textAreaProps>(), {
  isRequired: false,
  placeholder: 'Put text here...',
  rows: 4,
})

const emit = defineEmits(['update:modelValue'])

const { handleInputChange } =  useModelValueHandler(emit)
</script>

<template>
  <div class="my-2">
    <label :for="props.textareaId" class="form-label fw-bold"> {{ label }} </label>
    <textarea
      :placeholder="placeholder"
      :required="props.isRequired"
      class="form-control"
      :id="props.textareaId"
      :rows="props.rows"
      @input="handleInputChange"
    />
  </div>
</template>

<style scoped></style>
