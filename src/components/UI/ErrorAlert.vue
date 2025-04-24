<script setup lang="ts">
interface Props {
  message?: string
}

const props = withDefaults(defineProps<Props>(), {
  message: 'Something went wrong.',
})

const { message } = props
</script>

<template>
  <div class="alert alert-danger" role="alert">
    {{ message }}
  </div>
</template>
