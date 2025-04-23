<script setup lang="ts">
import { useModelValueHandler } from '@/composables/useModelValueHandler.ts'

interface InputProps {
  inputType?: string
  inputId: string
  isRequired?: boolean
  validationRules?: string[]
  label: string
  placeholder?: string
  modelValue: string
}

const props = defineProps<InputProps>()
const emit = defineEmits(['update:modelValue'])

const { handleInputChange } =  useModelValueHandler(emit)
</script>

<template>
  <div class="my-2">
    <label :for="props.inputId" class="form-label fw-bold">
      {{ label }}
    </label>

    <input
      :id="props.inputId"
      :placeholder="placeholder"
      :required="props.isRequired"
      :type="props.inputType"
      class="form-control"
      @input="handleInputChange"
    />
  </div>
</template>

<style scoped></style>
