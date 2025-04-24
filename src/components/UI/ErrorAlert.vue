<script setup lang="ts">
interface Props {
  message?: string
}

const props = withDefaults(defineProps<Props>(), {
 message: 'Something went wrong.'
})
</script>

<template>
  <div class="alert alert-danger" role="alert">
    {{ props.message }}
  </div>
</template>

<style scoped>

</style>
