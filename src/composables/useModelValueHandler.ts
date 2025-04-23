// I know it might be a bit overkill since it's only used in two components, but I wanted to stick to the DRY principle 😅
import type { EmitFn } from 'vue'

export function useModelValueHandler(emit: EmitFn<{ 'update:modelValue': [value: string] }>) {
  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement
    emit('update:modelValue', target.value)
  }

  return {
    handleInputChange,
  }
}
