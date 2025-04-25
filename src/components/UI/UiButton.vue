<script setup lang="ts">
import { useAttrs } from 'vue'

interface ButtonProps {
  buttonVariant?: string
}

const attrs = useAttrs()

const props = withDefaults(defineProps<ButtonProps>(), {
  buttonVariant: 'magenta',
})

const { buttonVariant } = props
</script>

<template>
  <button class="btn" v-bind="attrs" :class="`btn-${buttonVariant}`">
    <slot />
  </button>
</template>

