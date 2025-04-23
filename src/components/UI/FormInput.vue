<script setup lang="ts">
interface InputProps {
  inputType?: string;
  inputId: string;
  isRequired?: boolean;
  validationRules?: string[];
  label: string;
  placeholder?: string;
}

const props = defineProps<InputProps>()
</script>

<template>
  <div class="my-2">
    <label
      :for="props.inputId"
      class="form-label fw-bold"> {{ label }} </label>
    <input
      :type="props.inputType"
      :required="props.isRequired"
      class="form-control"
      :id="props.inputId"
      :placeholder="placeholder"/>
  </div>
</template>

<style scoped>

</style>
