<script setup lang="ts">
import CardContainer from "./CardContainer.vue";

const { modelValue } = defineProps<{ modelValue: string }>();
const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();
</script>

<template>
  <label for="handles">
    <CardContainer bg-class="bg-indigo-200">
      <div class="col-span-full">
        <div class="block text-xl font-medium leading-6 text-gray-900">
          Enforcer Handles
        </div>
        <div class="mt-2">
          <textarea
            :value="modelValue"
            @input="
              emit(
                'update:modelValue',
                (<HTMLTextAreaElement>$event.target).value
              )
            "
            id="handles"
            class="block min-h-48 w-full resize-none rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></textarea>
        </div>
        <p class="mt-3 text-sm leading-6 text-gray-600">One Handle per line.</p>
      </div>
    </CardContainer>
  </label>
</template>
