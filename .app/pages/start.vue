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
    to: '/start',
    meta: {
      name: 'Project type',
      title: '그동안 하던 프로젝트가 있네요.',
      subtitle: '마무리 지어 보세요.',
    } satisfies ProjectStepData,
  },
  {
    to: '/start/step-2',
    meta: {
      name: 'Project info',
      title: '서비스 기획 흐름에 따라',
      subtitle: '원하는 단계 문서 종류를 선택해보세요.',
    } satisfies ProjectStepData,
  },
  {
    to: '/start/step-3',
    meta: {
      name: 'Project info',
      title: '새로운 기획 프로젝트를 시작하시네요',
      subtitle: '백오십님은 서비스 기획 노트와 보고서 작성 프로그램을 선택하셨어요.\n프로젝트 명과 목표 일정을 입력하면 그만큼 빨라집니다.',
    } satisfies ProjectStepData,
  },
 
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
