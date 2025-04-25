<script setup lang="ts">
import { useModelValueHandler } from '@/composables/useModelValueHandler.ts'
import { useAttrs } from 'vue'

interface InputProps {
  inputId: string;
  label: string;
  marginClasses?: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  marginClasses: 'my-2',
})

const { label, inputId, marginClasses } = props

const emit = defineEmits(['update:modelValue'])


const attrs = useAttrs()
const { handleInputChange } = useModelValueHandler(emit)
</script>

<template>
  <div :class="marginClasses">
    <label :for="inputId" class="form-label fw-bold">
      {{ label }}
    </label>

    <input
      :id="inputId"
      v-bind="attrs"
      class="form-control"
      @input="handleInputChange"
    />
  </div>
</template>
