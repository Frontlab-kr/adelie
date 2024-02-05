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
  <div>
    <DemoWizardStepTitle />
    <div class="mb-10 text-center">
      <BaseButton color="default">
        <Icon name="lucide:plus" class="-ms-1 h-4 w-4" />
        <span>NEW</span>
      </BaseButton>
    </div>
    <div class="mx-auto w-full max-w-6xl px-4 text-center">
      <div class="ltablet:grid-cols-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Choice -->
        <div
          class="dark:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 bg-white hover:shadow-xl"
          :class="[
            project.type === 'design'
              ? 'dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl'
              : '',
          ]"
        >
          <img
            class="rounded-2xl"
            src="https://picsum.photos/600/400/?gravity=east"
            alt="UI/UX design"
          />
          <div class="my-4">
            <BaseHeading
              tag="h3"
              weight="medium"
              size="xl"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              <span>ABC Project</span>
            </BaseHeading>
            <BaseParagraph class="text-muted-400">
              <span>
                60%
              </span>
            </BaseParagraph>
          </div>
          <div class="mb-5 flex flex-col items-center">
            <BaseButton
              :to="getNextStep()?.to"
              color="primary"
              shape="curved"
              class="w-36"
              @click.prevent="() => onSelectType('design')"
            >
              <span>
                {{ project.type === 'design' ? '작성하기' : '작성하기' }}
              </span>
            </BaseButton>
          </div>
        </div>
        <!-- Choice -->
        <div
          class="dark:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 bg-white hover:shadow-xl"
          :class="[
            project.type === 'development'
              ? 'dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl'
              : '',
          ]"
        >
          <img
            class="rounded-2xl"
            src="https://picsum.photos/600/401/?gravity=east"
            alt="Web Development"
          />
          <div class="my-4">
            <BaseHeading
              tag="h3"
              weight="medium"
              size="xl"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              <span>DEF Project</span>
            </BaseHeading>
            <BaseParagraph class="text-muted-400">
              <span>
                30%
              </span>
            </BaseParagraph>
          </div>
          <div class="mb-5 flex flex-col items-center">
            <BaseButton
              :to="getNextStep()?.to"
              color="primary"
              shape="curved"
              class="w-36"
              @click.prevent="() => onSelectType('development')"
            >
              <span>
                {{ project.type === 'development' ? '작성하기' : '작성하기' }}
              </span>
            </BaseButton>
          </div>
        </div>
        <!-- Choice -->
        <div
          class="dark:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 bg-white hover:shadow-xl"
          :class="[
            project.type === 'marketing'
              ? 'dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl'
              : '',
          ]"
        >
          <img
            class="rounded-2xl"
            src="https://picsum.photos/600/402/?gravity=east"
            alt="Web Development"
          />
          <div class="my-4">
            <BaseHeading
              tag="h3"
              weight="medium"
              size="xl"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              <span>GHI Project</span>
            </BaseHeading>
            <BaseParagraph class="text-muted-400">
              <span>
                90%
              </span>
            </BaseParagraph>
          </div>
          <div class="mb-5 flex flex-col items-center">
            <BaseButton
              :to="getNextStep()?.to"
              color="primary"
              shape="curved"
              class="w-36"
              @click.prevent="() => onSelectType('marketing')"
            >
              <span>
                {{ project.type === 'marketing' ? '작성하기' : '작성하기' }}
              </span>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
    <div class="py-10">
      <hr>
      <p class="pt-16 pb-10 text-center text-lg">마무리된 프로젝트 확인하기</p>
      <div class="mx-auto w-full max-w-6xl px-4 text-center">
      <div class="ltablet:grid-cols-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Choice -->
        <div
          class="dark:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 bg-white hover:shadow-xl"
          :class="[
            project.type === 'design'
              ? 'dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl'
              : '',
          ]"
        >
          <img
            class="rounded-2xl"
            src="https://picsum.photos/600/403/?gravity=east"
            alt="UI/UX design"
          />
          <div class="my-4">
            <BaseHeading
              tag="h3"
              weight="medium"
              size="xl"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              <span>ABC Project</span>
            </BaseHeading>
          </div>
          <div class="mb-5 flex flex-col items-center">
            <BaseButton
              :to="getNextStep()?.to"
              color="primary"
              shape="curved"
              class="w-36"
              @click.prevent="() => onSelectType('design')"
            >
              <span>
                {{ project.type === 'design' ? '확인하기' : '확인하기' }}
              </span>
            </BaseButton>
          </div>
        </div>
        <!-- Choice -->
        <div
          class="dark:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 bg-white hover:shadow-xl"
          :class="[
            project.type === 'development'
              ? 'dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl'
              : '',
          ]"
        >
          <img
            class="rounded-2xl"
            src="https://picsum.photos/600/404/?gravity=east"
            alt="Web Development"
          />
          <div class="my-4">
            <BaseHeading
              tag="h3"
              weight="medium"
              size="xl"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              <span>DEF Project</span>
            </BaseHeading>
          </div>
          <div class="mb-5 flex flex-col items-center">
            <BaseButton
              :to="getNextStep()?.to"
              color="primary"
              shape="curved"
              class="w-36"
              @click.prevent="() => onSelectType('development')"
            >
              <span>
                {{ project.type === 'development' ? '확인하기' : '확인하기' }}
              </span>
            </BaseButton>
          </div>
        </div>
        <!-- Choice -->
        <div
          class="dark:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 bg-white hover:shadow-xl"
          :class="[
            project.type === 'marketing'
              ? 'dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl'
              : '',
          ]"
        >
          <img
            class="rounded-2xl"
            src="https://picsum.photos/600/405/?gravity=east"
            alt="Web Development"
          />
          <div class="my-4">
            <BaseHeading
              tag="h3"
              weight="medium"
              size="xl"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              <span>GHI Project</span>
            </BaseHeading>
          </div>
          <div class="mb-5 flex flex-col items-center">
            <BaseButton
              :to="getNextStep()?.to"
              color="primary"
              shape="curved"
              class="w-36"
              @click.prevent="() => onSelectType('marketing')"
            >
              <span>
                {{ project.type === 'marketing' ? '확인하기' : '확인하기' }}
              </span>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
