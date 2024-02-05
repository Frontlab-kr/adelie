<script setup lang="ts">
import type { Project, ProjectStepData } from '../types'
const { steps, currentStep, progress, preview, goToStep } = useMultiStepForm<
  Project,
  ProjectStepData
>()

const currentStepName = computed(() => {
  const stepData = steps.value.find((step) => step.id === currentStep.value)
  return stepData?.meta?.name
})

const target = ref(null)
const open = ref(false)

function openDropdown() {
  open.value = true
}
onClickOutside(target, () => (open.value = false))
</script>

<template>
  <div class="start-0 w-full">
    <div class="relative flex  w-full items-center justify-center px-4 py-8">
      <div class="flex items-center">
        <NuxtLink
          to="/"
          class="border-muted-200 dark:border-muted-700 flex items-center justify-center "
        >
          <img src="../assets/images/logo.png" alt="" style="width:100px">
        </NuxtLink>

      </div>
      <div class="flex items-center justify-end gap-4 absolute right-10" >
        <BaseThemeToggle />
      </div>
    </div>
  </div>
</template>
