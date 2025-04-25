<script setup lang="ts">
import { useModelValueHandler } from '@/composables/useModelValueHandler.ts'
import { useAttrs } from 'vue'

interface textAreaProps {
  textareaId: string;
  rows?: number;
  label: string;
  marginClasses?: string;
}

const props = withDefaults(defineProps<textAreaProps>(), {
  rows: 4,
  marginClasses: 'my-2',
})

const { textareaId, rows, marginClasses } = props

const emit = defineEmits(['update:modelValue'])

const { handleInputChange } = useModelValueHandler(emit)
const attrs = useAttrs()
</script>

<template>
  <div :class="marginClasses">
    <label :for="textareaId" class="form-label fw-bold"> {{ label }} </label>
    <textarea
      v-bind="attrs"
      class="form-control"
      :id="textareaId"
      :rows="rows"
      @input="handleInputChange"
    />
  </div>
</template>
