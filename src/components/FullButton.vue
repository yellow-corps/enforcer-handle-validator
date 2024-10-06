<script setup lang="ts">
const emit = defineEmits(["click"]);
const { enabled = true } = defineProps<{ enabled?: boolean }>();
</script>

<template>
  <button
    :disabled="!enabled"
    @click="emit('click')"
    class="pointer-events-auto w-full my-2 rounded-md bg-indigo-600 px-3 py-3 font-semibold text-slate-200 hover:bg-indigo-500"
    :class="{ 'bg-indigo-300 hover:bg-indigo-300': !enabled }"
  >
    <slot>Button</slot>
  </button>
</template>
