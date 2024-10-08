<script setup lang="ts">
import { computed, ref } from "vue";
import { CakeIcon } from "@heroicons/vue/20/solid";

import CardContainer from "./components/CardContainer.vue";
import FullButton from "./components/FullButton.vue";
import NameInput from "./components/NameInput.vue";
import ResultDisplay from "./components/ResultDisplay.vue";

import BaseRule from "./rules/baseRule.ts";
import DuplicateRule from "./rules/duplicateRule.ts";
import InvalidCharactersRule from "./rules/invalidCharactersRule.ts";
import ReplaceSpacesWithUnderscoresRule from "./rules/replaceSpacesWithUnderscoresRule.ts";
import ProfaneRule from "./rules/profraneRule.ts";
import TooShortRule from "./rules/tooShortRule.ts";
import TooLongRule from "./rules/tooLongRule.ts";

interface ValidationResult {
  rule: BaseRule;
  results: ReturnType<BaseRule["checkHandles"]>;
}

const RULES: BaseRule[] = [
  DuplicateRule,
  InvalidCharactersRule,
  ReplaceSpacesWithUnderscoresRule,
  ProfaneRule,
  TooShortRule,
  TooLongRule
];

const handles = ref("");
const validationResults = ref(<ValidationResult[]>[]);
const validating = ref(false);
const doValidate = () => {
  validating.value = true;

  const handleList = handles.value
    .split(/[\r\n]+/)
    .map((handle) => handle.trim())
    .filter(Boolean);

  validationResults.value = RULES.map((rule) => ({
    rule,
    results: rule.checkHandles(handleList)
  }));
};

const doReset = () => {
  validating.value = false;
};

const hasValidationResults = computed(() => {
  return validationResults.value.some(({ results }) => results.length);
});

const totalInvalidHandles = computed(() => {
  return new Set(
    validationResults.value.flatMap(({ results }) =>
      results.map(({ position }) => position)
    )
  ).size;
});
</script>

<template>
  <div class="h-full flex flex-col">
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          Enforcer Handle Validation
        </h1>
      </div>
    </header>
    <main class="flex-1">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <template v-if="!validating">
          <NameInput v-model="handles"></NameInput>
          <FullButton @click="doValidate" :enabled="!!handles.trim()"
            >Validate</FullButton
          >
        </template>
        <template v-else>
          <CardContainer>
            <span class="text-xl font-medium text-gray-900">
              <template v-if="!hasValidationResults">
                <CakeIcon class="size-6 inline" /> All handles are valid!
              </template>
              <template v-else>
                {{ totalInvalidHandles }} handles have validation issues.
              </template>
            </span>
          </CardContainer>

          <template
            v-for="{ rule, results } in validationResults"
            :key="rule.title"
          >
            <ResultDisplay :rule="rule" :results="results"></ResultDisplay>
          </template>
          <FullButton @click="doReset">Reset</FullButton>
        </template>
      </div>
    </main>
    <footer class="bg-white shadow">
      <div
        class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-center gap-8"
      >
        <a
          href="https://github.com/yellow-corps/enforcer-handle-validator"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub</a
        >
        <a
          href="https://github.com/yellow-corps/enforcer-handle-validator/blob/main/PRIVACY.md"
          target="_blank"
          rel="noopener noreferrer"
          >Privacy Policy</a
        >
      </div>
    </footer>
  </div>
</template>
