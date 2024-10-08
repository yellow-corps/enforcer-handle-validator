<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import {
  ChevronRightIcon,
  ArrowDownTrayIcon,
  ExclamationTriangleIcon
} from "@heroicons/vue/20/solid";
import BaseRule from "../rules/baseRule";
import CardContainer from "./CardContainer.vue";
import { computed } from "vue";

const { rule, results } = defineProps<{
  rule: BaseRule;
  results: ReturnType<BaseRule["checkHandles"]>;
}>();

function encodeCsvValue(value: string) {
  return value
    .split("")
    .map((char) => (char === '"' ? '""' : char))
    .join("");
}

const resultsFileData = computed(() => {
  const fileData = [
    rule.hasContext ? '"handle","context"' : '"handle"',
    ...results.map(({ handle, context }) =>
      rule.hasContext
        ? `"${encodeCsvValue(handle)}","${encodeCsvValue(context)}"`
        : `"${encodeCsvValue(handle)}"`
    )
  ].join("\n");
  return `data:text/plain;charset=utf-8,${encodeURIComponent(fileData)}`;
});
</script>

<template>
  <CardContainer v-if="results.length">
    <Disclosure v-slot="{ open }">
      <DisclosureButton class="flex w-full text-left">
        <div class="w-full">
          <div class="flex">
            <div class="flex-1 text-xl font-medium text-gray-900">
              <ExclamationTriangleIcon class="size-6 inline" /> {{ rule.title }}
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
        <div class="border-slate-400 border-t my-3 pt-3">
          <a
            :href="resultsFileData"
            :download="`${rule.filename}.csv`"
            class="pointer-events-auto rounded-md bg-indigo-600 px-2 py-2 font-semibold text-slate-200 hover:bg-indigo-500"
          >
            <ArrowDownTrayIcon class="size-5 inline" />
            Download
          </a>
        </div>
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
            <p
              v-if="rule.hasContext"
              class="mt-1 text-xs leading-5 text-gray-500"
            >
              {{ context }}
            </p>
          </li>
        </ul>
      </DisclosurePanel>
    </Disclosure>
  </CardContainer>
</template>
