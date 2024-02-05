<script setup lang="ts">
import type { Project, ProjectStepData, ProjectType } from '../../types'

definePageMeta({
  title: 'Wizard — Step 1',
  preview: {
    title: 'Wizard — Step 1',
    description: 'For onboarding and step forms',
    categories: ['dashboards', 'wizard', 'forms'],
    src: '/img/screens/wizard-1.png',
    srcDark: '/img/screens/wizard-1-dark.png',
    order: 30,
  },
})

const {
  getNextStep,
  data: project,
  goToStep,
} = useMultiStepForm<Project, ProjectStepData>()
useHead({
  title: 'Project type',
})

function onSelectType(type: ProjectType) {
  const next = getNextStep()
  if (next) {
    project.value.type = type
    goToStep(next)
  }
}
</script>

<template>
  <div style="width:384px;margin: 0 auto;">
    <div class="mb-10 text-center">
      <p class="nui-heading nui-heading-2xl nui-weight-semibold nui-lead-normal text-muted-800 dark:text-white" tag="h1">
        <span>New Start!!<br />서비스 기획 프로젝트를 시작해보세요</span></p>
        <p class="nui-paragraph nui-paragraph-sm nui-weight-normal nui-lead-normal text-muted-500 dark:text-muted-400"><span></span></p>
    </div>
    <div class="mb-10 text-center">
      <BaseButton
        type="submit"
        color="primary"
        class="!h-12 w-full"
        to="/start/"
      >
      Go
      </BaseButton>
    </div>
  </div>
</template>
