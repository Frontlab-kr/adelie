<script setup lang="ts">
import type { Project, ProjectStepData } from '../types'
const { totalSteps, currentStep, loading, complete, getNextStep, getPrevStep } =
  useMultiStepForm<Project, ProjectStepData>()
</script>

<template>
  <div>
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="translate-y-20 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition-all duration-100 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-20 opacity-0"
    >
      <div
        v-if="currentStep > 0 && !complete"
        class="fixed inset-x-0 bottom-6 z-20 mx-auto w-full max-w-[304px]"
      >
        <BaseCard
          class="shadow-muted-300/30 dark:shadow-muted-800/30 flex items-center justify-between gap-2 rounded-2xl p-4 shadow-xl"
        >
          <BaseButton
            :to="loading ? undefined : getPrevStep()?.to"
            :disabled="!getPrevStep()"
            shape="curved"
            class="w-full"
          >
            <span>이전</span>
          </BaseButton>
          <BaseButton
            v-if="currentStep < totalSteps - 1"
            :to="getNextStep()?.to"
            :disabled="!getNextStep()"
            shape="curved"
            color="primary"
            class="w-full"
          >
            <span>다음</span>
          </BaseButton>
          <BaseButton
            v-else
            type="submit"
            shape="curved"
            color="primary"
            class="w-full"
            :loading="loading"
            :disabled="loading"
            to="/brainstorming/step1/"
          >
            <span>완료</span>
          </BaseButton>
        </BaseCard>
      </div>
    </Transition>
  </div>
</template>
