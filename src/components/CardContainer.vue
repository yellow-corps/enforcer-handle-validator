<script setup lang="ts">
const { bgClass = "bg-white" } = defineProps<{ bgClass?: string }>();
</script>

<template>
  <div class="relative max-lg:row-start-1 my-2">
    <div class="absolute inset-px rounded-lg" :class="bgClass"></div>
    <div class="relative flex h-full flex-col overflow-hidden rounded-lg">
      <div class="p-6 sm:p-10">
        <slot></slot>
        <div
          class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"
        ></div>
      </div>
    </div>
  </div>
</template>
