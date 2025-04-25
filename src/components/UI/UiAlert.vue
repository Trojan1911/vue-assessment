<script setup lang="ts">
interface Props {
  alertVariant?: string
}

const props = withDefaults(defineProps<Props>(), {
  alertVariant: 'primary',
})

const { alertVariant } = props
</script>

<template>
  <div class="alert" :class="`alert-${alertVariant}`" role="alert">
    <slot/>
  </div>
</template>
