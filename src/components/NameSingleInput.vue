<script setup lang="ts">
import CardContainer from "./CardContainer.vue";

const modelValue = defineModel<string>();
const id = crypto.randomUUID();
</script>

<template>
  <label :for="id">
    <CardContainer bg-class="bg-blue-200">
      <div class="col-span-full">
        <div class="block text-xl font-medium leading-6 text-gray-900">
          Compare To New Handle
        </div>
        <div class="mt-2">
          <input
            type="text"
            v-model="modelValue"
            :id="id"
            class="block min-h-4 w-full resize-none rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div class="mt-2 flex">
          <div class="text-sm leading-6 text-gray-600 flex-1 py-2">
            Optional. Will validate this handle against other handles. Be sure
            to provide all known handles in the textarea above.
          </div>
          <button
            v-if="modelValue"
            class="rounded-md font-semibold bg-red-400 p-2"
            @click="modelValue = ''"
          >
            Clear
          </button>
        </div>
      </div>
    </CardContainer>
  </label>
</template>
