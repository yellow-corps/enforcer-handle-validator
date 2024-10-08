<script setup lang="ts">
const emit = defineEmits(["click"]);
const { enabled = true } = defineProps<{ enabled?: boolean }>();
</script>

<template>
  <button
    @click="emit('click')"
    class="pointer-events-auto w-full my-2 rounded-md px-3 py-3 font-semibold text-slate-200"
    :disabled="!enabled"
    :class="
      enabled
        ? 'bg-indigo-600 hover:bg-indigo-500'
        : 'bg-indigo-300 hover:bg-indigo-300'
    "
  >
    <slot>Button</slot>
  </button>
</template>
