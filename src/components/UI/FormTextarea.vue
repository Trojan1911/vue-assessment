<script setup lang="ts">
import { useModelValueHandler } from '@/composables/useModelValueHandler.ts'

interface textAreaProps {
  textareaId: string;
  isRequired?: boolean;
  modelValue: string;
  label: string;
  placeholder?: string;
  rows?: number;
}

const props = withDefaults(defineProps<textAreaProps>(), {
  isRequired: false,
  placeholder: 'Put text here...',
  rows: 4,
})

const { label, textareaId, placeholder, isRequired, rows, modelValue } = props

const emit = defineEmits(['update:modelValue'])

const { handleInputChange } =  useModelValueHandler(emit)
</script>

<template>
  <div class="my-2">
    <label :for="textareaId" class="form-label fw-bold"> {{ label }} </label>
    <textarea
      :value="modelValue"
      :placeholder="placeholder"
      :required="isRequired"
      class="form-control"
      :id="textareaId"
      :rows="rows"
      @input="handleInputChange"
    />
  </div>
</template>
