<script setup lang="ts">
import type { Project, ProjectStepData } from '../types'

definePageMeta({
  layout: 'empty',
})

const initialState = ref<Project>({
  type: undefined,
  name: '',
  description: '',
  startDate: undefined,
  endDate: undefined,
  customer: {
    name: undefined,
    logo: undefined,
    location: undefined,
  },
  files: null,
  avatar: null,
  team: [],
  tools: [],
  budget: '< 5K',
})

const wizardSteps = [
  {
    to: '/first',
    meta: {
      name: 'Project type',
      title: 'New Start!!서비스 기획 프로젝트를 시작해보세요',
      subtitle: '',
    } satisfies ProjectStepData,
  }
 
]

const toaster = useToaster()

const { handleSubmit, currentStep } = createMultiStepForm<
  Project,
  ProjectStepData
>({
  initialState: initialState,
  steps: wizardSteps,
  onSubmit: async (state, ctx) => {
    console.log('multi-step-submit', state)

    if (!state.type) {
      ctx.goToStep(ctx.getStep(0))
      throw new Error('Please select a project type')
    }
    if (!state.name) {
      ctx.goToStep(ctx.getStep(1))
      throw new Error('Enter a project name')
    }

    // Simulate async request
    await new Promise((resolve) => setTimeout(resolve, 4000))

    toaster.clearAll()
    toaster.show({
      title: 'Success',
      message: `Project ${state.name} created!`,
      color: 'success',
      icon: 'ph:check',
      closable: true,
    })
  },
  onError: (error) => {
    console.log('multi-step-error', error)

    toaster.clearAll()
    toaster.show({
      title: 'Oops!',
      message: error.message,
      color: 'danger',
      icon: 'lucide:alert-triangle',
      closable: true,
    })
  },
})

useHead({
  titleTemplate: (title) => `${title} | start - Step ${currentStep.value + 1}`,
})
</script>

<template>
  <TairoSidebarLayout
    :toolbar="false"
    :sidebar="false"
    class="bg-muted-100 dark:bg-muted-900 min-h-screen w-full"
  >
    <template #logo>
      <NuxtLink
        to="/"
        class="text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300"
        @click.prevent="$router.back()"
      >
        <Icon name="lucide:arrow-left" class="h-5 w-5" />
      </NuxtLink>
    </template>

    <DemoWizardNavigation />

    <form action="" method="POST" @submit.prevent="handleSubmit" novalidate>
      <div class="py-10 pb-20">
        <RouterView />
      </div>
      <DemoWizardButtons />
    </form>
  </TairoSidebarLayout>
</template>
