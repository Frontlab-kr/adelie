<script setup lang="ts">
import type { Project, ProjectStepData } from '../../types'

definePageMeta({
  title: 'Wizard — Step 2',
  preview: {
    title: 'Wizard — Step 2',
    description: 'For onboarding and step forms',
    categories: ['dashboards', 'wizard', 'forms'],
    src: '/img/screens/wizard-2.png',
    srcDark: '/img/screens/wizard-2-dark.png',
    order: 31,
  },
})

const { data: project } = useMultiStepForm<Project, ProjectStepData>()

useHead({
  title: 'Project info',
})

const avatarPreview = useNinjaFilePreview(() => project.value.avatar)

// BaseInputFileHeadless gives us a listfile input, but we need to
// extract the file from the list and set it to the form
const inputFile = ref<FileList | null>(null)
watch(inputFile, (value) => {
  const file = value?.item(0) || null
  project.value.avatar = file
})
</script>

<template>
  <div>
    <div class="mb-10 text-center">
      <p class="nui-heading nui-heading-2xl nui-weight-semibold nui-lead-normal text-muted-800 dark:text-white" tag="h1"><span>새로운 기획 프로젝트를 시작하시네요</span></p>
      <p class="nui-paragraph nui-paragraph-sm nui-weight-normal nui-lead-normal text-muted-500 dark:text-muted-400">
        <span>
          백오십님은 서비스 기획 노트와 보고서 작성 프로그램을 선택하셨어요.<br />
          프로젝트 명과 목표 일정을 <span class="text-rose-600">입력하면 맞추어 프로세스를 제안해드립니다.</span>
        </span>
      </p>
    </div>
    <div class="mx-auto flex w-full max-w-5xl flex-col px-4">
      <div class="flex items-center justify-center">
        <BaseFullscreenDropfile
          icon="ph:image-duotone"
          :filter-file-dropped="(file) => file.type.startsWith('image')"
          @drop="
            (value) => {
              inputFile = value
            }
          "
        />
        <BaseInputFileHeadless
          accept="image/*"
          v-model="inputFile"
          v-slot="{ open, remove, files }"
        >
          <div class="relative h-20 w-20">
            <img
              v-if="avatarPreview"
              :src="avatarPreview"
              alt="Upload preview"
              class="bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"
            />
            <img
              v-else
              src="/img/avatars/placeholder-file.png"
              alt="Upload preview"
              class="bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"
            />
            <div
              v-if="files?.length && files.item(0)"
              class="absolute bottom-0 end-0 z-20"
            >
              <BaseButtonIcon
                size="sm"
                shape="full"
                @click="remove(files.item(0)!)"
                tooltip="Remove image"
              >
                <Icon name="lucide:x" class="h-4 w-4" />
              </BaseButtonIcon>
            </div>
            <div v-else class="absolute bottom-0 end-0 z-20">
              <div class="relative" tooltip="Upload image">
                <BaseButtonIcon size="sm" shape="full" @click="open">
                  <Icon name="lucide:plus" class="h-4 w-4" />
                </BaseButtonIcon>
              </div>
            </div>
          </div>
        </BaseInputFileHeadless>
      </div>

      <div class="my-4 text-center font-sans">
        <p class="text-muted-500 text-sm">프로젝트 로고를 업로드해주세요.</p>
        <p class="text-muted-400 text-xs">최대 파일 사이즈 10MB</p>
      </div>
      <div class="mx-auto flex w-full max-w-sm flex-col gap-3">
        <BaseInput
          v-model="project.name"
          shape="curved"
          placeholder="프로젝트 명"
          :classes="{
            input: 'h-12 text-base',
          }"
        />
        <div class="flex items-center w-full">
          <div class="w-full">
            <BaseInput
              shape="curved"
              type="date"
              :classes="{
                input: 'w-full h-12 text-base',
              }"
            />
          </div>
          <span class="mx-2 text-sm text-slate-500">~</span>
          <div class="w-full">
            <BaseInput
              shape="curved"
              type="date"
              :classes="{
                input: 'w-full h-12 text-base',
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
