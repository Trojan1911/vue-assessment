<script setup lang="ts">
import { useModelValueHandler } from '@/composables/useModelValueHandler.ts'

interface InputProps {
  inputType?: string
  inputId: string
  isRequired?: boolean
  label: string
  placeholder?: string
  modelValue: string
}

const props = withDefaults(defineProps<InputProps>(),{
  inputType: 'text',
  isRequired: false,
  placeholder: '',
})

const { label, inputId, placeholder, isRequired, inputType, modelValue } = props

const emit = defineEmits(['update:modelValue'])

const { handleInputChange } = useModelValueHandler(emit)
</script>

<template>
  <div class="my-2">
    <label :for="props.inputId" class="form-label fw-bold">
      {{ label }}
    </label>

    <input
      :value="modelValue"
      :id="inputId"
      :placeholder="placeholder"
      :required="isRequired"
      :type="inputType"
      class="form-control"
      @input="handleInputChange"
    />
  </div>
</template>
