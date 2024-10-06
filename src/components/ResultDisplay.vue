<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
import BaseRule from "../rules/baseRule";
import CardContainer from "./CardContainer.vue";

const { rule, results } = defineProps<{
  rule: BaseRule;
  results: ReturnType<BaseRule["checkHandles"]>;
}>();

const level = { error: "Error", warning: "Warning" }[rule.level];
</script>

<template>
  <CardContainer v-if="results.length">
    <Disclosure v-slot="{ open }">
      <DisclosureButton class="flex w-full text-left">
        <div class="w-full">
          <div class="flex">
            <div class="flex-1 text-xl font-medium text-gray-900">
              {{ level }}: {{ rule.title }}
            </div>
            <div class="text-xl font-medium text-gray-500">
              ({{ results.length }})
            </div>
          </div>
          <p class="mt-3 text-sm text-gray-600">
            {{ rule.description }}
          </p>
        </div>
        <ChevronRightIcon
          class="h-7 w-7"
          :class="open && 'rotate-90 transform'"
        />
      </DisclosureButton>
      <DisclosurePanel>
        <ul
          role="list"
          class="divide-y divide-gray-300 border-slate-400 border-t mt-3"
        >
          <li
            v-for="({ handle, context }, index) in results"
            :key="index"
            class="py-2"
          >
            <p class="text-sm font-semibold leading-6 text-gray-900">
              {{ handle }}
            </p>
            <p v-if="context" class="mt-1 text-xs leading-5 text-gray-500">
              {{ context }}
            </p>
          </li>
        </ul>
      </DisclosurePanel>
    </Disclosure>
  </CardContainer>
</template>
